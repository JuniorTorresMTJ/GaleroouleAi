import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CircleSm from "../assets/circle-sm.png";
import CircleMd from "../assets/circle-md.png";
import CircleLg from "../assets/circle-lg.png";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="w-full h-screen mb-2 flex items-center justify-center"
    >
      <div id="technologies" className="container flex-col lg:flex lg:flex-row max-auto xl:mx-0">
        <motion.div 
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-center justify-center lg:w-1/2">
          <div className="flex-1 items-center justify-center p-5">
            <h2 className="h2 text-accent font-semibold">What We Know<span className="text-white ml-0 pl-0">_</span></h2>
            <h3 className="h3-responsive lg:h3 mb-4">
              We are driven by innovation and powered by cutting-edge technologies. With expertise across a wide range of software development technologies, we are on a mission to revolutionize industries and empower businesses to thrive in the data-driven era.
            </h3>
            <p className="mb-6">
              Our technology stack is more than just the sum of its parts. With our passion for innovation, we ensure that we are always pushing boundaries and exploring new horizons.
            </p>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="hidden lg:flex justify-center items-center lg:w-1/2">
          <div className="relative flex justify-center items-center">
            <div className="relative flex justify-center items-center">
              <img
                src={CircleLg}
                alt=""
                className="opacity-80 w-[200px] h-[200px] lg:w-[450px] lg:h-[450px]"
              />
              <img
                src={CircleMd}
                alt=""
                className="opacity-80 absolute w-[150px] h-[150px] lg:w-[400px] lg:h-[400px]"
              />
              <img
                src={CircleSm}
                alt=""
                className="opacity-80 absolute w-[80px] h-[80px] lg:w-[250px] lg:h-[250px]"
              />         
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Technologies;
