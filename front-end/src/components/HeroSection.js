import React from 'react';

const ServiceCard = ({ title, icon, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
      <div className={`p-6 ${color} relative`}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white bg-opacity-20">
          {icon}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-gray-800 font-medium">{title}</h3>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-black text-white overflow-hidden">
      <div className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-t from-violet-custom to-purple-custom opacity-30 blur-[80px] -left-[10%] top-[10%]"></div>
      <div className="absolute w-[35vw] h-[35vw] rounded-full bg-orange-custom opacity-30 blur-[80px] -right-[5%] top-[50%]"></div>
      <div className='flex flex-col md:flex-row justify-center items-center w-full z-10 max-w-5xl'>
        <div className='w-full md:w-1/2 p-4 '>
        <h1 className='md:text-6xl font-bold mb-2 flex items-center flex-wrap'>
            Hi, I'm 
            <span className="inline-flex items-center mx-2">
                <img src='/logo192.png' width={60} height={60} alt="Quentin Roland" className="inline-block" />
            </span> 
            Quentin Roland
        </h1>
          <p className="mb-2 text-xl">Nice to meet you ! 👋🏼</p>
          <p className="text-2xl font-semibold mb-3">Full stack developer & UX Designer</p>
          <p className="text-gray-300">
            Innovating the web with purpose and precision. As a full-stack engineer, 
            I create accessible, user-friendly digital experiences that leave a lasting impact.
          </p>
        </div>
        
        <div className='w-full md:w-1/2 p-4'>
          <div className="bg-white bg-opacity-5 rounded-xl p-3 border border-gray-800">
            <div className="flex justify-start items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="flex justify-center gap-1 mb-4">
              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <ServiceCard 
                title="Web Development" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>} 
                color="bg-blue-50" 
              />
              
              <ServiceCard 
                title="Web Design" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>} 
                color="bg-orange-50" 
              />
              
              <ServiceCard 
                title="Mobile Development" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                </svg>} 
                color="bg-purple-50" 
              />
              
              <ServiceCard 
                title="SEO & Performance" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>} 
                color="bg-green-50" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection