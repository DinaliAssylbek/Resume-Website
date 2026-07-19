"use client";

import { useEffect, useState } from "react";
import { FiExternalLink, FiX } from "react-icons/fi";
import { projects } from "@/data/project";
import type { Project } from "@/types/project";
import Image from "next/image";
import { HiOutlineDesktopComputer } from "react-icons/hi";

type PreviewImage = {
  src: string;
  alt: string;
};

const splitIntoColumns = <T,>(items: T[], columnCount: number): T[][] => {
  const columns = Array.from({ length: columnCount }, () => [] as T[]);
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });
  return columns;
};

const useProjectColumnCount = () => {
  const [columnCount, setColumnCount] = useState(1);

  useEffect(() => {
    const xlQuery = window.matchMedia("(min-width: 80rem)");
    const mdQuery = window.matchMedia("(min-width: 48rem)");

    const update = () => {
      if (xlQuery.matches) setColumnCount(3);
      else if (mdQuery.matches) setColumnCount(2);
      else setColumnCount(1);
    };

    update();
    xlQuery.addEventListener("change", update);
    mdQuery.addEventListener("change", update);

    return () => {
      xlQuery.removeEventListener("change", update);
      mdQuery.removeEventListener("change", update);
    };
  }, []);

  return columnCount;
};

const Projects = () => {
  const [preview, setPreview] = useState<PreviewImage | null>(null);
  const columnCount = useProjectColumnCount();
  const columns = splitIntoColumns(projects, columnCount);

  useEffect(() => {
    if (!preview) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreview(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [preview]);

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-page py-12"
      style={{ backgroundColor: "#f4f6ff" }}
    >
      <div className="flex justify-between">
        <div className="flex">
          <HiOutlineDesktopComputer className="mr-3 text-3xl text-[var(--secondary)]" />
          <h1 className="mb-7 text-2xl font-bold text-[var(--primary)]">
            Featured Projects
          </h1>
        </div>
        <h2
          className="text-l text-[var(--secondary)]"
          style={{ fontFamily: "var(--font-label)" }}
        >
          / {projects.length} TOTAL PROJECTS
        </h2>
      </div>
      <div className="grid grid-cols-1 items-start gap-x-8 md:grid-cols-2 xl:grid-cols-3">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex}>
            {column.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onImageClick={setPreview}
              />
            ))}
          </div>
        ))}
      </div>

      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={preview.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--darker)]/80 p-6"
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute top-5 right-5 text-white/80 transition hover:text-white"
            onClick={() => setPreview(null)}
          >
            <FiX className="text-3xl" />
          </button>
          <div
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={preview.src}
              alt={preview.alt}
              width={1400}
              height={900}
              className="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

const ProjectCard = ({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: (preview: PreviewImage) => void;
}) => {
  return (
    <article className="mb-8 border border-[var(--neutral)]/20 shadow-sm">
      {project.imagePath && (
        <button
          type="button"
          aria-label={`Preview ${project.title} image`}
          className="relative h-55 w-full cursor-zoom-in overflow-hidden"
          onClick={() =>
            onImageClick({ src: project.imagePath!, alt: project.title })
          }
        >
          <Image
            src={project.imagePath}
            alt={project.title}
            fill
            className="object-cover transition duration-300 hover:scale-[1.02]"
          />
        </button>
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
