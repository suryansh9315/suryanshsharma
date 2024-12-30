"use client";
import React from "react";
import FlipText from "./FlipText";
import { Projects } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";

const HomeProjects = () => {
  const { width } = useWindowSize();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1.5 }}
      className="flex flex-col gap-10 border-b border-b-[#e6e6e6] py-10"
    >
      <div className="text-[#1a1a1a] font-poppins text-[36px] font-bold">
        Recent Projects
      </div>
      <div className="flex gap-6 md:gap-3 flex-col md:flex-row">
        {Projects.slice(0, width > 1280 ? 3 : 2).map((project, id) => (
          <a
            href={project.link}
            key={id}
            target="_blank"
            className="flex flex-col gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className=""
            >
              <Image
                src={project.image}
                className="w-full h-full object-cover"
                width={100}
                height={100}
                unoptimized
                alt="Image"
              />
            </motion.div>
            <div className="text-[18px] font-poppins font-light text-[#1a1a1a]">
              {project.name}
            </div>
          </a>
        ))}
      </div>
      <Link
        href={"/projects"}
        className="text-[16px] text-[#666] hover:bg-[black] hover:text-[white] transition-all duration-300 font-poppins border border-[#666] rounded-md px-8 py-[10px] w-fit text-center cursor-pointer"
      >
        <FlipText duration={0.1} stagger={0.015} classes={"h-[25px] w-[120px]"}>
          allProjects
        </FlipText>
      </Link>
    </motion.div>
  );
};

export default HomeProjects;
