import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaVuejs, FaLaravel, FaPhp, FaServer, FaGithub } from 'react-icons/fa';
 
 export const projectsData = [
    {
      title: 'Snake Game',
      description: 'The Snake Game is a classic arcade game built using React.js, where the player controls a snake that grows in length by eating food while avoiding collisions with the walls and its own body. As the snake consumes food, it earns points and progresses to higher levels, where the difficulty increases with obstacles added to the game board.',
      note: 'The Snake Game is a React.js arcade game where the player controls a growing snake, eating food and avoiding obstacles and collisions.',
      languages: ['JavaScript', 'React', 'CSS', 'HTML'],
      logos: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      ],
      repoLink: 'https://github.com/ManugaKuruppu/Snake-_Game'
    },
    {
      title: 'University Student Blog',
      description: 'This project was a collaborative effort among a team of three developers, including myself. We developed a comprehensive blog system designed for university students to interact and stay updated on university-related matters.The system was built using Laravel as the primary backend framework, leveraging JavaScript, HTML, and CSS for the frontend. For data storage and management, we utilized MySQL as the database system. This project emphasized teamwork, efficient communication, and the integration of modern web development technologies to create a functional and user-friendly platform.',
      note: 'This project, developed by three team members, is a blog system for university students, built with Laravel, JavaScript, HTML, CSS, and MySQL, focusing on teamwork and user-friendly design.',          
      languages: ['JavaScript', 'CSS', 'HTML', 'Laravel', 'MySQL', 'PHP'],
      logos: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
,
      ],
      repoLink: 'https://github.com/ManugaKuruppu/University-Student-Blog'
    },
    {
      title: 'TechWorld E-Commerce Website',
      description: 'Tech World is a sophisticated eCommerce platform designed for a computer shop, offering customers an easy-to-navigate shopping experience with real-time product availability, secure payment options, and detailed product information, while providing management with powerful inventory and order management tools, customer profiles, and advanced reporting features to streamline operations and enhance business growth. It was built using Laravel for the backend, JavaScript for dynamic functionality, and HTML and CSS for the frontend design.',
      note: 'Tech World is an eCommerce platform for a computer shop, built with Laravel, JavaScript, HTML, and CSS, offering seamless shopping and inventory management.',
      languages: ['JavaScript', 'CSS', 'HTML', 'Laravel', 'MySQL', 'PHP'],
      logos: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
      ],
      repoLink: 'https://github.com/ManugaKuruppu/TechWorld'
    },
    {
      title: 'Traveller',
      description:  'Traveller is a feature-rich Android application developed using Flutter and Android Studio, designed to enhance the travel experience for tourists in Sri Lanka by offering comprehensive destination guides, user reviews, and insights, along with a seamless platform for exploring, planning, and booking tickets to the country’s top attractions.',
      languages: ['Dart', 'Flutter', ],
      logos: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
      ],
      repoLink: 'https://github.com/ManugaKuruppu/traveller.git'
    },
    {
      title: 'Foody',
      description: 'Foody is a cutting-edge Android application developed using Flutter and Dart, designed to provide a seamless food delivery experience for domestic customers, featuring Firebase integration for secure user management, restaurant handling, real-time order tracking, personalized recommendations, and an intuitive, scalable design that enhances convenience for both customers and restaurant owners.',
      languages: ['Dart', 'Flutter', 'Firebase'],
      logos: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',

      ],
      repoLink: 'https://github.com/ManugaKuruppu/Foody.git'
    },
    {
      title: 'Turtle Hatchery',
      description: 'Turtle Hatchery is a comprehensive ticket booking website tailored for turtle hatcheries in Sri Lanka. Developed using JavaScript, HTML, and CSS, this platform not only facilitates seamless ticket reservations for visitors but also serves as an educational portal. Users can explore detailed information about various sea turtle species, their unique characteristics, and conservation efforts. Designed with user experience in mind, the website blends functionality with informative content, promoting both eco-tourism and awareness of marine wildlife.',
      languages: ['JavaScript', 'HTML', 'CSS'],
      logos: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      ],
      repoLink: 'https://github.com/ManugaKuruppu/Turtle-Hatchery-.git'
    },
    
  ];
  



export const skillsData = [
  {
    skill: 'Web Development',
    description: 'I have experience with front-end and back-end technologies, including React, HTML, CSS, and JavaScript.',
    icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJs />],
  },
  {
    skill: 'Front-End Development',
    description: 'Proficient in React.js, Vue.js, JavaScript, HTML, and modern CSS frameworks like Tailwind CSS. Experienced in creating responsive and dynamic user interfaces.',
    icons: [<FaReact />, <FaVuejs />, <FaJs />, <FaHtml5 />, <FaCss3Alt />], 
  },
  
  {
    skill: 'Back-End Development',
    description: 'Skilled in developing secure and scalable back-end systems using Laravel, PHP, Node.js  and NestJS. Experienced in working with databases like MySQL and MongoDB.',
    icons: [<FaNodeJs />, <FaDatabase />, <FaLaravel />, <FaPhp />, <FaServer />], 
  },
  

  {
    skill: 'Version Control',
    description: 'Extensive experience with Git for version control, managing codebases, and collaborating on projects in team environments. Skilled in leveraging GitHub for repository management, issue tracking, and open-source contributions.',
    icons: [<FaGitAlt />, <FaGithub />],
  },
  
  {
    skill: 'Containerization',
    description: 'Experience using Docker to containerize applications and manage environments.',
    icons: [<FaDocker />],
  },
  
];

export const contactData = [
  {
    email: 'manugakuruppu@gmail.com',
    phone: '+94 76 454 2266',
  }
];
  