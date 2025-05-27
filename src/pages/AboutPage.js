import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { skillsData } from '../data/data'; 
import socialLinks from '../links/socialLinks'; 

// Import icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const AboutPage = () => {
  
  const skillsRef = useRef(null);

 
  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white text-center overflow-hidden">
          {/* Animated Gradient Circles */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 opacity-30 rounded-full blur-3xl animate-pulse-slow -z-10" style={{top: '-5rem', left: '-5rem'}}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 opacity-20 rounded-full blur-3xl animate-pulse-slow -z-10" style={{bottom: '-6rem', right: '-6rem'}}></div>
          <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-xl">
              Professional <span className="text-yellow-400">Overview</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10">
              A glance at my journey as a software engineer, my skills, and the experiences that drive my passion for creating impactful digital solutions.
            </p>
            <button
              onClick={scrollToSkills}
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all ease-in-out duration-300 transform hover:-translate-y-1"
            >
              Explore My Skills
            </button>
          </div>
          {/* SVG Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180" style={{height: '80px'}}>
            <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,0 C150,80 350,0 500,80 L500,00 L0,0 Z" fill="#f3f4f6" className="dark:fill-gray-800" />
            </svg>
          </div>
        </section>
        {/* About Content Section */}
        <section className="py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-screen-lg mx-auto text-center bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-10 mb-8 transition-all hover:shadow-2xl">
              <h2 className="text-4xl font-semibold text-center mb-12 text-indigo-600 dark:text-indigo-400">
                Who am <span className="text-blue-500">I?</span>
              </h2>
              {/* Text Content */}
              <div className="max-w-none mx-auto">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  I'm a dedicated software engineering undergraduate, driven by a passion for innovation and creating meaningful digital experiences. My journey has been marked by learning, collaboration, and pushing boundaries.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  With a strong foundation in web development, Agile project management, and problem-solving, I aim to craft solutions that make a difference. Leading university cohorts and participating in diverse projects have fueled my growth and adaptability.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  Beyond coding, I explore tech trends, brainstorm creative ideas, and support peers in their professional growth.
                </p>
                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 mb-6">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-blue-600 hover:text-blue-700 transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-pink-600 hover:text-pink-700 transition"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 transition"
                  >
                    <FaGithub />
                  </a>
                </div>
                {/* Projects Button */}
                <div className="text-center mt-11">
                  <a href="/projects">
                    <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all ease-in-out duration-300 transform hover:-translate-y-1">
                      My Projects
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section
          id="skills"
          ref={skillsRef}
          className="py-24 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-16">
              Professional <span className="text-blue-500">Skills</span>
            </h2>
            <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {skillsData.map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3 backdrop-blur-md"
                >
                  {/* Skill Icons */}
                  <div className="flex justify-center space-x-4 mb-4">
                    {item.icons.map((icon, idx) => (
                      <div key={idx} className="text-4xl text-indigo-600 dark:text-indigo-400">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    {item.skill}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
