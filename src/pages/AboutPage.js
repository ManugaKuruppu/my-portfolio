import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { skillsData } from '../data/data'; // Import the skills data
import socialLinks from '../links/socialLinks'; // Import the social links

// Import icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import the required icons

const AboutPage = () => {
  // Create a ref to target the skills section
  const skillsRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white text-center">
          <div className="container mx-auto px-6 lg:px-20">
            {/* Title with better spacing and refined font */}
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8 leading-tight">
              Professional <span className="text-yellow-400">Overview</span>
            </h1>

            {/* Subtitle with refined, calm text */}
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
              A glance at my journey as a software engineer, my skills, and the experiences that drive my passion for creating impactful digital solutions.
            </p>

            {/* Smooth action button with refined animation */}
            <button
              onClick={scrollToSkills} // Call scrollToSkills when the button is clicked
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all ease-in-out duration-300 transform hover:-translate-y-1"
            >
              Explore My Skills
            </button>
          </div>


        </section>
        {/* About Content Section */}
        <section className="py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-screen-lg mx-auto text-center"> {/* Adjusted to max-w-screen-lg for better width utilization */}
              <h2 className="text-4xl font-semibold text-center mb-12 text-indigo-600 dark:text-indigo-400">
                Who am  <span className="text-blue-500">I?</span>
              </h2>

              {/* Text Content */}
              <div className="max-w-none mx-auto"> {/* Set max-w-none to allow full width utilization */}
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
                    href={socialLinks.linkedin} // Link from socialLinks.js
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-blue-600 hover:text-blue-700 transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={socialLinks.instagram} // Link from socialLinks.js
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-pink-600 hover:text-pink-700 transition"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href={socialLinks.github} // Link from socialLinks.js
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 transition"
                  >
                    <FaGithub />
                  </a>
                </div>

                {/* Projects Button */}
                <div className="text-center mt-11">
                  <a
                    href="projects" // Link to your projects section
                    className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:-translate-y-2 duration-300 ease-in-out"
                  >
                    My Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          ref={skillsRef} // Attach the ref here
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
                  className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3"
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
