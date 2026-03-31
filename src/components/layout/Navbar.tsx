import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { LogOut, User, Search } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-exo-dark border-b border-white/5 px-6 py-4 flex justify-between items-center sticky top-0 z-[50] backdrop-blur-md bg-opacity-80">
      {/* 로고 섹션 */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-exo-lime rounded-lg flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
          <div className="w-4 h-4 bg-exo-dark rotate-45" />
        </div>
        <span className="font-bebas text-2xl font-black italic tracking-tighter text-white uppercase">
          Exo:<span className="text-exo-lime">public</span>
        </span>
      </Link>

      {/* 우측 유저 메뉴 */}
      <div className="flex items-center gap-6">
        {user ? (
          <>
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-exo-deep border border-white/5 rounded-full">
              <User size={14} className="text-exo-lime" />
              <span className="text-[10px] font-black text-white tracking-widest uppercase">
                {user.name}
              </span>
            </div>
            
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-exo-muted hover:text-exo-lime transition-colors group"
            >
              <span className="text-[10px] font-black tracking-widest uppercase hidden md:inline">Sign Out</span>
              <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </>
        ) : (
          <Link to="/login" className="text-exo-lime font-black text-xs uppercase tracking-widest">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;