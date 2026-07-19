import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Landing = () => {
  return (
    <section className="flex flex-1 flex-col justify-center px-page">
      <h1 className='font-bold text-5xl mb-3'>
        Dinali Assylbek
      </h1>
      <p className='text-[var(--neutral)]'>
        Software Engineer building high-performance systems across embedded devices, cloud infrastructure, and AI platforms.
      </p>
        <a
            href="#projects"
            className="mt-4 inline-flex self-start gap-3 items-center bg-black px-5 py-2 text-lg font-medium text-white hover:opacity-70"
        >
            View Projects
            <FaArrowRight />
        </a>
    </section>
  )
}

export default Landing
