import React from 'react'
import AddNewIt from './_components/AddNewIt'

function dashboard() {
  return (
    <div className='p-10'>
      <h2 className='font-bold text-2xl'>Dashboard</h2>
      <h2 className='text-black'>Create & Start your  Mock Interview</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewIt/>
      </div>
    </div>
  )
}

export default dashboard