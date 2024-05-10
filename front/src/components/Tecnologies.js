import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CircleSm from "../assets/circle-sm.png";
import CircleMd from "../assets/circle-md.png";
import CircleLg from "../assets/circle-lg.png";

const Tecnologies = () => {
  return (
    <section
      id="tecnologies"
      className="  w-full h-screen  mb-2  flex items-center justify-center"
    >
      <div id="tecnologies" className=" container flex-col lg:flex lg:flex-row max-auto xl:mx-0">
        <motion.div 
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-center justify-center lg:w-1/2 ">
          <div className="flex-1  items-center justify-center p-5">
          <h2 className=" h2  text-accent font-semibold">O que sabemos<span className="text-white ml-0 pl-0">_</span></h2>
            <h3 className=" h3-responsive lg:h3 mb-4 ">
            Somos movidos pela inovação e impulsionados por tecnologias de ponta. Com expertise nas mais diversas tecnologias de desenvolvimento de software, estamos em uma missão para revolucionar indústrias e capacitar empresas a prosperar na era orientada por dados.
            </h3>
            <p className="mb-6">
            
Nossa stack de tecnologias é mais do que apenas a soma de suas partes. Com nossa paixão por inovação, garantimos que estamos sempre ultrapassando limites e explorando novos horizontes.            </p>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="hidden lg:flex justify-center items-center lg:w-1/2 ">
        <div className="relative flex justify-center items-center">
          <div className=" relative flex justify-center items-center">
          <img
            src={CircleLg}
            alt=""
            className=" opacity-80 w-[200px] h-[200px] lg:w-[450px] lg:h-[450px]  "
          />
          <img
            src={CircleMd}
            alt=""
            className="opacity-80 absolute w-[150px] h-[150px] lg:w-[400px] lg:h-[400px] "
          />
          <img
            src={CircleSm}

            alt=""
            className="opacity-80 absolute  w-[80px] h-[80px] lg:w-[250px] lg:h-[250px] "
          />         
          </div>
        </div>
        
        </motion.div>
      </div>
    </section>
  );
};
export default Tecnologies;
