"use client";
import React from "react";
import Typography from "../shared/typography";
import mentorsImg from "@/public/assets/images/mentorsImg.png";
import Image from "next/image";
import { Button } from "../ui/button";

// Home mentorship section component - optimized height with perfect image display
function HomeMentorship() {
  return (
    <div className="mentor-section w-full sm:py-12 py-8">
      <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8">
        {/* Header text section */}
        <div className="sm:w-[1000px] w-full mx-auto flex flex-col gap-2 text-white">
          <Typography typo="body-large-medium" className="">
            MENTORSHIP
          </Typography>
          <Typography typo="header-1-medium" className="sm:!leading-[3.5rem]">
            Mentor Africa&apos;s next business leaders
          </Typography>
        </div>

        {/* Mentors image container - maintains aspect ratio */}
        <div className="relative xl:w-[90%] w-full mx-auto aspect-[16/7] sm:aspect-[21/8] rounded-lg overflow-hidden">
          <Image
            src={mentorsImg}
            alt="Mentors image"
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 90vw, 100vw"
            priority
          />
        </div>

        {/* CTA button */}
        <Button variant="primary" className="w-fit mx-auto">
          Become a TEF Mentor
        </Button>
      </section>
    </div>
  );
}

export default HomeMentorship;
