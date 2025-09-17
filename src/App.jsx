import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CategoryPage from './pages/CategoryPage';
import PortfolioPage from './pages/PortfolioPage';
import ScriptPage from './pages/ScriptPage';
import ApplicationPage from './pages/ApplicationPage';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

export default function App(){
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}> 
            <Route index element={<Dashboard />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="script" element={<ScriptPage />} />
            <Route path="application" element={<ApplicationPage />} />
            <Route path="costume" element={<CategoryPage category="costume" />} />
            <Route path="background-setup" element={<CategoryPage category="background-setup" />} />
            <Route path="props" element={<CategoryPage category="props" />} />
            <Route path="practices" element={<CategoryPage category="practices" />} />
            <Route path="preparations" element={<CategoryPage category="preparations" />} />
            <Route path="fund-raising" element={<CategoryPage category="fund-raising" />} />
          </Route>
          <Route path="*" element={<div style={{padding:'2rem'}}><h2>404</h2><p>Page not found.</p></div>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
