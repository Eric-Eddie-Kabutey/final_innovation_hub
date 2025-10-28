'use client';
import React from 'react'
import Typography from '../shared/typography'

function VisionMission() {
  return (
    <div className='w-full py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-12'>
            <div className='w-[70%] flex justify-between items-center gap-12'>
                <Typography
                    typo="header-4-semibold"
                    className='w-[35%]'
                >Our Mission</Typography>
                <div className='flex-1 flex flex-col gap-3 text-gray-500'>
                    <Typography
                        typo="body-large-regular"
                    >
                        To build a brighter and more sustainable future by accelerating the energy transition for Africans, ultimately replacing expensive and unreliable generators with our solar energy solutions.
                    </Typography>
                </div>
            </div>
            <div className='w-[70%] flex justify-between items-center gap-12'>
                <Typography
                    typo="header-4-semibold"
                    className='w-[35%]'
                >Our Vision</Typography>
                <div className='flex-1 flex flex-col gap-3 text-gray-500'>
                    <Typography
                        typo="body-large-regular"
                    >
                        Rana is Driving the Green Energy Revolution in Nigeria with a view of spreading the movement across Africa.
                    </Typography>
                    <Typography
                        typo="body-large-regular"
                    >
                        We believe that energy is an essential service and at Rana, through our energy-as-a-service solution, we are building a brighter and more sustainable future.
                    </Typography>
                    <Typography
                        typo="body-large-regular"
                    >
                        We aim to drive the deployment of 100 MW of solar energy systems across Africa by the end of 2028, transforming the lives of millions and contributing significantly to a sustainable future
                    </Typography>
                </div>
            </div>
        </section>
    </div>
  )
}

export default VisionMission