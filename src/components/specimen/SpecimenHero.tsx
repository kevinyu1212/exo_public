import { Heart, Share2, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

const SpecimenHero = () => (
  <section className="relative w-full aspect-square md:aspect-[21/9] bg-black overflow-hidden rounded-[2.5rem] border border-white/5">
    <img 
      src="https://images.unsplash.com/photo-1590424753051-7ef17937968e?auto=format&fit=crop&q=80&w=1200" 
      className="w-full h-full object-cover opacity-60"
      alt="Hero Specimen"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#121412] via-transparent to-transparent" />
    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <span className="text-exo-lime font-black uppercase tracking-[0.3em] text-xs">Premium Archive</span>
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white uppercase leading-none">
          Avalanche <br/> <span className="text-exo-lime">White Lily</span>
        </h1>
      </motion.div>
      <div className="flex gap-3">
        {[Heart, Bookmark, Share2].map((Icon, i) => (
          <button key={i} className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-exo-lime hover:text-exo-dark transition-all">
            <Icon size={20} />
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default SpecimenHero;