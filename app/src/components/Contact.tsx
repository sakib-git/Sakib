"use client"

import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const socialData = [
    {
      id: 3,
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/sakibofficial-webdev/',
      color: 'hover:bg-[#0A66C2]',
   
       
    },
    {
      id: 1,
      icon: <FaFacebookF />,
      link: 'https://www.facebook.com/sakibofficial.webdev/',
      color: 'hover:bg-[#1877F2]', 
    },
    {
      id: 2,
      icon: <FaGithub />,
      link: 'https://github.com/sakib-git',
      color: 'hover:bg-[#333]', // Github black
    },
    
  ];


  const handleSubmit = (e: { preventDefault: () => void; }) => {
  e.preventDefault(); 


};
  return (
    <section id="contact" className="relative px-6 md:px-12 py-24 bg-slate-50/30 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 relative inline-block">
            Contact Me
            <span className="absolute bottom-1 left-0 w-1/3 h-1 bg-blue-500"></span>
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg">Got a project in mind? Let's discuss how we can work together to build something great.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Information Card */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-50 space-y-10">
            <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-500 text-xl">✉</div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Me</p>
                  <p className="text-slate-900 font-semibold">sakibulhasan32002@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 text-xl">📍</div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                  <p className="text-slate-900 font-semibold">Bogura, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-50">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Follow Me</p>
              <div className="flex gap-5 p-4 ">
                {socialData.map((item) => (
                  <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer"  className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 transition-all duration-300 hover:text-white hover:border-transparent ${item.color} shadow-sm hover:shadow-lg transform hover:-translate-y-1 `} >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-300" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-300" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea rows={4} placeholder="How can I help you?" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-300 resize-none"></textarea>
              </div>

              <button type='submit' className="w-full py-5 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all active:scale-[0.98]">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;