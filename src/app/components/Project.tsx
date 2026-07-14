import { FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/project";
import type { Project } from "@/types/project";

const Projects = () => {
  return (
    <section className="mx-20 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="border border-[var(--neutral)]/20 p-6 shadow-sm">
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
    </article>
  );
};

export default Projects;
