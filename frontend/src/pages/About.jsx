import { Award, Users, Clock, Shield } from 'lucide-react';
import { primary_text_color, primary_text_gradient } from '../theme/text.style';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function About() {

  const testImageUrl = "https://res.cloudinary.com/dyka5knvr/image/upload/v1743832520/WhatsApp_Image_2025-04-05_at_11.21.49_cteuly.jpg";

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-20 px-4 md:px-8 bg-black bg-opacity-80 relative">
        <img
          src={testImageUrl}
          alt="Milestone Construction Background"
          className="absolute h-60 w-full inset-0 object-cover bg-center bg-no-repeat bg-blend-overlay opacity-50"
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="overflow-hidden">
            <img
              src={`https://res.cloudinary.com/dyka5knvr/image/upload/v1743832520/WhatsApp_Image_2025-04-05_at_11.21.49_cteuly.jpg`}
              alt="Video Editor Working"
              className="w-full h-auto object-cover rounded"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div className="flex flex-col justify-center mt-6 md:mt-0">
            <h3 className="text-xl text-gray-400 mb-2">About Us</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">We Always Make<br />The Best</h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id odio placerat, convallis neque quis, interdum leo. Nam hendrerit urna nibh, eget sagittis erat varius non. Duis ut varius augue. Donec tincidunt iaculis ligula, et maximus elit tincidunt eu.
            </p>
            <div>
              <button className="bg-transparent hover:bg-white hover:text-black text-white border border-white rounded-full px-8 py-3">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Skills</h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Video Editing</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-800 h-1 rounded-full">
                  <div className="bg-white h-1 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Videography</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-800 h-1 rounded-full">
                  <div className="bg-white h-1 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Branding</span>
                  <span>77%</span>
                </div>
                <div className="w-full bg-gray-800 h-1 rounded-full">
                  <div className="bg-white h-1 rounded-full" style={{ width: '77%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-10 md:mt-12">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">20+</h3>
              <p className="text-gray-400">Year Of Experience</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">1,000+</h3>
              <p className="text-gray-400">Project Done</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">300+</h3>
              <p className="text-gray-400">Satisfied Client</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">64</h3>
              <p className="text-gray-400">Certified Award</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 relative">
        <img
          src={testImageUrl}
          alt="Milestone Construction Background"
          className="absolute h-96 w-full inset-0 object-cover bg-center bg-no-repeat bg-blend-overlay opacity-50"
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3 className="text-xl text-gray-300 mb-3">Work With Us</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            We’re Ready To Build<br />Your Dream Project
          </h2>
          <button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-8">
          <div className="col-span-1 md:col-span-1">
            <img src="/api/placeholder/120/40" alt="Vigraph Logo" className="h-8 mb-4" />
            <p className="text-gray-400 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
                <span>f</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
                <span>t</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
                <span>i</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-1 md:pl-12">
            <h3 className="text-xl font-medium mb-4">Our Store</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-400 hover:text-white">Home</a>
              <a href="#" className="text-gray-400 hover:text-white">About</a>
              <a href="#" className="text-gray-400 hover:text-white">Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </nav>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-400 flex items-start">
                <span className="mr-3">📍</span>
                2443 Oak Ridge Omaha, NE 68065
              </p>
              <p className="text-gray-400 flex items-start">
                <span className="mr-3">📞</span>
                287-6767-432
              </p>
              <p className="text-gray-400 flex items-start">
                <span className="mr-3">📱</span>
                402-547-2333
              </p>
              <p className="text-gray-400 flex items-start">
                <span className="mr-3">✉️</span>
                support@site.com
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 px-4 md:px-8">
          <p>Copyright © 2023 Vigraph | Powered by Vigraph</p>
        </div>
      </footer>
    </div>
  );
};
