import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">About Me</h2>
        <div className="text-gray-700 space-y-6 text-lg text-left leading-relaxed">
          <p>
            [Placeholder Paragraph 1: Introduce yourself, your main role/focus, and perhaps where you&apos;re based.]
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            [Placeholder Paragraph 2: Mention key career highlights, skills, or areas you&apos;re passionate about.]
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            [Placeholder Paragraph 3: Briefly mention what you care about, personal interests, or your current focus.]
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 