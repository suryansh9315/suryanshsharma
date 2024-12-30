"use client";
import React from "react";
import { Experience as ExperienceList } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.5 }}
        className="px-5 sm:px-10 py-5 md:py-10"
      >
        <div className="text-[36px] xl:text-[44px] pb-10 md:py-10 font-bold text-[#1a1a1a] dark:text-white font-poppins leading-[40px] xl:leading-[50px]">
          Experience
        </div>
        <div className="flex flex-col gap-5 xs:gap-10">
          {ExperienceList.map((experience, id) => (
            <div key={id} className="flex gap-2 md:gap-5 flex-col xl:flex-row">
              <div className="w-full xl:w-[50%]">
                <Image
                  src={experience.image}
                  className="w-full h-full object-cover object-left dark:opacity-70"
                  width={100}
                  height={100}
                  unoptimized
                  alt="Image"
                />
              </div>
              <div className="w-full xl:w-[50%] flex flex-col px-3 xs:px-5 py-3 xs:py-5">
                <div className="text-[24px] xs:text-[26px] font-poppins text-[#1a1a1a] dark:text-white">
                  {experience.company}
                </div>
                <div className="text-[16px] xs:text-[18px] font-poppins font-light text-[#666]">
                  {experience.designation}
                  {" (" +
                    experience.start_date +
                    "-" +
                    experience.end_date +
                    ")"}
                </div>
                <ul className="flex flex-col gap-1 mt-3 list-disc">
                  {experience.summary.map((list, id) => (
                    <li
                      className="text-[12px] xs:text-[14px] font-poppins text-[#666] dark:text-gray-400"
                      key={id}
                    >
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
