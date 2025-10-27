'use client';
import React from 'react'
import Typography from '../shared/typography'
import mentorsImg from "@/public/assets/images/mentorsImg.png"
import Image from 'next/image';
import { Button } from '../ui/button';


function HomeMentorship() {
  return (
    <div className='mentor-section w-full py-32'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-20'>
            <div className='w-[600px] mx-auto flex flex-col gap-3 text-white'>
                <Typography
                    typo="body-large-medium"
                    className=''
                >
                    MENTORSHIP
                </Typography>
                <Typography
                    typo="header-1-medium"
                    className='!leading-[4.5rem]'
                >
                    Mentor Africa&apos;s next business leaders
                </Typography>
            </div>
            <div className='w-[90%] h-fit mx-auto flex items-center gap-16'>
                <Image 
                    src={mentorsImg}
                    alt='Mentors image'
                    className='w-full h-full'
                />
            </div>
            <Button
                variant="primary"
                className='w-fit mx-auto'
            >
                Become a TEF Mentor
            </Button>
        </section>
    </div>
  )
}

export default HomeMentorship