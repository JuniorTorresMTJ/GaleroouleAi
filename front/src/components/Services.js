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
    <section id="services" className="flex items-center w-full h-screen">
      <div className="container mx-auto my-auto w-full h-screen">
        <div className="flex flex-col m-2 mb-10 lg:bg-opacity-5">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:mb-0"
          >
            <h2 className="h2 text-accent font-semibold m-5 ml-0">
              What we do<span className="text-white ml-0 pl-0">_</span>
            </h2>
            <h3 className="leading-tight lg:mb-10 mb-2 mr-3 pr-2">
              Here are the possibilities with our AI!
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="justify-center pb-5 lg:pb-2"
          >
            <Swiper
              modules={[FreeMode, Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={"1"}
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
              className="mySwiper group flex justify-center items-center rounded-2xl h-max"
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
              <SwiperSlide>
                <div className="flex-col justify-center drop-shadow-lg p-5 w-full lg:h-[450px] cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow">
                  <div className="rounded-2xl flex items-center justify-center pb-3">
                    <img
                      src={AI}
                      alt=""
                      className="drop-shadow-lg img_shadow rounded-2xl lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]"
                    />
                  </div>
                  <div className="text-lg text-gradient text-center tracking-wider font-semibold capitalize leading-normal">
                    Analyze
                  </div>
                  <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                    Enhance the effectiveness of your decision-making with our advanced PDF analysis services. Using cutting-edge techniques, we offer deep and precise insights extracted directly from your documents. Our approach enables a broad understanding of content, optimizing processes and promoting a data-driven environment.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-col justify-center drop-shadow-lg p-5 w-full lg:h-[450px] cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow">
                  <div className="rounded-2xl flex items-center justify-center pb-3">
                    <img
                      src={DS}
                      alt=""
                      className="drop-shadow-lg img_shadow rounded-2xl lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]"
                    />
                  </div>
                  <div className="text-lg text-gradient text-center tracking-wider font-semibold capitalize leading-normal">
                    Extract
                  </div>
                  <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                    Unlock the potential of your documents with our PDF data extraction service. We automatically extract crucial information, saving time and reducing human errors. Ideal for corporate environments that deal with large volumes of data, facilitating accessibility and utilization of the information contained in documents.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-col justify-center drop-shadow-lg p-5 w-full lg:h-[450px] cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow">
                  <div className="rounded-2xl flex items-center justify-center pb-3">
                    <img
                      src={MLE}
                      alt=""
                      className="drop-shadow-lg img_shadow rounded-2xl lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]"
                    />
                  </div>
                  <div className="text-lg text-gradient text-center tracking-wider font-semibold capitalize leading-normal">
                    Summarize
                  </div>
                  <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                    Transform extensive documents into concise summaries with our PDF summarization service. Perfect for professionals who need to quickly assimilate information, our method highlights key points and essential information, allowing for efficient review without the need to read the entire document.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-col justify-center drop-shadow-lg p-5 w-full lg:h-[450px] cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow">
                  <div className="rounded-2xl flex items-center justify-center pb-3">
                    <img
                      src={MLOps}
                      alt=""
                      className="drop-shadow-lg img_shadow rounded-2xl lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]"
                    />
                  </div>
                  <div className="text-lg text-gradient text-center tracking-wider font-semibold capitalize leading-normal">
                    Search
                  </div>
                  <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                    Revolutionize how you find information with our PDF search service. Instantly locate any data or text within a vast collection of documents, significantly improving operational efficiency. Ideal for legal, academic, and research sectors, where speed in information retrieval is crucial.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-col justify-center drop-shadow-lg p-5 w-full lg:h-[450px] cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow">
                  <div className="rounded-2xl flex items-center justify-center pb-3">
                    <img
                      src={Dash}
                      alt=""
                      className="drop-shadow-lg img_shadow rounded-2xl lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]"
                    />
                  </div>
                  <div className="text-lg text-gradient text-center tracking-wider font-semibold capitalize leading-normal">
                    Classify
                  </div>
                  <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                    Automatically organize your documents with our PDF classification tool. Using artificial intelligence, we categorize your documents by themes, relevance, or any other defined criterion, simplifying file management and improving information retrieval.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-col justify-center drop-shadow-lg p-5 w-full lg:h-[450px] cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow">
                  <div className="rounded-2xl flex items-center justify-center pb-3">
                    <img
                      src={DE}
                      alt=""
                      className="drop-shadow-lg img_shadow rounded-2xl lg:w-[100px] lg:h-[100px] w-[60px] h-[60px]"
                    />
                  </div>
                  <div className="text-lg text-gradient text-center tracking-wider font-semibold capitalize leading-normal">
                    Convert
                  </div>
                  <p className="font-secondary leading-tight text-center pt-2 lg:p-3">
                    Maximize the compatibility of your documents with our PDF conversion service. Convert documents to and from various formats, maintaining layout and content integrity. Essential for companies that interact with various platforms and need to maintain visual and functional consistency between documents.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
