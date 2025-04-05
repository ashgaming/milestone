import React from 'react'

const Inquiry = () => {
    return (
        <section className="py-20 px-12 bg-gray-100">
            <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex">
                    <div className="w-1/2 pr-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span className="text-teal-700 font-medium">Direct Inquiry</span>
                        </div>

                        <h2 className="text-2xl font-bold mb-4">Your Dream Home Awaits!</h2>
                        <h3 className="text-xl mb-8">Chat With Our Experts For Free Guidance Today.</h3>

                        <p className="text-gray-600 mb-8">
                            Need help or personalized recommendations for your next homeownership? Trust us to deliver not just properties, but a personalized experience unique just for you. Our team of seasoned consultants is committed to providing the same.
                        </p>

                        <button className="bg-gray-200 text-gray-800 rounded-full py-3 px-6 flex items-center hover:bg-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Contact Us Today
                        </button>
                    </div>

                    <div className="w-1/2 pl-8 flex items-center justify-center">
                        <img src="https://res.cloudinary.com/dyka5knvr/image/upload/v1743834234/59c79ba6a11988ea50a82fc3d495a485-removebg-preview_w1pivx.png" alt="Real Estate Agent" className="absolute h-[800px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inquiry