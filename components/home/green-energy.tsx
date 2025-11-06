"use client";
import React from "react";
import performanceImg from "@/public/assets/images/performanceImg.png";
import Image from "next/image";
import Typography from "../shared/typography";
import { Drop, Lightbulb } from "@phosphor-icons/react";

// File location: app/components/home/GreenEnergy.tsx (or your components directory)
// This component displays the green energy/innovation hub section

function GreenEnergy() {
  return (
    <div id="green-energy" className="w-full md:py-16 py-12">
      <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex lg:flex-row flex-col justify-between gap-20">
        {/* Image section - hidden on mobile, visible on desktop */}
        <div className="md:flex hidden flex-1 relative h-[450px]">
          {/* Image container - full width on mobile, 80% on desktop */}
          <div className="w-[80%] h-full">
            <Image
              src={performanceImg}
              alt="Performance image"
              className="w-full md:h-full h-auto object-cover rounded-[2rem]"
            />
          </div>
          {/* Performance badge - hidden on small mobile */}
          <div className="xs:block hidden w-[350px] absolute xl:-bottom-[5rem] -bottom-[2rem] right-0 p-12 bg-[#ff0000]/40 rounded-xl">
            <Typography typo="header-3-medium" className="text-white">
              Performance, Quality and Reliability
            </Typography>
          </div>
        </div>

        {/* Content section */}
        <div className="lg:w-[45%] md:w-[70%] w-full flex flex-col gap-16">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            {/* "welcome to" text */}
            <Typography typo="body-medium-medium">welcome to</Typography>

            {/* Main heading - custom mobile font */}
            <h2 className="md:hidden block text-[2rem] leading-tight font-bold tracking-tight">
              Coders Clutch Innovation Hub
            </h2>
            <Typography
              typo="header-1-semibold"
              className="hidden md:block 2xl:!leading-none !leading-tight !font-bold"
            >
              Coders Clutch Innovation Hub
            </Typography>

            {/* Image placement for mobile - positioned after heading */}
            <div className="md:hidden block relative w-full mb-4">
              <div className="w-full h-auto">
                <Image
                  src={performanceImg}
                  alt="Performance image"
                  className="w-full h-auto object-cover rounded-[2rem]"
                />
              </div>
            </div>

            {/* Description text */}
            <Typography typo="body-large-regular" className="text-gray-500">
              We provides a collaborative space where creative thinkers,
              startups, and industry experts unite to solve **today&apos;s**
              most pressing challenges , from sustainability to emerging tech.
            </Typography>
          </div>

          {/* Stats/Features section - stacked on mobile */}
          <div className="w-full flex md:flex-row flex-col justify-between md:gap-5 gap-8">
            {/* First stat */}
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="p-3 border border-red-300 rounded-full">
                  <Drop size={20} />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography typo="header-5-semibold" className="!font-bold">
                    3,000 Tonnes CO2
                  </Typography>
                </div>
              </div>
              <Typography
                typo="body-medium-light"
                className="md:line-clamp-1 line-clamp-none"
              >
                RANA is building a brighter future for you, we provide an Energy
                as a service ecosystem that is reliable, hassle-free, and clean
              </Typography>
            </div>

            {/* Second stat */}
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="p-3 border border-red-300 rounded-full">
                  <Lightbulb size={20} />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography typo="header-5-semibold" className="!font-bold">
                    3,000 Tonnes CO2
                  </Typography>
                </div>
              </div>
              <Typography
                typo="body-medium-light"
                className="md:line-clamp-1 line-clamp-none"
              >
                RANA is building a brighter future for you, we provide an Energy
                as a service ecosystem that is reliable, hassle-free, and clean
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GreenEnergy;
