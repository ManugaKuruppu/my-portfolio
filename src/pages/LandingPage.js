import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
        <section className="relative text-center py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-white">
          <div className="container mx-auto">
            <h1
              className={`text-5xl md:text-7xl font-serif mb-6 tracking-tight leading-tight transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}
              style={{ fontFamily: "'Roboto', sans-serif" }} // Updated to a professional font
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white dark:from-yellow-200 dark:to-yellow-400">
                Hello There!
              </span>
            </h1>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10">
              Explore my work, learn more about me, and let’s build something extraordinary together!
            </p>
            <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl transform transition-all duration-300">
              Learn More
            </button>
          </div>
          {/* Rounded transition */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-100 dark:bg-gray-800 rounded-t-full"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-12 text-indigo-600 dark:text-indigo-400">
              About <span className="text-blue-500">Me</span>
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg font-light leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                I’m a passionate software developer with expertise in crafting beautiful, functional, and user-friendly web applications. I thrive on solving challenging problems and creating meaningful digital experiences.
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
              My <span className="text-blue-500">Projects</span>
            </h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {['Project 1', 'Project 2', 'Project 3'].map((project, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{project}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    A brief description of this amazing project that showcases my skills. It highlights the technologies I use and my approach to problem-solving.
                  </p>
                  <button className="text-blue-500 hover:underline">View Details</button>
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
            <div className="max-w-lg mx-auto text-center">
              <p className="text-lg font-light mb-6 text-gray-700 dark:text-gray-300">
                Feel free to reach out for collaborations, inquiries, or just to say hello. I’d love to hear from you!
              </p>
              <a
                href="mailto:your-email@example.com"
                className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transform transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
