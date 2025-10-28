'use client';
import React from 'react'
import Typography from '../shared/typography'
import { alumniImgs, countryFlags } from '@/constants';
import Image from 'next/image';
import { Button } from '../ui/button';

function AlumniNetwork() {
  return (
    <div className='w-full sm:py-20 py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto bg-white flex flex-col gap-6'>
            <div className='md:max-w-[60%] mx-auto flex flex-col items-center gap-2'>
                <Typography
                    typo="body-large-medium"
                    className='text-app-primary'
                >
                    OUR ALUMNI NETWORK
                </Typography>
                <Typography
                    typo="header-2-medium"
                    className='text-center'
                >
                    Join a network of over 21,000+ TEF Alumni driving impact across <span className='countries-text-clip'> 54 countries</span>
                </Typography>
            </div>
            <div className='w-full py-8 grid grid-cols-3'>
                {alumniImgs.map((data, index) => (
                    <div
                        key={`Alumni ${index+1}`} 
                        className='w-full h-fit'>
                            <Image 
                                src={data}
                                alt='Alumni image'
                                className='w-full h-full'
                            />
                        </div>
                ))}
            </div>
            <div className='md:w-[20%] w-[40%] mx-auto py-8 grid grid-cols-4 gap-6'>
                {countryFlags.map((data, index) => (
                    <div
                        key={`Alumni ${index+1}`} 
                        className='w-full h-fit'
                    >
                            <Image 
                                src={data}
                                alt='Alumni image'
                                className='w-full h-full'
                            />
                    </div>
                ))}
            </div>
            <Button
                variant="primary"
                className='w-fit mx-auto'
            >Apply Now</Button>
        </section>
    </div>
  )
}

export default AlumniNetwork