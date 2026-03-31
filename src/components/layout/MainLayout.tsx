import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-exo-dark text-white">
      <header className="sticky top-0 z-50 w-full h-16 border-b border-white/10 bg-exo-dark/80 backdrop-blur-md flex items-center justify-between px-6">
        <div className="text-exo-lime font-bold text-xl tracking-tighter">EXO:PUBLIC</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-exo-muted">
          <span className="cursor-pointer hover:text-exo-lime transition-colors">커뮤니티</span>
          <span className="cursor-pointer hover:text-exo-lime transition-colors">사육일기</span>
          <span className="cursor-pointer hover:text-exo-lime transition-colors">마켓</span>
        </nav>
        <button className="bg-exo-green px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-exo-lime hover:text-exo-dark transition-all">
          로그인
        </button>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
