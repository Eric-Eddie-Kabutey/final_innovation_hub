"use client";
import React from "react";
import Typography from "../shared/typography";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import levelingImg from "@/public/assets/images/about_leveling.jpg";

function AboutUsMain() {
  return (
    <div className="w-full py-20">
      <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col items-center gap-6">
        <div className="max-w-[800px] flex flex-col items-center gap-2">
          <Typography
            typo="body-large-medium"
            className="text-app-primary uppercase"
          >
            About us
          </Typography>
          <Typography typo="header-2-medium" className="text-center">
            We are <span className="text-app-primary">leveling</span>the playing
            field for every ambitious dreamer
          </Typography>
          <Button variant="ghost" className=" flex !items-center">
            Learn more
            <ChevronRight size={25} color="#fe0000" />
          </Button>
        </div>
        <div className="lg:w-[800px] w-full h-fit">
          <Image
            src={levelingImg}
            alt="Leveling image"
            className="w-full h-full rounded-2xl"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutUsMain;
