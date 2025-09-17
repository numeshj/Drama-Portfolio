import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'si');
  useEffect(()=> { localStorage.setItem('lang', lang); }, [lang]);
  useEffect(()=> { const t = translations[lang]; document.title = t?.appTitle || 'Drama Portfolio'; }, [lang]);
  const t = (path) => {
    const parts = path.split('.');
    return parts.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, translations[lang]) || path;
  };
  const value = { lang, setLang, toggle: () => setLang(l => l === 'si' ? 'en' : 'si'), t };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(){
  return useContext(LanguageContext);
}
