import React from 'react'
import { FaGear } from "react-icons/fa6";

const TechnicalSkills = () => {
  return (
    <section>
        <div className='flex gap-4'>
            <FaGear className='text-2xl text-[var(--secondary)]'/>
            <h2 className='text-xl font-bold text-[var(--primary)]'>
                Technical Skills
            </h2>
        </div>
    </section>
  )
}

export default TechnicalSkills