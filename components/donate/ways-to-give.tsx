'use client';
import React from 'react'
import Typography from '../shared/typography'
import donateIcon from "@/public/assets/icons/donate_icon.svg"
import volunteerIcon from "@/public/assets/icons/volunteer_icon.svg"
import partnerIcon from "@/public/assets/icons/partner_icon.svg"
import equipmentIcon from "@/public/assets/icons/equipment_icon.svg"
import Image from 'next/image';

const donate_ways = [
    {
        id: "1",
        icon: donateIcon,
        title: "Donate",
        description: `Help us expand access to STEM education across Africa. Your financial support funds student scholarships, lab equipment, and community outreach programs.`,
    },
    {
        id: "2",
        icon: volunteerIcon,
        title: "Volunteer",
        description: `Share your time and skills! Join our network of STEM coaches, mentors, and facilitators to inspire the next generation of innovators.`,
    },
    {
        id: "3",
        icon: partnerIcon,
        title: "Partner",
        description: `Collaborate with Asustem through your school, company, or organization to co-host programs, sponsor initiatives, or support lab setups.`,
    },
    {
        id: "4",
        icon: equipmentIcon,
        title: "Give Equipment",
        description: `Contribute laptops, robotics kits, or other STEM tools to equip learners and create better hands-on learning experiences.`,
    },
]

function    WaysToGive() {
  return (
    <div className='w-full py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-6'>
            <div className='flex flex-col items-center gap-4'>
                <div className='flex flex-col items-center gap-4 '>
                    <Typography
                        typo="header-3-medium"
                    >Ways to Give</Typography>
                    <div className='w-20 h-1 bg-app-primary'></div>
                </div>
                <Typography
                    typo="body-large-regular"
                    className='text-gray-500'
                >Your support helps to educate leaders who make a difference in the world.</Typography>
            </div>  
            <div className='w-full mx-auto py-8 grid sm:grid-cols-2 gap-10 place-items-center'>
                {donate_ways.map((data, index) => (
                    <div key={data.id} className='max-w-[350px] flex gap-6'>
                        <div className='lg:min-w-20 min-w-12 lg:w-20 w-12 h-fit rounded-full'>
                            <Image 
                                src={data.icon}
                                alt={`Donate-${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography
                                typo="header-5-medium"
                            >{data.title}</Typography>
                            <Typography
                                typo="body-large-regular"
                                className='text-gray-500'
                            >{data.description}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default WaysToGive