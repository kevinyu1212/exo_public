import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { LogOut, User, LayoutGrid, Globe } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Archive', path: '/', icon: <LayoutGrid size={16} /> },
    { name: 'Community', path: '/community', icon: <Globe size={16} /> },
  ];

  return (
    <nav className="bg-exo-dark border-b border-white/5 px-6 py-4 flex justify-between items-center sticky top-0 z-[50] backdrop-blur-md bg-opacity-80">
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-exo-lime rounded-lg flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
            <div className="w-4 h-4 bg-exo-dark rotate-45" />
          </div>
          <span className="font-bebas text-2xl font-black italic tracking-tighter text-white uppercase">
            Exo:<span className="text-exo-lime">public</span>
          </span>
        </Link>

        {/* 내비게이션 메뉴 버튼 복구 */}
        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${
                location.pathname === item.path ? 'bg-white/10 text-exo-lime' : 'text-exo-muted hover:text-white'
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <>
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-exo-deep border border-white/5 rounded-full">
              <User size={12} className="text-exo-lime" />
              <span className="text-[10px] font-black text-white tracking-widest uppercase">{user.name}</span>
            </div>
            <button onClick={() => { logout(); navigate('/login'); }} className="p-2 text-exo-muted hover:text-white transition-colors">
              <LogOut size={20} />
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;