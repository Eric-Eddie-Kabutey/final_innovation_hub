'use client';
import React from 'react';
import performanceImg from "@/public/assets/images/performanceImg.png"
import Image from 'next/image';
import Typography from '../shared/typography';
import { Drop, Lightbulb } from "@phosphor-icons/react";

function GreenEnergy() {
  return (
    <div className='w-full md:py-16 py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex lg:flex-row flex-col justify-between gap-20'>
            <div className='flex-1 relative h-[450px]'>
                <div className='w-[80%] h-full'>
                    <Image 
                        src={performanceImg}
                        alt='Performance image'
                        className='w-full h-full object-cover rounded-[2rem]'
                    />
                </div>
                <div className='xs:block hidden w-[350px] absolute xl:-bottom-[5rem] -bottom-[2rem] right-0 p-12 bg-[#ff0000]/40 rounded-xl'>
                    <Typography
                        typo="header-3-medium"
                        className='text-white'
                    >
                        Performance, Quality and Reliability
                    </Typography>
                </div>
            </div>
            <div className='lg:w-[45%] md:w-[70%] w-full flex flex-col gap-16'>
                <div className='flex flex-col gap-6'>
                    <Typography
                        typo="body-medium-medium"
                    >welcome to</Typography>
                    <Typography
                        typo="header-1-semibold"
                        className='2xl:!leading-none !leading-tight !font-bold'
                    >
                        Coders Clutch Innovation Hub
                    </Typography>
                    <Typography
                        typo="body-large-regular"
                        className='text-gray-500'
                    >
                        We  provides a collaborative space where creative thinkers, startups, and industry experts unite to solve today’s most pressing challenges , from sustainability to emerging tech.
                    </Typography>
                </div>
                <div className='w-full flex justify-between gap-5'>
                    <div className='flex-1 flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <div className='p-3 border border-red-300 rounded-full'>
                                <Drop size={20} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Typography
                                    typo="header-5-semibold"
                                    className='!font-bold'
                                >
                                    3,000 Tonnes CO2
                                </Typography>
                            </div>
                        </div>
                        <Typography
                            typo="body-medium-light"
                            className='line-clamp-1'
                        >RANA is building a brighter future for you, we provide an Energy as a service ecosystem that is reliable, hassle-free, and clean</Typography>
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <div className='p-3 border border-red-300 rounded-full'>
                                <Lightbulb size={20} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Typography
                                    typo="header-5-semibold"
                                    className='!font-bold'
                                >
                                    3,000 Tonnes CO2
                                </Typography>
                            </div>
                        </div>
                        <Typography
                            typo="body-medium-light"
                            className='line-clamp-1'
                        >RANA is building a brighter future for you, we provide an Energy as a service ecosystem that is reliable, hassle-free, and clean</Typography>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default GreenEnergy