import React from "react";
import img from "../assets/Sakib_pp.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="home">
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
      <section
        id="home"
        className="relative px-6 md:px-12 py-24 lg:py-32 max-w-7xl mx-auto overflow-hidden"
      >
        <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                Available for opportunities
              </h2>
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900">
                Hi, I'm <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600">
                  Sakibul Hasan
                </span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed max-w-lg">
                Full-Stack Developer specializing in{" "}
                <span className="text-slate-900 font-medium">
                  React & MERN Stack.
                </span>{" "}
                Building digital products with precision and passion.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="mt-4 text-center w-fit ">
                <a
                  href="https://github.com/sakib-git"
                  target="_blank"
                  className="px-8 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all flex items-center gap-2 mx-auto shadow-sm"
                >
                  View All Projects <span className="text-lg">→</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-8 pt-4 border-t border-slate-100"></div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600 to-purple-600 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20"></div>

              <div className="relative w-full h-full bg-slate-200 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <Image src={img} alt="Sakib" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
