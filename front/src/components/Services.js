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
    <section
      id="services"
      className="flex items-center  w-full h-screen "
    >
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
              What We Do<span className="text-white ml-0 pl-0">.</span>
            </h2>
            <h3 className="leading-tight lg:mb-10 mb-2 mr-3 pr-2">
              These are the services that we offer!
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
                      Artificial Intelligence
                    </div>
                    <p className="font-secondary leading-tight  text-center pt-2 lg:p-3">
                      Unlock the potential of large language models with our
                      tailored solutions, catering to various applications such
                      as model fine-tuning, text generation, chatbots, etc. We
                      equip your business with advanced tools for sentiment
                      analysis, entity linking, and chatbots, continuously
                      innovating to meet and exceed your expectations.
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
                      Data Science
                    </div>
                    <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                      Dive into the forefront of technology with our expert
                      services in crafting and deploying Machine and Deep
                      Learning models. We excel in diverse scenarios including
                      time series forecasting, recommendation systems, anomaly
                      detection, and churn prediction, offering adept solutions
                      in customer segmentation and more, driving your business
                      forward with data-driven strategies.
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
                      Machine Learning Engineering
                    </div>
                    <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                      Embark on a seamless journey of model deployment with our
                      expert MLOps services, upholding the industry's best
                      practices. Our team excels in building resilient CI/CD
                      pipelines and conducting comprehensive unit and
                      integration tests. Leveraging our extensive experience
                      with platforms like AWS, GCP, and Azure, we ensure your
                      projects thrive with leading-edge technology.
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
                      MLOps
                    </div>
                    <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                      Experience seamless integration of the best MLOps
                      practices into your platform with our adept team. We
                      enhance your system with features like model monitoring,
                      automatic retraining, and model versioning, fostering
                      efficiency, accuracy, and innovation in your operations.
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
                      Data Analytics
                    </div>
                    <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                      Maximize your data's potential with our expert data
                      analytics solutions. Implementing industry best practices,
                      we transform raw data into actionable insights, utilizing
                      tools such as predictive analytics and data visualization
                      to enhance your business decision-making process.
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
                      Data Engineering
                    </div>
                    <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                      Upgrade your data infrastructure with our premium data
                      engineering services. Following the sector's best
                      practices, we facilitate seamless data integration,
                      storage, and management. Our services include real-time
                      data processing and data warehousing, fostering a
                      data-driven culture that encourages innovation and growth.
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
