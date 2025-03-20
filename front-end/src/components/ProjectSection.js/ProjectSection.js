import { useState } from 'react';

export const ProjectSection = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Loan Planner.com',
      description: 'Logo, Full Redesign and Branding.',
      image: '/loan-planner.jpg',
      tags: ['Design', 'UI/UX'],
    },
    {
      id: 2,
      title: 'Schwarz.com',
      description: 'Mobile Apps Design and Branding.',
      image: '/schwarz-app.jpg',
      tags: ['All case study', 'Apps', 'UI/UX'],
    },
    {
      id: 3,
      title: 'Babk.c.org',
      description: 'Design, Logo and Branding.',
      image: '/babk-website.jpg',
      tags: ['Design', 'UI/UX'],
    },
    {
      id: 4,
      title: 'Mobile Apps',
      description: 'Design and Branding.',
      image: '/mobile-app-design.jpg',
      tags: ['Design', 'UI/UX'],
    },
  ]);

  return (
    <div className=" bg-white">
      <main className="max-w-5xl mx-auto px-2 py-20">
        <header className="mb-16 flex items-center justify-between">
          <h1 className="text-4xl font-serif font-bold text-gray-900 md:text-5xl">
            Our Recent <br />
            Work & Portfolio
          </h1>
          <div className="hidden md:block">
            <div className="h-12 w-12 rounded-full border border-amber-300 flex items-center justify-center">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-amber-300"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="relative bg-gray-100 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-12 relative">
                <div className="w-full h-full bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    {project.title}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs bg-gray-200 rounded-full text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                  <div className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path 
                        d="M7 17L17 7M17 7H7M17 7V17" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}