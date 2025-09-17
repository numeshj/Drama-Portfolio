import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import logo from './assets/photos/school/logo.jpeg';

// Set favicon to school logo
const setFavicon = () => {
  const linkId = 'dynamic-favicon';
  let link = document.getElementById(linkId);
  if(!link){
    link = document.createElement('link');
    link.id = linkId;
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = logo;
};
setFavicon();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
