import React from 'react'

const Dream = () => {
  return (
    <section className="py-12 px-12 bg-white">
    <h2 className="text-3xl font-bold mb-2">MILESTONE <span className="font-normal">Where Dreams Find A Global Address.</span></h2>
    <h3 className="text-xl mb-8">Explore Properties Crafted For Everyone, Everywhere.</h3>

    <p className="text-gray-600 mb-8 max-w-4xl">
    we’re all about making your property dreams come true. Our small, Pune-based team, with five years of know-how, excels in creating custom land and building projects. Since starting in 2025, we’ve focused on delivering options that fit your goals perfectly. From standout designs to hands-on service, we’re here to build spaces you’ll love. Ready to see your ideas take shape? Reach out to Milestone now!    </p>

    <button className="bg-gray-100 text-gray-800 rounded-full py-3 px-6 flex items-center border border-gray-200 hover:bg-gray-200 mb-12">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Contact Us Today
    </button>

    {/* Property Cards */}
    <div className="flex space-x-6">
        {/* Property Card 1 */}
        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md w-1/3 relative">
            <img src="https://res.cloudinary.com/dyka5knvr/image/upload/v1743832522/WhatsApp_Image_2025-04-05_at_11.21.38_ud8gkz.jpg" alt="Harmony Haven" className="w-full h-48 object-cover" />
            <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm">New</div>
            <div className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Harmony Haven</h3>
                <p className="text-gray-600 text-sm mb-4">Geneva, Valley Mountains</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-4">Bedrooms: 3</span>
                    <span className="mr-4">Bathrooms: 2</span>
                    <span>1,250 sq. ft.</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                    Harmony Haven, a serene 3 bed, 2 bath retreat offering mesmerizing 1,250 sq. ft. of exquisite living space. A perfect harmony of comfort and style, Designed with care to bring tranquility at your home.
                </p>
               
            </div>
        </div>

        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md w-1/3 relative">
            <img src="https://res.cloudinary.com/dyka5knvr/image/upload/v1743832521/WhatsApp_Image_2025-04-05_at_11.21.39_rdnps4.jpg" alt="Harmony Haven" className="w-full h-48 object-cover" />
            <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm">New</div>
            <div className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Harmony Haven</h3>
                <p className="text-gray-600 text-sm mb-4">Geneva, Valley Mountains</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-4">Bedrooms: 3</span>
                    <span className="mr-4">Bathrooms: 2</span>
                    <span>1,250 sq. ft.</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                    Harmony Haven, a serene 3 bed, 2 bath retreat offering mesmerizing 1,250 sq. ft. of exquisite living space. A perfect harmony of comfort and style, Designed with care to bring tranquility at your home.
                </p>
               
            </div>
        </div>


        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md w-1/3 relative">
            <img src="https://res.cloudinary.com/dyka5knvr/image/upload/v1743832520/WhatsApp_Image_2025-04-05_at_11.21.49_cteuly.jpg" alt="Harmony Haven" className="w-full h-48 object-cover" />
            <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm">New</div>
            <div className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Harmony Haven</h3>
                <p className="text-gray-600 text-sm mb-4">Geneva, Valley Mountains</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-4">Bedrooms: 3</span>
                    <span className="mr-4">Bathrooms: 2</span>
                    <span>1,250 sq. ft.</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                    Harmony Haven, a serene 3 bed, 2 bath retreat offering mesmerizing 1,250 sq. ft. of exquisite living space. A perfect harmony of comfort and style, Designed with care to bring tranquility at your home.
                </p>
               
            </div>
        </div>

    </div>
</section>
  )
}

export default Dream