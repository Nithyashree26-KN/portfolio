import React, { useEffect, useRef } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // ── Custom Cursor tracking ──
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top  = e.clientY + 'px';
      }
      if (ringRef.current) {
        // Ring follows with a slight delay via CSS transition
        ringRef.current.style.left = e.clientX + 'px';
        ringRef.current.style.top  = e.clientY + 'px';
      }
    };

    const growCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width  = '22px';
        cursorRef.current.style.height = '22px';
      }
      if (ringRef.current) {
        ringRef.current.style.width  = '54px';
        ringRef.current.style.height = '54px';
        ringRef.current.style.borderColor = 'rgba(255,42,42,0.8)';
      }
    };

    const shrinkCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width  = '14px';
        cursorRef.current.style.height = '14px';
      }
      if (ringRef.current) {
        ringRef.current.style.width  = '38px';
        ringRef.current.style.height = '38px';
        ringRef.current.style.borderColor = 'rgba(255,42,42,0.5)';
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', growCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    // ── Scroll Reveal ──
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div id="custom-cursor" ref={cursorRef} />
      <div id="custom-cursor-ring" ref={ringRef} />

      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
