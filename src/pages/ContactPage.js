import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import socialLinks from '../links/socialLinks';
import { FaInstagram, FaGithub, FaLinkedin, FaCheckCircle } from 'react-icons/fa';
import { contactData } from '../data/data';

const ContactPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const { email: contactEmail, phone } = contactData[0];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        emailjs
            .send(
                'service_pczrn55',
                'template_1fnlpyo',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: contactEmail,
                },
                'dVizSXAxXtncTweyj'
            )
            .then(
                () => {
                    setIsSubmitting(false);
                    setSuccessMessage('Your message has been sent successfully!');
                    setErrorMessage('');
                    setShowPopup(true);

                    setFormData({ name: '', email: '', message: '' });

                   
                    setTimeout(() => setShowPopup(false), 3000);
                },
                (error) => {
                    setIsSubmitting(false);
                    setErrorMessage('Something went wrong. Please try again later.');
                    console.error('EmailJS error: ', error);
                }
            );
    };

    return (
        <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gray-50 dark:bg-gray-900`}>
            {/* Popup Message */}
            {showPopup && (
                <div
                    className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out ${
                        showPopup ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
                    } bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg px-6 py-4 flex items-center space-x-4`}
                >
                    <FaCheckCircle className="text-green-500 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200 text-lg font-semibold">
                        {successMessage}
                    </span>
                </div>
            )}

            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="py-32 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 text-white text-center">
                    <div className="container mx-auto px-6 lg:px-20">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
                            Get in <span className="text-yellow-400">Touch</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-gray-200 max-w-4xl mx-auto">
                            Whether you have a question, a project in mind, or just want to connect, feel free to reach out to me!
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-24 bg-gray-100 dark:bg-gray-900">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div className="bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-lg p-8 lg:p-12 backdrop-blur-md transition-all hover:shadow-2xl">
                                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                                    Send a Message
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
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
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Your Email"
                                            className="w-full px-4 py-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Your Message"
                                            rows="6"
                                            className="w-full px-4 py-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                                {errorMessage && (
                                    <p className="text-red-500 mt-4">{errorMessage}</p>
                                )}
                            </div>
                            {/* Contact Details */}
                            <div className="flex flex-col justify-center p-8 lg:p-12 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg backdrop-blur-md">
                                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                                    Contact Information
                                </h2>
                                <ul className="space-y-6">
                                    <li>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            <span className="font-semibold">Email:</span>{' '}
                                            <a
                                                href={`mailto:${contactEmail}`}
                                                className="text-blue-500 hover:underline"
                                            >
                                                {contactEmail}
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
                                        Follow Me
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
                {/* Call to Action Section */}
                <section className="py-20 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">Let’s Connect!</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            I’m always happy to chat about new opportunities, collaborations, or anything tech. Drop me a message and let’s build something great together!
                        </p>
                        <a href="mailto:your@email.com">
                            <button className="px-10 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1">
                                Email Me
                            </button>
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
