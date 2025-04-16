import React from 'react';
import Footer from '@/components/Footer'; // Import the Footer component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Basic structure for layout */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default Layout; 