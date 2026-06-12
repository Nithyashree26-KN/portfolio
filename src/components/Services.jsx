import React from 'react';

const projects = [
  {
    id: '01',
    title: 'E-Commerce Website',
    duration: 'Jan 2026 – Mar 2026',
    description:
      'A full-stack E-Commerce Platform enabling users to browse, search, and purchase products online with secure authentication and responsive UI.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'JDBC', 'MySQL', 'Apache Tomcat'],
    highlights: [
      'Implemented secure authentication & authorization for customer login',
      'Designed responsive UI using HTML, CSS, and JavaScript',
      'Integrated MySQL to manage products, inventory & order processing',
      'Built shopping cart & checkout modules with optimized DB queries',
    ],
    color: '#ff2a2a',
    icon: '🛒',
    github: 'https://github.com/Nithyashree26-KN',
  },
  {
    id: '02',
    title: 'Food Delivery Website',
    duration: 'Apr 2026 – Jun 2026',
    description:
      'A full-stack Food Delivery Platform allowing users to browse restaurants, place orders, and track deliveries with a complete backend management system.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'JDBC', 'MySQL', 'Apache Tomcat'],
    highlights: [
      'Implemented secure user authentication & order placement flows',
      'Designed responsive frontend & integrated backend MySQL services',
      'Built CRUD-based menu management system',
      'Optimized application performance for scalability',
    ],
    color: '#ff2a2a',
    icon: '🍕',
    github: 'https://github.com/Nithyashree26-KN',
  },
  {
    id: '03',
    title: 'Electronic Design Automation',
    duration: 'Sep 2025 – Nov 2025',
    description:
      'Python-based automation of electronic design verification workflows using scientific computing libraries for improved analysis efficiency.',
    stack: ['Python', 'NumPy', 'SciPy', 'Matplotlib'],
    highlights: [
      'Automated electronic design verification using Python scripting',
      'Leveraged NumPy & SciPy for numerical computation',
      'Visualized analysis results using Matplotlib',
      'Improved workflow efficiency through automation',
    ],
    color: '#ff2a2a',
    icon: '⚡',
    github: 'https://github.com/Nithyashree26-KN',
  },
];

const ProjectCard = ({ project, index }) => (
  <div
    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
    data-aos-delay={index * 100}
    className="card-3d bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(255,42,42,0.2)] transition-all duration-500 group reveal"
  >
    {/* Card Header */}
    <div className="bg-[#ff2a2a] px-8 py-6 flex items-start justify-between">
      <div>
        <span className="text-white/60 text-xs font-bold tracking-widest uppercase font-mono">{project.id}</span>
        <h3 className="text-white text-2xl md:text-3xl font-black mt-1 leading-tight">{project.title}</h3>
        <p className="text-white/70 text-xs font-mono mt-1 tracking-widest">{project.duration}</p>
      </div>
      <span className="text-4xl ml-4 mt-1 group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
    </div>

    {/* Card Body */}
    <div className="px-8 py-6">
      <p className="text-gray-600 text-sm leading-relaxed mb-5">{project.description}</p>

      {/* Highlights */}
      <ul className="space-y-2 mb-6">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-[#ff2a2a] font-bold mt-0.5">→</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full border border-gray-200 hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub Link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-xs font-bold hover:bg-[#ff2a2a] transition-all duration-300 group/btn"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
        View on GitHub
        <span className="group-hover/btn:translate-x-1 transition-transform">↗</span>
      </a>
    </div>
  </div>
);

const Services = () => {
  return (
    <section
      id="projects"
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
      style={{
        backgroundImage:
          'linear-gradient(to right, #8080800a 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16">
          <div className="inline-block border border-gray-200 rounded-full px-5 py-1.5 text-sm text-gray-500 font-bold mb-5 shadow-sm bg-white">
            My Work
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-4">
            Featured
            <span className="text-[#ff2a2a]"> Projects</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            Real-world full-stack applications built with Java, JDBC, MySQL, and modern web technologies during my internship and academic journey.
          </p>
        </div>

        {/* Experience Banner */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-[#ff2a2a] rounded-3xl px-8 py-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <p className="text-white/70 text-xs font-bold tracking-widest uppercase mb-1">💼 Work Experience</p>
            <h3 className="text-white text-2xl font-black">Java Full Stack Developer Intern</h3>
            <p className="text-white/80 text-sm font-semibold mt-1">TAP Academy · Bengaluru, India</p>
          </div>
          <div className="text-white/60 text-sm font-mono font-bold border border-white/20 px-4 py-2 rounded-xl">
            Jan 2026 – Jul 2026
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="bg-gray-50 rounded-3xl px-8 py-6 mb-16 border border-gray-100"
        >
          <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-3">Internship Scope</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              'Core Java, JDBC, Servlets, JSP',
              'SQL, HTML, CSS, JavaScript',
              'Object-Oriented Programming principles',
              'Industry-standard coding practices',
              'Database design & CRUD operations',
              'Full-stack web application deployment',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
