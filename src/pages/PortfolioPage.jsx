import React from 'react';
import { portfolioContent } from '../content/portfolioContent';
import { useLanguage } from '../contexts/LanguageContext';
import Section from '../components/Section';
import PortfolioTOC from '../components/PortfolioTOC';
import '../styles/PortfolioPage.css';

export default function PortfolioPage(){
  const { lang } = useLanguage();
  const sections = portfolioContent[lang] || [];
  return (
    <div className="portfolio-grid">
      <div className="toc-col"><PortfolioTOC sections={sections} /></div>
      <div className="sections-col">
        {sections.map(s => <Section key={s.id} id={s.id} title={s.title} body={s.body} variant={s.variant} />)}
      </div>
    </div>
  );
}
