import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsArrowRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (!email.trim() || !name.trim() || !message.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      subject: subject,
    };
    emailjs
      .send(
        "service_eejfkvb",
        "template_sdat9el",
        templateParams,
        "-43W4-YJqFqAqmFxV"
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response.status, response.text);
          setMessage("");
          alert("Email sent successfully! Thank you for reaching out.");
        },
        (err) => {
          console.log("ERROR: ", err);
        }
      );
  }

  return (
    <div
      className=" h-max section mb-20 lg:mb-4 lg:h-full lg:bg-contact lg:bg-contain lg:bg-left-bottom lg:bg-no-repeat lg:mix-blend-lighten"
      
    >
      <div id="contact" className="container mx-auto pt-8 pb-32 lg:py-8 lg:px-16 text-center xl:text-left flex items-center justify-center lg:justify-end lg:h-full">
        <div className="flex flex-col lg:w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center font-semibold  mb-12 leading-tight"
          >
            Vamos{" "}
            <span className=" text-accent">
              conversar<span className="text-white ml-0 pl-0">_</span>
            </span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-6 w-full mx-auto justify-center"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Name..."
                className="input"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="text"
                placeholder="Email..."
                className="input"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <input
              type="text"
              placeholder="Subject..."
              className="input"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />

            <textarea
              placeholder="Message..."
              className="textarea"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <button
              type="submit"
              className="btn btn-lg rounded-lg max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Enviar
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
