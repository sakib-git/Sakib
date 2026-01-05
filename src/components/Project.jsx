import React from 'react';

const Project = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      desc: "A comprehensive admin dashboard for managing products, orders, and analytics. Built with Next.js and Prisma.",
      tags: ["Next.js", "TypeScript", "Prisma"],
      colors: "bg-cyan-50 text-cyan-600",
      icon: "📊"
    },
    {
      title: "Real-time Chat App",
      desc: "A modern messaging application featuring instant messaging, file sharing, and group chats using Socket.io.",
      tags: ["React", "Socket.io", "Node.js"],
      colors: "bg-green-50 text-green-600",
      icon: "💬"
    },
    {
      title: "Weather Forecast SaaS",
      desc: "A weather tracking application providing 7-day forecasts and historical data visualization with APIs.",
      tags: ["Vue.js", "Firebase", "API"],
      colors: "bg-orange-50 text-orange-600",
      icon: "☁️"
    }
  ];

  return (
    <section id="projects" className="relative px-6 md:px-12 py-24 bg-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
           backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 relative inline-block">
            Projects Showcase
            <span className="absolute bottom-1 left-0 w-1/2 h-1 bg-blue-500"></span>
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg">
            A collection of my recent work, featuring full-stack applications and experimental prototypes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
              {/* Project Image Placeholder */}
              <div className="h-52 bg-slate-50 flex items-center justify-center border-b border-slate-50 group-hover:bg-slate-100 transition-colors">
                <span className="text-6xl opacity-20 grayscale group-hover:grayscale-0 transition-all">
                  {project.icon}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${project.colors}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                  <a href="#" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-slate-900 transition-colors">
                    🔗 View Project
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-slate-900 transition-colors">
                     Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

    
        <div className="mt-16 text-center w-fit mx-auto">
          <a href='https://github.com/sakib-git' target="_blank" className="px-8 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all flex items-center gap-2 mx-auto shadow-sm">
            View All Projects <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;