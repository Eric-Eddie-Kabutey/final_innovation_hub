"use client";
import Typography from "../shared/typography";
import { aboutPillars } from "@/constants";
import Image from "next/image";

function AboutPillars() {
  return (
    <div className="w-full py-8 md:py-16">
      <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-6 md:gap-8">
        <Typography typo="header-3-semibold">Our Pillars</Typography>
        <div className="w-full py-4 md:py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {aboutPillars.map((data, index) => (
            <div
              key={data.id}
              className="py-12 md:py-16 lg:py-24 px-6 md:px-8 flex flex-col gap-6 md:gap-8 border"
            >
              <div className="w-12 md:w-16 h-fit mx-auto">
                <Image
                  src={data.icon || "/placeholder.svg"}
                  alt={`Pillars ${index + 1}`}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center gap-3 md:gap-4">
                <Typography typo="header-5-semibold">{data.title}</Typography>
                <Typography typo="body-large-regular" className="text-center">
                  {data.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPillars;
