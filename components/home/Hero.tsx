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
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex justify-between items-center gap-20'>
            <div className='w-[40%] flex flex-col justify-between gap-10'>
                <div className='flex flex-col gap-4'>

                    <Typography
                        typo="header-1-semibold"
                        className='!leading-none !font-bold'
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
            <div className='flex-1 relative'>
                <div className='w-full h-fit'>
                    <Image 
                        src={homeImg}
                        alt='home image'
                        className='w-full h-full rounded-[4rem]'
                    />
                </div>
                <button className='absolute bottom-8 left-[30%] flex items-center gap-2 w-[300px] p-6 bg-white/60 rounded-full'>
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