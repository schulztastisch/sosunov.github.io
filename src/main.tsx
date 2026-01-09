import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import Lenis from 'lenis'
const lenis = new Lenis(); function raf(t:number){ lenis.raf(t); requestAnimationFrame(raf) } requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
)
``
