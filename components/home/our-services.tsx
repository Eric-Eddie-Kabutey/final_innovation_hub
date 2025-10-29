'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography';
import startupInnovation from "@/public/assets/icons/startup-incubation.png"
import innovationLabs from "@/public/assets/icons/innovation-labs.png"
import corporateInnovationPrograms from "@/public/assets/icons/corporate-innovation-programs.png"
import communityAndEvents from "@/public/assets/icons/community-and-events.png"
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

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
]

function OurServices() {
  // ✅ Track the selected card — first one is selected initially
  const [selectedId, setSelectedId] = useState(energy_services[0].id)

  return (
    <div className='w-full sm:pt-32 pt-16 sm:pb-16 pb-10'>
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <Typography
            typo="body-medium-medium"
            className='uppercase'
          >
            Our Stand & Goals
          </Typography>

          <div className='w-[70%] flex gap-12'>
            <Typography
              typo="header-1-medium"
              className='max-w-[300px] !leading-[4rem]'
            >
              Glance through What We Exist For
            </Typography>
          </div>
        </div>

        <div className='w-full xl:py-8 sm:py-6 xs:py-4 py-8 grid lg:grid-cols-4 xs:grid-cols-2 gap-6'>
          {energy_services.map((data, index) => (
            <Card
              key={data.id}
              onClick={() => setSelectedId(data.id)}
              className={`xl:py-6 py-4 xl:px-2 flex flex-col items-center sm:gap-3 xs:gap-0 gap-4 bg-[#f5f3ed] border-2 transition-all duration-300 ease-out cursor-pointer 
                ${selectedId === data.id ? 'border-app-primary shadow-lg scale-[1.02]' : 'border-transparent hover:shadow-lg'}
              `}
            >
              <CardHeader>
                <Image
                  src={data.icon}
                  alt={`Service ${index + 1}`}
                  className='w-16 h-fit'
                />
              </CardHeader>

              <CardContent className='flex flex-col items-center gap-1'>
                <Typography
                  typo="header-5-semibold"
                  className='font-bold'
                >
                  {data.title}
                </Typography>
                <Typography
                  typo="body-medium-regular"
                  className='text-center text-gray-500'
                >
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          variant="primary"
          className='w-fit mx-auto'
        >
          Learn more
          <ArrowRight />
        </Button>
      </section>
    </div>
  )
}

export default OurServices
