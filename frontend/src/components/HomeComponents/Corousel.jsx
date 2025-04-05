import React, { useState, useEffect } from 'react';

const Carousel = () => {
  // Sample data for the carousel (replace with your own content)
  const slides = [
    { id: 1, content: 'Milestone: Building Your Dream Home in Pune' },
    { id: 2, content: 'Expert Land & Building Solutions Since 2025' },
    { id: 3, content: 'Personalized Construction with 5 Years of Experience' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle manual navigation (optional)
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-48 flex items-center justify-center bg-gray-100 text-gray-800 text-xl md:text-2xl text-center"
          >
            <h2>{slide.content}</h2>
          </div>
        ))}
      </div>

      {/* Optional navigation buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded hover:bg-opacity-75"
      >
        Prev
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded hover:bg-opacity-75"
      >
        Next
      </button>

      {/* Dots for navigation */}
      <div className="flex justify-center space-x-2 py-4">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentSlide ? 'bg-gray-700' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;