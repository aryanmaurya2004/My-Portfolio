import React from 'react'

const journey = () => {
  return (
    <section className=" relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden py-20 bg-slate-500 text-white">
      <h2 className=" text-3xl text-center font-bold mb-10">
        My Journey 🚀
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="p-6 bg-slate-800 rounded-lg">
          📘 Started learning HTML, CSS & JavaScript
        </div>
        <div className="p-6 bg-slate-800 rounded-lg">
          ⚛️ Built projects using React & Tailwind
        </div>
        <div className="p-6 bg-slate-800 rounded-lg">
          💼 Looking for Frontend Developer role
        </div>
      </div>
    </section>
  );
};

export default journey;