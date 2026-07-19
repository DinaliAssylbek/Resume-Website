import { RiGraduationCapLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { education } from "@/data/education";
import type { Education as EducationEntry } from "@/types/education";

const Education = () => {
  return (
    <section id="education" className="scroll-mt-24 py-12 ml-page mr-10">
      <div className="mb-12 flex items-center gap-4">
        <RiGraduationCapLine className="text-3xl text-[var(--secondary)]" />
        <h2 className="text-xl font-bold text-[var(--primary)]">Education</h2>
      </div>

      {education.map((entry) => (
        <EducationCard key={`${entry.school}-${entry.degree}`} entry={entry} />
      ))}
    </section>
  );
};

const EducationCard = ({ entry }: { entry: EducationEntry }) => {
  return (
    <article className="border-l-4 border-[var(--secondary)] p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-[var(--primary)]">{entry.school}</h3>
        <span
          className="text-[var(--neutral)]"
          style={{ fontFamily: "var(--font-label)" }}
        >
          {entry.location}
        </span>
      </div>

      <h4 className="mb-4 text-xl font-bold text-[var(--primary)]">
        {entry.degree}
      </h4>

      <div className="mb-6 flex items-center justify-between text-[var(--neutral)]">
        <span>GPA: {entry.gpa}</span>
        <span style={{ fontFamily: "var(--font-label)" }}>{entry.dates}</span>
      </div>

      <ul className="space-y-3">
        {entry.highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-4">
            <FaRegCircleCheck className="text-[var(--neutral)]" />
            <span className="text-[var(--neutral)]">{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Education;
