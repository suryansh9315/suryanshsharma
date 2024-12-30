"use client";
import React from "react";
import FlipText from "./FlipText";
import { Stack } from "@/utils/data";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeStack = () => {
  const { width } = useWindowSize();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1.5 }}
      className="flex flex-col gap-10 border-b border-b-[#e6e6e6] dark:border-b-gray-800 py-10"
    >
      <div className="text-[#1a1a1a] dark:text-white font-poppins text-[36px] font-bold">
        Stack
      </div>
      <div className="flex gap-5 flex-wrap flex-col md:flex-row">
        {Stack.slice(0, width > 1024 ? 6 : 4).map((tool, id) => (
          <div
            key={id}
            className="flex items-center gap-4 px-5 py-5 bg-[#fafafa] dark:bg-[#0E0F12] w-[100%] md:w-[45%] lg:w-[30%] rounded-lg cursor-pointer"
          >
            <div className="">
              <Image
                src={tool.image}
                className="object-cover"
                width={40}
                height={40}
                unoptimized
                alt="Image"
              />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold font-poppins text-[#1a1a1a] dark:text-gray-200 text-[18px]">
                {tool.name}
              </div>
              <div className="font-light font-poppins text-[#666] text-[14px]">
                {tool.purpose}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        href={"/stack"}
        className="text-[16px] text-[#666] dark:text-gray-400 dark:hover:text-white hover:bg-[black] hover:text-[white] transition-all duration-300 font-poppins border border-[#666] rounded-md px-8 py-[10px] w-fit text-center cursor-pointer"
      >
        <FlipText duration={0.1} stagger={0.015} classes={"h-[25px] w-[120px]"}>
          allStack
        </FlipText>
      </Link>
    </motion.div>
  );
};

export default HomeStack;
