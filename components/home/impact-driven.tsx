'use client';
import React from 'react'
import impactMainImg from '@/public/assets/images/impactImg.png';
import impactMapImg from "@/public/assets/images/impactMap.png";
import Image from 'next/image';
import Typography from '../shared/typography';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

function ImpactDriven() {
  return (
    <div className='w-full py-24'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex gap-32'>
            <div className='w-[550px] h-fit'>
                <Image 
                    src={impactMainImg}
                    alt='Impact Image'
                    className='w-full h-full rounded-[2rem]'
                />
            </div>
            <div className='flex-1 flex flex-col gap-2'>
                <div className='pt-4 flex flex-col gap-2'>
                    <Typography
                        typo="body-large-medium"
                        className='text-app-primary'
                    >
                        IMPACT DRIVEN
                    </Typography>
                    <Typography
                        typo="header-1-medium"
                        className='!leading-[4.5rem]'
                    >
                        Celebrating a Decade+ of <span className='text-app-primary'>Impact</span> Across Africa
                    </Typography>
                    <Button
                        variant="ghost"
                        className='flex justify-start'
                    >
                        Learn more
                        <ChevronRight size={25} color='#fe0000' />
                    </Button>
                </div>
                <div className='w-full flex justify-end'>
                    <div className='w-[400px] relative flex justify-end'>
                        <div className='w-[80%] h-fit'>
                            <Image 
                                src={impactMapImg}
                                alt='Impact map'
                                className='w-full h-full'
                            />
                        </div>
                        <div className='flex flex-col gap-2 absolute top-[65%] left-7 transform translate-y-1/2'>
                            <Typography
                                typo="header-3-light"
                            >2.5 + Million</Typography>
                            <Typography>Entrepreneurs reached</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ImpactDriven