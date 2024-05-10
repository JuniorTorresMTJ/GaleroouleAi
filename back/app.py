import streamlit as st
import locale
import os
import google.generativeai as genai

from dotenv import load_dotenv
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from htmlTemplates import css, bot_template, user_template
from langchain.llms import HuggingFaceHub
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv


def get_pdf_text(pdf_docs):
    text = ""
    for pdf in pdf_docs:
        pdf_reader = PdfReader(pdf)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text


def get_text_chunks(text):
    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len
    )
    chunks = text_splitter.split_text(text)
    return chunks


def get_vectorstore(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model='models/embedding-001')

    vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings )
    vectorstore.save_local("faiss_index")
    
    if vectorstore is None or vectorstore.index.ntotal == 0:
        st.error("Vectorstore está vazio ou não foi criado corretamente.")
    else:
        st.info(f"Vectorstore criado com {vectorstore.index.ntotal} vetores.")
    return vectorstore


def get_conversation_chain(vectorstore):

    llm = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.1)

    memory = ConversationBufferMemory(
        memory_key='chat_history', return_messages=True)
    conversation_chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        retriever=vectorstore.as_retriever(),
        memory=memory
    )
    return conversation_chain

def get_conversational_chain():

    prompt_template = """
    "Responda à pergunta o mais detalhadamente possível a partir do contexto fornecido, certifique-se de fornecer todos os detalhes, se a resposta não estiver no contexto fornecido, não forneça a resposta errada."\n\n
    Context:\n {context}?\n
    Question: \n{question}\n

    Answer:
    """

    model = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.9)

    prompt = PromptTemplate(template = prompt_template, input_variables = ["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)
    
    return chain

def handle_userinput(user_question):

    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

    new_db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(user_question)

    chain = get_conversational_chain()

    response = chain(
        {"input_documents": docs, "question": user_question}
    )
   
    # Atualizar o template de usuário e escrever na página
    user_message_formatted = user_template.replace("{{MSG}}", response["question"])
    st.write(user_message_formatted, unsafe_allow_html=True)

    # Atualizar o template do bot e escrever na página
    bot_message_formatted = bot_template.replace("{{MSG}}", response["output_text"])
    st.write(bot_message_formatted, unsafe_allow_html=True)
    #st.write(response)
    

    
def main():
    load_dotenv()
    os.getenv("GOOGLE_API_KEY")
    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

    
    st.set_page_config(page_title="GaleroouleAi",
                       page_icon="🤖")
    st.write(css, unsafe_allow_html=True)

    # if "conversation" not in st.session_state:
    #     st.session_state.conversation = None
    # if "chat_history" not in st.session_state:
    #     st.session_state.chat_history = None
    


# Detecta o idioma preferido do sistema
    idioma_preferido = locale.getdefaultlocale()[0]

# Determina o idioma inicial para o radio com base no idioma do sistema
    idioma_inicial = "EN" if idioma_preferido.startswith('en') else "PT-BR"

# Opções de idioma para o usuário escolher
    opcoes_de_idioma = ['EN', 'PT-BR']
    

    
    with st.sidebar:
        
        st.subheader("🌐 :blue[*Idiomas*]")
        idioma_selecionado = st.radio(
        "Escolha o idioma do GalerrouleAI:",
        options=opcoes_de_idioma,
        index=opcoes_de_idioma.index(idioma_inicial)
        )
        st.divider()
        if idioma_selecionado == 'EN':
            st.subheader("📝 :blue[*Documents*]")
            pdf_docs = st.file_uploader(
                    "Upload your PDFs here and click on  :blue['Process'].", accept_multiple_files=True, type="pdf")
            if st.button("Process", type="primary"):
                with st.spinner("Processing"):
                    # get pdf text
                    raw_text = get_pdf_text(pdf_docs)

                    # get the text chunks
                    text_chunks = get_text_chunks(raw_text)

                    # create vector store
                    vectorstore, vectors = get_vectorstore(text_chunks)

            st.divider()
            st.subheader("💡 :blue[*Guide*]")
            st.text("1️⃣ Do this")
            st.text("2️⃣ Do this")
            st.text("3️⃣ Do this")
            st.text("4️⃣ Do this")

            
        else:
            st.subheader("📝 :blue[*Documentos*]")
            pdf_docs = st.file_uploader(
                    "Carregue seus PDFs aqui e clique em  :blue['Processar'].", accept_multiple_files=True, type="pdf")
            if st.button("Processar", type="primary"):
                with st.spinner("Processando..."):
                    # get pdf text
                    raw_text = get_pdf_text(pdf_docs)

                    # get the text chunks
                    text_chunks = get_text_chunks(raw_text)
                    # create vector store
                    vectorstore = get_vectorstore(text_chunks)

                    # create conversation chain

                st.success('This is a success message!', icon="✅")
            else: 
                st.warning('This is a warning', icon="⚠️")
            st.divider()
            st.subheader("💡 :blue[*Guia*]")
            st.text("1️⃣ Escolha o Idioma")
            st.text("2️⃣ Carregue o(s) PDF(s)")
            st.text("3️⃣ Clique em Processar")
            st.text("4️⃣ Faça Perguntas ao GalerrouleAI")
            
    if idioma_selecionado == 'EN':        
        st.header("Welcome to :blue[*GalerrouleAI*] 🤖")
        st.write("Your company's chat to ask questions about private documents! 📝")
        user_question = st.text_input("Ask questions about the documents you uploaded:")
        if user_question:
            handle_userinput(user_question)
    else:
        st.header("Bem Vindo ao :blue[*GalerrouleAI*] 🤖")
        st.write("O chat da sua empresa para tirar dúvidas sobre documentos particulares! 📝")
        user_question = st.text_input("Faça perguntas sobre os documentos que você carregou:")
        if user_question:
            handle_userinput(user_question)
    
    
if __name__ == '__main__':
    main()
    
