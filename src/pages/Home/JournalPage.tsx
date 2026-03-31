import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, X, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JournalPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 상태 관리 (이미지 및 입력값)
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', species: '', morph: '', weight: '' });
  const [specimens, setSpecimens] = useState([
    { id: 1, name: 'AVALANCHE JR.', species: 'Crested Gecko', morph: 'Lily White', weight: '45.2g', imgUrl: 'https://images.unsplash.com/photo-1590424753051-7ef17937968e?w=800' }
  ]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSpecimen = {
      id: Date.now(),
      ...formData,
      weight: formData.weight + 'g',
      imgUrl: previewImage || 'https://via.placeholder.com/800x800?text=No+Image'
    };
    setSpecimens([newSpecimen, ...specimens]);
    setIsModalOpen(false);
    setPreviewImage(null);
    setFormData({ name: '', species: '', morph: '', weight: '' });
  };

  const filteredSpecimens = useMemo(() => 
    specimens.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [searchTerm, specimens]
  );

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-5xl font-black italic font-bebas tracking-tighter uppercase text-white">Archive</h2>
          <p className="text-exo-muted font-bold text-[10px] tracking-[0.2em] uppercase">Total {specimens.length} Specimens</p>
        </div>
        <div className="flex gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-exo-muted" size={18} />
            <input type="text" placeholder="Search..." className="bg-exo-deep border border-white/5 rounded-2xl py-3 pl-12 pr-4 focus:border-exo-lime outline-none text-white w-64" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-exo-lime text-exo-dark p-4 rounded-2xl font-black hover:scale-105 transition-transform"><Plus size={24} /></button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpecimens.map((s) => (
          <motion.div key={s.id} layout onClick={() => navigate(`/specimen/${s.id}`)} className="group bg-exo-deep rounded-[2.5rem] overflow-hidden border border-white/5 cursor-pointer hover:border-exo-lime/30 transition-all shadow-xl">
            <div className="aspect-square bg-black overflow-hidden relative">
              <img src={s.imgUrl} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={s.name} />
              <div className="absolute top-6 left-6 bg-exo-lime text-exo-dark text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">{s.weight}</div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-black font-bebas italic text-white uppercase leading-none mb-2">{s.name}</h3>
              <p className="text-exo-muted text-xs font-bold uppercase tracking-[0.2em]">{s.species} / {s.morph}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="bg-exo-deep border border-white/10 p-10 rounded-[3rem] w-full max-w-xl relative">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-exo-muted hover:text-white"><X /></button>
              <h3 className="text-4xl font-black font-bebas italic mb-8 uppercase text-exo-lime tracking-tighter">Registration</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div onClick={() => fileInputRef.current?.click()} className="aspect-video bg-exo-dark border-2 border-dashed border-white/10 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:border-exo-lime/50 transition-all overflow-hidden relative group">
                  {previewImage ? <img src={previewImage} className="w-full h-full object-cover" /> : <><Camera className="text-exo-muted mb-2 group-hover:text-exo-lime transition-colors" size={32} /><p className="text-exo-muted text-[10px] font-bold tracking-widest uppercase">Upload Photo</p></>}
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
                </div>

                <div className="space-y-3">
                  <input type="text" placeholder="NAME" required className="w-full bg-exo-dark border border-white/5 rounded-xl p-4 outline-none focus:border-exo-lime text-white font-bold" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value.toUpperCase()})} />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="SPECIES" className="bg-exo-dark border border-white/5 rounded-xl p-4 outline-none focus:border-exo-lime text-white font-bold" value={formData.species} onChange={(e)=>setFormData({...formData, species: e.target.value})} />
                    <input type="text" placeholder="MORPH" className="bg-exo-dark border border-white/5 rounded-xl p-4 outline-none focus:border-exo-lime text-white font-bold" value={formData.morph} onChange={(e)=>setFormData({...formData, morph: e.target.value})} />
                  </div>
                  <input type="number" placeholder="WEIGHT (g)" className="w-full bg-exo-dark border border-white/5 rounded-xl p-4 outline-none focus:border-exo-lime text-white font-bold" value={formData.weight} onChange={(e)=>setFormData({...formData, weight: e.target.value})} />
                </div>
                <button type="submit" className="w-full py-5 bg-exo-lime text-exo-dark font-black rounded-xl uppercase tracking-tighter hover:brightness-110 transition-all shadow-[0_0_20px_rgba(163,230,53,0.15)]">Confirm Registration</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JournalPage;