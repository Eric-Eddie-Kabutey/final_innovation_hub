"use client";
import Typography from "../shared/typography";

function VisionMission() {
  return (
    <div className="w-full py-8 md:py-16">
      <section className="max-container 2xl:w-[85%] lg:w-[90%] w-[95%] mx-auto flex flex-col gap-8 md:gap-12">
        <div className="w-full lg:w-[80%] xl:w-[70%] flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8 lg:gap-12">
          <Typography
            typo="header-4-semibold"
            className="w-full md:w-[35%] lg:w-[30%] shrink-0"
          >
            Our Mission
          </Typography>
          <div className="flex-1 flex flex-col gap-2 md:gap-3 text-gray-600">
            <Typography typo="body-large-regular">
              To build a brighter and more sustainable future by accelerating
              the energy transition for Africans, ultimately replacing expensive
              and unreliable generators with our solar energy solutions.
            </Typography>
          </div>
        </div>
        <div className="w-full lg:w-[80%] xl:w-[70%] flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8 lg:gap-12">
          <Typography
            typo="header-4-semibold"
            className="w-full md:w-[35%] lg:w-[30%] shrink-0"
          >
            Our Vision
          </Typography>
          <div className="flex-1 flex flex-col gap-3 md:gap-4 text-gray-600">
            <Typography typo="body-large-regular">
              Rana is Driving the Green Energy Revolution in Nigeria with a view
              of spreading the movement across Africa.
            </Typography>
            <Typography typo="body-large-regular">
              We believe that energy is an essential service and at Rana,
              through our energy-as-a-service solution, we are building a
              brighter and more sustainable future.
            </Typography>
            <Typography typo="body-large-regular">
              We aim to drive the deployment of 100 MW of solar energy systems
              across Africa by the end of 2028, transforming the lives of
              millions and contributing significantly to a sustainable future
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisionMission;
