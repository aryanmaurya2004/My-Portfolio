import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { 
          name: "React.js", 
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="2"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>,
          level: "90%",
          color: "sky"
        },
        { 
          name: "JavaScript", 
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
          level: "85%",
          color: "yellow"
        },
        { 
          name: "Tailwind CSS", 
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>,
          level: "95%",
          color: "cyan"
        },
        { 
          name: "HTML5 & CSS3", 
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>,
          level: "95%",
          color: "orange"
        }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { 
          name: "Git & GitHub", 
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-3-7-2"/></svg>,
          level: "80%",
          color: "purple"
        },
        { 
          name: "VS Code", 
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
          level: "90%",
          color: "blue"
        },
        { 
          name: "Vite", 
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="m12 2 10 3-3 10-7 7-7-7-3-10z"/></svg>,
          level: "85%",
          color: "indigo"
        }
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-[#0a0a1a] overflow-hidden" id="skills">
      {/* Background Glows */}
      <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-sky-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Technical <span className="text-sky-400">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-2xl font-bold text-white/90 pl-4 border-l-4 border-sky-400">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-sky-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(56,189,248,0.3)]"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 bg-white/5 rounded-xl group-hover:scale-110 group-hover:bg-sky-400/10 transition-all duration-300 text-sky-400`}>
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-medium text-gray-400">
                        <span>Proficiency</span>
                        <span className="text-sky-400">{skill.level}</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-1000 ease-out"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>

                    {/* Subtle Gradient Glow on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none bg-gradient-to-br from-sky-400/5 to-transparent"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;