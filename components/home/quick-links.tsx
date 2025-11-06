"use client";
import React from "react";
import Typography from "../shared/typography";
import { Card } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const quick_links = [
  {
    id: "1",
    title: "Apply for Programme",
  },
  {
    id: "2",
    title: "Become a Mentor",
  },
];

function QuickLinks() {
  return (
    <div className="w-full py-20">
      <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-24">
        <div className="lg:w-[80%] w-full mx-auto flex flex-col gap-12">
          <Typography
            typo="body-large-medium"
            className="text-app-primary uppercase text-center"
          >
            Quick Links
          </Typography>
          <div className="w-full grid sm:grid-cols-2 lg:gap-12 gap-6">
            {quick_links.map((data) => (
              <Card
                key={data.id}
                className="w-full p-8 flex flex-col justify-between gap-6"
              >
                <Typography typo="header-2-medium" className="text-gray-600">
                  {data.title}
                </Typography>
                <button className="w-fit flex items-center gap-2    ">
                  Apply Now
                  <ArrowRight color="#fe0000" size={18} />
                </button>
              </Card>
            ))}
          </div>
        </div>
        <section className="newsletter_bg w-full px-12 py-16 rounded-2xl">
          <div className="lg:w-[60%] md:w-[80%] w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-white">
              <Typography typo="header-3-medium">
                Stay up to date with TEFConnect
              </Typography>
              <Typography typo="body-medium-regular" className="text-gray-200">
                We will keep you updated with opportunities and events
              </Typography>
            </div>
            <form className="h-fit flex items-center flex-wrap gap-4  ">
              <div className="flex-1 flex flex-col justify-end gap-2 text-white">
                <label>First name</label>
                <input className="p-3 bg-white rounded-[1.2rem] text-black outline-none focus:outline-none focus:ring-0" />
              </div>
              <div className="flex-1 flex flex-col gap-2 text-white">
                <label>Email</label>
                <input className="p-3 bg-white rounded-[1.2rem] text-black outline-none focus:outline-none focus:ring-0" />
              </div>
              <div className="h-full flex flex-col gap-2 md:pt-7">
                <Button variant="primary" className="w-fit px-10">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}

export default QuickLinks;
