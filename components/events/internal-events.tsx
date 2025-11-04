"use client";

import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

// --- Define the shape of our event card data ---
interface EventCardData {
  number: string;
  title: string;
  imageSrc: string;
}

// --- Data for the event cards ---
const eventsData: EventCardData[] = [
  {
    number: "01",
    title: "Monthly Demo Days",
    imageSrc: "/assets/images/events/internal-event1.webp",
  },
  {
    number: "02",
    title: "Founder Meetups",
    imageSrc: "/assets/images/events/internal-event2.webp",
  },
  {
    number: "03",
    title: "Innovation Conferences",
    imageSrc: "/assets/images/events/internal-event3.webp",
  },
  {
    number: "04",
    title: "Skill-Building Workshops",
    imageSrc: "/assets/images/events/internal-event4.webp",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const InternalEvents: FC = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          id="internal-events"
      className="bg-[#53565a] text-white py-20 md:py-28"
    >
      <div className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto">
        {/* --- Header Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div variants={itemVariants}>
            <p className="text-white font-semibold uppercase tracking-wider">
              Events
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
              Learn. Connect.
              <br />
              Innovate.
            </h2>
          </motion.div>
          <motion.div variants={itemVariants} className="md:justify-self-end">
            <p className="max-w-md text-gray-300">
              From pitch nights to masterclasses, our events are designed to
              inspire learning and unlock opportunities for startups.
            </p>
            <Button asChild size="lg" className="mt-6 bg-app-primary text-white font-bold hover:bg-red-700 rounded-lg px-6 py-3 transition-transform hover:scale-105">
              <Link href="/events">
                View Upcoming Events
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* --- Event Cards Grid --- */}
        <motion.div
          variants={sectionVariants} // Nested stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-700 rounded-2xl overflow-hidden"
        >
          {eventsData.map((item) => (
            <motion.div
              key={item.number}
              variants={itemVariants}
              className="bg-white text-black p-8 border-b border-r border-gray-200 flex flex-col h-full min-h-[350px]"
            >
              <p className="text-lg font-mono text-gray-500">{item.number}</p>
              
              {/* Image in the middle */}
              <div className="flex-grow flex items-center justify-center my-6">
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-fit"
                    sizes="128px"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold mt-auto">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default InternalEvents;