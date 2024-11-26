"use client";
import { delay, easeIn, motion } from "framer-motion";
import Image from "next/image";
import PF from "../public/PF.jpg";
const Photo = () => {
  return (
    <div className="relative flex justify-center items-center w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]">
      {/* Animated Photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          <Image
            src="/PF.jpg"
            quality={100}
            fill
            sizes="(max-width: 1280px) 300px, 400px"
            alt="Profile Picture"
            className="object-cover rounded-full p-[10px]"
          />
        </div>
      </motion.div>

      <motion.svg
        className="absolute -inset-[7px] xl:-inset-[10px]"
        width="105%"
        height="105%"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.circle
          cx="260"
          cy="260"
          r="250"
          stroke="url(#gradientStroke)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="300 100"
          strokeDashoffset="0"
          initial={{
            rotate: 0,
            opacity: 0.8,
          }}
          animate={{
            rotate: 360,
            strokeDashoffset: [0, -400],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <defs>
          <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00ff99" />
            <stop offset="50%" stopColor="#0099ff" />
            <stop offset="100%" stopColor="#ff0099" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default Photo;
