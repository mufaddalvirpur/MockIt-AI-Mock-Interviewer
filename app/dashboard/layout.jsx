import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (
    <div className='min-h-screen bg-center bg-cover'
    style={{backgroundImage: "url('/sign_img.jpg')"}}>
      <div className="absolute inset-0 bg-white bg-opacity-5 backdrop-blur-sm"></div>
        <div className='relative bg-white bg-opacity-5 backdrop-blur-sm'>
          <Header/>
          <div className='mx-5 md:mx-20 lg:mx-36'>
            {children}
          </div>
        </div>
    </div>
  )
}

export default DashboardLayout