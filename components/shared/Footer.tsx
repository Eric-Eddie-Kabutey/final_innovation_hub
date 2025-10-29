'use client'
import Link from 'next/link'
import Image from 'next/image'
import Typography from './typography'
import logo from '@/public/assets/images/logo_tef.png'

export default function Footer() {
	return (
		<div className='w-full pt-12 pb-4'>
			<section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
				{/* top footer */}
				<div className='flex md:flex-row flex-col justify-between gap-12'>
					<div className=' md:w-[35%] flex flex-col gap-4'>
						{/* <RedLinesBackground /> */}
						<Link
							href='/'
							className=' flex items-center gap-2 text-xl font-bold'>
							<div className='w-10 h-fit'>
								<Image src={logo} alt='Innovation logo' />
							</div>
							<div className='flex items-center gap-'>
								<Typography
									typo='header-6-medium'
									className='uppercase text-gray-500'>
									Innovation
								</Typography>
								<Typography typo='header-6-medium' className='uppercase'>
									Hub
								</Typography>
							</div>
						</Link>
					</div>
					<div className='flex-1 flex flex-col'>
						<Typography
							typo='header-1-semibold'
							className='text-black 2xl:!text-[4rem] lg:!text-[3.7rem] md:!text-[2.5rem]  sm:!text-[3rem] xs:!text-[2.3rem] !text-[2rem] font-semibold uppercase !leading-normal'>
							{/* xl:!text-[12rem] lg:!text-[10rem] md:!text-[7rem] */}
							EMPOWERING AFRICAN
						</Typography>

						<Typography
							typo='header-1-semibold'
							className='text-black 2xl:!text-[7.2rem]  lg:!text-[6.7rem] md:!text-[4.7rem] sm:!text-[6rem] xs:!text-[4.5rem] !text-[3.5rem] font-semibold uppercase !leading-normal'>
							INNOVATORS
						</Typography>
					</div>
				</div>
				{/* divider */}
				<div className='bg-gray-700 w-full h-[1px] my-4 md:my-8' />
				{/* bottom footer */}
				<div className='flex items-center justify-between flex-col md:flex-row text-[16px] font-light'>
					{/* socials */}
					<div className='flex flex-col md:flex-row items-center gap-4'>
						<Link href='/'>Facebook</Link>
						<Link href='/'>Instagram</Link>
					</div>
					{/* copy right */}
					<div className='flex flex-col md:flex-row items-center gap-4'>
						© 2025 All rights reversed INNOVATIONHUB
					</div>
					{/* terms & condition */}
					<div className=''>
						<Link href='/'>Privacy Policy</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
