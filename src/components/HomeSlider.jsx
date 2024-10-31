import React, { useState, useEffect } from 'react';
import banner from '../assets/images/Banner.WEBP'; // Image for the first slide
import banner1 from '../assets/images/Banner1.WEBP'; // Image for the second slide

const HomeSlider = () => {
  const slides = [
    {
      backgroundImage: banner,
      title: 'Elevate Your Evoting and Ticketing Experience With Xtocast',
      subtitle: 'Secure, Confidential, and Accessible from Anywhere.',
      button1: { text: 'Cast Vote', link: 'evoting.html' },
      button2: { text: 'Get Voting App', link: 'apps/voting-app.html' },
    },
    {
      backgroundImage: banner1,
      title: 'Discover, Buy, Host, and Sell Event Tickets',
      subtitle: '🤩 BIG or small, Online or Offline. We’ll ticket it!',
      button1: { text: 'Buy Ticket', link: 'events.html' },
      button2: { text: 'Get Ticketing App', link: 'apps/ticketing-app.html' },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="relative h-[500px] lg:h-[700px] overflow-hidden">
      <div className="h-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="bg-cover bg-center w-full flex justify-center items-center text-center"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              height: '100%', // Ensure full height
              backgroundSize: 'cover', // Cover the entire div
              backgroundPosition: 'center', // Center the image
            }}
          >
            <div className="container mx-auto text-white px-4 lg:px-8">
              <h2 className="animate-fadeInUp delay-1000 text-3xl lg:text-5xl font-bold mb-4">{slide.title}</h2>
              <h3 className="animate-fadeInUp delay-2000 italic font-medium text-lg lg:text-2xl mb-6">{slide.subtitle}</h3>
              <div className="animate-fadeInUp delay-3000 flex justify-center gap-4">
                <a
                  href={slide.button1.link}
                  className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-5 py-2 rounded-full shadow-lg"
                >
                  {slide.button1.text}
                </a>
                <a
                  href={slide.button2.link}
                  className="text-white underline"
                >
                  {slide.button2.text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Optional: Navigation buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between">
        <button onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)} className="bg-white text-black p-2 rounded-l">Previous</button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)} className="bg-white text-black p-2 rounded-r">Next</button>
      </div>
    </div>
  );
};

export default HomeSlider;
