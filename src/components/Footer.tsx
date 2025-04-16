import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-100 text-gray-600 text-center text-sm">
      <div className="container mx-auto px-4">
        © {currentYear} Your Name. All Rights Reserved.
        {/* Optional: Add a fun easter egg or other links here */}
      </div>
    </footer>
  );
};

export default Footer; 