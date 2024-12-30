import React from "react";
import { redirect, usePathname } from "next/navigation";
import { NavLinks, Socials } from "@/utils/data";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";

const DesktopSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden bg-[#fff] dark:bg-[#070708] px-6 py-5 border-r border-r-[#e6e6e6] dark:border-r-gray-800 w-fit flex-col justify-between">
      <div className="">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center py-4 lg:py-8 border-b border-b-[#e6e6e6] dark:border-b-gray-800 cursor-pointer">
          <Image
            src={{ src: "/me.jpeg", height: 68, width: 68 }}
            alt="logo"
            unoptimized
            className="rounded-md"
          />
          <div className="flex flex-col gap-0 items-center lg:items-start">
            <div className="text-[18px] font-semibold text-[#1a1a1a] dark:text-white font-poppins text-center lg:text-left">
              Suryansh S.
            </div>
            <div className="text-[14px] font-light text-[#666666] dark:text-gray-400 font-poppins text-center lg:text-left">
              FullStack Developer
            </div>
          </div>
        </div>

        <div className="py-4 lg:py-8 flex flex-col gap-1">
          {NavLinks.map((link, id) =>
            link.name === "Resume" ? (
              <a
                key={id}
                target="_blank"
                href={link.path}
                className="cursor-pointer px-5 py-2 lg:py-4 flex gap-4 items-center hover:bg-[#fafafa] dark:hover:bg-[#0E0F12] rounded transition-all duration-300"
              >
                <div className="">{link.icon}</div>
                <div className={`text-[14px] text-[#1a1a1a] dark:text-[#fff] font-poppins`}>
                  {link.name}
                </div>
              </a>
            ) : (
              <div
                className="cursor-pointer px-5 py-2 lg:py-4 flex gap-4 items-center hover:bg-[#fafafa] dark:hover:bg-[#0E0F12] rounded transition-all duration-300"
                key={id}
                onClick={() => {
                  redirect(link.path);
                }}
              >
                <div className="">
                  {pathname === link.path ? link.iconFilled : link.icon}
                </div>
                <div
                  className={`${
                    pathname === link.path
                      ? "text-[14px] text-[#1a1a1a] dark:text-[#fff]"
                      : "text-[14px] text-[#666666]"
                  } font-poppins`}
                >
                  {link.name}
                </div>
              </div>
            )
          )}
          <div className="">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-1 lg:gap-6 items-center justify-center pt-5 lg:pt-10 lg:pb-5 px-6 border-t border-t-[#e6e6e6] dark:border-t-gray-800">
        {Socials.map((social, id) => (
          <a
            target="_blank"
            href={social.link}
            key={id}
            className="cursor-pointer px-2 py-2 rounded hover:bg-[#fafafa] dark:hover:bg-[#0E0F12] transition-all duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DesktopSidebar;
