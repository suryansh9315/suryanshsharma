"use client";
import React, { useState } from "react";
import FlipText from "@/components/FlipText";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { Socials } from "@/utils/data";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (loading) return;
    if (!name || !email || !text) {
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, text }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await res.json();
      if (res.status == 200) {
        setName("");
        setEmail("");
        setText("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="px-5 sm:px-10 py-0 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="text-[36px] xl:text-[44px] py-10 font-bold text-[#1a1a1a] dark:text-white font-poppins leading-[40px] xl:leading-[50px]"
        >
          Let's Connect!
        </motion.div>
        <div className="flex gap-10 flex-col-reverse md:flex-row pb-10 md:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.5 }}
            className="w-full md:w-[60%] flex flex-col gap-5"
          >
            <div className="text-[18px] font-bold text-[#333] dark:text-white font-poppins">
              Get In Touch
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 flex-col xs:flex-row">
                <input
                  type="text"
                  className="w-full xs:w-1/2 font-poppins placeholder:font-poppins px-6 py-3 bg-[#f3f3f3] dark:bg-[#0E0F12] outline-none"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  className="w-full xs:w-1/2 font-poppins placeholder:font-poppins px-6 py-3 bg-[#f3f3f3] dark:bg-[#0E0F12] outline-none"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <textarea
                className="w-full h-[200px] font-poppins placeholder:font-poppins px-6 py-3 bg-[#f3f3f3] dark:bg-[#0E0F12] outline-none"
                placeholder="Write a message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div
              onClick={handleSubmit}
              className="text-[16px] text-[#666] hover:bg-[black] dark:text-gray-400 dark:hover:text-white hover:text-[white] transition-all duration-300 font-poppins border border-[#666] rounded-md px-8 py-[10px] w-fit text-center cursor-pointer"
            >
              <FlipText
                duration={0.1}
                stagger={0.015}
                classes={"h-[25px] w-[120px]"}
              >
                sendMessage
              </FlipText>
            </div>
          </motion.div>

          <div className="w-full md:w-[40%] flex flex-col md:flex-col xs:flex-row gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.5 }}
              className="flex flex-col gap-5 w-full xs:w-1/2 md:w-fit"
            >
              <div className="text-[18px] font-bold text-[#333] dark:text-white font-poppins">
                Contact
              </div>
              <div className="flex flex-col gap-3 text-[#666666] dark:text-gray-400">
                <div className="font-poppins flex gap-3 items-center">
                  <HiOutlineMail size={22} />
                  <div>
                    suryansh.sharma9315
                    <br />
                    @gmail.com
                  </div>
                </div>
                <div className="font-poppins flex gap-3 items-center">
                  <IoCallOutline size={22} />
                  <div>+91 9315566594</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1.5 }}
              className="flex flex-col gap-5"
            >
              <div className="text-[18px] font-bold text-[#333] dark:text-white font-poppins">
                Socials
              </div>
              <div className="flex flex-col gap-4">
                {Socials.map((social, id) => (
                  <a
                    target="_blank"
                    href={social.link}
                    key={id}
                    className="cursor-pointer flex items-center gap-3 font-light text-[#666666] dark:text-gray-400 font-poppins"
                  >
                    {social.icon}
                    <div>{social.name}</div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
