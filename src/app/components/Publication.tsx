import React from 'react'
import type { Publication } from '@/types/publication'
import { publications } from '@/data/publications';
import { TiDocumentText } from "react-icons/ti";
import { IoDocumentTextOutline } from "react-icons/io5";


type PublicationCardProps = {
    publication: Publication;
};

const Publications = () => {
  return (
    <section className="py-12 mr-20 ml-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
            <IoDocumentTextOutline
                className="text-[var(--secondary)] text-3xl"
            />

            <h2 className="text-xl font-bold text-[var(--primary)]">
                Publications
            </h2>
        </div>

         {publications.map((publication, index) => (
            <PublicationCard key={index} publication={publication}/>
        ))}
    </section>
  )
}

const PublicationCard = ({ publication }: PublicationCardProps) => {
    const doi = publication.url.replace("https://", "");
    return (
        <div className='mb-10'>
            <div className="flex items-start gap-3">
                <div className="w-8 flex justify-center">
                    <TiDocumentText className="text-3xl text-[var(--neutral)]" />
                </div>

                <div className="flex-1">
                    <p className="text-l text-[var(--neutral)] mb-2">
                        {publication.citation}
                    </p>

                    <a
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-l text-[var(--secondary)] hover:underline"
                    >
                        {doi}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Publications