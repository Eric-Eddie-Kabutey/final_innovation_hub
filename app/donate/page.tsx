import DonateFaqs from '@/components/donate/donate-faqs'
import DonateMain from '@/components/donate/donate-main'
import WaysToGive from '@/components/donate/ways-to-give'
import React from 'react'

function DonatePage() {
  return (
    <div>
        <DonateMain />
        <WaysToGive />
        <DonateFaqs />
    </div>
  )
}

export default DonatePage