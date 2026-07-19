import React from 'react'
import { VscGearCompact } from "react-icons/vsc";
import { technicalSkills } from '@/data/technicalskills';

const TechnicalSkills = () => {
  return (
    <section className="py-5 mr-28 ml-10 border border-[var(--neutral)]/20 p-6 bg-white">
        <div className='flex gap-4 mb-5'>
            <VscGearCompact className='text-2xl text-[var(--secondary)]'/>
            <h2 className='text-xl font-bold text-[var(--primary)]'>
                Technical Skills
            </h2>
        </div>
        <h3 className='text-sm text-[var(--neutral)] mb-3'>
            LANGUAGES
        </h3>
        <ul className='flex flex-wrap gap-2 mb-3'>
            {technicalSkills.languages.map((skills, index) => (
                < li
                    key={index}
                    className="bg-[var(--secondary)]/15 px-3 py-1 text-sm font-medium text-[var(--primary)]"
                    style={{ fontFamily: "var(--font-label)" }}
                >
                    {skills}
                </li>
            ))}
        </ul> 
        <h3 className='text-sm text-[var(--neutral)] mb-3'>
            FRAMEWORKS
        </h3>
        <ul className='flex flex-wrap gap-2 mb-3'>
            {technicalSkills.frameworks.map((skills, index) => (
                < li
                    key={index}
                    className="bg-[var(--secondary)]/15 px-3 py-1 text-sm font-medium text-[var(--primary)]"
                    style={{ fontFamily: "var(--font-label)" }}
                >
                    {skills}
                </li>
            ))}
        </ul> 
        <h3 className='text-sm text-[var(--neutral)] mb-3'>
            CLOUD
        </h3>
        <ul className='flex flex-wrap gap-2 mb-3'>
            {technicalSkills.cloud.map((skills, index) => (
                < li
                    key={index}
                    className="bg-[var(--secondary)]/15 px-3 py-1 text-sm font-medium text-[var(--primary)]"
                    style={{ fontFamily: "var(--font-label)" }}
                >
                    {skills}
                </li>
            ))}
        </ul> 
        <h3 className='text-sm text-[var(--neutral)] mb-3'>
            TOOLS
        </h3>
        <ul className='flex flex-wrap gap-2 mb-3'>
            {technicalSkills.tools.map((skills, index) => (
                < li
                    key={index}
                    className="bg-[var(--secondary)]/15 px-3 py-1 text-sm font-medium text-[var(--primary)]"
                    style={{ fontFamily: "var(--font-label)" }}
                >
                    {skills}
                </li>
            ))}
        </ul> 
        <h3 className='text-sm text-[var(--neutral)] mb-3'>
            OTHER
        </h3>
        <ul className='flex flex-wrap gap-2 mb-3'>
            {technicalSkills.etc.map((skills, index) => (
                < li
                    key={index}
                    className="bg-[var(--secondary)]/15 px-3 py-1 text-sm font-medium text-[var(--primary)]"
                    style={{ fontFamily: "var(--font-label)" }}
                >
                    {skills}
                </li>
            ))}
        </ul> 
    </section>
  )
}

export default TechnicalSkills