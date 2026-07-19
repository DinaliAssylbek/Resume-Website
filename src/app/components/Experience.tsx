import React from 'react'
import { experiences } from '@/data/experience'
import { MdOutlineWorkOutline } from "react-icons/md";
import { Experience as ExperienceEntry } from '@/types/experience';
import { FiExternalLink } from "react-icons/fi";


const Experience = () => {
  return (
    <section id="experience" className='mx-20 scroll-mt-24'>
        <div className='flex gap-3 mb-5'>
            <MdOutlineWorkOutline className='text-3xl text-[var(--secondary)]'/>
            <h1 className='text-2xl font-bold text-[var(--primary)]'>
                Experience
            </h1>
        </div>
        <div className='space-y-10'>
            {experiences.map((experience, index) => (
                <ExperienceCard key={index} entry={experience}/>
            ))}
        </div>
    </section>
  )
}

const ExperienceCard  = ({ entry }: { entry: ExperienceEntry }) => {
  return (
    <article className="flex gap-4">
        <div className="flex w-3 shrink-0 flex-col items-center self-stretch">
            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--secondary)]" />
            <span className="mt-2 w-px flex-1 bg-[var(--neutral)]/40" />
        </div>

        <div className="min-w-0 flex-1">
            <div className='flex justify-between'>
                <div>
                    <h3 className='font-bold text-lg text-[var(--primary)]'>
                        {entry.company}
                    </h3>
                    <p className='text-lg text-[var(--secondary)] italic'>
                        {entry.title}
                    </p>
                </div>
                <p className='text-[var(--neutral)] text-lg'>
                    {entry.from} - {entry.to}
                </p>
            </div>
            {entry.info.map((point, key) => (
                <div key={key} className="flex items-start gap-3 my-3">
                    <p>//</p>
                    <p className="text-base text-[var(--neutral)]">
                        {point}
                    </p>
                </div>
            ))}
            {entry.links && entry.links.map((link, index) => (
                <a key={index} href={link[1]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--secondary)] hover:underline mr-3">
                    {link[0]}
                    <FiExternalLink className="text-xl" />
                </a>
            ))}
        </div>
    </article>
  )
}


export default Experience