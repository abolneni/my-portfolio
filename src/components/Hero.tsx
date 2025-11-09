import React from 'react';
import Image from 'next/image'; // Using next/image for optimized images

const Hero: React.FC = () => {
  return (
    <section className="text-center py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Placeholder for Headshot/Avatar */}
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          {/* You can replace this div with an Image component later */}
          {/* <Image src="/path/to/your-image.jpg" alt="Your Name" width={160} height={160} className="object-cover w-full h-full" /> */}
          <span className="text-gray-500">Image</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Your Name
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-700">
          Your Tagline (e.g., Product Manager | Designer | Builder)
        </p>
      </div>
    </section>
  );
};

export default Hero; 