import React from 'react';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-700 text-white rounded-lg shadow-xl">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight md:text-6xl">
            Welcome to <span className="text-yellow-300">My Portfolio</span>
          </h1>
          <p className="text-lg font-light max-w-2xl mx-auto mb-8">
            Explore my work, learn more about me, and let’s build something amazing together!
          </p>
          <div className="mt-8">
            <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-4xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg font-light leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
              I’m a passionate software developer with expertise in crafting beautiful, functional, and user-friendly web applications. I enjoy solving challenging problems and creating meaningful experiences through code.
            </p>
            <p className="text-md font-medium text-gray-600 dark:text-gray-400">
              I believe in the power of technology to transform ideas into reality, and I’m always eager to learn and grow as a developer.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Project 1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                A brief description of this amazing project that showcases my skills. It highlights the technologies I use and my approach to problem-solving.
              </p>
              <button className="text-blue-500 hover:underline">View Details</button>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Project 2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                A brief description of this amazing project that showcases my skills. It highlights the technologies I use and my approach to problem-solving.
              </p>
              <button className="text-blue-500 hover:underline">View Details</button>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Project 3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                A brief description of this amazing project that showcases my skills. It highlights the technologies I use and my approach to problem-solving.
              </p>
              <button className="text-blue-500 hover:underline">View Details</button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <div className="max-w-lg mx-auto text-center">
            <p className="text-lg font-light mb-6 text-gray-700 dark:text-gray-300">
              Feel free to reach out for collaborations, inquiries, or just to say hello. I’d love to hear from you!
            </p>
            <a
              href="mailto:your-email@example.com"
              className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
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
