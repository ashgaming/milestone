import React from 'react'

const Demo = () => {
  return (
    <section className="py-12 px-12 bg-white">
      <div className="flex">
        <div className="w-1/2 pr-12">
        
          <div className="flex justify-center items-center mb-6">

            <img src="https://res.cloudinary.com/dyka5knvr/image/upload/v1743830824/WhatsApp_Image_2025-04-04_at_14.17.20_oa9ufm.jpg" alt="logo" className="max-w-96 object-cover max-h-96  rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="w-1/2 pl-12">
          <h2 className="text-3xl font-bold mb-2">Trust In Excellence, <span className="font-normal">Believe In Home.</span></h2>
          <h3 className="text-xl mb-8">Your Dream Property Awaits With MileStone.</h3>

          <div className="flex justify-between mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-700">35K+</div>
              <div className="text-gray-600">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-700">40K+</div>
              <div className="text-gray-600">Units Ready</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-700">10K+</div>
              <div className="text-gray-600">Units Sold</div>
            </div>
          </div>

          <p className="text-gray-600 mb-8">
            Looking for your dream home in Pune? Milestone, your trusted construction partner since 2025, is here to make homeownership a reality. As a small, dedicated company with five years of experience, our seasoned team offers personalized guidance, turning your unique vision into a perfectly crafted home. Specializing in land and building projects, we bring expertise, passion, and valuable insights to every step of your journey. Contact Milestone today and let’s build your future together!        </p>

          <button className="bg-gray-100 text-gray-800 rounded-full py-3 px-6 flex items-center border border-gray-200 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Start Buying Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Demo