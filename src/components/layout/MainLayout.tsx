import React from 'react';
import Navbar from './Navbar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-exo-dark">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;