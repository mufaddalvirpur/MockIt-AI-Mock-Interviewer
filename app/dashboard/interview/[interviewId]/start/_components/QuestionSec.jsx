import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionSec({mockInterviewQues,activeQuesIndex}) {

  const textToSpeech=(text)=>{
    if('speechSynthesis' in window) {
      const speech=new SpeechSynthesisUtterance(text)
      window.speechSynthesis.speak(speech)
    }
    else{
      alert('Does not support')
    }
  }

  return mockInterviewQues&&(
    <div className='p-5 bg-gray-50 border border-black rounded-xl my-8'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {mockInterviewQues&&mockInterviewQues.map((question,index)=>(
            <h2 key={index} className={`p-2 text-white bg-black rounded-full text-xs md:text-sm text-center 
                ${activeQuesIndex==index&&'bg-gray-600'}`}>Question {index+1}</h2>
        ))}
        </div>

        <h2 className='my-5 text-md'>{mockInterviewQues[activeQuesIndex]?.question}</h2>

        <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQues[activeQuesIndex]?.question)} />

        <div className='border border-black rounded-xl p-5 bg-gray-300 mt-20'>
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