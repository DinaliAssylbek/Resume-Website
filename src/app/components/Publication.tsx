import { IoDocumentTextOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { publications } from "@/data/publications";
import type { Publication } from "@/types/publication";

const Publications = () => {
  return (
    <section className="py-12 mr-20 ml-10">
      <div className="mb-12 flex items-center gap-4">
        <IoDocumentTextOutline className="text-3xl text-[var(--secondary)]" />
        <h2 className="text-xl font-bold text-[var(--primary)]">
          Publications
        </h2>
      </div>

      <div className="divide-y divide-[var(--neutral)]/20">
        {publications.map((publication, index) => (
          <PublicationCard key={index} publication={publication} />
        ))}
      </div> 
    </section>
  );
};

const PublicationCard = ({ publication }: { publication: Publication }) => {
  const doi = publication.url.replace("https://", "");

  return (
    <article className="flex items-start gap-3 py-6 first:pt-0 last:pb-0">
      <TiDocumentText className="mt-0.5 shrink-0 text-3xl text-[var(--neutral)]" />

      <div>
        <p className="mb-2 text-[var(--neutral)]">{publication.citation}</p>
        <a
          href={publication.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--secondary)] hover:underline"
        >
          {doi}
        </a>
      </div>
    </article>
  );
};

export default Publications;
