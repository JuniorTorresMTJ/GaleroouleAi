import streamlit as st
import locale
import os
import google.generativeai as genai
from dotenv import load_dotenv
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.llms import HuggingFaceHub
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
from htmlTemplates import css, bot_template, user_template


def get_pdf_text(pdf_docs):
    """
    Extrai o texto de uma lista de documentos PDF.

    Parâmetros:
        pdf_docs (list): Uma lista de arquivos PDF dos quais o texto será extraído.

    Retorna:
        str: Um texto concatenado de todas as páginas de todos os documentos PDF fornecidos.
    """
    text = ""
    for pdf in pdf_docs:
        pdf_reader = PdfReader(pdf)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text


def get_text_chunks(text):
    """
    Divide um texto em blocos, considerando um separador e tamanho de bloco específico.

    Parâmetros:
        text (str): O texto a ser dividido em blocos.

    Retorna:
        list: Uma lista de blocos de texto, onde cada bloco tem um tamanho máximo definido,
              com uma sobreposição especificada entre blocos consecutivos.
    """
    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len
    )
    chunks = text_splitter.split_text(text)
    return chunks


def get_vectorstore(text_chunks):
    """
    Cria um armazenamento de vetores (vectorstore) com base nos blocos de texto, usando embeddings gerados por um modelo especificado.

    Parâmetros:
        text_chunks (list): Uma lista de blocos de texto que serão convertidos em embeddings e armazenados.

    Retorna:
        FAISS: Uma instância de armazenamento de vetores contendo os embeddings dos blocos de texto.
               Informa também se o armazenamento foi criado corretamente ou não através de mensagens.
    """
    embeddings = GoogleGenerativeAIEmbeddings(model='models/embedding-001')

    vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
    vectorstore.save_local("faiss_index")
    
    if vectorstore is None or vectorstore.index.ntotal == 0:
        st.error("Vectorstore está vazio ou não foi criado corretamente.")
    return vectorstore


def get_conversation_chain(vectorstore):
    """
    Configura uma cadeia de conversação usando um armazenamento de vetores e um modelo de linguagem para recuperação e geração de respostas.

    Parâmetros:
        vectorstore (FAISS): O armazenamento de vetores que será usado como retriever na cadeia de conversação.

    Retorna:
        ConversationalRetrievalChain: Uma cadeia de conversação configurada para usar o armazenamento de vetores e um modelo de IA generativo.
    """
    llm = ChatGoogleGenerativeAI(model="gemini-1.0-pro",
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
    """
    Cria uma cadeia de conversação baseada em questões e respostas (QA), utilizando um modelo de linguagem para gerar respostas detalhadas com base em um contexto fornecido.

    Retorna:
        ConversationalRetrievalChain: Uma instância de cadeia de conversação que utiliza um modelo generativo com alta temperatura (maior criatividade nas respostas) e um template de prompt específico para estruturar as perguntas e respostas.
    """
    prompt_template = """
    "Responda à pergunta o mais detalhadamente possível a partir do contexto fornecido, certifique-se de fornecer todos os detalhes, se a resposta não estiver no contexto fornecido, não forneça a resposta errada."\n\n
    Context:\n {context}?\n
    Question: \n{question}\n

    Answer:
    """

    model = ChatGoogleGenerativeAI(model="gemini-1.0-pro",
                             temperature=0.9)

    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)
    
    return chain


def handle_userinput(user_question):
    """
    Processa a entrada do usuário utilizando uma cadeia de conversação para gerar uma resposta baseada em documentos relacionados previamente indexados.

    Parâmetros:
        user_question (str): A pergunta do usuário que será processada pela cadeia de conversação.

    A função realiza as seguintes operações:
    - Carrega o banco de dados de vetores local.
    - Realiza uma pesquisa de similaridade para encontrar documentos relevantes à pergunta.
    - Invoca a cadeia de conversação para obter uma resposta baseada nos documentos encontrados.
    - Formata a pergunta e resposta e as exibe na interface do usuário utilizando templates HTML específicos.
    """
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
    

    
def main():
    load_dotenv()
    os.getenv("GOOGLE_API_KEY")
    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

    st.set_page_config(page_title="GaleroouleAi",
                       page_icon="🤖")
    st.write(css, unsafe_allow_html=True)




# Detecta o idioma preferido do sistema
    idioma_preferido = locale.getdefaultlocale()[0]

# Determina o idioma inicial para o radio com base no idioma do sistema
    idioma_inicial = "EN" if idioma_preferido.startswith('en') else "PT-BR"

# Opções de idioma para o usuário escolher
    opcoes_de_idioma = ['EN', 'PT-BR']
    

    
    with st.sidebar:
        
        st.subheader("🌐 :blue[*Idiomas*]")
        idioma_selecionado = st.radio(
        "Escolha o idioma do GaleroouleAI:",
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
                    vectorstore = get_vectorstore(text_chunks)

            st.divider()
            st.subheader("💡 :blue[*Guide*]")
            st.text("1️⃣ Choose the Language")
            st.text("2️⃣ Upload the PDF(s)")
            st.text("3️⃣ Click on 'Process'")
            st.text("4️⃣ Ask Questions to GaleroouleAI")


            
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

                st.success('This is a success message!', icon="✅")
            else: 
                st.warning('This is a warning', icon="⚠️")
            st.divider()
            st.subheader("💡 :blue[*Guia*]")
            st.text("1️⃣ Escolha o Idioma")
            st.text("2️⃣ Carregue o(s) PDF(s)")
            st.text("3️⃣ Clique em Processar")
            st.text("4️⃣ Faça Perguntas ao GaleroouleAI")
            
    if idioma_selecionado == 'EN':        
        st.header("Welcome to :blue[*GaleroouleAI*] 🤖")
        st.write("Your company's chat to ask questions about private documents! 📝")
        user_question = st.text_input("Ask questions about the documents you uploaded:")
        if user_question:
            handle_userinput(user_question)
    else:
        st.header("Bem Vindo ao :blue[*GaleroouleAI*] 🤖")
        st.write("O chat da sua empresa para tirar dúvidas sobre documentos particulares! 📝")
        user_question = st.text_input("Faça perguntas sobre os documentos que você carregou:")
        if user_question:
            handle_userinput(user_question)
    
    
if __name__ == '__main__':
    main()
    
