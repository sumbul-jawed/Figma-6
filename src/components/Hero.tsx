import React from 'react';

function Hero() {
  return (
    <div className="relative w-screen h-[700px]">
      {/* Background Image */}
      <img src="/images/hero.jpg" alt="hero" className="w-full h-full object-cover" />

      {/* Box on the bottom-right */}
      <div className="absolute bottom-10 sm:right-28 w-[500px] h-[350px] md:bottom-20 md:right-20 md:w-[643px] md:h-[443px] bg-pink-100 shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-black font-semibold text-lg sm:text-xl tracking-wide mb-2">
          New Arrivals
        </h2>
        <h1 className="text-yellow-700 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-black mt-4 leading-relaxed text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
          elit tellus, luctus nec ullamcorper mattis.
        </p>
        <div className="mt-6">
          <button className="w-[200px] h-[65px] bg-yellow-700 text-white font-bold text-base sm:text-lg rounded-md hover:bg-yellow-600 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
