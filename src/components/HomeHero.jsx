"use client";
import React from "react";
import FlipText from "@/components/FlipText";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1.5 }}
      className="flex flex-col md:flex-row items-center justify-between gap-5 border-b border-b-[#e6e6e6] dark:border-b-gray-800 py-5 md:py-10"
    >
      <div className="flex flex-col gap-5 w-full md:w-[50%]">
        <div className="text-[44px] font-bold text-[#1a1a1a] font-poppins leading-[50px]">
          <div className="bg-gradient-to-r from-purple-800 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text animate-text">Hey there!</div>
          <br />
          <div className="bg-gradient-to-r from-purple-800 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text animate-text">I'm Suryansh</div>
        </div>
        <div className="text-[16px] text-[#666666] dark:text-gray-400 font-poppins hidden sm:block">
          <div>I'm a passionate Full Stack Developer with a strong</div>
          <div>foundation in both front-end and back-end technologies.</div>
          <div>With a keen interest in game development and blockchain.</div>
        </div>
        <div className="text-[16px] text-[#666666] dark:text-gray-400 font-poppins block sm:hidden">
          I'm a passionate Full Stack Developer with a strong foundation in both
          front-end and back-end technologies. With a keen interest in game
          development and blockchain.
        </div>
        <Link
          href={"/about"}
          className="text-[16px] text-[#666] mt-3 mb-3 md:mb-0 md:mt-5 hover:bg-[black] dark:text-gray-400 dark:hover:text-white hover:text-[white] transition-all duration-300 font-poppins border border-[#666] rounded-md px-8 py-[10px] w-fit text-center cursor-pointer"
        >
          <FlipText
            duration={0.1}
            stagger={0.015}
            classes={"h-[25px] w-[120px]"}
          >
            aboutMe
          </FlipText>
        </Link>
      </div>
      <div className="w-full md:w-[50%] mb-5 md:mb-0">
        <Image
          src={{ src: "/me2.jpeg", height: 68, width: 68 }}
          alt="logo"
          unoptimized
          className="rounded-md h-full w-full max-h-[350px] 2xl:max-h-[400px] object-cover object-center"
        />
      </div>
    </motion.div>
  );
};

export default HomeHero;
