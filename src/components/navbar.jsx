import React from 'react'

const navbar = () => {
  return (
    <nav className='fixed top-0 w-full bg-gray-300 text-white flex justify-around  gap-15 px-6 py-2'>
        <h2 className='text-xl font-bold font-popins  drop-shadow-md text-sky-400'> Aryan.dev <span >&lt;/&gt;</span> </h2>
         
        <ul className=' flex text-black gap-8 pt-2 hover:scale-105 transition-all duration-300 cursor-pointer'>
            <li className=''>skills</li>
            <li className=''>journey</li>
            <li className=''>project</li>
            <li className=''>contact</li>
        </ul>
        
   <button
  class="px-5 py-2.5 rounded-lg bg-sky-400 text-white text-sm font-medium
         shadow-[0_8px_20px_rgba(99,102,241,0.4)]
         hover:shadow-[0_12px_30px_rgba(99,102,241,0.7)]
         hover:scale-105
         transition-all duration-300
         cursor-pointer"
>
  Resume
</button>

    </nav>
  );
};

export default navbar;