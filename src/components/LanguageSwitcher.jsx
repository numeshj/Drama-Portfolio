import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/LanguageSwitcher.css';

export default function LanguageSwitcher(){
  const { lang, setLang } = useLanguage();
  return (
    <div className="lang-switch" role="group" aria-label="Language switcher">
      <button
        className={lang==='si' ? 'active' : ''}
        onClick={()=> setLang('si')}
      >සිංහල</button>
      <button
        className={lang==='en' ? 'active' : ''}
        onClick={()=> setLang('en')}
      >English</button>
      <div className="indicator" data-lang={lang} />
    </div>
  );
}
