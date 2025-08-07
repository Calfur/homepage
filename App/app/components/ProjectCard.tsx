import Image from 'next/image';
import GitHubIcon from './GitHubIcon';
import type { Project } from '../types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl border border-gray-200/70 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/60 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <Image
              src={project.favicon}
              alt={`${project.name} favicon`}
              width={32}
              height={32}
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {project.name}
            </h3>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:ring-blue-800/50">
            {project.year}
          </span>
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open website for ${project.name}`}
            className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm transition-transform duration-200 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.99]"
          >
            Website
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open GitHub repository for ${project.name}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}


