import { Footer } from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import type { Project } from "./types";

const projects: Project[] = [
  {
    name: "Onlinewatermarks",
    url: "https://onlinewatermarks.com",
    year: "2025",
    favicon: "/favicons/onlinewatermarks.svg",
  },
  {
    name: "Party Battle",
    url: "https://party-battle.thirty-degrees.ch",
    github: "https://github.com/thirty-degrees/party-battle",
    year: "2025",
    favicon: "/favicons/party-battle.png",
  },
  {
    name: "Jetski",
    url: "https://jetski.calfur.dev",
    github: "https://github.com/Calfur/jetski",
    year: "2025",
    favicon: "/favicons/jetski.ico",
  },
  {
    name: "Pannenstreifen",
    url: "https://pannenstreifen.calfur.dev",
    github: "https://github.com/Calfur/HighwaySimulator",
    year: "2023",
    favicon: "/favicons/pannenstreifen.png",
  },
  {
    name: "Q-Swiper",
    url: "https://q-swiper.calfur.dev",
    github: "https://github.com/q-swiper",
    year: "2020",
    favicon: "/favicons/q-swiper.ico",
  },
  {
    name: "Balloon Race",
    url: "https://balloon-race.calfur.dev",
    github: "https://github.com/Calfur/hot-air-balloon-race",
    year: "2019",
    favicon: "/favicons/balloon-race.png",
  },
  {
    name: "StarWars Bild Countdown",
    url: "https://star-wars-bild-countdown.calfur.dev",
    github: "https://github.com/Calfur/star-wars-bild-countdown",
    year: "2024",
    favicon: "/favicons/star-wars-countdown.ico",
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
