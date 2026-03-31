import SpecimenHero from '../components/specimen/SpecimenHero';
import StatsGrid from '../components/specimen/StatsGrid';
import GrowthChart from '../components/specimen/GrowthChart';

const SpecimenDetailPage = () => (
  <div className="max-w-7xl mx-auto py-10 px-6 space-y-10">
    <SpecimenHero />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-10">
        <StatsGrid />
        <div className="bg-exo-deep p-8 rounded-[2rem] border border-white/5 space-y-4">
          <h3 className="text-xl font-black italic text-white uppercase tracking-tight">Breeding Notes</h3>
          <p className="text-exo-muted leading-relaxed">
            현재 릴리 화이트 모프의 특징이 선명하게 나타나고 있으며, 먹이 반응이 매우 우수합니다. 
            최근 탈피를 성공적으로 마쳤으며 피부 상태는 최상입니다. 온도는 26도 전후를 유지 중입니다.
          </p>
        </div>
      </div>
      <div className="space-y-10">
        <GrowthChart />
        <button className="w-full py-6 bg-exo-lime text-exo-dark rounded-[1.5rem] font-black uppercase italic tracking-tighter hover:scale-[1.02] transition-transform">
          Download PDF Report
        </button>
      </div>
    </div>
  </div>
);

export default SpecimenDetailPage;