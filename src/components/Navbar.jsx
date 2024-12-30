import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Image from "next/image";
import { motion } from "framer-motion";
import { NavLinks, Socials } from "@/utils/data";
import { redirect, usePathname } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";

const variants = {
  open: {
    height: "fit-content",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    height: 97,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  return (
    <motion.div
      variants={variants}
      animate={isActive ? "open" : "closed"}
      initial="closed"
      className="fixed top-0 w-screen px-6 border-b overflow-hidden border-b-[#e6e6e6] bg-white"
    >
      <div className="flex justify-between w-full items-center py-6">
        <div className="flex flex-row gap-3 cursor-pointer">
          <Image
            src={{ src: "/me.jpeg", height: 48, width: 48 }}
            alt="logo"
            unoptimized
            className="rounded-md"
          />
          <div className="flex flex-col gap-0 items-start">
            <div className="text-[18px] font-semibold text-[#1a1a1a] font-poppins">
              Suryansh Sharma
            </div>
            <div className="text-[14px] font-light text-[#666666] font-poppins">
              Full Stack Developer
            </div>
          </div>
        </div>
        {isActive ? (
          <AiOutlineClose size={24} onClick={() => setIsActive(!isActive)} />
        ) : (
          <IoMenuOutline onClick={() => setIsActive(!isActive)} size={24} />
        )}
      </div>
      <div className="">
        <div className="py-8 flex flex-col gap-1 border-t border-t-[#e6e6e6]">
          {NavLinks.map((link, id) =>
            link.name === "Resume" ? (
              <a
                key={id}
                target="_blank"
                href={link.path}
                className="cursor-pointer px-5 py-4 flex gap-4 items-center hover:bg-[#fafafa] rounded transition-all duration-300"
              >
                <div className="">{link.icon}</div>
                <div className={`text-[14px] text-[#666666] font-poppins`}>
                  {link.name}
                </div>
              </a>
            ) : (
              <div
                className="cursor-pointer px-5 py-4 flex gap-4 items-center hover:bg-[#fafafa] rounded transition-all duration-300"
                key={id}
                onClick={() => {
                  setIsActive(!isActive);
                  setTimeout(() => {
                    redirect(link.path);
                  }, 1000);
                }}
              >
                <div className="">
                  {pathname === link.path ? link.iconFilled : link.icon}
                </div>
                <div
                  className={`${
                    pathname === link.path
                      ? "text-[14px] text-[#1a1a1a]"
                      : "text-[14px] text-[#666666]"
                  } font-poppins`}
                >
                  {link.name}
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex items-center justify-between py-4 px-3 border-t border-t-[#e6e6e6]">
          {Socials.map((social, id) => (
            <a
              target="_blank"
              href={social.link}
              key={id}
              className="cursor-pointer px-2 py-2 rounded hover:bg-[#fafafa] transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
