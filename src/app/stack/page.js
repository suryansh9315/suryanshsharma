"use client";
import React from "react";
import { Stack as StackList } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";

const Stack = () => {
  return (
    <div>
      <div className="px-5 sm:px-10 pt-0 md:pt-10 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="text-[36px] xl:text-[44px] py-10 font-bold text-[#1a1a1a] font-poppins leading-[40px] xl:leading-[50px]"
        >
          My Skill Stack:
          <br />
          Manefesting Digital Experiences
        </motion.div>

        <div>
          <div className="flex gap-2 md:gap-5 flex-wrap flex-col md:flex-row">
            {StackList.map((tool, id) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1.5 }}
                key={id}
                className="flex flex-col gap-4 px-5 py-5 bg-[#fafafa] w-[100%] md:w-[45%] rounded-lg cursor-pointer"
              >
                <div className="flex gap-4 items-center">
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
                    <div className="font-semibold font-poppins text-[#1a1a1a] text-[18px]">
                      {tool.name}
                    </div>
                    <div className="font-light font-poppins text-[#666] text-[14px]">
                      {tool.purpose}
                    </div>
                  </div>
                </div>
                <div className="font-poppins text-[14px] text-[#b3b3b3]">
                  {tool.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
