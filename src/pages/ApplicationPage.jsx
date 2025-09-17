import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Import application images (ensure they exist in assets)
import list1 from '../assets/photos/application/list1.jpeg';
import list2 from '../assets/photos/application/list2.jpeg';
import app1 from '../assets/photos/application/application-1.jpg';
import app2 from '../assets/photos/application/application-2.jpg';
import app3 from '../assets/photos/application/application-3.jpg';
import app4 from '../assets/photos/application/application-4.jpg';

const pages = [list1, list2, app1, app2, app3, app4];

export default function ApplicationPage(){
  const { t } = useLanguage();
  return (
    <div className="application-page">
      <h2 className="gradient-text" style={{marginTop:0}}>{t('application.title')}</h2>
      <p style={{opacity:.75}}>{t('application.note')}</p>
      <div className="application-pages">
        {pages.map((src,i)=>(
          <figure key={i} className="a4-frame">
            <img src={src} alt={`Application page ${i+1}`} />
            <figcaption>Page {i+1}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
