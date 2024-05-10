import React from "react";
import { fadeIn } from "../variants";
import Junior from "../assets/junior.png";
import { motion } from "framer-motion";
import Bradesco from "../assets/bradesco-logo.png";
import Shopee from "../assets/shopee-logo.png";
import Porto from "../assets/porto-logo.png";


const Team = () => {
  return (
    <div
      className="section lg:h-screen  translate-z-0 m-auto
      "
      id="Team"
    >
      <div className=" container lg:h-screen mx-auto flex flex-1 justify-center items-center">
        <div className="">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className=" flex-1 flex lg:justify-start items-center  lg:mb-6"
          >
            <div>
              <h2 className="h2 leading-tight flex font-semibold  text-accent">
                Quem sou eu<span className="text-white ml-0 pl-0">_</span>
              </h2>
              <p className=" mb-10">
                Sou um profissional de dados com mais de 4 anos de experiência.
              </p>
              <a href="" target="_blank">
                {/* <button className="btn btn-sm mb-2">View all projects</button> */}
              </a>
            </div>
          </motion.div>
          <div className="flex flex-col lg:flex-row  justify-center items-center  p-1 pb-0">
            <div className=" flex flex-col gap-y-2">
              <div className="flex flex-col lg:flex-row lg:h-full gap-y-24 gap-x-5">
                <motion.div
                  variants={fadeIn("left", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="flex flex-col  justify-center drop-shadow-lg p-5  lg:w-80 h-94   cursor-pointer  bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow "
                >
                  <div className="rounded-full flex items-center justify-center pb-1">
                    <img
                      src={Junior}
                      alt=""
                      width={100}
                      height={100}
                      className=" drop-shadow-lg img_shadow rounded-2xl -mt-[5rem] "
                    />
                  </div>
                  <div className=" text-gradient text-xl m-3 p-2 text-center tracking-wider  font-semibold  capitalize leading-normal ">
                    Junior Torres
                  </div>
                  <div className="flex items-center justify-center gap-x-1">
                    <p className="text-center leading-tight font-semibold mb-2 text-xs rounded-md py-1 px-2 bg-cyan-700 hover:bg-cyan-900">
                      ML Engineer
                    </p>
                    <p className="text-center leading-tight font-semibold mb-2 text-xs rounded-md py-1 px-2 bg-emerald-700 hover:bg-emerald-900">
                      Data Analytics
                    </p>
                    <p className="text-center leading-tight font-semibold mb-2 text-xs rounded-md py-1 px-2 bg-violet-700 hover:bg-violet-900">
                      Data Scientist
                    </p>
                  </div>
                  <p className="font-secondary leading-tight  text-opacity-70 text-base font-normal text-center p-1">
                  Engenheiro de Machine Learning com experiência em grandes empresas, habilidoso em implementação de modelos, Python, SQL, PySpark e infraestruturas em nuvem.
                  </p>
                </motion.div>

              </div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("right", 0.20)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.12 }}
            className=" flex-1 flex flex-col lg:flex-row   justify-center lg:py-2 lg:px-5 "
          >
            <div className="flex-1 flex flex-row justify-center  items-center lg:flex-row gap-x-5 gap-y-5">
              <div className="flex  justify-center items-center w-2/4 lg:w-2/4 p-3 ">
                <img
                  src={Porto}
                  alt="Logo Shopee"
                  className="w-[100px] lg:w-[150px]"
                />
              </div>

            </div>
            <div className="flex-1 flex flex-row justify-center  items-center lg:flex-row gap-x-5 gap-y-5">
              <div className="flex  justify-center items-center w-2/4 lg:w-2/4 p-3 ">
                <img
                  src={Shopee}
                  alt="Shopee"
                  className="w-[100px] lg:w-[150px]"
                />
              </div>

            </div>
            <div className="flex-1 flex flex-row justify-center  items-center lg:flex-row gap-x-5 gap-y-5">
              <div className="flex justify-center items-center  w-1/2 lg:w-2/4 p-3 ">
                <img src={Bradesco} alt="" className="w-[100px] lg:w-[150px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
