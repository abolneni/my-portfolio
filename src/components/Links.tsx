import React from 'react';
// Import icons from react-icons
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// Placeholder icons or use a library like react-icons later
// const LinkedInIcon = () => <span>LI</span>;
// const GitHubIcon = () => <span>GH</span>;
// const EmailIcon = () => <span>@</span>;

const Links: React.FC = () => {
  return (
    <section className="py-6 md:py-8">
      {/* Make flex column on smallest screens, row on sm+, adjust spacing */}
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-8 md:space-x-12">
        {/* LinkedIn Link with Icon */}
        <a
          href="#" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition-colors text-2xl md:text-3xl" // Increased icon size
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin /> {/* LinkedIn Icon */}
          {/* Removed text span */}
        </a>

        {/* GitHub Link with Icon */}
        <a
          href="#" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 transition-colors text-2xl md:text-3xl" // Increased icon size
          aria-label="GitHub Profile"
        >
          <FaGithub /> {/* GitHub Icon */}
          {/* Removed text span */}
        </a>

        {/* Email Link with Icon */}
        <a
          href="mailto:anubolneni@gmail.com" // Email from PRD
          className="text-gray-700 hover:text-red-600 transition-colors text-2xl md:text-3xl" // Increased icon size
          aria-label="Email Anu Bolneni"
        >
          <FaEnvelope /> {/* Email Icon */}
          {/* Removed text span */}
        </a>
      </div>
    </section>
  );
};

export default Links; 