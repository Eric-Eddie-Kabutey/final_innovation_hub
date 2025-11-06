"use client";
// Removed useRef import: import React, { useRef } from "react";
import React from "react";
import Typography from "../shared/typography";
import { Button } from "../ui/button";
import homeImg from "@/public/assets/images/home_img.png";
import Image from "next/image";
import { ArrowDown, Play } from "lucide-react";

// File location: app/components/home/HomeHero.tsx (or your components directory)
// This component renders the hero section on the home page

function HomeHero() {
  return (
    <div className="w-full py-20">
      <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center lg:gap-20 gap-5">
        {/* Left content section - text and buttons */}
        <div className="lg:w-[40%] md:w-[50%] w-full flex flex-col justify-between md:gap-10 gap-6">
          <div className="flex flex-col md:gap-4 gap-3">
            {/* Main heading - no line breaks on mobile, tighter spacing, custom mobile font */}
            <h1 className="md:hidden block text-[2.5rem] leading-[1.1] font-extrabold tracking-tight">
              Naturing Ideas Into Practical Solutions
            </h1>
            <Typography
              typo="header-1-semibold"
              className="hidden md:block 2xl:!leading-none !leading-tight !font-bold"
            >
              Naturing Ideas
              <br />
              Into Practical
              <br />
              Solutions
            </Typography>

            {/* Description text - full width on mobile with minimal spacing, smaller font */}
            <Typography
              typo="body-large-light"
              className="!leading-relaxed md:text-[inherit] !text-base"
            >
              We connect visionaries, innovators, and entrepreneurs with the
              tools, mentors, and opportunities they need to make an impact in
              Africa and Globally.
            </Typography>

            {/* Buttons section - now appears before image on mobile */}
            <div className="flex items-center gap-4 md:mt-0 mt-2">
              <Button
                variant="primary"
                onClick={() => {
                  document.getElementById("green-energy")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="w-fit px-8 py-4"
              >
                Get Started
              </Button>

              <Button variant="outline" className="w-fit px-8 py-4">
                Contact Us
              </Button>
            </div>

            {/* Mobile image section - placed after buttons */}
            <div className="md:hidden block relative mt-6">
              <div className="w-full h-fit">
                <Image
                  src={homeImg}
                  alt="home image"
                  className="w-full h-full rounded-[4rem]"
                />
              </div>
              {/* Video play button overlay */}
              <button className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 w-[280px] p-6 bg-white/60 rounded-full">
                <div className="w-fit p-2 bg-app-primary rounded-full flex-shrink-0">
                  <Play color="#fff" />
                </div>
                <Typography typo="header-6-medium" className="text-left">
                  Shapping the Future of Renewable Energy
                </Typography>
              </button>
            </div>
          </div>

          {/* Arrow down indicator - desktop only */}
          <div className="text-gray-400 md:block hidden">
            <ArrowDown size={60} />
          </div>
        </div>

        {/* Desktop image section - hidden on mobile */}
        <div className="md:block hidden flex-1 relative">
          <div className="w-full h-fit">
            <Image
              src={homeImg}
              alt="home image"
              className="w-full h-full rounded-[4rem]"
            />
          </div>
          {/* Video play button overlay for desktop */}
          <button className="absolute bottom-8 lg:left-[30%] flex items-center gap-2 lg:w-[300px] w-[300px] p-6 bg-white/60 rounded-full">
            <div className="w-fit p-2 bg-app-primary rounded-full">
              <Play color="#fff" />
            </div>
            <Typography typo="header-6-medium">
              Shapping the Future of Renewable Energy
            </Typography>
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomeHero;
