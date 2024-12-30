// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

export function ThemeSwitcherIcon() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className=""
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? (
        <IoSunnyOutline size={20} color="white" />
      ) : (
        <IoMdMoon size={20} color="#1a1a1a" />
      )}
    </div>
  );
}
