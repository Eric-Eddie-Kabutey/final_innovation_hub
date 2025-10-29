'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import levelingImg from "@/public/assets/images/Accessibility-and-Inclusion.webp";
import Image from 'next/image';

function DemocratisingLuck() {
  return (
    <div className='w-full sm:py-20 py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col items-center gap-6'>
            <div className='max-w-[800px] flex flex-col items-center gap-2'>
                <Typography
                    typo="body-large-medium"
                    className='text-app-primary'
                >
                    Accessibility and Inclusion
                </Typography>
                <Typography
                    typo="header-2-medium"
                    className='text-center'
                  >
                      We Believe That Innovation Should Be
                      <span className='text-app-primary'> Accessible</span> To Everyone
                      
                      
                </Typography>
                <Button
                    variant="ghost"
                    className=' flex !items-center'
                >
                    Learn more
                    <ChevronRight size={25} color='#fe0000' />
                </Button>
            </div>
            <div className='lg:w-[800px] w-full h-fit'>
                <Image 
                    src={levelingImg}
                    alt='Leveling image'
                    className='w-full h-full'
                />
            </div>
        </section>
    </div>
  )
}

export default DemocratisingLuck