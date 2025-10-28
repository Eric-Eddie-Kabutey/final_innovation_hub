'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { faqs } from '@/constants';

function Faqs() {
  return (
    <div className='w-full py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto py-12 px-6 flex flex-col gap-8 bg-[#f7f7f9] rounded-xl'>
            <div className='max-w-[400px] mx-auto flex flex-col items-center gap-3'>
                <Typography
                    typo="header-3-medium"
                    className='text-center'
                >Frequently Asked Questions</Typography>
                <div className='w-full py-8 flex items-center gap-3 flex-wrap'>
                    <Button
                        variant="outline"
                        className='w-fit py-2 border border-gray-600 hover:bg-gray-600 hover:text-white'
                    >Applications</Button>
                    <Button
                        variant="outline"
                        className='w-fit py-2 border border-gray-600 hover:bg-gray-600 hover:text-white'
                    >Eligibility</Button>
                    <Button
                        variant="outline"
                        className='w-fit py-2 border border-gray-600 hover:bg-gray-600 hover:text-white'
                    >Programmes</Button>
                </div>
            </div>
            <div className='lg:w-[60%] md:w-[80%] w-full mx-auto'>
                <Accordion type="single" collapsible>
                    {faqs.map(data => (
                    <AccordionItem
                        key={data.id}
                        value={`item-${data.id}`}
                        className='border-none bg-transparent transition-all duration-200 mb-3'
                    >
                        <AccordionTrigger className='px-6 pt-4 pb-6 xs:text-[17px] text-[15px] text-gray-800 font-medium rounded-full border bg-white shadow-sm hover:shadow-md'>
                        {data.question}
                        </AccordionTrigger>
                        <AccordionContent className='px-6 py-4 xs:text-[16px] text-[14px] text-gray-600 leading-normal'>
                        {data.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    </div>
  )
}

export default Faqs