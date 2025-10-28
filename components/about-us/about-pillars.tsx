'use client';
import React from 'react'
import Typography from '../shared/typography'
import { aboutPillars } from '@/constants';
import Image from 'next/image';

function AboutPillars() {
  return (
    <div className='w-full py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8'>
            <Typography
                typo="header-3-semibold"
            >Our Pillars</Typography>
            <div className='w-full py-6 grid grid-cols-4'>
                {aboutPillars.map((data, index) => (
                    <div className='py-24 px-8 flex flex-col gap-8 border'>
                        <div className='w-16 h-fit mx-auto'>
                            <Image 
                                src={data.icon}
                                alt={`Pillars ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <Typography
                                typo="header-5-semibold"
                            >{data.title}</Typography>
                            <Typography
                                typo="body-large-regular"
                                className='text-center'
                            >{data.description}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default AboutPillars