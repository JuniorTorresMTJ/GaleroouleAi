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
              Sobre mim<span className="text-white ml-0 pl-0">_</span>
            </h2>
            <h3 className=" h3-responsive mb-1 lg:h3">
              We are a Data company with projects across the US, Europe and
              South America!
            </h3>
            <p className="mb-6 text-lg lg:font-secondary lg:leading-8 ">
              We possess expertise in various domains including Artificial
              Intelligence, Data Engineering, Data Science, MLOps, Large
              Language Models, Data Analytics, among others!
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-4 lg:mb-12 lg:justify-center h-fit">
              <div>
                <div className="text-[40px] font-tertiary text-gradient h-fit">
                  +{inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] py-2">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient h-fit">
                  +
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]  py-2">
                  Millions in Revenue <br />
                  for our Clients
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient h-fit">
                  +{inView ? <CountUp start={0} end={12} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]  py-2">
                  Companies
                  <br />
                </div>
              </div>
            </div>
            <div className=" flex gap-x-8 items-center mr-8 justify-center">
              <Link smooth={true} to="contact" spy={true}>
                <button className="btn btn-lg rounded-lg  max-w-[170px] animate-ping px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Contact US
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </button>
              </Link>
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
                  International Experience
                </div>
                <div className=" text-white text-opacity-70 text-base font-normal">
                  We have collaborated with prestigious companies such as
                  PokerStars, Shopee, Bradesco, Ipiranga, among many others.
                </div>
              </div>
            </div>
            <div className="flex flex-row  items-center lg:h-[163px] h-[240px] py-2 lg:py-5 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow">
              <div className="w-20 h-16 bg-[#034460] bg-opacity-50 text-[30px] rounded-2xl flex items-center justify-center m-4 px-5 text-[#61DAFB] hover:text-white">
                <HiMiniUsers />
              </div>

              <div className="mr-5">
                <div className="text-white text-lg font-semibold capitalize leading-normal tracking-tight ">
                  State-of-the-art solutions
                </div>
                <div className=" text-white text-opacity-70 text-base font-normal">
                  Our expertise in virtually all fields of data positions us as
                  one of the few who can deliver top-quality solutions in every
                  area. Need a chatbot? No worries—we can develop both the
                  backend and the frontend. We've got you covered!
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center lg:h-[163px] h-[240px] py-2 lg:py-5  hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow">
              <div className="w-20 h-16 bg-[#034460] bg-opacity-50 text-[30px] rounded-2xl flex items-center justify-center m-4 px-5 text-[#61DAFB] hover:text-white">
                <BsSendFill />
              </div>

              <div className="mr-5">
                <div className="text-white text-lg font-semibold capitalize leading-normal tracking-tight ">
                  100% Secured
                </div>
                <div className="text-white text-opacity-70 text-base font-normal">
                  We are committed to delivering outstanding results in the best
                  way possible. If you're not completely satisfied, we offer a
                  100% money-back guarantee. This is a testament to the supreme
                  confidence we have in our capabilities.
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
