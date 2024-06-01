import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Robo from "../assets/robot.png";
import Ball from "../assets/ball.png";
import Ball2 from "../assets/ball2.png";
import Ball3 from "../assets/ball3.png";
import Brain from "../assets/Bulb.png";
import ParticlesContainer from "../components/ParticlesContainer";
import { BsArrowRight } from "react-icons/bs";
import Logo from "../assets/logo.svg"; //

const Banner = () => {
  return (
    <div
      id="home"
      className="min-h-[85vh] lg:h-screen  lg:w-full lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto ">
        <div className="flex  flex-1 flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className=" flex-1 text-center font-secondary lg:text-left max-w-[800px] z-50">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 mt-4 text-[32px] lg:text-[60px] font-secondary font-semibold uppercase
            leading=[1] flex  items-center flex-col lg:items-start"
            >
              <div className=" lg:w-[400px]  w-[270px]  ">
                {/* <a href="" target="_blank">
                  <img src={Logo} alt="" />
                </a> */}
              </div>
              <div className=" mb-3 text-white font-primary text-[32px] lg:text-4xl ">
                Use our Artificial Intelligence to:
              </div>
              <TypeAnimation
                sequence={[
                  "Analyze",
                  2000,
                  "Extract",
                  2000,
                  "Summarize",
                  2000,
                  "Search",
                  2000,
                  "Classify",
                  2000,
                  "Convert",
                  2000,
                  "Validate",
                  2000,
                  "Compare",
                  2000,
                  "Organize",
                  2000,
                  "Translate",
                  2000,
                  "Segment",
                  2000,
                  "Tag",
                  2000,
                  "Visualize",
                  2000,
                ]}
                speed={50}
                className=" text-accent font-primary tracking-[10%] !text-[40px] font-semibold lg:!text-7xl"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-6 max-w-[390px] mx-auto lg:mx-0 lg:max-w-[720px] p-2"
            >
              Welcome to our AI! Explore an innovative tool that transforms your interaction with PDF documents. Discover our unique services that have revolutionized access and analysis of information. Experience innovation at your fingertips!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 hover:z-50"
            >
              <a
                href="https://galeroouleai.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-lg rounded-lg  max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Learn More
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </button>
              </a>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              <Link
                className="text-gradient btn-link"
                to="services"
                spy={true}
                smooth={true}
              >
                Our Services
              </Link>
            </motion.div>
          </div>
          <div className="w-full h-full absolute right-0 bottom-0">
            <ParticlesContainer />
            <motion.div className="">
              <div className="   xl:flex xl:max-w-none hidden lg:flex absolute  -bottom-32 md:hidden lg:bottom-[-4%] lg:right-[-0%] mix-blend-lighten">
                <img src={Robo} alt="" />
              </div>
              <div className="animate-upAndDown1 w-full h-full max-w-[40px] max-h-[40px] hidden lg:flex absolute -bottom-32 lg:bottom-[35%]  lg:right-[40%] xl:right-[25%]">
                <img src={Ball} alt="" />
              </div>
              <div className="animate-upAndDown1 w-full h-full max-w-[60px] max-h-[60px] hidden lg:flex absolute -bottom-32 lg:bottom-[45%]   lg:right-[20%] xl:right-[12%]">
                <img src={Ball2} alt="" />
              </div>
              <div className="hidden lg:flex absolute animate-upAndDown1 w-full h-full max-w-[100px] max-h-[100px] -bottom-32 lg:bottom-[65%] lg:right-[43%] xl:right-[24%]">
                <img src={Ball3} alt="" />
              </div>
              <div className="hidden lg:flex absolute animate-upAndDown w-full h-full max-w-[300px] max-h-[300px]  -bottom-32 md:hidden lg:bottom-[32%] lg:right-[17%] xl:right-[12%]">
                <img src={Brain} alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
