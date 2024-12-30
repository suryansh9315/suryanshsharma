"use client";
import React from "react";
import { Projects as ProjectsList } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
      <div className="px-5 sm:px-10 pt-0 md:pt-10 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="text-[36px] xl:text-[44px] py-10 font-bold text-[#1a1a1a] font-poppins leading-[40px] xl:leading-[50px]"
        >
          Projects:
          <br />
          Showcasing
          <br />
          My Journey
        </motion.div>
        <div>
          <div className="flex gap-10 flex-col md:flex-row flex-wrap">
            {ProjectsList.map((project, id) => (
              <motion.a
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1.5 }}
                href={project.link}
                key={id}
                target="_blank"
                className="flex flex-col gap-3 w-full md:w-[45%]"
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
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
