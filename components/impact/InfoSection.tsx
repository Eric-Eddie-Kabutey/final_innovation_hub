"use client";

import type { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button"; 
import Typography from "@/components/shared/typography"; // Assuming this is your custom component
import { ChevronRight } from "lucide-react";

// Props are simplified: imageSide is no longer needed
interface InfoSectionProps {
  title: string;
  subtitle: string;
  text: ReactNode;
  link: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
}

const InfoSection: FC<InfoSectionProps> = ({
  title,
  subtitle,
  text,
  link,
  imageSrc,
  imageAlt,
}) => {
    
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 30, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden"> {/* Added overflow-hidden */}
      <div className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          // Changed to a flex container for better alignment control
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
        >
          {/* --- Left Column: Text Content --- */}
          <motion.div
            variants={textVariants}
            className="lg:w-1/2 w-full" // Define width
          >
            <div className='flex flex-col gap-4'>
              <div className='pt-4 flex flex-col gap-2'>
                <Typography typo='body-large-medium' className='text-app-primary uppercase'>
                  {title}
                </Typography>
                <Typography typo='header-1-medium' className='xl:!leading-[4.5rem] !leading-[3rem]'>
                  {subtitle}
                </Typography>
              </div>
              <div className='flex flex-col gap-3'>
                <Typography>
                  {text}
                </Typography>
                <Button asChild variant='outline' className='w-fit flex justify-start hover:bg-transparent border-none p-0 text-red-600 hover:text-red-700 font-semibold'>
                  <Link href={link}>
                    Learn more
                    <ChevronRight size={25} />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* --- Right Column: Image --- */}
          <motion.div
            variants={imageVariants}
            // Use flexbox to position the image to the bottom right
            className="lg:w-1/2 w-full flex justify-end items-end"
          >
            {/* The image is now smaller and has a fixed aspect ratio */}
            <div className="relative w-full max-w-[262px] lg:max-w-[322px] aspect-[4/3] -mb-56">
                <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="rounded-2xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;