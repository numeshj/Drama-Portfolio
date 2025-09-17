import React from 'react';

/* Dynamic gallery loader using Vite's import.meta.glob */
export default function Gallery({ category }) {
  const [images, setImages] = React.useState([]);

  // Predeclare static globs (Vite requires literal strings)
  const globMap = React.useMemo(() => ({
    costume: import.meta.glob('/src/assets/photos/costume/*.{png,jpg,jpeg,gif,webp,avif}'),
    'background-setup': import.meta.glob('/src/assets/photos/background-setup/*.{png,jpg,jpeg,gif,webp,avif}'),
    props: import.meta.glob('/src/assets/photos/props/*.{png,jpg,jpeg,gif,webp,avif}'),
    practices: import.meta.glob('/src/assets/photos/practices/*.{png,jpg,jpeg,gif,webp,avif}'),
    preparations: import.meta.glob('/src/assets/photos/preparations/*.{png,jpg,jpeg,gif,webp,avif}'),
    'fund-raising': import.meta.glob('/src/assets/photos/fund-raising/*.{png,jpg,jpeg,gif,webp,avif}'),
  }), []);

  React.useEffect(() => {
    const modules = globMap[category] || {};
    const load = async () => {
      const entries = await Promise.all(
        Object.entries(modules).map(async ([path, loader]) => {
          const mod = await loader();
            return { src: mod.default, name: path.split('/').pop() };
        })
      );
      entries.sort((a,b)=> (a.name < b.name ? 1 : -1));
      setImages(entries);
    };
    load();
  }, [category, globMap]);

  if (!images.length) {
    return <p style={{opacity:.6}}>No images added yet for <strong>{category}</strong>. Place files inside <code>src/assets/photos/{category}</code>.</p>;
  }

  return (
    <div className="gallery-grid">
      {images.map(img => (
        <figure key={img.src} className="gallery-item">
          <img loading="lazy" src={img.src} alt={img.name} />
        </figure>
      ))}
    </div>
  );
}
