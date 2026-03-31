import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// 코드 분할로 로딩 속도 최적화
const JournalPage = lazy(() => import('./pages/Home/JournalPage'));
const SpecimenDetailPage = lazy(() => import('./pages/SpecimenDetailPage'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-exo-dark">
    <div className="w-12 h-12 border-4 border-exo-lime border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<JournalPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/specimen/:id" element={<SpecimenDetailPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;