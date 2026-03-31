import { Droplets, Thermometer, Zap, Activity } from 'lucide-react';

const StatsGrid = () => {
  const stats = [
    { label: 'FEEDING', value: 'Every 2 Days', icon: <Zap size={18} /> },
    { label: 'HUMIDITY', value: '65-75%', icon: <Droplets size={18} /> },
    { label: 'TEMP', value: '26.5°C', icon: <Thermometer size={18} /> },
    { label: 'HEALTH', value: 'Optimal', icon: <Activity size={18} /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-exo-deep border border-white/5 p-6 rounded-3xl group hover:border-exo-lime/30 transition-colors">
          <div className="text-exo-lime mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
          <p className="text-[10px] text-exo-muted font-bold tracking-widest mb-1 uppercase">{stat.label}</p>
          <p className="text-lg font-black text-white italic">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;