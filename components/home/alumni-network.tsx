'use client';
import React from 'react'
import Typography from '../shared/typography'
import { alumniImgs, countryFlags } from '@/constants';
import Image from 'next/image';
import { Button } from '../ui/button';

// Data for the new text cards
const cardData = [
  { text: "You", bgColor: "bg-[#53565a]" },
  { text: "Are", bgColor: "bg-red-700" },
  { text: "Next", bgColor: "bg-[#53565a]" },
];

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
             <div className='w-[80%] mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
      
      {/* Render the first three images */}
      {alumniImgs.slice(0, 3).map((data, index) => (
        <div
          key={`Alumni-Image-${index}`}
          className='relative w-full aspect-square' 
        >
          <Image 
            src={data}
            alt={`Alumni image ${index + 1}`}
            fill
            className='object-cover rounded-lg' 
          />
        </div>
      ))}

      {/* Render the three custom text cards */}
      {cardData.map((card, index) => (
        <div
          key={`Card-${index}`}
          className={`
            w-full aspect-square rounded-lg
            flex items-center justify-center
            ${card.bgColor}
          `}
        >
          <span className="text-white text-4xl lg:text-5xl font-extrabold">
            {card.text}
          </span>
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