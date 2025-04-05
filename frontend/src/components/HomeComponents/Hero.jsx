import React from 'react'
import Scene3D from '../Scene3D'

const Hero = () => {
  return (
    <section className="relative h-screen w-screen bg-cover bg-center" style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}>
    <Scene3D />

    <div className="absolute inset-0 bg-black bg-opacity-40">
    <div className="relative h-full flex flex-col justify-center px-12 max-w-4xl">
      <h1 className="text-5xl font-bold text-teal-100 leading-tight">
        ELEVATE YOUR<br />
        LIVING WITH<br />
        <span className="text-white">EXCEPTIONAL ESTATES</span>
      </h1>
      <p className="text-white text-lg mt-4 max-w-2xl">
        Experience Epic Real Estate Journey With Our Personalized Approach And Versatile Resources.
        Enabling You Dream Property Transformations,
        From Imagination And Design To Real Estate Performance And Beyond.
      </p>
      
      <div className="flex mt-8 space-x-4">
        <button className="bg-gray-800 bg-opacity-60 text-white rounded-full p-4 hover:bg-opacity-80 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <span className="text-white flex items-center">Play Video</span>
        
        <div className="ml-6">
          <button className="bg-white rounded-full py-3 px-6 flex items-center">
            <span className="mr-2">70+ New Houses Ready</span>
            <div className="bg-gray-800 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
    </div>
    
    {/* Dots Navigation */}
    {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {[0, 1, 2, 3, 4].map((index) => (
        <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-400'}`}></div>
      ))}
    </div> */}
  </section>
  )
}

export default Hero