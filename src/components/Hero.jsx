import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroBg from '../assets/hero-bg-dev.png';

const TYPING_WORDS = [
  'Java Full Stack Developer',
  'Backend Engineer',
  'Web Application Builder',
  'Problem Solver',
];

const useTypingEffect = (words, speed = 80, pause = 1800) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx]     = useState(0);
  const [charIdx, setCharIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx(c => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
};

const Hero = () => {
  const typedText = useTypingEffect(TYPING_WORDS);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Developer Workspace"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

      {/* Animated subtle particles / grid overlay */}
      <div
        className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,42,42,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,42,42,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 px-6 md:px-16 max-w-7xl mx-auto flex flex-col justify-center items-start text-left">

        <p
          data-aos="fade-up"
          className="text-[#ff2a2a] text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4"
        >
          👋 Hello, I'm
        </p>

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-white text-5xl md:text-7xl font-black mb-3 tracking-tight leading-tight glow-text"
        >
          Nithyashree
          <br />
          <span className="text-white/90">Hegde KN</span>
        </h1>

        {/* Typing effect */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-white/70 text-lg md:text-2xl font-semibold mb-3 tracking-wide min-h-[2rem]"
        >
          <span className="typing-cursor">{typedText}</span>
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white/60 text-sm md:text-base font-medium mb-10 max-w-lg leading-relaxed"
        >
          Passionate Software Engineer dedicated to architecting scalable web applications
          with Java, JDBC, MySQL & modern frontend technologies.
        </p>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-row flex-wrap items-center gap-4"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3 text-sm md:text-base rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(255,42,42,0.4)]"
          >
            View Projects
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3 text-sm md:text-base rounded-full bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
          >
            Contact Me
          </button>

          <a
            href="/Nithyashree_ (1).pdf"
            download="Nithyashree_Resume.pdf"
            className="px-7 py-3 text-sm md:text-base rounded-full border border-[#ff2a2a] text-[#ff2a2a] font-bold hover:bg-[#ff2a2a] hover:text-white transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div data-aos="fade-up" data-aos-delay="500" className="flex items-center gap-5 mt-8">
          <a
            href="https://github.com/Nithyashree26-KN"
            target="_blank" rel="noopener noreferrer"
            className="text-white/40 hover:text-[#ff2a2a] transition-colors text-xs font-mono tracking-widest uppercase"
          >
            GitHub ↗
          </a>
          <span className="text-white/20">|</span>
          <a
            href="https://linkedin.com/in/nithyashree-hegde-kn"
            target="_blank" rel="noopener noreferrer"
            className="text-white/40 hover:text-[#ff2a2a] transition-colors text-xs font-mono tracking-widest uppercase"
          >
            LinkedIn ↗
          </a>
          <span className="text-white/20">|</span>
          <a
            href="mailto:nithyashree26thirthalli@gmail.com"
            className="text-white/40 hover:text-[#ff2a2a] transition-colors text-xs font-mono tracking-widest uppercase"
          >
            Email ↗
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce flex flex-col items-center gap-1">
        <span className="text-white/30 text-[9px] font-mono tracking-widest uppercase">scroll</span>
        <svg className="w-4 h-4 text-white/30" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
