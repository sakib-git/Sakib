"use client";
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (

     <nav className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
     
        <div className="flex justify-between items-center h-20">
          {/* Logo Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-medium tracking-tighter text-blue-600 cursor-pointer">S.</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => {
                const home = document.getElementById('home');
                if (home) {
                  home.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
              }}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => {
                const about = document.getElementById('about');
                if (about) {
                  about.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
              }}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => {
                const skills = document.getElementById('skills');
                if (skills) {
                  skills.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
              }}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => {
                const project = document.getElementById('projects');
                if (project) {
                  project.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
              }}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) {
                  contact.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
              }}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-all shadow-lg shadow-blue-100">
              Hire Me
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-blue-600 focus:outline-none">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-fadeIn">
          <div className="px-6 pt-4 pb-8 flex flex-col gap-3 ">
            <button
              onClick={() => {
                const home = document.getElementById('home');
                if (home) {
                  home.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
              }}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-300 relative group "
            >
              Home
            </button>

            <button
              onClick={() => {
                const about = document.getElementById('about');
                if (about) {
                  about.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
              }}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              About
            </button>

            <button
              onClick={() => {
                const skills = document.getElementById('skills');
                if (skills) {
                  skills.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
              }}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Skills
            </button>

            <button
              onClick={() => {
                const project = document.getElementById('projects');
                if (project) {
                  project.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
              }}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Projects
            </button>

            <button
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) {
                  contact.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
              }}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>

  );
};

export default Navbar;
