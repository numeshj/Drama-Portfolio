import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { useLanguage } from '../contexts/LanguageContext';

export default function Dashboard(){
  const { t } = useLanguage();
  const cards = [
    { to: '/portfolio', label: t('nav.portfolio') },
    { to: '/costume', label: t('nav.costume') },
    { to: '/background-setup', label: t('nav.backgroundSetup') },
    { to: '/props', label: t('nav.props') },
    { to: '/practices', label: t('nav.practices') },
    { to: '/preparations', label: t('nav.preparations') },
    { to: '/fund-raising', label: t('nav.fundRaising') },
  ];
  return (
    <div>
      <Hero />
      <h2 style={{marginTop:0}}>{t('dashboard.heading')}</h2>
      <p style={{maxWidth:600, lineHeight:1.5}}>{t('dashboard.intro')}</p>
      <div style={{display:'grid', gap:'1rem', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', marginTop:'2rem'}}>
        {cards.map(c => (
          <Link key={c.to} to={c.to} style={{background:'var(--color-surface)', border:'1px solid var(--color-border)', padding:'1rem', borderRadius:'var(--radius-md)', textDecoration:'none', color:'var(--color-text)', boxShadow:'var(--shadow-sm)', display:'flex', flexDirection:'column', gap:'.5rem'}}>
            <strong>{c.label}</strong>
            <span style={{fontSize:'.75rem', opacity:.7}}>{t('nav.portfolio') === 'Portfolio' ? 'Open gallery →' : 'ගැලරිය විවෘත කරන්න →'}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
