import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import logo from '../assets/photos/school/logo.jpeg';
import cover1 from '../assets/photos/school/cover.jpg';
import cover2 from '../assets/photos/team/team.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

const slides = [cover1, cover2];

export default function Hero(){
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();
  useEffect(()=>{
    const id = setInterval(()=> setIndex(i => (i+1)%slides.length), 5000);
    return ()=> clearInterval(id);
  },[]);
  return (
    <div className="hero" style={{'--bg': `url(${slides[index]})`}}>
      <div className="hero-backdrops">
        {slides.map((s,i)=>(
          <div key={i} className={`hero-slide ${i===index?'active':''}`} style={{backgroundImage:`url(${s})`}} />
        ))}
      </div>
      <div className="hero-overlay">
        <img src={logo} alt="School Logo" className="hero-logo" />
        <h1 className="hero-title gradient-text">{t('general.appTitle')}</h1>
        <p className="hero-tag">{t('hero.tagline')}</p>
      </div>
      <div className="hero-gradient" />
    </div>
  );
}
