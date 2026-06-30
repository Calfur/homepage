import Image from "next/image";
import GitHubIcon from "./GitHubIcon";
import GooglePlayIcon from "./GooglePlayIcon";
import LinkButton from "./LinkButton";
import SteamIcon from "./SteamIcon";
import type { Project, ProjectLinkType } from "../types";

type LinkTypeConfig = {
  label: string;
  ariaLabel: (projectName: string) => string;
  Icon?: () => React.JSX.Element;
};

const linkTypeConfig: Record<ProjectLinkType, LinkTypeConfig> = {
  website: {
    label: "Website",
    ariaLabel: (projectName) => `Open website for ${projectName}`,
  },
  github: {
    label: "GitHub",
    ariaLabel: (projectName) => `Open GitHub repository for ${projectName}`,
    Icon: GitHubIcon,
  },
  steam: {
    label: "Steam",
    ariaLabel: (projectName) => `Open Steam page for ${projectName}`,
    Icon: SteamIcon,
  },
  googlePlay: {
    label: "Google Play",
    ariaLabel: (projectName) => `Open Google Play listing for ${projectName}`,
    Icon: GooglePlayIcon,
  },
};

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

        <div className="mt-auto flex flex-wrap gap-3">
          {project.links.map((link) => {
            const { label, ariaLabel, Icon } = linkTypeConfig[link.type];

            return (
              <LinkButton
                key={`${link.type}-${link.url}`}
                href={link.url}
                label={label}
                ariaLabel={ariaLabel(project.name)}
                icon={Icon ? <Icon /> : undefined}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
