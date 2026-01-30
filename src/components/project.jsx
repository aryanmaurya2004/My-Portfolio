import React from 'react'

const project = () => {
  return (
    <section className="py-20 bg-slate-500 text-white">
      <h2 className="text-3xl text-center font-bold mb-10">
        Projects 📁
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="  p-6 bg-slate-800 rounded-lg">
          <h3 className="text-xl font-semibold">Tourism Website</h3>
          <p className=" text-gray-400 mt-2">
            React + Tailwind based responsive site
          </p>
        </div>

        <div className="p-6 bg-slate-800 rounded-lg">
          <h3 className="text-xl font-semibold">Login/Signup Page</h3>
          <p className="text-gray-400 mt-2">
            Dynamic using React
          </p>
        </div>
      </div>
    </section>
  )
}

export default project