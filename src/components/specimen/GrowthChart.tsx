import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '01.15', weight: 32 }, { date: '02.01', weight: 35 },
  { date: '02.15', weight: 38 }, { date: '03.01', weight: 42 },
  { date: '03.15', weight: 45 },
];

const GrowthChart = () => (
  <div className="h-[300px] w-full bg-exo-deep rounded-[2rem] p-8 border border-white/5">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white font-black italic uppercase tracking-tighter">Growth Analytics</h3>
      <span className="text-exo-lime font-mono text-sm font-bold">+13g (Last 2 months)</span>
    </div>
    <ResponsiveContainer width="100%" height="80%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
        <XAxis dataKey="date" stroke="#889988" fontSize={10} tickLine={false} axisLine={false} />
        <YAxis stroke="#889988" fontSize={10} unit="g" tickLine={false} axisLine={false} />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1A1D1A', border: '1px solid #A3E635', borderRadius: '16px' }}
          itemStyle={{ color: '#A3E635', fontWeight: 'bold' }}
        />
        <Line type="monotone" dataKey="weight" stroke="#A3E635" strokeWidth={4} dot={{ fill: '#A3E635', r: 4 }} activeDot={{ r: 8, stroke: '#121412', strokeWidth: 2 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default GrowthChart;