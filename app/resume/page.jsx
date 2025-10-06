"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
} from "react-icons/fa";
import { BsBadge3dFill } from "react-icons/bs";
import { IoMdConstruct } from "react-icons/io";
import { SiAutocad } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaCarAlt } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const about = {
  title: "About Me",
  description:
    "I am a passionate Mechatronics Engineer specializing in the fusion of mechanical design, electronics, and control systems. With a strong focus on integrating hardware and software, I thrive in creating dynamic, automated solutions that push the boundaries of innovation. My expertise lies in designing efficient systems, developing precise control mechanisms, and leveraging cutting-edge technologies to solve complex engineering challenges. Committed to continuous learning, I aim to drive impactful advancements in automation and intelligent systems.",
  infos: [
    {
      fieldName: "Name",
      fieldValue: "Ahmed Ayman",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+20) 01009115117",
    },
    {
      fieldName: "Experiance",
      fieldValue: "Projects Experience",
    },
    {
      fieldName: "Email",
      fieldValue: "ahmadayman000@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, English",
    },
  ],
};
const Trianing = {
  title: "Training",
  Description:
    "Gained diverse training experiences that enhanced my technical expertise and practical problem-solving skills. These opportunities provided valuable insights into real-world applications, strengthening my ability to innovate and adapt to complex challenges in engineering and technology.",
  info: [
    {
      name: "Kafr-El bateekh Electricity company ",
      Description: "Electricity generation",
      Duration: "2021",
    },
    {
      name: "AI Watanya Car Services ",
      Description: "Cars maintenance ",
      Duration: "2022",
    },
    {
      name: "Zewail City University ",
      Description: "Artificial intelligence and applications",
      Duration: "2023",
    },
    {
      name: "Arab Construction",
      Description: "Hydro mechanics ",
      Duration: "2023",
    },
    {
      name: "Water Treatment",
      Description: "Water and Wastewater Maintenance Trainee",
      Duration: "2025",
    },
  ],
};

const Education = {
  title: "Education",
  description:
    'A Mechatronics Engineering graduate from Horus University, Egypt (2019-2024), with a "Very Good" grade. Completed specialized training in Artificial Intelligence and its applications at Zewail City University (August 2023) and Hydro Mechanics at Arab Construction (July 2023). Excels in combining technical expertise with innovative solutions, demonstrated through a distinguished graduation project titled "Generation of Green Hydrogen using Solar Panels," earning an "Excellent" grade. Passionate about sustainable technologies and cutting-edge advancements in engineering.',
  edus: [
    {
      name: "Horus University",
      grade: "Very Good",
      duration: "2019-2024",
      description: "Mechatronics Engineering",
    },

    {
      name: "Comptia A+ ",
      grade: "Very Good",
      duration: "9/2024 - 10/2024",
      description: "C building and troubleshooting also software installation",
    },
  ],
};
const Skills = {
  title: "My skills",
  description: "",
  SkillList: [
    {
      icon: <BsBadge3dFill />,
      name: "3D Designing",
    },
    {
      icon: <IoMdConstruct />,
      name: "CNC simulator",
    },
    {
      icon: <SiAutocad />,
      name: "2D (Autocad) ",
    },
    {
      icon: <AiOutlineLaptop />,
      name: "PC Expertise",
    },
    {
      icon: <GiWaterDrop />,
      name: "Hydro Training",
    },
    {
      icon: <FaCarAlt />,
      name: "Auto Maintenance",
    },
    {
      icon: <FaJava />,
      name: "node.js",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4l font-bold">{Education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {Education.description}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
                    {Education.edus.map((edu, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2323] h-auto py-6 px-10 rounded-xl flex flex-col justify-between gap-4 md:px-6 md:py-5"
                        >
                          {/* Top Section: Duration and Description */}
                          <div className="flex flex-wrap justify-between items-center w-full">
                            <span className="text-sm text-gray-400 whitespace-nowrap md:text-xs">
                              {edu.duration}
                            </span>
                            <h3 className="font-semibold text-lg sm:text-base text-gray-200 md:text-sm">
                              {edu.description}
                            </h3>
                          </div>

                          {/* Bottom Section: Name and Grade */}
                          <div className="mt-3 flex flex-wrap justify-between items-start w-full gap-2">
                            {/* Name with Split on Comma */}
                            <p className="text-sm lg:text-base font-bold text-white/80 md:text-sm">
                              {typeof window !== "undefined" &&
                              window.innerWidth >= 768 &&
                              edu.name.includes(",")
                                ? edu.name.split(",").map((part, i) => (
                                    <span
                                      key={i}
                                      className="block md:inline text-start"
                                    >
                                      {part.trim()}
                                      {i < edu.name.split(",").length - 1 &&
                                        ", "}
                                    </span>
                                  ))
                                : edu.name}
                            </p>

                            {/* Grade */}
                            <div className="text-sm text-gray-400 md:text-xs text-start">
                              {typeof edu.grade === "string"
                                ? edu.grade
                                    .split(",")
                                    .map((line, i) => <p key={i}>{line}</p>)
                                : ""}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="training" className="w-full h-full">
              <div className="flex flex-col gap-10 p-6  rounded-lg shadow-xl">
                {/* Header Section */}
                <div className="flex flex-col gap-6 text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-white">
                    {Trianing.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
                    {Trianing.Description}
                  </p>
                </div>

                {/* List Section */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Trianing.info.map((oneInfo, index) => (
                    <li
                      key={index}
                      className="bg-[#232323] rounded-lg p-6 shadow-md flex flex-col gap-4 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center justify-center text-6xl text-white group-hover:text-accent transition-all duration-300">
                        {oneInfo.icon ? (
                          <span className="flex justify-center items-center">
                            {oneInfo.icon}
                          </span>
                        ) : (
                          <span>{oneInfo.name.charAt(0).toUpperCase()}</span>
                        )}
                      </div>
                      <div className="text-white text-center xl:text-left mt-auto">
                        <h4 className="text-2xl font-semibold capitalize">
                          {oneInfo.name}
                        </h4>
                        <p className="text-white/60 text-sm">
                          {oneInfo.Description}
                        </p>
                        {oneInfo.Duration && (
                          <p className="text-accent text-sm font-medium mt-4">
                            Duration: {oneInfo.Duration}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{Skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {Skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap[30px] gap-4 xl:gap-[30px]">
                  {Skills.SkillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#2323] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="aboutme"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.infos.map((info, index) => (
                    <li
                      className="flex items-center justify-center xl:justify-start gap-4"
                      key={index}
                    >
                      <span className="text-white/60">{info.fieldName}</span>
                      <span className="text-sm text-white font-medium whitespace-nowrap overflow-ellipsis overflow-hidden max-w-full">
                        {info.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
