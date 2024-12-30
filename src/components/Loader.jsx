"use client";
import useStore from "@/stores/GlobalStore";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Lenis from "@studio-freight/lenis";
import SmoothScroll from "./SmoothScroll";

const Loader = ({ children }) => {
  const { loading, setLoadingFalse } = useStore();
  const wrapperRef = useRef();

  // useEffect(() => {
  //   const wrapper = wrapperRef.current;
  //   if (!wrapper) return;

  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll({
  //       lenisOptions: {
  //         wrapper: wrapper,
  //         content: wrapper,
  //         lerp: 0.1,
  //         duration: 1.2,
  //         orientation: "vertical",
  //         gestureOrientation: "vertical",
  //         smoothWheel: true,
  //         smoothTouch: false,
  //         wheelMultiplier: 1,
  //         touchMultiplier: 2,
  //         normalizeWheel: true,
  //         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //       },
  //     });
  //   })();
  // }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const lenis = new Lenis({
      wrapper: wrapper,
      content: wrapper,
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
      wheelMultiplier: 1.2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <AnimatePresence>
        {loading && (
          <motion.div className="flex items-center justify-center h-screen w-screen">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                onAnimationComplete={setLoadingFalse}
                className="text-[24px] text-[#1a1a1a] font-poppins"
                layoutId="loader_anim_1"
              >
                Suryansh Sharma
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col md:flex-row h-screen overflow-hidden w-screen"
          >
            <Sidebar />
            <SmoothScroll>
              <div
                ref={wrapperRef}
                className="pt-[100px] md:pt-0 w-full overflow-y-auto"
              >
                {children}
              </div>
            </SmoothScroll>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loader;
