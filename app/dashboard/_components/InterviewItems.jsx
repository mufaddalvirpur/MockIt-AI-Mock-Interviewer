import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

import React from 'react'


function InterviewItems({interview}) {

    const router=useRouter()

    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }
    const onFeedback=()=>{
        router.push('/dashboard/interview/'+interview.mockId+'/feedback')
    }
  return (
    <div className='bg-gray-50 border rounded-xl p-2'>
        <h2 className='font-bold'>{interview?.jobPosition}</h2>
        <h2 className='text-sm'>Skills: {interview?.jobDesc}</h2>
        <h2 className='text-xs text-gray-600'>Created at: {interview?.createdAt}</h2>
        <div className='flex justify-between mt-2'>
            <Button size="sm" variant className="bg-white text-black border border-black rounded-xl "
            onClick={onFeedback}>Feedback</Button>
            <Button size="sm" className="rounded-xl px-6"
            onClick={onStart} >Start</Button>
        </div>
    </div>
  )
}

export default InterviewItems