"use client";
import React from "react";
import FlipText from "@/components/FlipText";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1.5 }}
      className="flex flex-col gap-5 border-b border-b-[#e6e6e6] py-10"
    >
      <div className="text-[44px] font-bold text-[#1a1a1a] font-poppins leading-[50px]">
        <div>Hey there!</div>
        <div>I'm Suryansh</div>
      </div>
      <div className="text-[16px] text-[#666666] font-poppins hidden sm:block">
        <div>I'm a passionate Full Stack Developer with a strong</div>
        <div>foundation in both front-end and back-end technologies.</div>
        <div>With a keen interest in game development and blockchain.</div>
      </div>
      <div className="text-[16px] text-[#666666] font-poppins block sm:hidden">
        I'm a passionate Full Stack Developer with a strong foundation in both
        front-end and back-end technologies. With a keen interest in game
        development and blockchain.
      </div>
      <Link
        href={"/about"}
        className="text-[16px] text-[#666] mt-5 hover:bg-[black] hover:text-[white] transition-all duration-300 font-poppins border border-[#666] rounded-md px-8 py-[10px] w-fit text-center cursor-pointer"
      >
        <FlipText duration={0.1} stagger={0.015} classes={"h-[25px] w-[120px]"}>
          aboutMe
        </FlipText>
      </Link>
    </motion.div>
  );
};

export default HomeHero;
