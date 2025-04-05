import React from 'react';
import Scene3D from '../components/Scene3D';
import Hero from '../components/HomeComponents/Hero';
import Demo from '../components/HomeComponents/Demo';
import Inquiry from '../components/HomeComponents/Inquiry';
import Dream from '../components/HomeComponents/Dream';
import Newsletter from '../components/HomeComponents/Newsletter';
import Footer from '../components/HomeComponents/Footer';
import AboutSections from '../components/HomeComponents/AboutSections';
import ArchitectureWebsite from '../components/HomeComponents/Flexing';

const NextStateHomepage = () => {
    return (
        <div className="font-sans text-gray-800">
            {/* Header Navigation */}
            {/* <header className="bg-transparent absolute w-full z-10 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-gray-200">Home</a>
            <a href="#" className="text-white hover:text-gray-200">Property</a>
            <a href="#" className="text-white hover:text-gray-200">Service</a>
            <a href="#" className="text-white hover:text-gray-200">Special Offers</a>
          </div>
          
          <div className="flex items-center">
            <img src="/api/placeholder/120/40" alt="NextState Logo" className="h-8" />
          </div>
          
          <div className="flex items-center">
            <button className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full hover:bg-opacity-30">
              Contact Us
            </button>
            <div className="ml-4 w-8 h-8 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </header> */}

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <AboutSections/>

            {/* Demo Section */}
            <Demo />

            {/* Direct Inquiry Section */}
            <Inquiry />

            <ArchitectureWebsite />

            {/* Dreams Section */}
            <Dream />

            {/* Newsletter Section */}
            <Newsletter />

            {/* Footer CTA */}
            <Footer />
        </div>
    );
};

export default NextStateHomepage;