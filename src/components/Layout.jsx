import { Outlet, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/photos/school/logo.jpeg';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

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
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const searchable = useMemo(()=> categories.map(c=>({ ...c, path: c.path === '/' ? '/' : c.path })), [categories]);
  const results = useMemo(()=>{
    if(!query.trim()) return [];
    const q = query.toLowerCase();
    return searchable.filter(r=> r.label.toLowerCase().includes(q));
  },[query, searchable]);
  function go(path){
    navigate(path);
    setOpen(false); setQuery('');
  }
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
          <div style={{display:'flex', alignItems:'center', gap:'1rem', position:'relative'}}>
            <LanguageSwitcher />
            <div className="search-bar" style={{position:'relative'}}>
              <input
                value={query}
                onChange={e=> { setQuery(e.target.value); setOpen(true); }}
                onFocus={()=> setOpen(true)}
                onKeyDown={e=>{
                  if(e.key === 'Escape'){ setOpen(false); }
                  if(e.key === 'Enter' && results.length){ go(results[0].path); }
                }}
                placeholder={t('nav.dashboard') + ', ' + t('nav.portfolio') + '...'}
                aria-label="Search sections"
              />
              {open && results.length > 0 && (
                <ul className="search-results" role="listbox">
                  {results.map(r=> (
                    <li key={r.path} onMouseDown={()=> go(r.path)}>{r.label}</li>
                  ))}
                </ul>
              )}
              {open && query && results.length === 0 && (
                <div className="search-empty">No matches</div>
              )}
            </div>
          </div>
        </header>
        <div className="content-scroll">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
