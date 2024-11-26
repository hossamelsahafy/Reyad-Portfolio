"use client";
import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/workSliderBtns";
const projects = [
  {
    category: "Graduation Project",
    title: "Green Hydrogen Project",
    description:
      "The Green Hydrogen Project focuses on producing hydrogen using renewable energy like solar and wind, offering a clean alternative to fossil fuels. By employing electrolysis, the project aims to create a sustainable energy source with minimal carbon emissions. Key areas include energy storage, safe hydrogen distribution, and applications in transportation, industry, and power. This initiative supports global efforts to reduce greenhouse gas emissions and achieve a carbon-neutral future",
    images: "/Project.jpg",
  },
];
const Work = () => {
  const [project, setproject] = useState(projects[0] || {});
  const handleSlideChange = (swiper) => {
    const current = swiper.activeIndex;
    if (projects[current]) {
      setproject(projects[current]);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-lg font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-sm">
                {project.description?.split(". ").map((sentence, index) => (
                  <span key={index} className="block mb-2">
                    {sentence}.
                  </span>
                ))}
              </p>
              <div className="border border-white/20" />
              <div className="flex items-center gap-4">
                <Link href={project.live || "#"}>
                  <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] flex items-center">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] xl:h-[500px] md:h-[500px] relative group flex justify-center items-center bg-primary rounded-[8px] overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300 z-10 pointer-events-none rounded-[8px]"></div>
                    <Image
                      src={project.images || "/default.jpg"}
                      alt={project.title || "Project"}
                      className="w-full h-full pointer-events-auto rounded-[8px]"
                      width={500}
                      height={500}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
              {/* Add Navigation or Buttons if required */}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
