'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography';
import hardwareIcon from "@/public/assets/icons/hardware_icon.png"
import aiIcon from "@/public/assets/icons/ai_icon.png"
import gisIcon from "@/public/assets/icons/gis_icon.png"
import remoteIcon from "@/public/assets/icons/remote_icon.png"
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const energy_services = [
  {
    id: "1",
    icon: hardwareIcon,
    title: "Hardware",
    description: `We provide Tier 1 hardware from best in class OEMs`,
  },
  {
    id: "2",
    icon: gisIcon,
    title: "GIS and AR",
    description: `We deploy GIS and AR-enabled energy assessment technologies`,
  },
  {
    id: "3",
    icon: aiIcon,
    title: "AI and ML",
    description: `We develop AI-driven energy management systems, and utilise ML for maintenance, and support`,
  },
  {
    id: "4",
    icon: remoteIcon,
    title: "Remote Monitoring",
    description: `We enable remote site monitoring and system control`,
  },
]

function OurServices() {
  // ✅ Track the selected card — first one is selected initially
  const [selectedId, setSelectedId] = useState(energy_services[0].id)

  return (
    <div className='w-full pt-32 pb-16'>
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <Typography
            typo="body-medium-medium"
            className='uppercase'
          >
            Our Services
          </Typography>

          <div className='w-[70%] flex gap-12'>
            <Typography
              typo="header-1-medium"
              className='max-w-[300px] !leading-[4rem]'
            >
              Energy as a Service
            </Typography>
          </div>
        </div>

        <div className='w-full xl:py-8 py-6 grid lg:grid-cols-4 grid-cols-2 gap-6'>
          {energy_services.map((data, index) => (
            <Card
              key={data.id}
              onClick={() => setSelectedId(data.id)}
              className={`xl:py-6 py-4 xl:px-2 flex flex-col items-center gap-3 bg-[#f5f3ed] border-2 transition-all duration-300 ease-out cursor-pointer 
                ${selectedId === data.id ? 'border-blue-500 shadow-lg scale-[1.02]' : 'border-transparent hover:shadow-lg'}
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
