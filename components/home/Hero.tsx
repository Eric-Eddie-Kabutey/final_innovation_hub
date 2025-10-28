'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import homeImg from "@/public/assets/images/home_img.png"
import Image from 'next/image';
import { ArrowDown, Play } from 'lucide-react';

function HomeHero() {
  return (
    <div className='w-full py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center lg:gap-20 gap-5'>
            <div className='lg:w-[40%] md:w-[50%] w-full flex flex-col justify-between gap-10'>
                <div className='flex flex-col gap-4'>

                    <Typography
                        typo="header-1-semibold"
                        className='2xl:!leading-none !leading-tight !font-bold'
                    >
                        Powering the future of clean energy
                    </Typography>
                    <Typography
                        typo="body-large-light"
                    >
                        Integrating renewable energy infrastructure, innovation software and 
                        flexible services to drive energy transition, resilience & economic 
                        growth in Africa
                    </Typography>
                    <div className='md:hidden block relative'>
                        <div className='w-full h-fit'>
                            <Image 
                                src={homeImg}
                                alt='home image'
                                className='w-full h-full rounded-[4rem]'
                            />
                        </div>
                        <button className='absolute bottom-8 lg:left-[30%] flex items-center gap-2 lg:w-[300px] w-[300px] p-6 bg-white/60 rounded-full'>
                            <div className='w-fit p-2 bg-app-primary rounded-full'>
                                <Play color='#fff' />
                            </div>
                            <Typography
                                typo="header-6-medium"
                            >Shapping the Future of Renewable Energy</Typography>
                        </button>
                    </div>
                    <Button
                        variant="primary"
                        className='w-fit px-8 py-4'
                    >
                        Get Started
                    </Button>
                </div>
                <div className='text-gray-400'>
                    <ArrowDown size={60} />
                </div>
            </div>
            <div className='md:block hidden flex-1 relative'>
                <div className='w-full h-fit'>
                    <Image 
                        src={homeImg}
                        alt='home image'
                        className='w-full h-full rounded-[4rem]'
                    />
                </div>
                <button className='absolute bottom-8 lg:left-[30%] flex items-center gap-2 lg:w-[300px] w-[300px] p-6 bg-white/60 rounded-full'>
                    <div className='w-fit p-2 bg-app-primary rounded-full'>
                        <Play color='#fff' />
                    </div>
                    <Typography
                        typo="header-6-medium"
                    >Shapping the Future of Renewable Energy</Typography>
                </button>
            </div>
        </section>
    </div>
  )
}

export default HomeHero