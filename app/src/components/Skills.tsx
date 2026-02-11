import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "code", // < > icon
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
      skills: ["TypeScript", "React.js ", "JavaScript", "Tailwind CSS", "HTML5"]
    },
    {
      title: "Backend",
      icon: "server",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      skills: ["Node.js", "Express.js", ]
    },
    {
      title: "Database",
      icon: "database",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      skills: ["MongoDB",  "Firebase"]
    },
    {
      title: "Tools",
      icon: "wrench",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      skills: ["Git & GitHub", "Figma", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="relative px-6 md:px-12 py-24 bg-white overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
           backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 relative inline-block">
            My Skills
            <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-100 -z-10"></span>
          </h2>
          <p className="text-slate-500 max-w-2xl leading-relaxed">
            I work with a variety of technologies to build robust and scalable applications. 
            Here are my main areas of expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[2rem] border border-slate-50 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Category Icon */}
              <div className={`w-12 h-12 ${category.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                 <span className={`${category.color} text-xl font-bold`}>
                    {category.title === "Frontend" ? "</>" : 
                     category.title === "Backend" ? "≡" : 
                     category.title === "Database" ? "▤" : "🛠"}
                 </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-6">{category.title}</h3>

              {/* Skills List */}
              <ul className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-400 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;