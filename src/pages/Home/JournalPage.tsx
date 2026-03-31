import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Filter, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JournalPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [specimens, setSpecimens] = useState([
    { id: 1, name: 'AVALANCHE JR.', species: 'Crested Gecko', morph: 'Lily White', weight: '45.2g', imgUrl: 'https://images.unsplash.com/photo-1590424753051-7ef17937968e?w=800' }
  ]);

  // 검색 필터링 로직 (기능 복구)
  const filteredSpecimens = useMemo(() => 
    specimens.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.species.toLowerCase().includes(searchTerm.toLowerCase())),
    [searchTerm, specimens]
  );

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 space-y-8">
      {/* 검색 및 상단 액션 바 */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-5xl font-black italic font-bebas tracking-tighter uppercase text-white">Archive</h2>
          <p className="text-exo-muted font-bold text-[10px] tracking-[0.2em] uppercase">Total {specimens.length} Specimens</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-3">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-exo-muted" size={18} />
            <input 
              type="text" 
              placeholder="Search specimen..." 
              className="w-full bg-exo-deep border border-white/5 rounded-2xl py-3 pl-12 pr-4 focus:border-exo-lime outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-exo-lime text-exo-dark p-4 rounded-2xl font-black hover:scale-105 transition-transform"
          >
            <Plus size={24} />
          </button>
        </div>
      </header>

      {/* 개체 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredSpecimens.map((s) => (
            <motion.div 
              key={s.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => navigate(`/specimen/${s.id}`)}
              className="group bg-exo-deep rounded-[2rem] overflow-hidden border border-white/5 cursor-pointer hover:border-exo-lime/30 transition-all shadow-xl"
            >
              <div className="aspect-square bg-black overflow-hidden relative">
                <img src={s.imgUrl} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={s.name} />
                <div className="absolute top-4 right-4 bg-exo-lime text-exo-dark text-[10px] font-black px-3 py-1 rounded-full">{s.weight}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black font-bebas italic text-white uppercase">{s.name}</h3>
                <p className="text-exo-muted text-xs font-bold uppercase tracking-widest">{s.species} / {s.morph}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 등록 모달 (누락 기능 복구) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-exo-deep border border-white/10 p-8 rounded-[2.5rem] w-full max-w-lg relative"
          >
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-exo-muted hover:text-white"><X /></button>
            <h3 className="text-3xl font-black font-bebas italic mb-8 uppercase text-exo-lime">Add Specimen</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <input type="text" placeholder="Name" className="w-full bg-exo-dark border border-white/5 rounded-xl p-4 focus:border-exo-lime outline-none" />
              <input type="text" placeholder="Species" className="w-full bg-exo-dark border border-white/5 rounded-xl p-4 focus:border-exo-lime outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Morph" className="w-full bg-exo-dark border border-white/5 rounded-xl p-4 focus:border-exo-lime outline-none" />
                <input type="text" placeholder="Weight (g)" className="w-full bg-exo-dark border border-white/5 rounded-xl p-4 focus:border-exo-lime outline-none" />
              </div>
              <button className="w-full py-5 bg-exo-lime text-exo-dark font-black rounded-2xl uppercase tracking-tighter hover:brightness-110 transition-all mt-4">Confirm Registration</button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default JournalPage;