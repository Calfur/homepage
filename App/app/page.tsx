import { Footer } from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import type { Project } from "./types";

const projects: Project[] = [
  {
    name: "Stellar Frontline",
    year: "2026",
    favicon: "/favicons/stellar-frontline.png",
    links: [
      {
        type: "steam",
        url: "https://store.steampowered.com/app/4362660/Stellar_Frontline/",
      },
    ],
  },
  {
    name: "Onlinewatermarks",
    year: "2025",
    favicon: "/favicons/onlinewatermarks.svg",
    links: [{ type: "website", url: "https://onlinewatermarks.com" }],
  },
  {
    name: "Party Battle",
    year: "2025",
    favicon: "/favicons/party-battle.png",
    links: [
      { type: "website", url: "https://party-battle.thirty-degrees.ch" },
      { type: "github", url: "https://github.com/thirty-degrees/party-battle" },
    ],
  },
  {
    name: "Jetski",
    year: "2025",
    favicon: "/favicons/jetski.ico",
    links: [
      { type: "website", url: "https://jetski.calfur.dev" },
      { type: "github", url: "https://github.com/Calfur/jetski" },
    ],
  },
  {
    name: "Pannenstreifen",
    year: "2023",
    favicon: "/favicons/pannenstreifen.png",
    links: [
      { type: "website", url: "https://pannenstreifen.calfur.dev" },
      { type: "github", url: "https://github.com/Calfur/HighwaySimulator" },
    ],
  },
  {
    name: "Q-Swiper",
    year: "2020",
    favicon: "/favicons/q-swiper.ico",
    links: [
      { type: "website", url: "https://q-swiper.calfur.dev" },
      { type: "github", url: "https://github.com/q-swiper" },
    ],
  },
  {
    name: "Balloon Race",
    year: "2019",
    favicon: "/favicons/balloon-race.png",
    links: [
      { type: "website", url: "https://balloon-race.calfur.dev" },
      { type: "github", url: "https://github.com/Calfur/hot-air-balloon-race" },
    ],
  },
  {
    name: "StarWars Bild Countdown",
    year: "2024",
    favicon: "/favicons/star-wars-countdown.ico",
    links: [
      {
        type: "website",
        url: "https://star-wars-bild-countdown.calfur.dev",
      },
      {
        type: "github",
        url: "https://github.com/Calfur/star-wars-bild-countdown",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="flex-grow container mx-auto px-4 py-12">
        <header className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-3 text-stone-900 dark:text-stone-100">
            calfur.dev
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400">
            a collection of projects I was involved in over the years
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
