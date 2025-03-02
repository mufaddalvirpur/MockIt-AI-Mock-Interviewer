"use client"
import { db } from '@/utils/db'
import { MockIt } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import QuestionSec from './_components/QuestionSec'
import RecordAns from './_components/RecordAns'


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
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Questions */}
            <QuestionSec mockInterviewQues={mockInterviewQues}
            activeQuesIndex={activeQuesIndex}
            />
            {/* Video/Audio Recording */}
            <RecordAns/>

        </div>
    </div>
  )
}   

export default StartInterview