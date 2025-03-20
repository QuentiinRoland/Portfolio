import React from 'react'

function AboutSection() {
  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold'>A propos</h2>
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-6'>
            <div className='bg-gradient-to-r from-black-custom via-purple-custom to-orange-custom bg-opacity-70 backdrop-blur-xl shadow-lg shadow-black/30 
            md:col-span-2 p-6 rounded-xl'>
                <h3 className="font-bold text-2xl text-white">📅 Prenons rendez-vous</h3>
                <p className="text-white opacity-80">Besoin d’échanger sur un projet ou une collaboration ?  
                Réserve un créneau directement via mon calendrier ici : <a href="#" className="text-orange-300 font-bold">Planifier un appel</a></p>
            </div>

            <div className='rounded-xl overflow-hidden md:col-span-1'>
                <img src="/PhotoProDev.jpg" alt="QR Logo" className="w-full h-full object-cover" />
            </div>

            <div className='bg-gradient-to-br from-black-custom via-purple-custom to-orange-custom bg-opacity-70 backdrop-blur-lg shadow-lg shadow-black/30 
            p-6 rounded-xl flex flex-col justify-center items-center text-center'>
                <h3 className="font-bold text-4xl text-white">+ 7</h3>
                <p className="text-white opacity-80">Entreprises accompagnées dans leur transformation digitale.</p>
            </div>

            <div className='bg-gradient-to-br from-black-custom via-purple-custom to-orange-custom bg-opacity-70 backdrop-blur-lg shadow-lg shadow-black/30
            p-6 rounded-xl text-white'>
                <h3 className="font-bold text-2xl">🛠️ Mes outils</h3>
                <p className="opacity-80">
                    🖥️ <strong>Développement</strong> : VS Code, GitHub, Docker, Postman  
                    🎨 <strong>Design</strong> : Figma, Framer, Tailwind CSS  
                    🚀 <strong>Productivité</strong> : Notion, Obsidian, Raycast
                </p>
            </div>

            <div className='bg-gradient-to-br from-black-custom via-purple-custom to-orange-custom bg-opacity-70 backdrop-blur-lg shadow-lg shadow-black/30 
            md:col-span-1 md:row-span-2 p-6 rounded-xl flex flex-col justify-center text-white'>
                <h3 className="font-bold text-2xl">👨‍💻 Qui suis-je ?</h3>
                <p className="opacity-80">Salut ! Je suis Quentin Roland, développeur full-stack et designer UX passionné par la création d'expériences digitales impactantes.
                J'accompagne les entreprises et entrepreneurs à transformer leurs idées en produits performants, accessibles et optimisés.</p>
            </div>


            <div className='bg-gradient-to-br from-black-custom via-purple-custom to-orange-custom backdrop-blur-lg shadow-lg shadow-black/30
            md:col-span-2 p-6 rounded-xl flex flex-col justify-center items-center text-center text-white'>
                <h3 className="font-bold text-2xl">🚀 Mon approche</h3>
                <p className="opacity-80">J’accorde une grande importance à la **performance, l’UX et l’accessibilité**.  
                Chaque projet est pensé pour être **scalable et optimisé** afin d'offrir la meilleure expérience possible aux utilisateurs.</p>
            </div>

        </div>
    </div>

  )
}

export default AboutSection;
