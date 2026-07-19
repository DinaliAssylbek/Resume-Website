import { FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/project";
import type { Project } from "@/types/project";
import Image from "next/image";
import { HiOutlineDesktopComputer } from "react-icons/hi";


const Projects = () => {

  const leftColumn = projects.filter((_, index) => index % 3 === 0);
  const middleColumn = projects.filter((_, index) => index % 3 === 1);
  const rightColumn = projects.filter((_, index) => index % 3 === 2);

  return (
    <section id="projects" className="scroll-mt-24 px-page py-12" style={{backgroundColor: "#f4f6ff"}}>
      <div className="flex justify-between">
        <div className="flex">
          <HiOutlineDesktopComputer className="text-3xl mr-3 text-[var(--secondary)]"/>
          <h1 className="font-bold text-2xl text-[var(--primary)] mb-7">
            Featured Projects
          </h1>
        </div>
        <h2 className="text-l text-[var(--secondary)]" style={{ fontFamily: "var(--font-label)" }}>
          / {projects.length} TOTAL PROJECTS
        </h2>
      </div>
      <div className="grid grid-cols-1 items-start gap-x-8 md:grid-cols-2 xl:grid-cols-3">
        <div>
           {leftColumn.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div>
           {middleColumn.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div>
           {rightColumn.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="border border-[var(--neutral)]/20 shadow-sm mb-8">
      {project.imagePath && (
        <div className="relative w-full h-55 overflow-hidden">
            <Image
                src={project.imagePath}
                alt={project.title}
                fill
                className="object-cover"
            />
        </div>
      )}
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-[var(--primary)]">
          {project.title}
        </h3>
        <span
          className="shrink-0 text-sm text-[var(--neutral)]"
          style={{ fontFamily: "var(--font-label)" }}
        >
          {project.date}
        </span>
      </div>

      <p className="mb-4 text-[var(--neutral)]">{project.description}</p>

      <ul className="mb-4 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <li
            key={skill}
            className="bg-[var(--secondary)]/15 px-3 py-1 text-sm font-medium text-[var(--primary)]"
            style={{ fontFamily: "var(--font-label)" }}
          >
            {skill.toUpperCase()}
          </li>
        ))}
      </ul>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[var(--secondary)] hover:underline"
        >
          View Project
          <FiExternalLink className="text-xl" />
        </a>
      )}
      </div>
    </article>
  );
};

export default Projects;
