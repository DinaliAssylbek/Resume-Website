import React from 'react'
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Landing = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-10 px-page md:flex-row md:justify-between">
        <div className="max-w-xl">
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
        </div>
        <Image
            src={"/headshot.png"}
            alt="Dinali Assylbek"
            height={350}
            width={350}
            className="shrink-0 rounded-lg object-cover shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        />
    </section>
  )
}

export default Landing
