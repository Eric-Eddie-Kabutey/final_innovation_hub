'use client'

import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Typography from '../shared/typography'

interface Project {
	imageSrc: string
	category: string
	title: string
	description: string
	href: string
}

// --- Data for the project cards ---
const projectsData: Project[] = [
	{
		imageSrc: '/assets/images/events/event1.jpg',
		category: 'Healthcare',
		title: 'Ricia Care Mobile App',
		description:
			'A comprehensive telehealth platform connecting patients with doctors 24/7.',
		href: '/projects/ricia-care',
	},
	{
		imageSrc: '/assets/images/events/event2.jpg',
		category: 'Fintech',
		title: 'Qualiview Lab Platform',
		description:
			'An analytics dashboard empowering African entrepreneurs with data-driven insights.',
		href: '/projects/qualiview',
	},
	{
		imageSrc: '/assets/images/events/event3.jpg',
		category: 'Real Estate',
		title: 'RentHunter Solution',
		description:
			'Automating the rental search process for expats and students across Europe.',
		href: '/projects/renthunter',
	},
]

// --- Animation Variants ---
const sectionVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2, delayChildren: 0.1 },
	},
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const SuccessfulProjects: FC = () => {
	return (
		<motion.section
			variants={sectionVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.1 }}
			className='py-20 md:py-28 bg-white'>
			<div className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
				{/* --- Header Section --- */}
				<motion.div variants={itemVariants} className='max-w-3xl  mb-16 flex flex-col gap-4'>
					<Typography
						typo='body-large-medium'
						className='text-app-primary uppercase'>
						Our Work
					</Typography>
					<Typography
						typo='header-1-medium'  
						className='xl:!leading-[4.5rem] !leading-[3rem]'>
						Successful <span className='text-app-primary'>Projects</span> 
					</Typography>

					<Typography>
						We&apos;ve helped amazing clients turn their vision into reality.
						Here are a few of our favorites.
					</Typography>
				</motion.div>

				{/* --- Project Cards Grid --- */}
				<motion.div
					variants={sectionVariants} // Reuse variants for nested stagger effect
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projectsData.map((project) => (
						<motion.div key={project.title} variants={itemVariants}>
							<Link
								href={project.href}
								className='group block bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'>
								<div className='relative aspect-[4/3] overflow-hidden'>
									<Image
										src={project.imageSrc}
										alt={project.title}
										fill
										className='object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
										sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
									/>
								</div>
								<div className='p-6'>
									<p className='text-red-600 text-sm font-medium'>
										{project.category}
									</p>
									<h3 className='mt-2 text-xl font-bold text-gray-900'>
										{project.title}
									</h3>
									<p className='mt-2 text-gray-600 text-sm line-clamp-2'>
										{project.description}
									</p>
								</div>
							</Link>
						</motion.div>
					))}
				</motion.div>

				{/* --- "Read More" Button --- */}
				<motion.div variants={itemVariants} className='mt-16 text-center'>
					<Button
						asChild
						size='lg'
						className='bg-red-600 text-white hover:bg-red-700 rounded-full px-8 py-6 font-bold transition-transform hover:scale-105'>
						<Link href='/projects'>
							Read More
							<ArrowRight className='ml-2 h-5 w-5' />
						</Link>
					</Button>
				</motion.div>
			</div>
		</motion.section>
	)
}

export default SuccessfulProjects
