export type ProjectLinkType = "website" | "github" | "steam" | "googlePlay";

export type ProjectLink = {
  type: ProjectLinkType;
  url: string;
};

export type Project = {
  name: string;
  year: string;
  favicon: string;
  links: ProjectLink[];
};
