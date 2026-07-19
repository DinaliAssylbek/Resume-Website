import React from 'react'
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Landing = () => {
  return (
<section className="relative flex flex-1 flex-col items-center justify-center gap-10 overflow-hidden px-page md:flex-row md:justify-between">

    {/* Background */}
    <div aria-hidden className="landing-grid pointer-events-none absolute inset-0 z-0 h-full w-full" />

    {/* Left Content */}
    <div className="relative z-10 max-w-xl">
        <h1 className="mb-3 text-5xl font-bold">
            Dinali Assylbek
        </h1>

        <p className="text-[var(--neutral)]">
            Software Engineer building high-performance systems across embedded devices, cloud infrastructure, and AI platforms.
        </p>

        <a
            href="#projects"
            className="mt-4 inline-flex items-center gap-3 bg-black px-5 py-2 text-lg font-medium text-white transition-opacity hover:opacity-70"
        >
            View Projects
            <FaArrowRight />
        </a>
    </div>

    {/* Headshot */}
    <Image
        src="/headshot.png"
        alt="Dinali Assylbek"
        width={350}
        height={350}
        className="relative z-10 shrink-0 rounded-lg object-cover shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    />
</section>
  )
}

export default Landing
