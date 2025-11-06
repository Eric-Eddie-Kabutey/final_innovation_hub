"use client";
import React, { useState, useRef } from "react";
import Typography from "../shared/typography";
import startupInnovation from "@/public/assets/icons/startup-incubation.png";
import innovationLabs from "@/public/assets/icons/innovation-labs.png";
import corporateInnovationPrograms from "@/public/assets/icons/corporate-innovation-programs.png";
import communityAndEvents from "@/public/assets/icons/community-and-events.png";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

// File location: app/components/home/OurServices.tsx (or your components directory)
// This component displays the services section with mobile slider functionality

const energy_services = [
  {
    id: "1",
    icon: startupInnovation,
    title: "Startup Incubation",
    description: `From idea validation to product launch, we offer tailored mentorship, funding guidance, and workspace to help your startup thrive.`,
  },
  {
    id: "2",
    icon: innovationLabs,
    title: "Innovation Labs",
    description: `Hands-on access to cutting-edge tools, prototyping equipment, and collaborative workshops to accelerate your R&D process.`,
  },
  {
    id: "3",
    icon: corporateInnovationPrograms,
    title: "Corporate Innovation Programs",
    description: `Custom programs to help established companies adapt, innovate, and stay competitive in a fast-changing world.`,
  },
  {
    id: "4",
    icon: communityAndEvents,
    title: "Community & Events",
    description: `Meet investors, industry leaders, and like-minded innovators through curated networking events and pitch nights.`,
  },
];

function OurServices() {
  // Track the selected card for hover effects
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Track current slide index for mobile slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Track whether "See More" is clicked (shows all cards on mobile)
  const [showAll, setShowAll] = useState(false);

  // More responsive swipe handlers for mobile slider
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartRef = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.targetTouches[0].clientX;
    const offset = currentX - dragStartRef.current;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const swipeThreshold = 50;

    if (
      dragOffset < -swipeThreshold &&
      currentSlide < energy_services.length - 1
    ) {
      setCurrentSlide((prev) => prev + 1);
    } else if (dragOffset > swipeThreshold && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }

    setDragOffset(0);
  };

  // Handle dot navigation click
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full sm:pt-32 pt-16 sm:pb-16 pb-10">
      <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8">
        {/* Header section */}
        <div className="flex flex-col gap-4">
          <Typography typo="body-medium-medium" className="uppercase">
            Our Stand & Goals
          </Typography>

          {/* Title with custom mobile font and See More button */}
          <div className="flex md:flex-row flex-col md:items-center items-start justify-between md:gap-12 gap-4">
            {/* Desktop title */}
            <Typography
              typo="header-1-medium"
              className="hidden md:block max-w-[600px] !leading-[4rem]"
            >
              Glance through <br /> What We{" "}
              <span className="text-app-primary">Exist</span> For
            </Typography>

            {/* Mobile title with custom font */}
            <h2 className="md:hidden block text-[2rem] leading-tight font-bold max-w-[600px]">
              Glance through What We{" "}
              <span className="text-app-primary">Exist</span> For
            </h2>

            {/* See More button - only visible on mobile when not showing all */}
            {!showAll && (
              <Button
                onClick={() => setShowAll(true)}
                variant="outline"
                className="md:hidden flex w-fit justify-start hover:bg-transparent"
              >
                See more
                <ChevronRight size={25} color="#fe0000" />
              </Button>
            )}
          </div>
        </div>

        {/* Cards section - slider on mobile, grid on desktop */}
        <div className="w-full xl:py-8 sm:py-6 xs:py-4 py-8">
          {/* Desktop grid view - always visible on md+ screens */}
          <div className="hidden md:grid lg:grid-cols-4 xs:grid-cols-2 gap-6">
            {energy_services.map((data, index) => (
              <Card
                key={data.id}
                onClick={() => setSelectedId(data.id)}
                className={`xl:py-6 py-4 xl:px-2 flex flex-col items-center sm:gap-3 xs:gap-0 gap-4 bg-[#f5f3ed] border-2 transition-all duration-300 ease-out cursor-pointer 
                   border-transparent hover:border-app-primary hover:shadow-lg hover:scale-[1.02]
                  ${
                    selectedId === data.id
                      ? "border-app-primary shadow-lg scale-[1.02]"
                      : ""
                  }`}
              >
                <CardHeader>
                  <Image
                    src={data.icon}
                    alt={`Service ${index + 1}`}
                    className="w-16 h-fit"
                  />
                </CardHeader>

                <CardContent className="flex flex-col items-center gap-1">
                  <Typography typo="header-6-semibold" className="font-bold">
                    {data.title}
                  </Typography>
                  <Typography
                    typo="body-medium-regular"
                    className="text-center text-gray-500"
                  >
                    {data.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile view - slider or grid based on showAll state */}
          <div className="md:hidden block">
            {showAll ? (
              // Show all cards in grid when "See More" is clicked
              <div className="grid xs:grid-cols-2 grid-cols-1 gap-6">
                {energy_services.map((data, index) => (
                  <Card
                    key={data.id}
                    onClick={() => setSelectedId(data.id)}
                    className={`py-4 px-2 flex flex-col items-center gap-4 bg-[#f5f3ed] border-2 transition-all duration-300 ease-out cursor-pointer 
                       border-transparent hover:border-app-primary hover:shadow-lg hover:scale-[1.02]
                      ${
                        selectedId === data.id
                          ? "border-app-primary shadow-lg scale-[1.02]"
                          : ""
                      }`}
                  >
                    <CardHeader>
                      <Image
                        src={data.icon}
                        alt={`Service ${index + 1}`}
                        className="w-16 h-fit"
                      />
                    </CardHeader>

                    <CardContent className="flex flex-col items-center gap-1">
                      <Typography
                        typo="header-6-semibold"
                        className="font-bold"
                      >
                        {data.title}
                      </Typography>
                      <Typography
                        typo="body-medium-regular"
                        className="text-center text-gray-500"
                      >
                        {data.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              // Slider view - default mobile view
              <div className="flex flex-col gap-6">
                {/* Slider container */}
                <div className="overflow-hidden">
                  <div
                    ref={sliderRef}
                    className={`flex ${
                      !isDragging
                        ? "transition-transform duration-500 ease-out"
                        : ""
                    }`}
                    style={{
                      transform: `translateX(calc(-${
                        currentSlide * 100
                      }% + ${dragOffset}px))`,
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {energy_services.map((data, index) => (
                      <div key={data.id} className="w-full flex-shrink-0 px-2">
                        <Card
                          onClick={() => setSelectedId(data.id)}
                          className={`py-4 px-2 flex flex-col items-center gap-4 bg-[#f5f3ed] border-2 transition-all duration-300 ease-out cursor-pointer 
                             border-transparent hover:border-app-primary hover:shadow-lg
                            ${
                              selectedId === data.id
                                ? "border-app-primary shadow-lg"
                                : ""
                            }`}
                        >
                          <CardHeader>
                            <Image
                              src={data.icon}
                              alt={`Service ${index + 1}`}
                              className="w-16 h-fit"
                            />
                          </CardHeader>

                          <CardContent className="flex flex-col items-center gap-1">
                            <Typography
                              typo="header-6-semibold"
                              className="font-bold"
                            >
                              {data.title}
                            </Typography>
                            <Typography
                              typo="body-medium-regular"
                              className="text-center text-gray-500"
                            >
                              {data.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dot navigation */}
                <div className="flex justify-center gap-2">
                  {energy_services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-app-primary w-8"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Explore button */}
        <Link href="/our-pillars" className="w-fit mx-auto">
          <Button variant="primary">
            Explore Our Pillars
            <ArrowRight />
          </Button>
        </Link>
      </section>
    </div>
  );
}

export default OurServices;
