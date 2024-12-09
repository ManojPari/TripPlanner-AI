import { Button } from '@/Components/ui/button'
import React from 'react'
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className=' text-center font-extrabold text-[50px]'> 
          <span className='text-[#757575]'>Discover Your Next Adventure with AI: </span> Personalized Itineries at Your Fingertips 
        </h1> 
        <p className='text-center mt-8 text-[30px]'>
          Your personal trip planner and travel curator, creating custom itineraies tailored to your preferences and interests with the power of AI.
        </p>
        <Link to={'/trip'}>
          <Button className="text-center mt-8"> Get Started</Button>
        </Link>
    </div>
  )
}

export default LandingPage