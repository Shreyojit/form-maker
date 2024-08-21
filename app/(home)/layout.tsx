import LandingHeader from '@/components/LandingHeader'
import React from 'react'

function HomeLayout({children}:{children:React.ReactNode}) {
  return (
   <>
   <LandingHeader/>
   {children}
   </>
  )
}

export default HomeLayout