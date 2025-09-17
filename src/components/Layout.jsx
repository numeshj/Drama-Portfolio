import { Outlet, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import React from 'react';
import logo from '../assets/photos/school/logo.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

export default function Layout() {
  const { t } = useLanguage();
  const categories = [
    { path: '/', label: t('nav.dashboard'), exact: true },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/script', label: t('nav.script') },
    { path: '/application', label: t('nav.application') },
    { path: '/costume', label: t('nav.costume') },
    { path: '/background-setup', label: t('nav.backgroundSetup') },
    { path: '/props', label: t('nav.props') },
    { path: '/practices', label: t('nav.practices') },
    { path: '/preparations', label: t('nav.preparations') },
    { path: '/fund-raising', label: t('nav.fundRaising') },
  ];
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <div style={{display:'flex', alignItems:'center', gap:'.65rem', margin:'0 0 1rem'}}>
            <img src={logo} alt="Logo" style={{width:48,height:48,borderRadius:12, objectFit:'cover', boxShadow:'0 4px 10px -3px rgba(0,0,0,.6)'}} />
            <h1 style={{margin:0, fontSize:'1.05rem'}}>{t('appTitle')}</h1>
          </div>
          <ul className="nav-links">
            {categories.map(cat => (
              <li key={cat.path}>
                <NavLink
                  to={cat.path}
                  end={cat.path === '/'}
                  className={({ isActive }) => isActive ? 'active' : undefined}
                >
                  <span>{cat.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div style={{marginTop: 'auto', display:'flex', gap:'.5rem', alignItems:'center', justifyContent:'space-between'}}>
          <ThemeToggle />
          <span className="badge">v1</span>
        </div>
      </aside>
      <div className="main-content">
        <header className="header-bar">
          <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
            <strong>{t('appTitle')}</strong>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
            <LanguageSwitcher />
            <div className="search-bar">
              <input placeholder="Search (coming soon)..." disabled />
            </div>
          </div>
        </header>
        <div className="content-scroll">
          <Outlet />
          <div className="footer">© {new Date().getFullYear()} {t('appTitle')}.</div>
        </div>
      </div>
    </div>
  );
}
