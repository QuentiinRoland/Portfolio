import React from 'react';
import { FaTwitter, FaDribbble, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 justify-start">
            <h2 className="text-2xl font-semibold">Quentin Roland</h2>
            <div className='flex gap-2 items-center'>
                <FaEnvelope size={20} className='text-gray-400' /> 
                <a href="contact@quentinroland.com">contact@quentinroland.com</a>
            </div>
            <div className='flex gap-2 items-center'>
                <FaPhone size={20} className='text-gray-400' /> 
                <a href='tel:0496432092'>+32 496.43.20.92</a>
            </div>
            <p className='text-sm'>TVA : BE0800.794.782</p>
          </div>

          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white"><FaDribbble size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="contact@quentinroland.com" className="hover:text-white"><FaEnvelope size={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <nav className="text-gray-400 flex flex-col space-y-2 ">
            <a href="#" className="hover:text-white">return home.</a>
            <a href="#" className="hover:text-white">more about Quentin.</a>
            <a href="#" className="hover:text-white">see the work.</a>
          </nav>

          <div className="flex items-center bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-lg rounded-lg p-2">
            <span className="text-gray-400 px-2">🔒</span>
            <input 
              type="email" 
              placeholder="awesome@email.com" 
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none px-3 py-2"
            />
            <button className="bg-green-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-green-400">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-center items-center text-gray-500 text-sm">
          <p>© 2025 Quentin Roland.</p>
          <img src="/QRDLogo.png" alt="Logo Quentin Roland" className="h-72 opacity-80" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
