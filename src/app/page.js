import React from "react";
import HomeHero from "@/components/HomeHero";
import HomeProjects from "@/components/HomeProjects";
import HomeStack from "@/components/HomeStack";

const Home = () => {
  return (
    <div className="">
      <div className="px-5 sm:px-10 py-5 md:py-10">
        <HomeHero />
        <HomeProjects />
        <HomeStack />
      </div>
    </div>
  );
};

export default Home;
