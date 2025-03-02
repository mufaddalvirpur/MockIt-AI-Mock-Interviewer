import { Lightbulb } from 'lucide-react'
import React from 'react'

function QuestionSec({mockInterviewQues,activeQuesIndex}) {
  return mockInterviewQues&&(
    <div className='p-5 border border-black rounded-xl my-8'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {mockInterviewQues&&mockInterviewQues.map((question,index)=>(
            <h2 className={`p-2 text-white bg-black rounded-full text-xs md:text-sm text-center cursor-pointer 
                ${activeQuesIndex==index&&'bg-gray-700 border border-black'}`}>Question {index+1}</h2>
        ))}
        </div>

        <h2 className='my-5 text-md'>{mockInterviewQues[activeQuesIndex]?.question}</h2>

        <div className='border border-gray-400 rounded-xl p-5 bg-gray-200 mt-20'>
            <h2 className='flex gap-2 items-center'>
                <Lightbulb/>
                <strong>Note:</strong>
            </h2>
            <h2 className='text-sm my-2'>{process.env.NEXT_PUBLIC_QUES_NOTE}</h2>
        </div>
    </div>
  )
}

export default QuestionSec