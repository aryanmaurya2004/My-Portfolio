import React from 'react'

const skills = () => {
    const skills = ["HTML","CSS","Javascript","react.js","Tailwind","GithHub"];
  return (
    <section className="py-20 bg-slate-950 text-white">
      
      <div className='   pt-10 pb-5 bg-slate-500'>

      <h2 className="text-3xl text-center font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div
          key={skill}
          className="p-6 bg-slate-800 rounded-lg text-center hover:scale-110 transition"
          >
            {skill}
          </div>
        ))}
      </div>
        </div>
    </section>
    
  );
};

export default skills;