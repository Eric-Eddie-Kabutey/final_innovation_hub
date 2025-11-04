import React from 'react'
import { Button } from '../ui/button'
import masterCardImg from "@/public/assets/icons/master_card.png"
import visaCardImg from "@/public/assets/icons/visa_card.png"
import paypalImg from "@/public/assets/icons/paypal_logo.png"
import Image from 'next/image'

const payment_cards = [masterCardImg, visaCardImg, paypalImg];

function DonateMain() {
  return (
    <div className='w-full py-36 bg-[#f8f8f8]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-10'>
            <div className='flex justify-center items-center gap-4'>
              <Button
                variant="outline"
                className='py-2 bg-transparent'
              >$ 20</Button>
              <Button
                variant="outline"
                className='py-2 bg-transparent'
              >$ 50</Button>
              <Button
                variant="outline"
                className='py-2 bg-transparent'
              >$ 100</Button>
            </div>
              <Button
                className='w-fit !px-8 !py-4 text-base mx-auto'
                variant="primary"
              >Start Donation</Button>
              <div className='flex justify-center items-center gap-8'>
                {payment_cards.map((card, index) => (
                  <div key={`Donation-${index+1}`}
                    className='w-16 h-fit'
                  >
                    <Image 
                      src={card}
                      alt={`Payment-${index+1}`}        
                      className='w-full h-full'            />
                  </div>
                ))}
              </div>
        </section>
    </div>
  )
}

export default DonateMain