import Image from "next/image";
import GitHubIcon from "./GitHubIcon";
import type { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl border border-stone-200/70 dark:border-stone-700/50 bg-white/80 dark:bg-stone-900/60 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <Image
              src={project.favicon}
              alt={`${project.name} favicon`}
              width={32}
              height={32}
            />
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
              {project.name}
            </h3>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700 ring-1 ring-stone-300 dark:bg-stone-800 dark:text-stone-200 dark:ring-stone-700">
            {project.year}
          </span>
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener"
            aria-label={`Open website for ${project.name}`}
            className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white bg-stone-600 shadow-sm transition-transform duration-200 hover:bg-stone-700 active:scale-[0.99]"
          >
            Website
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open GitHub repository for ${project.name}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 dark:text-stone-200 dark:bg-stone-700 dark:hover:bg-stone-600 transition-colors duration-200"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
