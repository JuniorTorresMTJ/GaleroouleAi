import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import Dash from "../assets/Dash.png";
import MLE from "../assets/MLE.png";
import MLOps from "../assets/MLOps.png";
import AI from "../assets/AI.png";
import DS from "../assets/DS.png";
import DE from "../assets/DE.png";

const Services = () => {
  return (
    <section id="services" className="flex items-center  w-full h-screen ">
      <div className="container mx-auto my-auto  w-full h-screen  ">
        <div className=" flex flex-col m-2 mb-10  lg:bg-opacity-5 ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1   lg:mb-0 "
          >
            <h2 className="h2 text-accent font-semibold m-5 ml-0">
              O que fazemos<span className="text-white ml-0 pl-0">_</span>
            </h2>
            <h3 className="leading-tight lg:mb-10 mb-2 mr-3 pr-2">
              Aqui estão as possibilidades com nossa IA!
            </h3>
            {/* <a href="https://www.linkedin.com/in/marivaldotorres/" target="_blank" ><button className='btn btn-lg rounded-lg'  >See my work</button></a> */}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" justify-center pb-5 lg:pb-2"
          >
            <Swiper
              // install Swiper modules
              modules={[FreeMode, Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={"1"}
              // centeredSlides={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              scrollbar={{ draggable: true }}
              className="mySwiper  group   flex justify-center items-center rounded-2xl h-max "
              freeMode={true}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: true,
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <div className="  flex  w-max  h-max ">
                <SwiperSlide>
                  <div className=" flex-col justify-center drop-shadow-lg p-5 w-full lg:h-[450px]  cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                    <div className="rounded-2xl flex items-center justify-center pb-3 ">
                      <img
                        src={AI}
                        alt=""
                        className=" drop-shadow-lg img_shadow rounded-2xl lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]"
                      />
                    </div>
                    <div className=" text-lg text-gradient text-center tracking-wider  font-semibold  capitalize leading-normal ">
                      Analisar
                    </div>
                    <p className="font-secondary leading-tight  text-center pt-2 lg:p-3">
                      Aumente a eficácia da sua tomada de decisões com nossos
                      serviços avançados de análise de PDF. Utilizando técnicas
                      de ponta, oferecemos insights profundos e precisos
                      extraídos diretamente dos seus documentos. Nossa abordagem
                      permite uma compreensão ampla do conteúdo, otimizando
                      processos e promovendo um ambiente orientado por dados.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex-col justify-center drop-shadow-lg p-5 w-full lg:h-[450px]  cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                    <div className="rounded-2xl flex items-center justify-center pb-3">
                      <img
                        src={DS}
                        alt=""
                        width={100}
                        height={100}
                        className=" drop-shadow-lg img_shadow rounded-2xl lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]"
                      />
                    </div>
                    <div className="text-gradient text-lg text-center tracking-wider  font-semibold  capitalize leading-normal ">
                      Extrair
                    </div>
                    <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                      Libere o potencial dos seus documentos com nosso serviço
                      de extração de dados de PDFs. Extraímos informações
                      cruciais automaticamente, economizando tempo e reduzindo
                      erros humanos. Ideal para ambientes corporativos que lidam
                      com grandes volumes de dados, facilitando a acessibilidade
                      e a utilização das informações contidas nos documentos.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex-col justify-center drop-shadow-lg p-5  w-full lg:h-[450px]   cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                    <div className="rounded-2xl flex items-center justify-center pb-3">
                      <img
                        src={MLE}
                        alt=""
                        width={100}
                        height={100}
                        className=" drop-shadow-lg img_shadow rounded-2xl lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]"
                      />
                    </div>
                    <div className="text-gradient text-lg text-center tracking-wider  font-semibold  capitalize leading-normal ">
                      Sumarizar
                    </div>
                    <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                      Transforme documentos extensos em resumos concisos com
                      nosso serviço de sumarização de PDF. Perfeito para
                      profissionais que precisam assimilar informações
                      rapidamente, nosso método destaca pontos-chave e
                      informações essenciais, permitindo uma revisão eficiente
                      sem a necessidade de ler o documento inteiro.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex-col justify-center drop-shadow-lg p-5  w-full lg:h-[450px] cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                    <div className="rounded-2xl flex items-center justify-center pb-3">
                      <img
                        src={MLOps}
                        alt=""
                        width={100}
                        height={100}
                        className=" drop-shadow-lg img_shadow rounded-2xl lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]"
                      />
                    </div>
                    <div className="text-gradient text-lg text-center tracking-wider  font-semibold  capitalize leading-normal ">
                      Buscar
                    </div>
                    <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                      Revolucione como você encontra informações com nosso
                      serviço de busca em PDF. Localize instantaneamente
                      qualquer dado ou texto dentro de uma vasta coleção de
                      documentos, melhorando significativamente a eficiência
                      operacional. Ideal para setores jurídicos, acadêmicos e de
                      pesquisa, onde a rapidez na recuperação de informações é
                      crucial.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex-col justify-center drop-shadow-lg p-5  w-full lg:h-[450px]   cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                    <div className="rounded-2xl flex items-center justify-center pb-3">
                      <img
                        src={Dash}
                        alt=""
                        width={100}
                        height={100}
                        className=" drop-shadow-lg img_shadow rounded-2xl lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]"
                      />
                    </div>
                    <div className="text-gradient text-lg text-center tracking-wider  font-semibold  capitalize leading-normal ">
                      Classificar
                    </div>
                    <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                      Organize seus documentos automaticamente com nossa
                      ferramenta de classificação de PDF. Utilizando
                      inteligência artificial, categorizamos seus documentos por
                      temas, relevância ou qualquer outro critério definido,
                      simplificando a gestão de arquivos e melhorando a
                      recuperação de informações.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex-col justify-center drop-shadow-lg p-5  w-full lg:h-[450px]   cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                    <div className="rounded-2xl flex items-center justify-center pb-3">
                      <img
                        src={DE}
                        alt=""
                        width={100}
                        height={100}
                        className=" drop-shadow-lg img_shadow rounded-2xl lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]"
                      />
                    </div>
                    <div className="text-gradient text-lg  text-center tracking-wider  font-semibold  capitalize leading-normal ">
                      Converter
                    </div>
                    <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                      Maximize a compatibilidade dos seus documentos com nosso
                      serviço de conversão de PDF. Converta documentos de e para
                      diversos formatos, mantendo a integridade do layout e do
                      conteúdo. Essencial para empresas que interagem com
                      diversas plataformas e precisam manter uma consistência
                      visual e funcional entre documentos.
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </motion.div>
          {/* <a href="#" target="_blank" ><button className='btn btn-lg rounded-lg'  >See my work</button></a> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
