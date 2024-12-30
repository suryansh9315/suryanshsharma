// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="flex items-center gap-4 text-[14px] text-[#666666] dark:text-[#fff] font-poppins px-5 py-2 lg:py-4 hover:bg-[#fafafa] dark:hover:bg-[#0E0F12] cursor-pointer"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? (
        <IoSunnyOutline size={20} color="white" />
      ) : (
        <IoMdMoon size={20} color="black" />
      )}
      <div>{theme}</div>
    </div>
  );
}
