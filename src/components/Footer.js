import React from 'react';
import socialLinks from '../links/socialLinks';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-gray-100">
            <div className="container mx-auto px-6 py-5">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">



                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-8 mb-8">
                <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500  transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-6 h-6"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                    </a>

                    <a
                        href={socialLinks.linkedin}   
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#0077b5]  transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.23 0H1.77C.79 0 0 .8 0 1.78v20.44C0 23.2.79 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.78V1.78C24 .8 23.21 0 22.23 0zM7.19 20.45H3.56V9h3.63v11.45zM5.37 7.73c-1.16 0-2.11-.95-2.11-2.12 0-1.16.95-2.11 2.11-2.11 1.16 0 2.11.95 2.11 2.11 0 1.17-.95 2.12-2.11 2.12zm14.96 12.72h-3.63v-5.59c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.69H9.04V9h3.49v1.56h.05c.49-.93 1.68-1.92 3.46-1.92 3.7 0 4.39 2.44 4.39 5.61v6.2z" />
                        </svg>
                    </a>

                    <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#ffff] transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.086-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.304 3.492.997.108-.775.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.928 0-1.31.467-2.382 1.236-3.22-.123-.305-.536-1.52.117-3.17 0 0 1.008-.324 3.29 1.23.958-.266 1.987-.399 3.004-.404 1.017.005 2.046.138 3.004.404 2.281-1.553 3.29-1.23 3.29-1.23.653 1.65.24 2.865.118 3.17.77.838 1.236 1.91 1.236 3.22 0 4.607-2.804 5.623-5.473 5.928.428.368.811 1.099.811 2.219 0 1.602-.014 2.894-.014 3.293 0 .318.215.692.823.577C20.564 22.097 24 17.6 24 12.297 24 5.373 18.63.297 12 .297z" />
                        </svg>
                    </a>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8 mb-4"></div>

                {/* Bottom Section */}
                <div className="text-center text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
                    </p>
                    <p>
                        Made with ❤️ by{' '}
                        <a
                            href="https://yourwebsite.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 dark:text-yellow-500 hover:underline"
                        >
                            Manuga Kuruppu
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
