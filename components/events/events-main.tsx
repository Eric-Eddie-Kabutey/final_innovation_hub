'use client';
import React from 'react'
import Typography from '../shared/typography'
import { available_events } from '@/constants';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

function EventsMain() {
  return (
    <div id='upcoming-programmes' className='w-full py-20 bg-[#f7f7f7]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-12'>
            <div className='flex justify-between items-center gap-8'>
                <div className='w-[60%] flex flex-col gap-6'>
                    <Typography
                        typo="body-large-medium"
                        className='text-app-primary'
                    >
                        OUR PROGRAMMES
                    </Typography>
                    <Typography
                        typo="header-1-medium"
                        className='md:!leading-[4.7rem] text-gray-600'
                    >
                        Fueling Africa&apos;s <span className='text-app-primary'>Future</span>, Starting with You
                    </Typography>
                </div>
                <div className='flex-1 flex justify-end items-center'>
                    <button className='py-2 px-4 flex items-center gap-2 border border-gray-500 bg-[#ebf3eb] rounded-full'>
                        <div className='w-3 h-3 bg-[#11c921] rounded-full'></div>
                        <span>3 active programs</span>
                    </button>
                </div>
            </div>
            <div className='w-full py-8 grid grid-cols-3 gap-8'>
                {available_events.map((data, index) => (
                    <Card
                        key={data.id}
                        className='flex flex-col gap-4 shadow-none rounded-[1.3rem]'
                    >
                        <div className='w-full h-[180px] '>
                            <Image 
                                src={data.img}
                                alt={`Event ${index+1}`}
                                className='w-full h-full object-cover rounded-[1.3rem]'
                            />
                        </div>
                        <CardContent className='flex-1 p-4 flex flex-col gap-4'>
                            <div className='h-fit flex flex-col gap-2'>
                                <Typography
                                    typo="body-large-medium"
                                    className='text-[#c6222a]'
                                >{data.title}</Typography>
                                <Typography
                                    className='font-light line-clamp-2'
                                >{data.description}</Typography>
                            </div>
                            <div className='flex-1 flex flex-col justify-end'>
                                <div className='pb-2 flex justify-between gap-4'>
                                    <div className='flex flex-col'>
                                        <Typography
                                            typo="body-medium-medium"
                                            className='text-gray-500'
                                        >Start Date: </Typography>
                                        <Typography
                                            typo="body-medium-light"
                                            className='text-gray-500'
                                        >{data.start_date}</Typography>
                                    </div>
                                    <div className='flex flex-col'>
                                        <Typography
                                            typo="body-medium-medium"
                                            className='text-gray-500'
                                        >End Date: </Typography>
                                        <Typography
                                            typo="body-medium-light"
                                            className='text-gray-500'
                                        >{data.end_date}</Typography>
                                    </div>
                                </div>
                                <div className='w-full pt-2 flex justify-end border-t border-gray-300'>
                                    {data.status === "Closed" ? (
                                        <div className='flex items-center justify-end gap-2'>
                                            <Typography
                                                typo="body-medium-regular"
                                            >Status: </Typography>
                                            <Typography
                                                typo="body-medium-regular"
                                                className='py-1 px-2 rounded-xl bg-gray-200'
                                            >{data.status}</Typography>
                                        </div>
                                    ) : (
                                        <div className='flex justify-end gap-2'>
                                            <Button
                                                variant="outline"
                                                className='py-2 border-gray-300'
                                            >Overview</Button>
                                            <Button
                                                variant="primary"
                                                className='py-2 border-gray-300'
                                            >Applications</Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default EventsMain