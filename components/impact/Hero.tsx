'use client'

import type { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'

interface HeroProps {
	subtitle: string
	title: string
	mobileTitle?: string
	imageSrc: StaticImageData | string
	imageAlt: string
}

const Hero: FC<HeroProps> = ({
	subtitle,
	title,
	mobileTitle,
	imageSrc,
	imageAlt,
}) => {
	return (
		// 1. Main section is now the positioning anchor (relative) and defines the height.
		<section className='relative max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto mt-36 py-24 flex items-center rounded-3xl overflow-hidden'>
			{/* 2. Image is now the absolute background layer */}
			<motion.div
				initial={{ opacity: 0, scale: 1.1 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5, ease: 'easeOut' }}
				className='absolute inset-0 z-0'>
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					className='object-cover w-full'
					priority
				/>
				{/* 3. A dark overlay is added on top of the image for text readability */}
				<div className='absolute inset-0 bg-black/60' />
			</motion.div>

			{/* 4. Content is now layered on top with a higher z-index */}
			<div className='relative z-10 container mx-auto px-4'>
				<div className='max-w-2xl'>
					{' '}
					{/* 5. Constrain the width of the text content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
						className='flex flex-col gap-6'>
						{/* Decorative Play "Button" */}
						<div className='group flex items-center gap-4 mt-4 text-left cursor-default'>
							<PlayCircle
								className='w-16 h-16 text-white transition-colors duration-300'
								strokeWidth={1.5}
							/>
						</div>

						<div className='flex items-center gap-3'>
							<span className='text-sm text-gray-400 uppercase tracking-widest'>
								{subtitle}
							</span>
							<span className='inline-block w-2.5 h-2.5 bg-blue-500 rounded-full'></span>
						</div>

						{/* Title for desktop */}
						<h1 className='hidden md:block text-5xl lg:text-7xl font-bold text-white leading-tight'>
							{title}
						</h1>
						{/* Title for mobile */}
						<h1 className='block md:hidden text-4xl font-bold text-white leading-tight'>
							{mobileTitle ?? title}
						</h1>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Hero
