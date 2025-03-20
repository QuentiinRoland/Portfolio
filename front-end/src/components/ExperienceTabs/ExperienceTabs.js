import { useState } from 'react';

export const ExperienceTabs = () => {
  const [activeCompany, setActiveCompany] = useState('Nalios');
  
  const companies = [
    { id: 'Nalios', name: 'Nalios' },
    { id: 'Sigmagency', name: 'Sigmagency' },
    { id: 'Agidrive', name: 'Agidrive' },
    { id: 'Upixis', name: 'Upixis' },
  ];
  
  const experiences = {
    'Nalios': {
      title: 'Lead Engineer @ Nalios',
      period: 'May 2018 — Present',
      responsibilities: [
        'Deliver high-quality, robust production code for a diverse array of projects...',
        'Work alongside creative directors to lead the research...',
        'Collaborate with designers, project managers, and other engineers...',
        'Provide leadership within engineering department through mentorship...'
      ]
    },
    'Sigmagency': {
      title: 'UI Engineer @ Sigmagency',
      period: 'July 2017 — April 2018',
      responsibilities: [
        'Développement d\'interfaces utilisateur pour les applications client',
        'Collaboration avec l\'équipe design pour implémenter des maquettes fidèles',
        'Optimisation des performances front-end',
        'Écriture de tests unitaires et d\'intégration'
      ]
    },
    'Agidrive': {
      title: 'Developer @ Agidrive',
      period: 'January 2016 — June 2017',
      responsibilities: [
        'Développement de sites web pour des startups et entreprises locales',
        'Création de solutions e-commerce personnalisées',
        'Gestion de projets techniques',
        'Mentorat de développeurs juniors'
      ]
    },
    'Upixis': {
      title: 'Software Engineer @ Upixis',
      period: 'October 2014 — December 2015',
      responsibilities: [
        'Développement de solutions pour le secteur des télécommunications',
        'Implémentation d\'interfaces utilisateur réactives',
        'Optimisation d\'applications pour une utilisation sur différents appareils',
        'Participation à l\'architecture technique des projets'
      ]
    },
  };
  
  const currentExperience = experiences[activeCompany] || experiences[Object.keys(experiences)[0]];
  
  return (
    <div className="relative bg-black text-gray-300 py-20 overflow-hidden">
        {/* Effets de dégradé */}
        <div className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-t from-violet-custom to-purple-custom opacity-30 blur-[80px] -left-[10%] top-[10%] pointer-events-none z-0"></div>
        <div className="absolute w-[35vw] h-[35vw] rounded-full bg-orange-custom opacity-30 blur-[80px] -right-[5%] top-[50%] pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-2xl font-semibold mb-10">
          <span className="text-orange-custom font-mono">02.</span> Where I've Worked
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Liste des entreprises */}
          <div className="md:w-48 border-l-0 md:border-l-2 border-t-2 md:border-t-0 border-gray-700 flex flex-col relative z-20">
            {companies.map((company) => (
              <button
                key={company.id}
                onClick={() => setActiveCompany(company.id)}
                className={`block text-left px-5 py-3 text-sm font-mono transition-all w-full 
                ${activeCompany === company.id ? 
                  'text-orange-custom border-l-2 md:border-l-0 border-orange-custom bg-gray-800' : 
                  'text-gray-400 hover:text-gray-200 hover:bg-gray-900'}`}
              >
                {company.name}
              </button>
            ))}
          </div>
          
          {/* Détails de l'expérience */}
          <div className="flex-1 relative z-20">
            <h3 className="text-xl font-semibold mb-2">{currentExperience.title}</h3>
            <p className="text-gray-400 mb-5 font-mono">{currentExperience.period}</p>
            
            <ul className="space-y-4">
              {currentExperience.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-custom mr-2">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
