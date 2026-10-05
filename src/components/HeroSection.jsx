import React from 'react';
import { Download } from 'lucide-react';
import hero from '../assets/hero1.png';
import resume from '../assets/resumee.pdf';

const HeroSection = () => {
  return (
    <section className="relative w-full" data-aos="zoom-in-up">
      {/* Background Glow */}
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div className="h-24 w-2/3 bg-linear-to-br from-[#0c7fac] blur-2xl invisible opacity-40"></div>
        <div className="h-20 w-3/5 bg-linear-to-r from-[#289eff] opacity-40 blur-2xl"></div>
      </div>

      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">

          {/* Content */}
          <div className="lg:py-6">
            <div className="text-center lg:text-left">
              <h1 className="pt-4 font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-200">
                  Isaac
                </span>
                .
              </h1>
            </div>

            <p className="pt-8 text-center lg:text-left mx-auto max-w-xl text-gray-600 dark:text-gray-300">
              IT Graduate specializing in Network Administration, Freelance Web
              Developer, Virtual Assistant, and Musician. I combine technical
              expertise, creativity, and problem-solving skills to help
              businesses grow and succeed online.
            </p>

            <div className="flex items-center gap-4 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">

              {/* Hire Me Button */}
              <button className="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                <span
                  className="absolute inset-0 rounded-full bg-primary border-2 border-transparent
                  group-hover:scale-105 transition-all duration-300"
                ></span>

                <span className="relative flex items-center justify-center text-white font-medium">
                  Hire Me
                </span>
              </button>

              {/* Download Resume Button */}
              <a
                href={resume}
                download="Isaac-Apolinar-Resume.pdf"
                className="
                  border border-primary
                  px-6 md:px-7 py-3
                  rounded-full
                  flex items-center justify-center
                  gap-2
                  text-primary
                  hover:bg-primary/10
                  hover:scale-105
                  transition-all duration-300
                "
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:h-full md:flex">
            <div className="flex w-full h-100 min-h-96 lg:min-h-[none] lg:w-full lg:h-full items-center relative">

              {/* Glow */}
              <div
                className="
                  absolute z-0 top-1/2 -translate-y-1/2
                  w-5/6 right-0
                  h-[calc(80%+20px)]
                  bg-linear-to-tr
                  opacity-25
                  from-[#0c64ac]
                  to-primary
                  blur-2xl
                "
              ></div>

              {/* Image Container */}
              <div
                className="
                  absolute h-full z-10 p-2
                  -translate-y-1/2 top-1/2
                  lg:right-3 md:right-40 sm:right-16
                  rounded-[30%_70%_70%_30%/30%_30%_70%_70%]
                  shadow-lg border border-primary
                "
              >
                <img
                  src={hero}
                  alt="Hero pic"
                  width="500"
                  height="auto"
                  loading="lazy"
                  className="
                    w-full h-full object-cover
                    rounded-[30%_70%_70%_30%/30%_30%_70%_70%]
                  "
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;