import { readdirSync, statSync } from 'fs';
import path from 'path';

const dir = path.resolve('src/assets/photos/cover');
const files = readdirSync(dir).filter(f=>/\.(jpe?g|png|webp|avif)$/i.test(f));
const rows = files.map(f=>{
  const fp = path.join(dir,f);
  const st = statSync(fp);
  return { file: f, kb: +(st.size/1024).toFixed(1) };
});
console.table(rows);
const total = rows.reduce((a,b)=>a+b.kb,0).toFixed(1);
console.log(`Total: ${total} KB across ${rows.length} images`);
