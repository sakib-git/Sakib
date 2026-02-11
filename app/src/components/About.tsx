import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 py-24 bg-white overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Floating Card */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Decorative Frame Lines */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-slate-200"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-slate-200"></div>

              {/* Main Card */}
              <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 flex flex-col items-center text-center max-w-[320px] transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100">
                  <code className="text-white text-3xl font-bold">{'</>'}</code>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Passionate Coder</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Turning coffee into code <br /> since 2024
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-3/5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900 relative inline-block">
                About Me
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 -z-10"></span>
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed text-[17px]">
                <p>
                  Hello! My name is <strong className="text-slate-900">Sakib</strong>, and I have a deep passion for creating things that live on the internet. My journey in web development began in 2024 when I first started I quickly realized that bringing designs to life with HTML & CSS was not just fun, but also incredibly rewarding.
                </p>
                <p>
                  Over time, I have focused on building <span className="text-purple-500 font-medium">accessible</span> and inclusive <span className="text-blue-500 font-medium">digital experiences</span> . I strive to create products that are
                  <span className="text-cyan-500 font-medium"> user-friendly</span>
                  and enjoyable for everyone. My curiosity drives me to continuously learn new technologies and stay updated with the latest trends in web development, ensuring my skills remain relevant in this ever-evolving field.
                </p>
                <p>I am deeply passionate about learning new technologies and keeping myself up-to-date with the latest trends in the tech world. When I'm not coding, you can find me exploring new coffee shops or experimenting with digital art.</p>
              </div>
            </div>

            {/* Bottom Badges */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                <span className="text-blue-500">✦</span> Fast Learner
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors">
                <span className="text-purple-500">👥</span> Team Player
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-cyan-600 transition-colors">
                <span className="text-cyan-500">💡</span> Creative Thinker
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}