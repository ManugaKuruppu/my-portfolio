import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import socialLinks from '../links/socialLinks';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons
import { contactData } from '../data/data'; // Importing contact data

const ContactPage = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Destructure the first (and assumed only) contact object
    const { email, phone } = contactData[0];

    return (
        <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gray-50 dark:bg-gray-900`}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="py-32 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 text-white text-center">
                    <div className="container mx-auto px-6 lg:px-20">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
                            Get in <span className="text-yellow-400">Touch</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-gray-200 max-w-4xl mx-auto">
                            Whether you have a question, a project in mind, or just want to connect, feel free to reach out. We're here to help!
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-24 bg-gray-100 dark:bg-gray-900">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 lg:p-12">
                                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                                    Send a Message
                                </h2>
                                <form>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full px-4 py-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            placeholder="Your Message"
                                            rows="6"
                                            className="w-full px-4 py-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Contact Details */}
                            <div className="flex flex-col justify-center p-8 lg:p-12">
                                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                                    Contact Information
                                </h2>
                                <ul className="space-y-6">
                                    <li>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            <span className="font-semibold">Email:</span>{' '}
                                            <a
                                                href={`mailto:${email}`}
                                                className="text-blue-500 hover:underline"
                                            >
                                                {email}
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            <span className="font-semibold">Phone:</span>{' '}
                                            <a
                                                href={`tel:${phone}`}
                                                className="text-blue-500 hover:underline"
                                            >
                                                {phone}
                                            </a>
                                        </p>
                                    </li>
                                </ul>
                                <div className="mt-12">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                        Follow Us
                                    </h3>
                                    <div className="flex space-x-6">
                                        <a
                                            href={socialLinks.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
                                        >
                                            <FaInstagram size={28} />
                                        </a>
                                        <a
                                            href={socialLinks.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                        >
                                            <FaGithub size={28} />
                                        </a>
                                        <a
                                            href={socialLinks.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                        >
                                            <FaLinkedin size={28} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
