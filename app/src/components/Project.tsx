import React from 'react';
import pR from '../assets/public-report.png'

import bill from '../assets/bill.png';
import toy from '../assets/toy.png';
import Image from 'next/image';
const Project = () => {
  const projects = [
    {
      title: 'Public-Infrastructure-Issue-Reporting-System Dashboard',
      desc: 'A web platform where citizens can report public infrastructure issues such as roads, electricity, and water services, enabling faster response and better city management.',
      tags: ['React.js', 'APi', 'MongoDB', 'Firebase'],
      colors: 'bg-cyan-50 text-cyan-600',
      icon: pR,
      liveLink: 'https://public-infrastructure-issue-reporti.vercel.app/',
      repoLink: 'https://github.com/sakib-git/Public-Infrastructure-Issue-Reporting-System',
    },
    {
      title: 'Bill-Management',
      desc: 'A basic Bill Management Website built for an assignment, allowing users to add, view, and organize bills through a clean and responsive interface using HTML, CSS, and JavaScript.',
      tags: ['React.js', 'MongoDB', 'Firebase'],
      colors: 'bg-green-50 text-green-600',
      icon: bill,
      liveLink: 'https://paybills-assignment-10-0010.vercel.app/',
      repoLink: 'https://github.com/sakib-git/Bill-Management',
    },
    {
      title: 'App Store',
      desc: 'This Demo App Store website was created for an academic assignment and features a modern, responsive layout where users can browse a collection of apps.',
      tags: ['React.js', 'tailwind', ],
      colors: 'bg-orange-50 text-orange-600',
      icon: toy,
      liveLink: 'https://assignment-08-eta-six.vercel.app/',
      repoLink: 'https://github.com/sakib-git/App-Store-',
    },
  ];

  return (
    <section id="projects" className="relative px-6 md:px-12 py-24 bg-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 relative inline-block">
            Projects Showcase
            <span className="absolute bottom-1 left-0 w-1/2 h-1 bg-blue-500"></span>
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg">A collection of my recent work, featuring full-stack applications and experimental prototypes.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group">
              {/* Project Image */}
              <div className="overflow-hidden">
                <Image src={project.icon} alt={project.title} className="w-full h-60 object-contian  transition-transform duration-500" />
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-[20px] font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-[13px]  mb-6 line-clamp-4">{project.desc}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={`px-3 py-1 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-wider ${project.colors} bg-opacity-20`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-blue-600 transition-colors">
                    🔗 View Project
                  </a>

                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-blue-600 transition-colors">
                    Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center w-fit mx-auto">
          <a href="https://github.com/sakib-git" target="_blank" className="px-8 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all flex items-center gap-2 mx-auto shadow-sm">
            View All Projects <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
