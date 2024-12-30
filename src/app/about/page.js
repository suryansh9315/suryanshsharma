"use client"
import React from "react";
import FlipText from "@/components/FlipText";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="px-5 sm:px-10 py-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 border-b border-b-[#e6e6e6] py-5 sm:py-10"
        >
          <div className="w-full sm:w-[45%] flex flex-col gap-2 sm:gap-5">
            <div className="text-[36px] xl:text-[44px] font-bold text-[#1a1a1a] font-poppins leading-[40px] xl:leading-[50px]">
              About me:
              <br />
              Manefesting Digital Experiences
            </div>
            <div className="font-poppins text-[14px] lg:text-[16px] text-[#666]">
              I'm a passionate web designer dedicated to crafting visually
              stunning and user-friendly websites. I thrive on transforming
              ideas into captivating online experiences while staying at the
              forefront of design trends.
            </div>
          </div>
          <div className="w-full sm:w-[50%]">
            <Image
              src={{ src: "/me2.jpeg", height: 48, width: 48 }}
              alt="logo"
              unoptimized
              className="h-full w-full max-h-[350px] 2xl:max-h-[400px] object-cover rounded-md object-center"
            />
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between gap-5 border-b border-b-[#e6e6e6] py-5 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="w-full md:w-[45%] flex flex-col gap-3"
          >
            <div className="text-[#1a1a1a] font-poppins text-[36px] font-bold">
              Education
            </div>
            <div className="font-poppins text-[14px] lg:text-[16px] text-[#666]">
              I earned my Bachelor's degree in Electronics and Communication
              Engineering from Delhi Technological University, where I honed my
              skills in design principles, user experience, and front-end
              development. My education provided a solid foundation for my
              career in web design.
            </div>
            <Link
              href={"/projects"}
              className="text-[16px] text-[#666] mt-2 hover:bg-[black] hover:text-[white] transition-all duration-300 font-poppins border border-[#666] rounded-md px-8 py-[10px] w-fit text-center cursor-pointer"
            >
              <FlipText
                duration={0.1}
                stagger={0.015}
                classes={"h-[25px] w-[120px]"}
              >
                allProjects
              </FlipText>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.5 }}
            className="w-full md:w-[50%] flex flex-col gap-3"
          >
            <div className="text-[#1a1a1a] font-poppins text-[36px] font-bold">
              Stack
            </div>
            <div className="font-poppins text-[14px] lg:text-[16px] text-[#666]">
              My technical toolkit includes proficiency in Framer, Figma, HTML,
              CSS, JavaScript, and various design software like Adobe Creative
              Suite. I'm also well-versed in responsive web design, ensuring
              that websites I create look and function flawlessly across all
              devices.
            </div>
            <Link
              href={"/projects"}
              className="text-[16px] text-[#666] mt-2 hover:bg-[black] hover:text-[white] transition-all duration-300 font-poppins border border-[#666] rounded-md px-8 py-[10px] w-fit text-center cursor-pointer"
            >
              <FlipText
                duration={0.1}
                stagger={0.015}
                classes={"h-[25px] w-[120px]"}
              >
                allStack
              </FlipText>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
