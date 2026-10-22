import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Hide the loading screen (in index.html) once the page has rendered and the font is ready.
// The short minimum stops it flashing on fast connections; the 3s cap stops a slow font from blocking the page.
const minShow = new Promise((r) => setTimeout(r, 600));
const fontsOrTimeout = Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 3000))]);
Promise.all([minShow, fontsOrTimeout]).then(() => {
  document.documentElement.classList.add('loaded');
  setTimeout(() => document.getElementById('loader')?.remove(), 600);
});
