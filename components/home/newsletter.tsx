import React from 'react'
import Typography from '../shared/typography'

function Newsletter() {
  return (
    <div className='w-full py-12'>
        <section className='newsletter_bg max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto '>
            <div className='w-[60%] flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <Typography
                        typo="header-3-medium"
                    >Stay up to date with TEFConnect</Typography>
                    <Typography
                        typo="body-medium-regular"
                        className='text-gray-200'
                    >We will keep you updated with opportunities and events</Typography>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Newsletter