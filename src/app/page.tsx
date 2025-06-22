"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaExternalLinkAlt, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiGit, SiRedux, SiFigma, SiFirebase, SiNodedotjs, SiMongodb, SiSupabase, SiAntdesign, SiSvelte, SiRemix } from "react-icons/si";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Kamrul Hassan
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-10">
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium">About</a>
              <a href="#experience" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium">Experience</a>
              <a href="#skills" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium">Skills</a>
              <a href="#projects" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium">Projects</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium">Contact</a>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors duration-300"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-3">
                <a
                  href="#about"
                  className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </a>
                <a
                  href="#skills"
                  className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Talk
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in-up">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight animate-fade-in-up delay-200">
                Senior Frontend
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  Developer
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-300">
                Over 5 years crafting exceptional user experiences with modern web technologies.
                Specializing in React, TypeScript, and scalable frontend architectures.
              </p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-in-up delay-400">
                <a href="mailto:anaada2015@gmail.com" className="group bg-white/80 backdrop-blur-xl p-3 sm:p-4 rounded-xl border border-white/30 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-white text-sm sm:text-base" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-slate-500">Email</div>
                      <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-xs sm:text-sm truncate">anaada2015@gmail.com</div>
                    </div>
                  </div>
                </a>
                <a href="https://linkedin.com/in/KamrulHassanAnanda" target="_blank" rel="noopener noreferrer" className="group bg-white/80 backdrop-blur-xl p-3 sm:p-4 rounded-xl border border-white/30 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaLinkedin className="text-white text-sm sm:text-base" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-slate-500">LinkedIn</div>
                      <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-xs sm:text-sm truncate">KamrulHassanAnanda</div>
                    </div>
                  </div>
                </a>
                <a href="tel:+8801300021529" className="group bg-white/80 backdrop-blur-xl p-3 sm:p-4 rounded-xl border border-white/30 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaPhone className="text-white text-sm sm:text-base" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-slate-500">Phone</div>
                      <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-xs sm:text-sm">+8801300021529</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up delay-500">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                >
                  <span className="relative z-10">Start a Project</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
                <a
                  href="/KamrulHassan_5years_aiub.pdf"
                  className="group border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 hover:-translate-y-1 bg-white/80 backdrop-blur-xl hover:shadow-xl"
                >
                  <FaDownload className="group-hover:scale-110 transition-transform duration-300" />
                  Download CV
                </a>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0 animate-fade-in-up delay-300">
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute top-1/4 -right-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-30 animate-pulse delay-500"></div>

              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white relative group">
                  <Image
                    src="/ananda.jpeg"
                    alt="Kamrul Hassan"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>


                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-xl text-xs sm:text-sm md:text-base animate-bounce-slow">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm md:text-base font-bold">5+</div>
                    <div className="text-xs">YOE</div>
                  </div>
                </div>

                {/* React Badge */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-xl text-xs sm:text-xs md:text-sm animate-bounce-slow delay-500">
                  <div className="text-center">
                    <div className="text-xs sm:text-xs md:text-sm font-bold">React</div>
                  </div>
                </div>

                {/* Floating Code Elements */}
                <div className="absolute top-1/4 -right-8 sm:-right-12 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border border-white/20 animate-float">
                  <div className="text-xs sm:text-sm font-mono text-slate-700">
                    <div className="text-blue-600">const</div>
                    <div className="text-green-600">developer</div>
                    <div className="text-purple-600">=</div>
                    <div className="text-orange-600">"awesome"</div>
                  </div>
                </div>

                <div className="absolute bottom-1/4 -left-8 sm:-left-12 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border border-white/20 animate-float delay-1000">
                  <div className="text-xs sm:text-sm font-mono text-slate-700">
                    <div className="text-blue-600">function</div>
                    <div className="text-green-600">createMagic</div>
                    <div className="text-purple-600">()</div>
                    <div className="text-orange-600">{"{...}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">About Me</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              A passionate senior frontend developer with 5+ years of experience building scalable web applications
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">My Journey</h3>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                I've spent the last 5+ years crafting exceptional user experiences for startups and enterprise companies.
                My expertise spans from building performant React applications to architecting scalable frontend systems
                that serve thousands of users.
              </p>
              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                I specialize in modern JavaScript frameworks, TypeScript, and cutting-edge web technologies.
                My passion lies in creating intuitive interfaces that not only look great but also provide
                seamless user experiences across all devices.
              </p>
              <div className="flex space-x-6">
                <a href="https://github.com/KamrulHasaanAnanda" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors duration-300 hover:scale-110">
                  <FaGithub size={28} />
                </a>
                <a href="https://linkedin.com/in/KamrulHassanAnanda" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors duration-300 hover:scale-110">
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl border border-blue-100">
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-slate-700 font-semibold text-base sm:text-lg">Years Experience</div>
                <div className="text-slate-500">Building web apps</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 sm:p-8 rounded-2xl border border-green-100">
                <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-slate-700 font-semibold text-base sm:text-lg">Projects Delivered</div>
                <div className="text-slate-500">Successfully completed</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 sm:p-8 rounded-2xl border border-orange-100">
                <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">10+</div>
                <div className="text-slate-700 font-semibold text-base sm:text-lg">Technologies</div>
                <div className="text-slate-500">Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Work Experience</h2>
            <p className="text-lg sm:text-xl text-slate-600">My professional journey in software development</p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Senior Software Developer</h3>
                  <p className="text-blue-600 font-semibold text-base sm:text-lg">Algesoft</p>
                </div>
                <div className="text-slate-500 mt-2 lg:mt-0">January 2025 - Present</div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                Currently working on innovative software solutions and contributing to cutting-edge projects.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">Next.js</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">Tailwind CSS</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">Shadcn</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">Remotion</span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Sr. Software Developer (Frontend)</h3>
                  <p className="text-blue-600 font-semibold text-base sm:text-lg">Devotrixinc (Contractual)</p>
                </div>
                <div className="text-slate-500 mt-2 lg:mt-0">August 2024 - December 2024</div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                Working alongside a team lead from Amazon on authentication module, migration from Supabase to Clerk,
                and implementing live stock data features.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">Authentication</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">Supabase</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">Clerk</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">Live Data</span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Sr. Software Developer (Frontend)</h3>
                  <p className="text-blue-600 font-semibold text-base sm:text-lg">Shadhin Music Ltd (Gakk Media Ltd)</p>
                </div>
                <div className="text-slate-500 mt-2 lg:mt-0">February 2023 - July 2024</div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                Directed and developed the entire Shadhin music web application with music player, podcast, video, live video,
                and audio features. Engineered dynamic home page handling 1-2k data items efficiently. Led frontend team
                and executed campaigns with major partners including GP, Robi, and bKash.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">Music Player</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">Live Video</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">Campaign Management</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">Team Leadership</span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Software Engineer (Frontend)</h3>
                  <p className="text-blue-600 font-semibold text-base sm:text-lg">Accept Global Ltd (Wholesale Cart)</p>
                </div>
                <div className="text-slate-500 mt-2 lg:mt-0">September 2022 - February 2023</div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                Contributed to Wholesalecart.com, winner of South Asian Business Excellence Award 2022 as "BEST B2B E-COMMERCE WEBSITE".
                Worked on OneSale Mart ERP system and maintained web application performance.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">B2B E-commerce</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">ERP System</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">Performance Optimization</span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Frontend Developer</h3>
                  <p className="text-blue-600 font-semibold text-base sm:text-lg">KG International Ltd</p>
                </div>
                <div className="text-slate-500 mt-2 lg:mt-0">December 2021 - August 2022</div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                Worked on new projects ensuring timely delivery and high-quality results. Fixed bugs of existing projects
                and handled client communications.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-teal-100 text-teal-800 rounded-full text-xs sm:text-sm font-medium">Project Delivery</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-teal-100 text-teal-800 rounded-full text-xs sm:text-sm font-medium">Bug Fixing</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-teal-100 text-teal-800 rounded-full text-xs sm:text-sm font-medium">Client Communication</span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Junior Full Stack Developer</h3>
                  <p className="text-blue-600 font-semibold text-base sm:text-lg">Flexible It & Solution</p>
                </div>
                <div className="text-slate-500 mt-2 lg:mt-0">October 2020 - July 2021</div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                Worked on new projects and fixed bugs of existing projects. Gained foundational experience in full-stack development.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-indigo-100 text-indigo-800 rounded-full text-xs sm:text-sm font-medium">Full Stack</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-indigo-100 text-indigo-800 rounded-full text-xs sm:text-sm font-medium">Bug Fixing</span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-indigo-100 text-indigo-800 rounded-full text-xs sm:text-sm font-medium">Project Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Skills & Technologies</h2>
            <p className="text-lg sm:text-xl text-slate-600">Technologies I work with daily</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiReact size={32} className="sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">React</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Advanced</p>
            </div>
            <div className="group bg-gradient-to-br from-slate-50 to-gray-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiNextdotjs size={32} className="sm:w-12 sm:h-12 text-slate-800 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">Next.js</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Expert</p>
            </div>
            <div className="group bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiRemix size={32} className="sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">Remix</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Advanced</p>
            </div>
            <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiSvelte size={32} className="sm:w-12 sm:h-12 text-orange-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">SvelteKit</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Intermediate</p>
            </div>
            <div className="group bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiTypescript size={32} className="sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">TypeScript</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Advanced</p>
            </div>
            <div className="group bg-gradient-to-br from-yellow-50 to-orange-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-yellow-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiJavascript size={32} className="sm:w-12 sm:h-12 text-yellow-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">JavaScript</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Expert</p>
            </div>
            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-cyan-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiTailwindcss size={32} className="sm:w-12 sm:h-12 text-cyan-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">Tailwind CSS</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Expert</p>
            </div>
            <div className="group bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiAntdesign size={32} className="sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">Ant Design</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Advanced</p>
            </div>
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiNodedotjs size={32} className="sm:w-12 sm:h-12 text-green-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">Node.js</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Advanced</p>
            </div>
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiMongodb size={32} className="sm:w-12 sm:h-12 text-green-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">MongoDB</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Intermediate</p>
            </div>
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiSupabase size={32} className="sm:w-12 sm:h-12 text-green-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">Supabase</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Advanced</p>
            </div>
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiRedux size={32} className="sm:w-12 sm:h-12 text-purple-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">Redux</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Advanced</p>
            </div>
            <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiFigma size={32} className="sm:w-12 sm:h-12 text-orange-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">Figma</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Intermediate</p>
            </div>
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <SiFirebase size={32} className="sm:w-12 sm:h-12 text-green-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">Firebase</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Advanced</p>
            </div>
            <div className="group bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xs sm:text-sm">R</span>
              </div>
              <span className="text-slate-800 font-semibold text-sm sm:text-base lg:text-lg">Remotion</span>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-2">Intermediate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Featured Projects</h2>
            <p className="text-lg sm:text-xl text-slate-600">Some of my recent work</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Project 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="h-48 sm:h-64 relative overflow-hidden">
                <Image
                  src="/vidrush.png"
                  alt="Vidrush.ai"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">AI Video Generation Platform</h3>
                <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-lg">
                  An autonomous creative AI platform that researches, scripts, imagines, and edits to deliver
                  cinematic video masterpieces in minutes. Features advanced AI video generation with multiple
                  duration options from quick content to documentary-style videos.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">Next.js</span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">Tailwind CSS</span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">Shadcn</span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">Remotion</span>
                </div>
                <div className="flex gap-4 sm:gap-6">
                  <a href="https://www.vidrush.ai/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base">
                    Live Demo
                    <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="h-48 sm:h-64 relative overflow-hidden">
                <Image
                  src="/edge.png"
                  alt="Edgeful Platform"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Edgeful Platform</h3>
                <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-lg">
                  Frontend Lead role implementing authentication, user flow, and payment features.
                  Migration from Supabase to Clerk and implementing live stock data functionality.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">Next.js</span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">Shadcn</span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">Authentication</span>
                </div>
                <div className="flex gap-4 sm:gap-6">
                  <a href="https://www.edgeful.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base">
                    Live Demo
                    <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="h-48 sm:h-64 relative overflow-hidden">
                <Image
                  src="/shadhin.png"
                  alt="Shadhin Music Platform"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Shadhin Music Platform</h3>
                <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-lg">
                  Frontend Lead role implementing playlist, payment, and campaign features.
                  Converted and refactored previous codebase to more readable code.
                  Prevented users from giving false values during campaigns.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">Next.js</span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">Shadcn</span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">Music Player</span>
                </div>
                <div className="flex gap-4 sm:gap-6">
                  <a href="https://shadhinmusic.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-semibold transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base">
                    Live Demo
                    <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="h-48 sm:h-64 relative overflow-hidden">
                <Image
                  src="/skins.png"
                  alt="CS:GO Skins Platform"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Counter-Strike Skins Platform</h3>
                <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-lg">
                  Built from scratch a Counter-Strike skins buy-selling platform with Steam base authentication.
                  Implemented a bot for automated buy & sell of skins.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">Next.js</span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">Ant Design</span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">Steam API</span>
                </div>
                <div className="flex gap-4 sm:gap-6">
                  <a href="https://skinsdojo.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-semibold transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base">
                    Live Demo
                    <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/2 right-10 w-24 h-24 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-2xl animate-bounce-slow delay-500"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Let's Work Together
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 animate-fade-in-up delay-200">
              Ready to build something amazing?
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 sm:p-8 lg:p-12 rounded-3xl border border-blue-200/50 text-center shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group animate-fade-in-up delay-300">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            {/* Floating Icons */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce-slow"></div>
            <div className="absolute top-8 right-8 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce-slow delay-500"></div>
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-bounce-slow delay-1000"></div>
            <div className="absolute bottom-4 right-4 w-5 h-5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-bounce-slow delay-1500"></div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 relative z-10">
              Get in Touch
            </h3>
            <p className="text-slate-600 mb-8 sm:mb-12 leading-relaxed text-sm sm:text-lg max-w-2xl mx-auto relative z-10">
              I'm always interested in new opportunities and exciting projects. Whether you have a question
              or want to discuss a potential collaboration, feel free to reach out!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative z-10">
              <div className="group flex flex-col items-center p-4 sm:p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-400">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaEnvelope className="text-white text-lg sm:text-xl" />
                </div>
                <div className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">Email</div>
                <div className="text-slate-600 text-xs sm:text-sm group-hover:text-blue-600 transition-colors duration-300">anaada2015@gmail.com</div>
                <div className="mt-2 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></div>
              </div>

              <div className="group flex flex-col items-center p-4 sm:p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-500">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaLinkedin className="text-white text-lg sm:text-xl" />
                </div>
                <div className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">LinkedIn</div>
                <div className="text-slate-600 text-xs sm:text-sm group-hover:text-blue-600 transition-colors duration-300">linkedin.com/in/KamrulHassanAnanda</div>
                <div className="mt-2 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></div>
              </div>

              <div className="group flex flex-col items-center p-4 sm:p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-600 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaPhone className="text-white text-lg sm:text-xl" />
                </div>
                <div className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">Phone</div>
                <div className="text-slate-600 text-xs sm:text-sm group-hover:text-blue-600 transition-colors duration-300">+8801300021529</div>
                <div className="mt-2 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 sm:mt-12 animate-fade-in-up delay-700">
              <a
                href="mailto:anaada2015@gmail.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 group relative overflow-hidden"
              >
                <span className="relative z-10">Start a Conversation</span>
                <FaEnvelope className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-1 h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-30 animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-1 h-16 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-30 animate-pulse delay-500"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            Kamrul Hassan
          </div>
          <p className="text-slate-400 text-base sm:text-lg mb-6 sm:mb-8">
            Senior Frontend Developer crafting exceptional digital experiences
          </p>
          <div className="flex justify-center space-x-6 mb-6 sm:mb-8">
            <a href="https://github.com/KamrulHasaanAnanda" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
              <FaGithub size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="https://linkedin.com/in/KamrulHassanAnanda" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
              <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
          <p className="text-slate-500 text-sm sm:text-base">
            © 2024 Kamrul Hassan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

