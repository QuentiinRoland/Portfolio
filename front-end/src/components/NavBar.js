import React, { useState, useEffect } from 'react'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`h-[70px] flex items-center fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <div className='w-4/5 mx-auto max-w-5xl flex items-center justify-between'>
            <img src='/QRDLogo.png' width={80} height={80} alt="Logo" />
            <ul className='flex gap-4'>
                <li className={`cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}>Skills</li>
                <li className={`cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}>Projects</li>
                <li className={`cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}>Experiences</li>
                <li className={`cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}>About</li>
            </ul>
            <button className={`px-4 py-2 rounded-lg ${scrolled ? 'bg-black text-white' : 'bg-[#16181D] text-white'}`}>
              Reach out
            </button>
        </div>
    </div>
  )
}

export default NavBar