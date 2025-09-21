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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const categories = [
    { path: '/', label: t('nav.dashboard'), exact: true },
    { path: '/script', label: t('nav.script') },
    { path: '/application', label: t('nav.application') },
    { path: '/costume', label: t('nav.costume') },
    { path: '/background-setup', label: t('nav.backgroundSetup') },
  { path: '/props', label: t('nav.props') },
    { path: '/practices', label: t('nav.practices') },
    { path: '/preparations', label: t('nav.preparations') },
    { path: '/fund-raising', label: t('nav.fundRaising') },
  { path: '/music-composition', label: t('nav.musicComposition') },
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
  
  // Extract icon from label text (first emoji if present)
  function getIcon(label) {
    const match = label.match(/^(\p{Emoji}+)/u);
    return match ? match[1] : '📄';
  }
  
  // Get text without icon
  function getTextOnly(label) {
    return label.replace(/^(\p{Emoji}+\s*)/u, '');
  }
  
  return (
    <div className="app-shell" data-sidebar-collapsed={sidebarCollapsed}>
      <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div>
          {!sidebarCollapsed && (
            <div style={{display:'flex', alignItems:'center', gap:'.65rem', margin:'0 0 1rem'}}>
              <img src={logo} alt="Logo" style={{width:48,height:48,borderRadius:12, objectFit:'cover', boxShadow:'0 4px 10px -3px rgba(0,0,0,.6)'}} />
              <h1 style={{margin:0, fontSize:'1.05rem'}}>{t('appTitle')}</h1>
            </div>
          )}
          {sidebarCollapsed && (
            <div style={{display:'flex', justifyContent:'center', margin:'0 0 1rem'}}>
              <img src={logo} alt="Logo" style={{width:40,height:40,borderRadius:10, objectFit:'cover', boxShadow:'0 4px 10px -3px rgba(0,0,0,.6)'}} />
            </div>
          )}
          
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            style={{
              width: '100%',
              marginBottom: '1rem',
              padding: '.5rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--color-text-dim)',
              fontSize: '.7rem',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            {sidebarCollapsed ? '→' : '←'}
          </button>
          
          <ul className="nav-links">
            {categories.map(cat => (
              <li key={cat.path}>
                <NavLink
                  to={cat.path}
                  end={cat.path === '/'}
                  className={({ isActive }) => isActive ? 'active' : undefined}
                  title={sidebarCollapsed ? getTextOnly(cat.label) : undefined}
                >
                  <span className="nav-icon">{getIcon(cat.label)}</span>
                  {!sidebarCollapsed && <span className="nav-text">{getTextOnly(cat.label)}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div style={{marginTop: 'auto', display:'flex', gap:'.5rem', alignItems:'center', justifyContent: sidebarCollapsed ? 'center' : 'space-between'}}>
          {!sidebarCollapsed && <ThemeToggle />}
          {!sidebarCollapsed && <span className="badge">v1</span>}
          {sidebarCollapsed && (
            <div style={{display:'flex', flexDirection:'column', gap:'.5rem', alignItems:'center'}}>
              <ThemeToggle />
              <span className="badge" style={{fontSize:'.5rem'}}>v1</span>
            </div>
          )}
        </div>
      </aside>
      <div className="main-content">
        <header className="header-bar">
          <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
            {sidebarCollapsed && (
              <div style={{display:'flex', alignItems:'center', gap:'.5rem'}}>
                <img src={logo} alt="Logo" style={{width:32,height:32,borderRadius:8, objectFit:'cover'}} />
                <h1 style={{margin:0, fontSize:'1rem'}}>{t('appTitle')}</h1>
              </div>
            )}
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
                placeholder={t('nav.dashboard') + '...'}
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
