import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const contactLinks = [
  {
    label: 'Email',
    value: 'nithyashree26thirthalli@gmail.com',
    href: 'mailto:nithyashree26thirthalli@gmail.com',
    icon: '✉️',
  },
  {
    label: 'Phone',
    value: '+91 7899973303',
    href: 'tel:+917899973303',
    icon: '📞',
  },
  {
    label: 'LinkedIn',
    value: 'nithyashree-hegde-kn',
    href: 'https://linkedin.com/in/nithyashree-hegde-kn',
    icon: '🔗',
  },
  {
    label: 'GitHub',
    value: 'Nithyashree26-KN',
    href: 'https://github.com/Nithyashree26-KN',
    icon: '💻',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-gray-900"
    >
      {/* Huge Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1
          className="text-[22vw] leading-[0.75] font-black text-white/5 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Contact Card */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-6 uppercase opacity-80">
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-3 leading-tight">
            Let's Build
            <br />
            <span className="text-black">Something Great.</span>
          </h2>

          <p className="text-white/70 text-base mb-12 max-w-lg leading-relaxed font-medium">
            I'm actively looking for internship and full-time opportunities in software development.
            Whether you have a project in mind or just want to say hi — my inbox is always open!
          </p>

          {/* Contact Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-2xl px-5 py-4 transition-all duration-300 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                <div>
                  <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase">{link.label}</p>
                  <p className="text-white font-bold text-sm truncate">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form
            className="flex flex-col gap-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Message sent! I will get back to you soon.');
            }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="flex-1 bg-transparent border-b border-white/30 pb-3 text-base focus:outline-none focus:border-white transition-colors placeholder-white/40 font-medium"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="flex-1 bg-transparent border-b border-white/30 pb-3 text-base focus:outline-none focus:border-white transition-colors placeholder-white/40 font-medium"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={4}
              required
              className="w-full bg-transparent border-b border-white/30 pb-3 text-base focus:outline-none focus:border-white transition-colors placeholder-white/40 font-medium resize-none"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-10 py-4 rounded-full border-2 border-white text-white font-black flex items-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group text-sm tracking-widest uppercase"
              >
                Send Message
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
