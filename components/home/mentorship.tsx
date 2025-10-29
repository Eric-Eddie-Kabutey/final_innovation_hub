'use client'
import React from 'react'
import Typography from '../shared/typography'
import mentorsImg from '@/public/assets/images/mentorsImg.png'
import Image from 'next/image'
import { Button } from '../ui/button'

function HomeMentorship() {
	return (
		<div className='mentor-section w-full sm:py-32 py-20'>
			<section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-20'>
				<div className='sm:w-[600px] w-full mx-auto flex flex-col gap-3 text-white'>
					<Typography typo='body-large-medium' className=''>
						MENTORSHIP
					</Typography>
					<Typography typo='header-1-medium' className='sm:!leading-[4.5rem]'>
						Mentor Africa&apos;s next business leaders
					</Typography>
				</div>
				<div className='relative xl:w-[90%] w-full mx-auto aspect-video lg:aspect-[21/9] rounded-lg overflow-hidden'>
					<Image
						src={mentorsImg}
						alt='Mentors image'
						fill
						className='object-contain'
						sizes='(max-width: 1280px) 90vw, 100vw'
					/>
				</div>
				<Button variant='primary' className='w-fit mx-auto'>
					Become a TEF Mentor
				</Button>
			</section>
		</div>
	)
}

export default HomeMentorship
