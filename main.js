// Project Data
const projects = [
    {
        title: 'OPTIMA Loyalty Points Exchange System',
        description: 'A full-stack loyalty web app with AI chatbot integration using Gemini API. Features include point collection, reward redemption, and intelligent customer support.',
        images: ['images/optima.png', 'images/optima 2.png'],
        tags: ['Full-stack', 'AI Integration', 'UI/UX', 'Database Design', 'Gemini API'],
        year: '2025',
        link: '#'
    },    {
        title: 'Falak Revitalization: 3D Room Escape Game',
        description: 'An interactive 3D room escape game built in Unity featuring immersive puzzles and a modular quest system with dynamic progression.',
        images: ['images/falak.png', 'images/falak 2.png'],
        tags: ['Unity', '3D Game Development', 'C#', 'Animation'],
        year: '2024',
        link: '#'
    },{
        title: 'AI-Powered Healthcare Chatbot',
        description: 'Python-based healthcare chatbot using NLP to identify symptoms, predict diseases, and provide medical information with real-time responses.',
        image: 'images/healthcarebot.png',
        tags: ['Python', 'NLP', 'Healthcare', 'AI'],
        year: '2023',
        link: '#'
    },
    {
        title: 'Misi Penjagaan Gigi',
        description: '2D educational game promoting dental health for kids, featuring interactive storytelling and engaging mechanics.',
        image: 'images/misigigi.jpg',
        tags: ['Game Development', '2D Animation', 'Educational Gaming'],
        year: '2023',
        link: '#'
    }
];

// Experience Data
const experiences = [
    {
        title: 'Internship',
        company: 'Fakulti Sains Komputer UTHM',
        period: 'July 2024 - Jan 2025',
        description: 'Led Unity game development workshops, created promotional videos with Adobe Suite, and gained hands-on experience in multimedia production and edtech.'
    }
];

// Education Data
const education = [
    {
        degree: 'Bachelor of Computer Science (Multimedia Computing) with Honours',
        school: 'Universiti Tun Hussein Onn Malaysia',
        period: 'Oct 2021 - Jan 2025',
        achievements: ['CGPA: 3.09', 'MUET: Band 4']
    }
];

// Achievements Data
const achievements = [
    'GIFT X K-Youth Yayasan Khazanah 2024',
    'Malaysia Techlympics 2023 Peringkat Akhir Kebangsaan',
    'CISCO Networking Academy 2023'
];

// Languages
const languages = [
    { name: 'Malay', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'Arabic', level: 'Basic' }
];

// References
const references = [
    {
        name: 'Dr. Che Samihah Binti Che Dalim',
        position: 'Academic Advisor FSKTM UTHM',
        email: 'samihah@uthm.edu.my'
    },
    {
        name: 'Encik Muhammad Fakri Bin Othman',
        position: 'Supervisor Final Year Project Degree',
        email: 'fakri@uthm.edu.my'
    }
];

// Testimonials Data
const testimonials = [
    {
        name: 'Jane Smith',
        position: 'Product Manager',
        company: 'Digital Solutions Inc.',
        text: 'Exceptional problem-solving skills and attention to detail. Delivered the project ahead of schedule.'
    },
    {
        name: 'John Davis',
        position: 'CTO',
        company: 'StartUp Hub',
        text: 'Outstanding technical expertise and great communication skills. A pleasure to work with.'
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });

    // Populate Portfolio Section
    const portfolioGrid = document.querySelector('.portfolio-grid');    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        
        // Create image slider if multiple images exist
        const imageHTML = project.images ? `
            <div class="project-images">
                ${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('')}
            </div>
        ` : `<img src="${project.image}" alt="${project.title}">`;
          projectCard.innerHTML = `
            ${imageHTML}
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        `;
        portfolioGrid?.appendChild(projectCard);
    });

    // Populate Experience Section
    const experienceSection = document.querySelector('.experience');
    experiences.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item fade-in';
        expItem.innerHTML = `
            <h4>${exp.title}</h4>
            <p class="company">${exp.company}</p>
            <p class="period">${exp.period}</p>
            <p>${exp.description}</p>
        `;
        experienceSection?.appendChild(expItem);
    });

    // Populate Education Section
    const educationSection = document.querySelector('.education');
    education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item fade-in';
        eduItem.innerHTML = `
            <h4>${edu.degree}</h4>
            <p class="school">${edu.school}</p>
            <p class="period">${edu.period}</p>
        `;
        educationSection?.appendChild(eduItem);
    });

    // Populate Testimonials Section
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card fade-in';
        testimonialCard.innerHTML = `
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="testimonial-author">
                <p class="name">${testimonial.name}</p>
                <p class="position">${testimonial.position}, ${testimonial.company}</p>
            </div>
        `;
        testimonialsSlider?.appendChild(testimonialCard);
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Scroll Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const rootElement = document.documentElement;

    const handleScroll = () => {
        const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if ((rootElement.scrollTop / scrollTotal) > 0.2) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }

    const scrollToTop = () => {
        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    document.addEventListener('scroll', handleScroll);
    scrollToTopBtn?.addEventListener('click', scrollToTop);

    // Header Hide on Scroll
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const delta = 5;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Determine scroll direction
        if (Math.abs(lastScrollTop - currentScroll) <= delta)
            return;
            
        if (currentScroll > lastScrollTop && currentScroll > header.offsetHeight) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
        
        lastScrollTop = currentScroll;
    });
});
