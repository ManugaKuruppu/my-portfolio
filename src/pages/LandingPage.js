import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projectsData } from '../data/data'; 

const LandingPage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative text-center py-28 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-white overflow-hidden">
          {/* Animated Gradient Circles */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 opacity-30 rounded-full blur-3xl animate-pulse-slow -z-10" style={{top: '-5rem', left: '-5rem'}}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 opacity-20 rounded-full blur-3xl animate-pulse-slow -z-10" style={{bottom: '-6rem', right: '-6rem'}}></div>
          <div className="container mx-auto flex flex-col items-center justify-center">
            {/* Profile Avatar */}
            <img src="/favicon.ico" alt="Profile" className="w-32 h-32 rounded-full border-4 border-yellow-300 shadow-xl mb-6 object-cover bg-white" />
            <h1
              className={`text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight transition-opacity duration-1000 drop-shadow-xl ${showText ? 'opacity-100' : 'opacity-0'}`}
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 dark:from-yellow-200 dark:to-yellow-400">
                Hello There!
              </span>
            </h1>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10 text-white/90">
              Explore my work, learn more about me, and let’s build something extraordinary together!
            </p>
            <a href="/about">
              <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all ease-in-out duration-300 transform hover:-translate-y-1">
                Get To Know Me!
              </button>
            </a>
          </div>
          {/* SVG Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180" style={{height: '80px'}}>
            <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,0 C150,80 350,0 500,80 L500,00 L0,0 Z" fill="#f3f4f6" className="dark:fill-gray-800" />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-12 text-indigo-600 dark:text-indigo-400">
              Me in a <span className="text-blue-500">Nutshell!</span>
            </h2>
            <div className="max-w-4xl mx-auto text-center bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-10 mb-8 transition-all hover:shadow-2xl">
              <p className="text-lg font-light leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Hi, I’m Manuga Kuruppu!<br/>
                I’m a passionate software engineering undergraduate with a knack for building creative and efficient solutions. With expertise in Agile Project Management, PHP, Java, and Web Development, I thrive on crafting innovative projects. My journey is fueled by a love for learning and a drive to solve real-world problems through technology.
              </p>
              <p className="text-md font-medium text-gray-600 dark:text-gray-400">
                Technology is my tool to transform ideas into reality. I’m always eager to learn, grow, and collaborate on exciting projects.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-12 text-indigo-600 dark:text-indigo-400">
              Some of My <span className="text-blue-500">Work</span>
            </h2>
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {projectsData.slice(0, 3).map((project, index) => (
                <div
                  key={index}
                  className="p-7 bg-white/90 dark:bg-gray-900/90 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 flex flex-col h-full backdrop-blur-md"
                >
                  <h3
                    className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-yellow-400 dark:to-yellow-200"
                  >
                    {project.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
                    {project.note}
                  </p>
                  <div className="mt-auto">
                    {/* Tags Section */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.languages.map((lang, langIndex) => (
                        <span
                          key={langIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 text-sm font-medium rounded"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                    {/* Logos Section */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {project.logos.map((logo, logoIndex) => (
                        <img
                          key={logoIndex}
                          src={logo}
                          alt={`${project.languages[logoIndex]} logo`}
                          className="h-8 w-8 object-contain"
                        />
                      ))}
                    </div>
                    {/* View Repository Button */}
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-transform"
                    >
                      View Repository
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-12 text-indigo-600 dark:text-indigo-400">
              Get in <span className="text-blue-500">Touch</span>
            </h2>
            <div className="max-w-lg mx-auto text-center bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-10">
              <p className="text-lg font-light mb-6 text-gray-700 dark:text-gray-300">
                Feel free to reach out for collaborations, inquiries, or just to say hello. I’d love to hear from you!
              </p>
              <div className="text-center mt-11">
                <a href="/contact">
                  <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all ease-in-out duration-300 transform hover:-translate-y-1">
                    Contact Me!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
