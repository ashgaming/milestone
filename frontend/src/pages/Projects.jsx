import React, { useState } from 'react';
import { primary_text_color } from '../theme/text.style';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "LUXURY PPT DESIGN",
      button: "TAKE A LOOK",
      subtitle: "simple minimal design that describes the style of your business",
      image1Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743832523/WhatsApp_Image_2025-04-05_at_11.21.42_p4xaxm.jpg',
      image2Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg',
    },

    {
      title: "LUXURY PPT DESIGN",
      button: "TAKE A LOOK",
      subtitle: "simple minimal design that describes the style of your business",
      image1Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743832523/WhatsApp_Image_2025-04-05_at_11.21.42_p4xaxm.jpg',
      image2Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg',
    },


    {
      title: "LUXURY PPT DESIGN",
      button: "TAKE A LOOK",
      subtitle: "simple minimal design that describes the style of your business",
      image1Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743832523/WhatsApp_Image_2025-04-05_at_11.21.42_p4xaxm.jpg',
      image2Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg',
    },


    {
      title: "LUXURY PPT DESIGN",
      button: "TAKE A LOOK",
      subtitle: "simple minimal design that describes the style of your business",
      image1Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743832523/WhatsApp_Image_2025-04-05_at_11.21.42_p4xaxm.jpg',
      image2Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg',
    },


    {
      title: "LUXURY PPT DESIGN",
      button: "TAKE A LOOK",
      subtitle: "simple minimal design that describes the style of your business",
      image1Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743832523/WhatsApp_Image_2025-04-05_at_11.21.42_p4xaxm.jpg',
      image2Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg',
    },


    {
      title: "LUXURY PPT DESIGN",
      button: "TAKE A LOOK",
      subtitle: "simple minimal design that describes the style of your business",
      image1Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743832523/WhatsApp_Image_2025-04-05_at_11.21.42_p4xaxm.jpg',
      image2Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg',
    },


    {
      title: "LUXURY PPT DESIGN",
      button: "TAKE A LOOK",
      subtitle: "simple minimal design that describes the style of your business",
      image1Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743832523/WhatsApp_Image_2025-04-05_at_11.21.42_p4xaxm.jpg',
      image2Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg',
    },

    {
      title: "LUXURY PPT DESIGN",
      button: "TAKE A LOOK",
      subtitle: "simple minimal design that describes the style of your business",
      image1Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743832523/WhatsApp_Image_2025-04-05_at_11.21.42_p4xaxm.jpg',
      image2Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg',
    },

    {
      title: "LUXURY PPT DESIGN",
      button: "TAKE A LOOK",
      subtitle: "simple minimal design that describes the style of your business",
      image1Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743832523/WhatsApp_Image_2025-04-05_at_11.21.42_p4xaxm.jpg',
      image2Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg',
    },

    {
      title: "LUXURY PPT DESIGN",
      button: "TAKE A LOOK",
      subtitle: "simple minimal design that describes the style of your business",
      image1Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743832523/WhatsApp_Image_2025-04-05_at_11.21.42_p4xaxm.jpg',
      image2Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg',
    },

    {
      title: "LUXURY PPT DESIGN",
      button: "TAKE A LOOK",
      subtitle: "simple minimal design that describes the style of your business",
      image1Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743832523/WhatsApp_Image_2025-04-05_at_11.21.42_p4xaxm.jpg',
      image2Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg',
    },
    {
      title: "LUXURY PPT DESIGN",
      button: "TAKE A LOOK",
      subtitle: "simple minimal design that describes the style of your business",
      image1Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743832523/WhatsApp_Image_2025-04-05_at_11.21.42_p4xaxm.jpg',
      image2Url: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg',
    },

   
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Placeholder image URLs (using placeholder API)
  const officePlaceholder = "https://res.cloudinary.com/dyka5knvr/image/upload/v1743832520/WhatsApp_Image_2025-04-05_at_11.21.49_cteuly.jpg";
  const interiorPlaceholder = "https://res.cloudinary.com/dyka5knvr/image/upload/v1743832520/WhatsApp_Image_2025-04-05_at_11.21.49_cteuly.jpg";

  // Dots decoration component
  const DotsDecoration = () => (
    <div className="grid grid-cols-3 gap-1">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-1 h-1 bg-black rounded-full" />
      ))}
    </div>
  );

  // Render slide based on type
  const renderSlide = (slide) => {
    return (
      <div className="bg-black/80 p-8 flex h-full">
        <div className="w-1/2 pr-4 flex flex-col justify-center gap-3">
          <h1 className={`text-4xl font-bold mb-1 text-orange-400`}>{slide.title}</h1>
          <h1 className={` font-bold mb-1 text-black text-lg` }>{slide.subtitle}</h1>
          <button className="bg-black text-white text-lg px-4 py-2 mb-4 w-32">
            Explore
          </button>
        </div>
        <div className="w-1/2">
          <img
            src={slide.image1Url}
            alt="Office Interior"
            className="w-full h-48 object-cover rounded-xl"
          />

          <img
            src={slide.image2Url}
            alt="Office Interior"
            className="w-full h-48 mt-5 object-cover rounded-xl"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black p-4 min-h-screen pt-36">
      {/* Main presentation window */}
      <div className="mx-auto mb-6 w-full max-w-4xl aspect-video bg-white shadow-lg">
        {renderSlide(slides[currentSlide])}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mb-6">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-600"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Slide thumbnails grid */}
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`bg-gray-900 shadow-md cursor-pointer ${currentSlide === index ? "ring-2 ring-white" : ""
              }`}
            style={{ aspectRatio: "16/9" }}
          >
            <div className="transform scale-90 h-full bg-white">
              <img src={slide.image1Url} alt='' className='w-full h-full object-cover' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;