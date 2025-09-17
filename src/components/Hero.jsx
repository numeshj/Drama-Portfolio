import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import logo from '../assets/photos/school/logo.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

// Dynamically import all cover images in folder (jpeg/jpg/png/webp)
const coverModules = import.meta.glob('../assets/photos/cover/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const slides = Object.values(coverModules).map(m => m.default).sort();

export default function Hero(){
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();
  useEffect(()=>{
    if(slides.length === 0) return;
    const id = setInterval(()=> setIndex(i => (i+1)%slides.length), 5000);
    return ()=> clearInterval(id);
  },[]);
  const current = slides[index];
  return (
    <div className="hero" style={{'--bg': current ? `url(${current})` : 'none'}}>
      <div className="hero-backdrops">
        {slides.map((s,i)=>(
          <div key={i} className={`hero-slide ${i===index?'active':''}`} style={{backgroundImage:`url(${s})`}} />
        ))}
      </div>
      <div className="hero-overlay">
        <img src={logo} alt="School Logo" className="hero-logo" />
        <h1 className="hero-title gradient-text">{t('appTitle')}</h1>
        <p className="hero-tag">{t('hero.tagline')}</p>
      </div>
      <div className="hero-gradient" />
    </div>
  );
}
