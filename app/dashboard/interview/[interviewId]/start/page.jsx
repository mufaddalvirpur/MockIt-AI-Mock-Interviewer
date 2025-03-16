"use client"
import { db } from '@/utils/db'
import { MockIt } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import QuestionSec from './_components/QuestionSec'
import RecordAns from './_components/RecordAns'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


function StartInterview() {
    const params=useParams()
    const [interviewData,setInterviewData]=useState()
    const [mockInterviewQues,setMockInterviewQues]=useState()
    const [activeQuesIndex,setActiveQuesIndex]=useState(0)
    useEffect(()=>{
        GetInterviewDetails()
    },[])
    const GetInterviewDetails=async()=>{
            const result=await db.select().from(MockIt)
            .where(eq(MockIt.mockId,params.interviewId))

            const jsonMockResp=JSON.parse(result[0].jsonMockResp)
            console.log(jsonMockResp)
            setMockInterviewQues(jsonMockResp)
            setInterviewData(result[0])
    }
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {/* Questions */}
            <QuestionSec mockInterviewQues={mockInterviewQues}
            activeQuesIndex={activeQuesIndex}
            />
            {/* Video/Audio Recording */}
            <RecordAns mockInterviewQues={mockInterviewQues}
            activeQuesIndex={activeQuesIndex}
            interviewData={interviewData}
            />
        </div>
        <div className='flex justify-end gap-6'>
          {activeQuesIndex>0&&  
          <Button className='rounded-xl' onClick={()=>setActiveQuesIndex(activeQuesIndex-1)}>Previous Question</Button>}
          {activeQuesIndex!=mockInterviewQues?.length-1&& 
           <Button className='rounded-xl' onClick={()=>setActiveQuesIndex(activeQuesIndex+1)}>Next Question</Button>}
          {activeQuesIndex==mockInterviewQues?.length-1&&  
          <Link href={'/dashboard/interview/'+interviewData?.mockId+"/feedback"}>
          <Button variant className='bg-white border border-black rounded-xl'>End Interview</Button>
          </Link>}
        </div>
    </div>
  )
}   

export default StartInterview