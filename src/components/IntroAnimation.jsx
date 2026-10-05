import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import about from "../assets/aboutt.png";

const IntroAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#111827] flex flex-col items-center justify-center"
          exit={{
            opacity: 0,
            transition: { duration: 0.8 }
          }}
        >
          {/* Logo */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: -30,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
          >
            IsaacDev<span className="text-primary">.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="text-gray-300 text-lg md:text-2xl mt-3 font-medium"
          >
            Web Developer • Virtual Assistant • IT Graduate
          </motion.p>

          {/* Name */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="text-white text-3xl md:text-5xl font-bold mt-6"
          >
            Hi, I'm{" "}
            <span className="text-primary">
              Isaac
            </span>
          </motion.h2>

          {/* Profile Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
            className="mt-8"
          >
            <img
              src={about}
              alt="Isaac"
              className="
                w-48 h-48
                md:w-64 md:h-64
                object-cover
                rounded-full
                border-2 border-primary
                shadow-[0_0_40px_rgba(59,130,246,0.35)]
              "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;