import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: "url('https://res.cloudinary.com/dyka5knvr/image/upload/v1743835692/bg_g3yezj.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative text-center px-12">
                    <h2 className="text-3xl font-bold text-white mb-8">Subscribe To Our Newsletter</h2>
                    <div className="max-w-lg mx-auto flex">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="flex-grow py-3 px-4 rounded-l-full focus:outline-none"
                        />
                        <button className="bg-teal-700 text-white py-3 px-6 rounded-r-full hover:bg-teal-800">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
  )
}

export default Newsletter