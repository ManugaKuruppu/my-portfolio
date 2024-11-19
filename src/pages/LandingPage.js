import React from 'react';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4">
        <section className="text-center py-20">
          <h2 className="text-4xl font-semibold mb-4">Welcome to my portfolio</h2>
          <p className="mt-2 text-lg">This is the landing page of my personal portfolio.</p>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
        </section>
        <section id="about" className="py-20">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="mt-2">This section contains information about me.</p>
        </section>
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <p className="mt-2">This section contains information about my projects.</p>
        </section>
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="mt-2">This section contains contact information.</p>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;