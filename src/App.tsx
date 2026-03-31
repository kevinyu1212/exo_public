import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { AuthProvider, useAuth } from './context/AuthContext';

const JournalPage = lazy(() => import('./pages/Home/JournalPage'));
const SpecimenDetailPage = lazy(() => import('./pages/SpecimenDetailPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return null;
  return user ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div className="bg-exo-dark min-h-screen" />}>
          <Routes>
            <Route path="/login" element={<AuthPage />} />
            <Route path="/" element={<ProtectedRoute><MainLayout><JournalPage /></MainLayout></ProtectedRoute>} />
            <Route path="/journal" element={<ProtectedRoute><MainLayout><JournalPage /></MainLayout></ProtectedRoute>} />
            <Route path="/community" element={<ProtectedRoute><MainLayout><CommunityPage /></MainLayout></ProtectedRoute>} />
            <Route path="/specimen/:id" element={<ProtectedRoute><MainLayout><SpecimenDetailPage /></MainLayout></ProtectedRoute>} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;