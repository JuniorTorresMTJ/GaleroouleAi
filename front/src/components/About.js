import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { HiStar, HiMiniUsers } from "react-icons/hi2";
import { BsSendFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" ref={ref} className="section">
      <div className="flex container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 lg:h-screen"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className=" h2  text-accent font-semibold">
              Sobre nós<span className="text-white ml-0 pl-0">_</span>
            </h2>
            <h3 className=" h3-responsive mb-1 lg:h3">
              Somos uma IA que facilitará a sua vida e de sua empresa!
            </h3>
            <p className="mb-6 text-lg lg:font-secondary lg:leading-8 ">
              Possuímos expertise em diversos domínios, incluindo Inteligência
              Artificial, Ciência de Dados, MLOps, Modelos de Linguagem de
              Grande Escala (LLM), Análise de Dados, entre outros!
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-4 lg:mb-12 lg:justify-center h-fit">
              <div>
                <div className="text-[40px] font-tertiary text-gradient h-fit">
                  +{inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] py-2">
                  Anos de <br />
                  Experiência
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient h-fit">
                  +
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]  py-2">
                  Milhões de Receita <br />
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient h-fit">
                  +{inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]  py-2">
                  Empresas
                  <br />
                </div>
              </div>
            </div>
            <div className=" flex gap-x-8 items-center mr-8 justify-center">
            <a href="https://galeroouleai.streamlit.app" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-lg rounded-lg  max-w-[170px] animate-ping px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Usar IA
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex-col lg:space-y-5 "
          >
            <div className="flex flex-row items-center lg:h-[163px] h-[240px] py-2 lg:py-5 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow">
              <div className="w-20 h-16 bg-[#034460] bg-opacity-50 text-[30px] rounded-2xl flex items-center justify-center m-4 px-5 text-[#61DAFB] hover:text-white">
                <HiStar />
              </div>

              <div className="mr-5">
                <div className="text-white text-lg font-semibold capitalize leading-normal tracking-tight ">
                  Eficiência Operacional
                </div>
                <div className=" text-white text-opacity-70 text-base font-normal">
                  A IA aumenta a produtividade ao automatizar tarefas e
                  processos repetitivos, reduzindo erros e liberando tempo para
                  atividades de maior valor agregado. Isso se traduz em
                  operações mais rápidas e eficientes em diversos setores.
                </div>
              </div>
            </div>
            <div className="flex flex-row  items-center lg:h-[163px] h-[240px] py-2 lg:py-5 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow">
              <div className="w-20 h-16 bg-[#034460] bg-opacity-50 text-[30px] rounded-2xl flex items-center justify-center m-4 px-5 text-[#61DAFB] hover:text-white">
                <HiMiniUsers />
              </div>

              <div className="mr-5">
                <div className="text-white text-lg font-semibold capitalize leading-normal tracking-tight ">
                  Personalização e Experiência do Usuário
                </div>
                <div className=" text-white text-opacity-70 text-base font-normal">
                  Utilizando análise de comportamento, a IA personaliza
                  recomendações e serviços, melhorando significativamente a
                  experiência do usuário. Isso não só aumenta a satisfação e
                  fidelidade do cliente, como também impulsiona vendas e
                  engajamento.
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center lg:h-[163px] h-[240px] py-2 lg:py-5  hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow">
              <div className="w-20 h-16 bg-[#034460] bg-opacity-50 text-[30px] rounded-2xl flex items-center justify-center m-4 px-5 text-[#61DAFB] hover:text-white">
                <BsSendFill />
              </div>

              <div className="mr-5">
                <div className="text-white text-lg font-semibold capitalize leading-normal tracking-tight ">
                  Insights e Tomada de Decisão Aprimorada
                </div>
                <div className="text-white text-opacity-70 text-base font-normal">
                  Com a capacidade de processar e analisar grandes volumes de
                  dados, a IA oferece insights profundos que apoiam decisões
                  estratégicas, ajudando empresas a antecipar tendências e
                  otimizar operações com base em informações precisas.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
