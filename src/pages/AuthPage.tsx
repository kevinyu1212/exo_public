import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) await login(email, password);
    else await register(email, password, name);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-exo-dark">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-exo-deep border border-white/5 p-10 rounded-[2.5rem] shadow-2xl"
      >
        <h2 className="text-5xl font-black italic font-bebas tracking-tighter text-white mb-2 uppercase">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <p className="text-exo-muted text-xs font-bold mb-8 tracking-widest uppercase">
          {isLogin ? 'Access your private archive' : 'Join the premium breeder network'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input type="text" placeholder="FULL NAME" className="w-full bg-exo-dark border border-white/5 rounded-2xl p-4 outline-none focus:border-exo-lime transition-all font-bold text-white" value={name} onChange={(e) => setName(e.target.value)} required />
          )}
          <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-exo-dark border border-white/5 rounded-2xl p-4 outline-none focus:border-exo-lime transition-all font-bold text-white" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="PASSWORD" className="w-full bg-exo-dark border border-white/5 rounded-2xl p-4 outline-none focus:border-exo-lime transition-all font-bold text-white" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          <button type="submit" className="w-full py-5 bg-exo-lime text-exo-dark font-black rounded-2xl uppercase tracking-tighter hover:scale-[1.02] transition-transform mt-4">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-6 text-exo-muted text-[10px] font-bold hover:text-white transition-colors uppercase tracking-[0.2em]">
          {isLogin ? "New to Exo:public? Create Account" : "Already have an account? Log In"}
        </button>
      </motion.div>
    </div>
  );
};

export default AuthPage;