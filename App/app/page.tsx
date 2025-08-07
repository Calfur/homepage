import ProjectCard from './components/ProjectCard';
import type { Project } from './types';

const projects: Project[] = [
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
    github: "https://github.com/star-wars-bild-countdown",
    year: "2024",
    favicon: "/favicons/star-wars-countdown.ico",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            calfur.dev
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            a collection of projects I was involved in over the years
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
