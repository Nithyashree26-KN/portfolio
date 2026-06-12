import React from 'react';
import profileImage from '../assets/profile.jpeg';

const skills = [
  { icon: '☕', name: 'Java', level: 88 },
  { icon: '🐍', name: 'Python', level: 80 },
  { icon: '🌐', name: 'JavaScript', level: 78 },
  { icon: '🎨', name: 'HTML & CSS', level: 90 },
  { icon: '🗄️', name: 'MySQL & JDBC', level: 85 },
  { icon: '⚙️', name: 'Servlets & JSP', level: 82 },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-24 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[300px] shrink-0 mt-16 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0" />
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />
            <div className="bg-gray-900 w-full max-w-[260px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner" />
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800">
                <img src={profileImage} alt="Nithyashree" className="w-full h-full object-cover" />
              </div>
              <div className="mt-3 mb-2 text-center">
                <p className="text-white font-black text-sm tracking-wide">NITHYASHREE HEGDE KN</p>
                <p className="text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mt-0.5">Java Full Stack Developer</p>
                <div className="mt-2 flex justify-center gap-2 flex-wrap">
                  <span className="text-white/60 text-[9px] font-mono">📍 Karnataka, India</span>
                  <span className="text-white/60 text-[9px] font-mono">🎓 CGPA 8.7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div data-aos="fade-up" data-aos-delay="400" className="mt-8 w-full max-w-[260px] space-y-2">
            <div className="bg-black/20 rounded-xl px-4 py-2 flex items-center gap-2">
              <span className="text-lg">🎓</span>
              <div>
                <p className="text-white text-xs font-bold">JNNCE Shimoga</p>
                <p className="text-white/60 text-[10px]">B.E. E&TC · 2022–2026</p>
              </div>
            </div>
            <div className="bg-black/20 rounded-xl px-4 py-2 flex items-center gap-2">
              <span className="text-lg">💼</span>
              <div>
                <p className="text-white text-xs font-bold">TAP Academy</p>
                <p className="text-white/60 text-[10px]">Intern · Jan–Jul 2026</p>
              </div>
            </div>
            <div className="bg-black/20 rounded-xl px-4 py-2 flex items-center gap-2">
              <span className="text-lg">📞</span>
              <div>
                <p className="text-white text-xs font-bold">7899973303</p>
                <p className="text-white/60 text-[10px]">Available for opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Bio + Skills */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">About Me</h2>
          <p className="text-base font-semibold mb-8 leading-relaxed max-w-xl text-red-50">
            Hi! I'm <span className="text-black font-black text-lg">Nithyashree Hegde KN</span>, a passionate
            Java Full Stack Developer currently pursuing B.E. in Electronics & Telecommunication at JNNCE Shimoga.
            I love building scalable, user-friendly web applications from the ground up — from responsive frontends to 
            optimized backend databases. Currently interning at <span className="text-black font-bold">TAP Academy, Bengaluru</span>, 
            where I'm building real-world full-stack products using Java, MySQL, and modern web technologies.
          </p>

          {/* Skills */}
          <div id="skills">
            <h3 className="text-black font-black text-xl mb-4 uppercase tracking-widest">Tech Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="bg-black/20 backdrop-blur-sm rounded-xl px-4 py-3 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-white font-bold text-sm">{skill.name}</span>
                    </div>
                    <span className="text-white/70 text-xs font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: `${skill.level}%`, transition: 'width 1.5s ease' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Core Concepts Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['OOP', 'MVC Architecture', 'CRUD Operations', 'RESTful APIs', 'Apache Tomcat', 'Git'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-black/30 text-white text-xs font-bold rounded-full border border-white/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Torn paper divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="absolute top-10 right-10 md:right-20 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};

export default About;
