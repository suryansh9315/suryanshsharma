import React from "react";
import useWindowSize from "@/hooks/useWindowSize";
import DesktopSidebar from "./DesktopSidebar";
import Navbar from "./Navbar";

const Sidebar = () => {
  const { width } = useWindowSize();

  return <>{width > 768 ? <DesktopSidebar /> : <Navbar />}</>;
};

export default Sidebar;
