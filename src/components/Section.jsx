import React, { useRef, useEffect, useState } from 'react';
import '../styles/Section.css';

export default function Section({ id, title, body, variant }){
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(()=>{
    const el = ref.current;
    const obs = new IntersectionObserver(([e])=> { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold:.25 });
    if (el) obs.observe(el);
    return () => obs.disconnect();
  },[]);
  return (
    <section id={id} ref={ref} className={`portfolio-section variant-${variant||'default'} ${visible?'show':''}`}>
      <div className="section-inner">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </section>
  );
}
