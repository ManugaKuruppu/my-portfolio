import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/data';

const ProjectsPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [flippedIndexes, setFlippedIndexes] = useState([]); // Track multiple flipped cards

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleFlip = (index) => {
        setFlippedIndexes((prev) => prev.includes(index) ? prev : [...prev, index]);
    };

    const handleUnflip = (index) => {
        setFlippedIndexes((prev) => prev.filter(i => i !== index));
    };

    return (
        <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gray-50 dark:bg-gray-900`}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative py-32 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white text-center overflow-hidden">
                    {/* Animated Gradient Circles */}
                    <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 opacity-30 rounded-full blur-3xl animate-pulse-slow -z-10" style={{top: '-5rem', left: '-5rem'}}></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 opacity-20 rounded-full blur-3xl animate-pulse-slow -z-10" style={{bottom: '-6rem', right: '-6rem'}}></div>
                    <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center justify-center">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-xl">
                            Explore My <span className="text-yellow-400">Projects</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10">
                            A showcase of my work, where I demonstrate my skills and experiences in building impactful and efficient applications.
                        </p>
                    </div>
                    {/* SVG Wave Divider */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180" style={{height: '80px'}}>
                        <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-full">
                            <path d="M0,0 C150,80 350,0 500,80 L500,00 L0,0 Z" fill="#f3f4f6" className="dark:fill-gray-800" />
                        </svg>
                    </div>
                </section>

                {/* Project Cards Section */}
                <section className="py-24 bg-gray-100 dark:bg-gray-900">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                            {projectsData.map((project, index) => (
                                <div
                                    key={index}
                                    className={`perspective group rounded-3xl shadow-lg hover:shadow-2xl transition-all transform relative overflow-visible border-2 border-transparent ${index === 6 ? 'mx-auto w-full sm:w-2/3 lg:w-1/2 col-span-full' : ''} ${flippedIndexes.includes(index) ? 'z-30' : ''}`}
                                    style={{ perspective: '1200px' }}
                                >
                                    <div
                                        className={`relative w-full h-[420px] transition-transform duration-700 ${flippedIndexes.includes(index) ? 'rotate-y-180' : ''} card-fade-in`}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {/* Front Side */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 flex flex-col h-full z-10 backface-hidden card-front group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:border-blue-400 transition-all duration-300">
                                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                                {project.title}
                                            </h3>
                                            <div className="mb-6 flex flex-wrap gap-3">
                                                {project.languages.map((language, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                                                    >
                                                        {language}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="mb-6 flex gap-4">
                                                {project.logos.map((logo, idx) => (
                                                    <img
                                                        key={idx}
                                                        src={logo}
                                                        alt="Technology Logo"
                                                        className="h-10 w-10 object-contain rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                                                    />
                                                ))}
                                            </div>
                                            <div className="mt-auto flex flex-col gap-3">
                                                <a
                                                    href={project.repoLink || '#'}
                                                    target={project.repoLink ? '_blank' : '_self'}
                                                    rel={project.repoLink ? 'noopener noreferrer' : ''}
                                                    className={`inline-block px-6 py-3 rounded-full text-sm font-semibold shadow-lg transition-all ${project.repoLink
                                                        ? 'text-white bg-blue-600 hover:bg-blue-700'
                                                        : 'text-gray-400 bg-gray-200 cursor-not-allowed'
                                                        }`}
                                                    disabled={!project.repoLink}
                                                >
                                                    <FaGithub className="inline mr-2" /> View Repository
                                                </a>
                                                <button
                                                    className="inline-block px-6 py-3 rounded-full text-sm font-semibold shadow-lg bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-all"
                                                    onClick={() => handleFlip(index)}
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                        {/* Back Side */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 flex flex-col h-full z-20 backface-hidden overflow-y-auto card-back"
                                             style={{ transform: 'rotateY(180deg)' }}>
                                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-1 overflow-y-auto">
                                                {project.description}
                                            </p>
                                            <button
                                                className="inline-block px-6 py-3 rounded-full text-sm font-semibold shadow-lg bg-blue-600 text-white hover:bg-blue-700 transition-all mt-auto"
                                                onClick={() => handleUnflip(index)}
                                            >
                                                Back
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="py-20 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">Want to Collaborate?</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            I’m always open to exciting new projects, collaborations, or just a friendly chat about tech and innovation. Let’s connect and create something amazing together!
                        </p>
                        <a href="/contact">
                            <button className="px-10 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1">
                                Contact Me
                            </button>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

/* Add the following styles to your global CSS (e.g., index.css or a component style block):
.perspective { perspective: 1200px; }
.rotate-y-180 { transform: rotateY(180deg); }
*/
export default ProjectsPage;
