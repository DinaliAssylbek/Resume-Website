import React from 'react'
import { experiences } from '@/data/experience'
import { MdOutlineWorkOutline } from "react-icons/md";
import { Experience as ExperienceEntry } from '@/types/experience';


const Experience = () => {
  return (
    <section className='mx-20'>
        <div className='flex gap-3 mb-5'>
            <MdOutlineWorkOutline className='text-3xl text-[var(--secondary)]'/>
            <h1 className='text-2xl font-bold text-[var(--primary)]'>
                Experience
            </h1>
        </div>
        <div>
            {experiences.map((experience, index) => (
                <ExperienceCard key={index} entry={experience}/>
            ))}
        </div>
    </section>
  )
}

const ExperienceCard  = ({ entry }: { entry: ExperienceEntry }) => {
  return (
    <article>
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
    </article>
  )
}


export default Experience