import React from 'react';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-700 text-white rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-6 tracking-wide">
            Welcome to <span className="text-yellow-300">My Portfolio</span>
          </h1>
          <p className="text-lg font-light max-w-2xl mx-auto">
            Explore my work, learn more about me, and get in touch. Let’s build something amazing together!
          </p>
          <div className="mt-8">
            <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-8">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg font-light leading-relaxed">
              I’m a passionate software developer with expertise in crafting beautiful, functional, and user-friendly web applications. I enjoy solving challenging problems and creating meaningful experiences through code.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-8">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold mb-2">Project 1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A brief description of this amazing project that showcases my skills.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold mb-2">Project 2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A brief description of this amazing project that showcases my skills.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold mb-2">Project 3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A brief description of this amazing project that showcases my skills.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-8">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <div className="max-w-lg mx-auto text-center">
            <p className="text-lg font-light mb-6">
              Feel free to reach out for collaborations, inquiries, or just to say hello.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
