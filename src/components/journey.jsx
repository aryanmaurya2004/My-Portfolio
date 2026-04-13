import React from 'react';

const Journey = () => {
  const milestones = [
    {
      title: "The Beginning",
      description: "Started my journey into the world of web development, falling in love with HTML, CSS & JavaScript.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      ),
      period: "Early 2023"
    },
    {
      title: "Building & Projects",
      description: "Dove deep into React and Tailwind CSS, building responsive and interactive user interfaces.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      ),
      period: "Late 2023 - 2024"
    },
    {
      title: "The Career Hunt",
      description: "Actively working on real-world projects and seeking opportunities to contribute to professional teams.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
      ),
      period: "Present"
    },
    {
      title: "The Future",
      description: "Mastering Full Stack development and creating innovative solutions that impact lives.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path></svg>
      ),
      period: "Soon"
    }
  ];

  return (
    <section className="relative min-h-screen py-24 bg-[#0a0a1a] overflow-hidden">
      {/* Abstract Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[20%] w-64 h-64 bg-sky-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            My <span className="text-sky-400">Journey</span>
          </h2>
          <div className="w-24 h-1.5 bg-sky-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[30px] md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-sky-400/20 via-sky-400 to-sky-400/20"></div>

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <div key={index} className={`flex items-center w-full relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                  <div className={`group relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-sky-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(56,189,248,0.3)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      {/* Icon for mobile (always on left) or alternate side for desktop */}
                      <div className={`p-3 bg-sky-400/10 rounded-lg group-hover:bg-sky-400/20 transition-colors ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} order-1`}>
                        {item.icon}
                      </div>
                      <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} order-2`}>
                        <span className="text-sky-400 text-sm font-bold tracking-wider">{item.period}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mt-1">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="absolute left-[30px] md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center w-4 h-4 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)] border-4 border-[#0a0a1a]"></div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;