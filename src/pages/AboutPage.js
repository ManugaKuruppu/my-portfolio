import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { skillsData } from '../data/data'; // Import the skills data

const AboutPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-white text-center">
          <div className="container mx-auto px-6 lg:px-20">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
              About <span className="text-yellow-400">Me</span>
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
              Discover my journey as a passionate software engineer and the milestones that have shaped my expertise.
            </p>
          </div>
        </section>

        {/* About Content Section */}
        <section className="py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
                Who Am I?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                I'm a dedicated software engineering undergraduate, driven by a passion for innovation and creating meaningful digital experiences. My journey has been marked by learning, collaboration, and pushing boundaries.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                With a strong foundation in web development, Agile project management, and problem-solving, I aim to craft solutions that make a difference. Leading university cohorts and participating in diverse projects have fueled my growth and adaptability.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Beyond coding, I explore tech trends, brainstorm creative ideas, and support peers in their professional growth.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-16">
              My <span className="text-blue-500">Skills</span>
            </h2>
            <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {skillsData.map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
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
