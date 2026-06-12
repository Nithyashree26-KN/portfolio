import React from 'react';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Java Full Stack Developer</p>
          <p>HTML · CSS · JavaScript</p>
          <p>Java · JDBC · MySQL</p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p>Innovating Digital Solutions</p>
          <button
            onClick={() => scrollTo('projects')}
            className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1 text-left md:text-center"
          >
            View Projects
          </button>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p>Karnataka, India</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Name */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[12vw] md:text-[10vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          nithyashree
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <a href="https://github.com/Nithyashree26-KN" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">
              GitHub
            </a>
            <a href="https://linkedin.com/in/nithyashree-hegde-kn" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">
              LinkedIn
            </a>
          </div>
          <p className="text-white/40 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Nithyashree Hegde KN · Built with React & Vite
          </p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:nithyashree26thirthalli@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">
            nithyashree26thirthalli@gmail.com
          </a>
          <a href="tel:+917899973303" className="hover:text-white transition-colors mt-1">
            +91 7899973303
          </a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <button
            onClick={() => scrollTo('contact')}
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold text-left md:text-right"
          >
            Hire Me →
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
