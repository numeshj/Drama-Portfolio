import React, { useEffect, useState } from 'react';
import '../styles/PortfolioTOC.css';

export default function PortfolioTOC({ sections }){
  const [active, setActive] = useState(sections[0]?.id);
  useEffect(()=>{
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '0px 0px -70% 0px', threshold: 0.1 });
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return ()=> observer.disconnect();
  }, [sections]);
  return (
    <nav className="portfolio-toc" aria-label="Section navigation">
      <ul>
        {sections.map(s => (
          <li key={s.id}>
            <a href={'#'+s.id} className={active===s.id? 'active':''}>{s.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
