import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import logo from '../assets/photos/school/logo.jpeg';
import { useLanguage } from '../contexts/LanguageContext';
// Explicit landing cover so it's available immediately without waiting for glob preloads.
import landingCover from '../assets/photos/cover/cover.jpg';

// Use absolute path so Vite glob always resolves regardless of import depth
const coverModules = import.meta.glob('/src/assets/photos/cover/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}', { eager: true });
let slideMeta = Object.entries(coverModules)
  .map(([k, mod]) => ({ key: k, src: mod?.default }))
  .filter(o => !!o.src)
  .sort((a,b)=> a.key.localeCompare(b.key));
let slides = slideMeta.map(o=> o.src);

// Ensure landing cover is first (avoid duplicates if already present)
if (landingCover && !slides.includes(landingCover)) {
  slides.unshift(landingCover);
}

// Fallback gradient if no images
if(!slides.length){ slides = []; }

export default function Hero(){
  // Start at 0 (landing cover) and keep for 2 seconds before first change.
  const [index, setIndex] = useState(0);
  const [dimensions, setDimensions] = useState([]);
  const { t } = useLanguage();
  useEffect(()=>{
    if(slides.length === 0) return;
    // Preload & measure natural dimensions (silent)
    Promise.all(slides.map(src => new Promise(res=>{
      const img = new Image();
      img.onload = ()=> res({ src, w: img.naturalWidth, h: img.naturalHeight });
      img.onerror = ()=> res({ src, w: 0, h: 0 });
      img.src = src;
    }))).then(meta => { setDimensions(meta); });

    let intervalId;
    // After 2s, advance to next slide immediately (if any) then start normal rotation.
    const startTimer = setTimeout(()=>{
      if(slides.length > 1){
        setIndex(1 % slides.length);
      }
      intervalId = setInterval(()=> setIndex(i => (i+1)%slides.length), 5000);
    }, 2000);
    return ()=> { clearTimeout(startTimer); if(intervalId) clearInterval(intervalId); };
  },[]);
  const current = slides[index];
  const first = slides[0];
  return (
    <div className="hero" style={{ backgroundImage: `url(${landingCover})` }}>
      <div className="hero-backdrops">
        {slides.map((s,i)=>{
          const meta = dimensions.find(d=> d.src === s);
          const portrait = meta && meta.h > meta.w; // simple portrait heuristic
          return (
            <div key={i} className={`hero-slide ${i===index?'active':''} ${portrait?'portrait':''}`} style={{backgroundImage:`url(${s})`}} />
          );
        })}
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
