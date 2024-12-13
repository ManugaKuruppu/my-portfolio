import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/data';

const ProjectsPage = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gray-50 dark:bg-gray-900`}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="py-32 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white text-center">
                    <div className="container mx-auto px-6 lg:px-20">
                        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8 leading-tight">
                            Explore My <span className="text-yellow-400">Projects</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
                            A showcase of my work, where I demonstrate my skills and experiences in building impactful and efficient applications.
                        </p>
                    </div>
                </section>

                {/* Project Cards Section */}
                <section className="py-24 bg-gray-100 dark:bg-gray-900">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                            {projectsData.map((project, index) => (
                                <div
                                    key={index}
                                    className={`group bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 relative overflow-hidden border-2 border-transparent hover:border-gradient-to-br  ${index === 6
                                        ? 'mx-auto w-full sm:w-2/3 lg:w-1/2 col-span-full'
                                        : ''
                                        }`}
                                >
                                    <div className="p-8 flex flex-col h-full">
                                        <div className="flex-grow">
                                            <h3
                                                className={`text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 group-hover:transition duration-300 
                                    group-hover:text-transparent group-hover:bg-clip-text 
                                    group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:via-indigo-700 group-hover:to-purple-800 
                                    dark:group-hover:text-yellow-400`}
                                            >
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="mt-auto">
                                            <div className="mb-6">
                                                <div className="flex flex-wrap gap-3">
                                                    {project.languages.map((language, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                                                        >
                                                            {language}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="mb-6">
                                                <div className="flex gap-4">
                                                    {project.logos.map((logo, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={logo}
                                                            alt="Technology Logo"
                                                            className="h-10 w-10 object-contain rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
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
                                        </div>
                                    </div>
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

export default ProjectsPage;
