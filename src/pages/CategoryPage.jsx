import React from 'react';
import Gallery from '../components/Gallery';
import { useLanguage } from '../contexts/LanguageContext';

export default function CategoryPage({ category, title }){
  const { t } = useLanguage();
  const keyMap = {
    costume: 'nav.costume',
    'background-setup': 'nav.backgroundSetup',
    props: 'nav.props',
    practices: 'nav.practices',
    preparations: 'nav.preparations',
    'fund-raising': 'nav.fundRaising'
  };
  const display = title || t(keyMap[category]) || category;
  return (
    <div>
      <h2 style={{marginTop:0}}>{display}</h2>
      <Gallery category={category} />
    </div>
  );
}
