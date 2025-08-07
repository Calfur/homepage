import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      name: "Jetski",
      url: "https://jetski.calfur.dev",
      github: "https://github.com/Calfur/jetski",
      year: "2025",
      favicon: "/favicons/jetski.ico"
    },
    {
      name: "Pannenstreifen",
      url: "https://pannenstreifen.calfur.dev",
      github: "https://github.com/Calfur/HighwaySimulator",
      year: "2023",
      favicon: "/favicons/pannenstreifen.png"
    },
    {
      name: "Q-Swiper",
      url: "https://q-swiper.calfur.dev",
      github: "https://github.com/q-swiper",
      year: "2020",
      favicon: "/favicons/q-swiper.ico"
    },
    {
      name: "Balloon Race",
      url: "https://balloon-race.calfur.dev",
      github: "https://github.com/Calfur/hot-air-balloon-race",
      year: "2019",
      favicon: "/favicons/balloon-race.png"
    },
    {
      name: "StarWars Bild Countdown",
      url: "https://star-wars-bild-countdown.calfur.dev",
      github: "https://github.com/star-wars-bild-countdown",
      year: "2024",
      favicon: "/favicons/star-wars-countdown.ico"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            calfur.dev
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            a collection of projects I was involved in over the years
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={project.favicon}
                      alt={`${project.name} favicon`}
                      width={32}
                      height={32}
                      className="rounded"
                    />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {project.name}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                    {project.year}
                  </span>
                </div>

                <div className="space-y-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-all duration-200 transform hover:scale-105"
                  >
                    Website
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-3 px-4 rounded-lg transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
