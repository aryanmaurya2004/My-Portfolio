import React from 'react';
import heroImage from '../assets/myimage.png'; 

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
      
      
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroImage} 
          alt="Background" 
          className="w-full h-full object-cover brightness-80" 
        />
      </div>

      
      <div className="z-10  pl-200 px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Hi, I’m <span className="text-sky-400">Aryan</span>
        </h1>
        
        <p className="mt-4 text-xl text-gray-200 font-medium">
          A Frontend Developer who turns ideas into UI
        </p>

        <button className="mt-8 px-8 py-3 bg-sky-500 text-white font-bold rounded-lg shadow-lg hover:bg-sky-400 hover:scale-105 transition-all duration-300">
          Start My Journey
        </button>
      </div>

    </section>
  );
};

export default Hero;