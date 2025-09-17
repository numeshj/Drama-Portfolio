import React from 'react';

export default function ThemeToggle(){
  const [theme, setTheme] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  React.useEffect(() => {
    const body = document.body;
    if (theme === 'light') body.classList.add('light-theme'); else body.classList.remove('light-theme');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button className="theme-toggle" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} title="Toggle theme">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
