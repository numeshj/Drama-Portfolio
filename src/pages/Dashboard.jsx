import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { useLanguage } from '../contexts/LanguageContext';

export default function Dashboard(){
  const { t } = useLanguage();
  const cards = [
    { to: '/script', label: t('nav.script'), cta: t('nav.portfolio') === 'Portfolio' ? 'View description →' : 'විස්තරය බලන්න →' },
    { to: '/application', label: t('nav.application'), cta: t('nav.portfolio') === 'Portfolio' ? 'View pages →' : 'පිටු බලන්න →' },
    { to: '/costume', label: t('nav.costume'), cta: t('nav.portfolio') === 'Portfolio' ? 'Open gallery →' : 'ගැලරිය විවෘත කරන්න →' },
    { to: '/background-setup', label: t('nav.backgroundSetup'), cta: t('nav.portfolio') === 'Portfolio' ? 'Open gallery →' : 'ගැලරිය විවෘත කරන්න →' },
    { to: '/props', label: t('nav.props'), cta: t('nav.portfolio') === 'Portfolio' ? 'Open gallery →' : 'ගැලරිය විවෘත කරන්න →' },
    { to: '/practices', label: t('nav.practices'), cta: t('nav.portfolio') === 'Portfolio' ? 'Open gallery →' : 'ගැලරිය විවෘත කරන්න →' },
    { to: '/preparations', label: t('nav.preparations'), cta: t('nav.portfolio') === 'Portfolio' ? 'Open gallery →' : 'ගැලරිය විවෘත කරන්න →' },
    { to: '/fund-raising', label: t('nav.fundRaising'), cta: t('nav.portfolio') === 'Portfolio' ? 'Open gallery →' : 'ගැලරිය විවෘත කරන්න →' },
  { to: '/music-composition', label: t('nav.musicComposition'), cta: t('nav.portfolio') === 'Portfolio' ? 'Open gallery →' : 'ගැලරිය විවෘත කරන්න →' },
  ];
  return (
    <div>
      <Hero />
      <h2 className="gradient-text" style={{marginTop:0}}>{t('dashboard.heading')}</h2>
      <p style={{maxWidth:680, lineHeight:1.55, fontSize:'.9rem'}}>{t('dashboard.intro')}</p>
      <div className="dashboard-grid colorful">
        {cards.map((c,i) => (
          <Link key={c.to} to={c.to} className={`dashboard-card fancy f-${(i%8)+1}`} style={{'--i':i}}>
            <div className="card-inner">
              <small>{c.to.replace('/','').replace('-',' ') || 'root'}</small>
              <strong>{c.label}</strong>
              <span className="cta">{c.cta}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
