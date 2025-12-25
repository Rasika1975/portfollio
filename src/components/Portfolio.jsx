import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  Mail,
  Phone,
  Download,
  Code,
  Database,
  Briefcase,
  GraduationCap,
  Send,
  Award,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Brain,
  Sparkles,
  Layers,
  Zap,
  Terminal,
  Palette,
  ChevronRight,
  CheckCircle2,
  ArrowUpRight,
  Server,
  Cloud,
  Cpu,
  Box,
  Layout,
  FileCode,
} from 'lucide-react';
import ngoImage from '../assets/ngo.png';
import resumebuilderImage from '../assets/resumebilder.png';

const ShineCard = ({ children, className = '', isDark, href, ...props }) => {
  const Component = href ? 'a' : 'div';
  return (
    <Component
      href={href}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      </div>
      {children}
    </Component>
  );
};

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.75;
          setIsVisible(prev => ({ ...prev, [section]: isInView }));
        }
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const skills = {
    frontend: [
      { name: 'React.js', level: 95, icon: Code, color: 'from-cyan-400 to-blue-500' },
      { name: 'Next.js', level: 90, icon: Layers, color: 'from-gray-800 to-gray-950' },
      { name: 'TypeScript', level: 88, icon: FileCode, color: 'from-blue-600 to-blue-700' },
      { name: 'JavaScript', level: 94, icon: Terminal, color: 'from-yellow-400 to-yellow-600' },
      { name: 'Tailwind CSS', level: 96, icon: Palette, color: 'from-cyan-400 to-cyan-600' },
      { name: 'HTML/CSS', level: 98, icon: Layout, color: 'from-orange-500 to-red-500' },
      { name: 'Redux', level: 87, icon: Box, color: 'from-purple-500 to-purple-700' },
      { name: 'Vite', level: 92, icon: Zap, color: 'from-purple-400 to-pink-500' },
    ],
    backend: [
      { name: 'Node.js', level: 92, icon: Server, color: 'from-green-500 to-green-700' },
      { name: 'Python', level: 94, icon: Terminal, color: 'from-blue-400 to-yellow-400' },
      { name: 'Express.js', level: 90, icon: Code, color: 'from-gray-600 to-gray-800' },
      { name: 'FastAPI', level: 86, icon: Zap, color: 'from-teal-500 to-teal-700' },
      { name: 'REST APIs', level: 93, icon: Database, color: 'from-blue-500 to-indigo-600' },
      { name: 'GraphQL', level: 82, icon: Server, color: 'from-pink-500 to-rose-600' },
      { name: 'MongoDB', level: 88, icon: Database, color: 'from-green-500 to-green-700' },
      { name: 'PostgreSQL', level: 85, icon: Database, color: 'from-blue-600 to-blue-800' },
    ],
    aiml: [
      { name: 'TensorFlow', level: 88, icon: Brain, color: 'from-orange-500 to-orange-700' },
      { name: 'PyTorch', level: 85, icon: Brain, color: 'from-red-500 to-orange-600' },
      { name: 'Scikit-learn', level: 90, icon: Cpu, color: 'from-blue-400 to-sky-600' },
      { name: 'OpenCV', level: 86, icon: Brain, color: 'from-green-500 to-emerald-700' },
      { name: 'NLP', level: 83, icon: Brain, color: 'from-violet-500 to-purple-700' },
      { name: 'Computer Vision', level: 87, icon: Brain, color: 'from-indigo-500 to-blue-700' },
      { name: 'Deep Learning', level: 88, icon: Brain, color: 'from-purple-500 to-pink-600' },
      { name: 'Keras', level: 84, icon: Brain, color: 'from-red-600 to-red-800' },
    ],
    tools: [
      { name: 'Git/GitHub', level: 96, icon: Github, color: 'from-gray-700 to-gray-950' },
      { name: 'Docker', level: 85, icon: Box, color: 'from-blue-500 to-blue-700' },
      { name: 'AWS', level: 82, icon: Cloud, color: 'from-orange-400 to-yellow-500' },
      { name: 'Firebase', level: 89, icon: Database, color: 'from-yellow-500 to-orange-600' },
      { name: 'Vercel', level: 93, icon: Zap, color: 'from-gray-800 to-black' },
      { name: 'Figma', level: 91, icon: Palette, color: 'from-purple-500 to-pink-600' },
      { name: 'VS Code', level: 98, icon: Code, color: 'from-blue-600 to-blue-800' },
      { name: 'Postman', level: 90, icon: Server, color: 'from-orange-500 to-orange-700' },
    ],
  };

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      desc: 'Spearheading development of AI-integrated web applications, architecting scalable microservices, and mentoring a team of 5 junior developers. Led migration to modern tech stack resulting in 40% performance improvement.',
      type: 'work',
      achievements: ['Led team of 5 developers', '40% performance boost', 'Architected microservices'],
    },
    {
      title: 'Machine Learning Engineer',
      company: 'DataScience Labs',
      period: '2022 - 2023',
      desc: 'Developed and deployed ML models for predictive analytics, computer vision, and NLP applications. Created data pipelines processing 10M+ records daily with 99.9% accuracy.',
      type: 'work',
      achievements: ['10M+ records/day pipeline', '99.9% model accuracy', 'Deployed 8 ML models'],
    },
    {
      title: 'Full-Stack Developer Intern',
      company: 'StartupHub Technologies',
      period: '2021 - 2022',
      desc: 'Built responsive web applications using React and Node.js. Contributed to core product features used by 50K+ active users. Implemented CI/CD pipelines reducing deployment time by 60%.',
      type: 'work',
      achievements: ['50K+ active users', '60% faster deployments', 'Full-stack features'],
    },
    {
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      period: '2019 - 2023',
      desc: 'Specialized in Artificial Intelligence and Software Engineering. GPA: 3.8/4.0. Published research paper on deep learning optimization techniques.',
      type: 'education',
      achievements: ['GPA: 3.8/4.0', 'Published research', 'AI specialization'],
    },
  ];

  const certifications = [
    'National Level Hackathon Finalist',
    'Coding Challenge Completion Certificates',
  ];

  const projects = [
    {
      title: 'Mental Health Support Platform',
      desc: 'Comprehensive mental wellness application providing mood tracking, meditation exercises, therapy resources, and AI-powered emotional support chatbot for mental health management.',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=500&fit=crop',
      tech: ['React', 'Vite', 'Tailwind CSS', 'AI/ML', 'Firebase'],
      github: '#',
      demo: 'https://mentalhealth-bice.vercel.app/',
      category: 'AI/ML',
      highlight: true,
    },
    {
      title: 'TaskFlow - Project Management Dashboard',
      desc: 'Full-featured project management solution with task tracking, team collaboration, sprint planning, real-time updates, and comprehensive analytics dashboard for productivity optimization.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Authentication', 'Real-time'],
      github: '#',
      demo: 'https://project-management-dashboard-omega.vercel.app/',
      category: 'Full-Stack',
      highlight: true,
    },
    {
      title: 'Live Streaming Platform',
      desc: 'Real-time video streaming application with WebRTC technology, live chat, viewer engagement features, and multi-stream support for content creators and audiences.',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop',
      tech: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'Tailwind CSS'],
      github: '#',
      demo: 'https://livestreaming-beta.vercel.app/',
      category: 'Full-Stack',
      highlight: true,
    },
    {
      title: 'AI-powered Resume Builder',
      desc: 'An AI-powered Resume Builder that helps users create professional, personalized resumes instantly. It also includes an ATS (Applicant Tracking System) Analyzer that scans resumes against job descriptions and gives an ATS score, found/missing skills, and AI suggestions to improve the resume for better job chances.',
      image: resumebuilderImage,
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Puppeteer', 'AI/ATS Logic'],
      github: '#',
      demo: 'https://resumebuilder-silk-rho.vercel.app/',
      category: 'AI/ML',
      highlight: true,
    },
    {
      title: 'E-Commerce Marketplace',
      desc: 'Full-stack e-commerce platform with real-time inventory management, secure payment gateway integration, order tracking, and comprehensive admin dashboard with sales analytics.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=500&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      github: '#',
      demo: '#',
      category: 'Full-Stack',
      highlight: false,
    },
    {
      title: 'TrustBridge',
      desc: 'TrustBridge is a web-based platform that connects NGOs, donors, and volunteers through verified campaigns and transparent updates. It aims to build trust and accountability in the social sector by allowing NGOs to post verified donation and volunteer drives, donors to track how their funds are used, and volunteers to discover nearby opportunities. The platform includes features like verified NGO profiles, real-time donation tracking, impact dashboards, and location-based volunteering. A lightweight AI module ensures content authenticity and recommends opportunities based on user interests. With its clean design, transparency tools, and data visualization, TrustBridge makes social contribution simpler, smarter, and more trustworthy for everyone.',
      image: ngoImage,
      tech: ['React', 'Node.js', 'MongoDB', 'AI Module', 'Transparency Tools'],
      github: '#',
      demo: 'https://hackhub-front.vercel.app/',
      category: 'Full-Stack',
      highlight: false,
    },
  ];

  return (
    <div className={`${isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-500 min-h-screen`}>
      {/* Animated gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)',
            left: `calc(50% + ${mousePosition.x}px)`,
            top: `calc(20% + ${mousePosition.y}px)`,
            transition: 'all 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)',
            right: `calc(30% - ${mousePosition.x}px)`,
            bottom: `calc(30% - ${mousePosition.y}px)`,
            transition: 'all 0.3s ease-out',
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${isDark ? 'bg-gray-950/90' : 'bg-white/90'} backdrop-blur-xl border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} transition-all`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => scrollTo('home')} className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
              Rasika.dev
            </button>

            <div className="hidden md:flex items-center space-x-1">
              {['Home', 'About', 'Projects', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeSection === item.toLowerCase()
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2.5 rounded-lg transition-all hover:scale-110 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="md:hidden p-2.5 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-900' : 'bg-white'} border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            {['Home', 'About', 'Projects', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`block w-full text-left px-6 py-3 font-medium transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-blue-500 bg-blue-500/10' : isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              <Sparkles size={16} />
              <span>Available for new opportunities</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Rasika Gudulkar
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              Full-Stack & Software Developer | AI Engineer
            </p>

            <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Crafting innovative web experiences and intelligent systems that blend cutting-edge technology with exceptional design
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={() => scrollTo('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'border-gray-700 hover:border-gray-600 bg-gray-900/50 hover:bg-gray-800' 
                    : 'border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50'
                }`}
              >
                <Download size={20} className="inline mr-2" />
                Download Resume
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-12">
              {[
                { icon: Github, label: 'GitHub', link: 'https://github.com/Rasika1975' , color: 'from-gray-700 to-gray-800' },
                { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/rasika-gudulkar-55867934a/', color: 'from-blue-600 to-blue-700'  },
                
              ].map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  className={`p-3 rounded-lg transition-all hover:scale-110 ${
                    isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight size={32} className="rotate-90 opacity-50" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 relative ${isDark ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">About Me</span>
            </h2>
            <p className="text-center text-gray-500 mb-16 text-lg">Passionate about technology and innovation</p>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Hello! I'm <span className="font-semibold text-blue-500">Rasika Gudulkar</span>, a passionate Full-Stack Developer and AI Engineer with a mission to create impactful digital experiences. I specialize in building scalable web applications and intelligent systems that solve real-world problems.
                </p>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  With expertise spanning from <span className="font-semibold text-purple-500">modern frontend frameworks</span> to <span className="font-semibold text-pink-500">machine learning algorithms</span>, I bridge the gap between design and functionality. My work is driven by a love for clean code, intuitive interfaces, and cutting-edge technology.
                </p>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  When I'm not coding, you'll find me contributing to open-source projects, exploring the latest in AI research, or crafting pixel-perfect UI designs that delight users.
                </p>

                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Certifications</h3>
                  <div className="space-y-3">
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                        <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Code, title: 'Full-Stack Development', desc: 'Building scalable applications with modern frameworks', color: 'from-blue-500 to-cyan-500' },
                  { icon: Brain, title: 'AI & Machine Learning', desc: 'Creating intelligent systems with deep learning', color: 'from-purple-500 to-pink-500' },
                  { icon: Palette, title: 'UI/UX Design', desc: 'Crafting beautiful, user-centered interfaces', color: 'from-pink-500 to-rose-500' },
                  { icon: Zap, title: 'Performance Optimization', desc: 'Delivering blazing-fast user experiences', color: 'from-yellow-500 to-orange-500' },
                ].map(({ icon: Icon, title, desc, color }, idx) => (
                  <ShineCard
                    key={idx}
                    isDark={isDark}
                    className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                      isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                    } shadow-lg hover:shadow-2xl`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{title}</h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{desc}</p>
                  </ShineCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-gray-500 text-lg">Showcasing my best work</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <ShineCard
                  key={idx}
                  isDark={isDark}
                  className={`rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  } shadow-xl hover:shadow-2xl ${project.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  {project.highlight && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                      <Award size={14} />
                      Featured
                    </div>
                  )}

                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <a
                        href={project.github}
                        className="p-2.5 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} className="text-white" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-500 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>

                    <p className={`mb-4 text-sm leading-relaxed line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                            isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ShineCard>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="#"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                View All Projects
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Let's Connect</span>
            </h2>
            <p className="text-center text-gray-500 mb-16 text-lg">Have a project in mind? Let's make it happen</p>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                  <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    I'm currently available for freelance work and full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                </div>

                <div className="space-y-6">
                  <ShineCard
                    href="mailto:rasika.gudulkar@example.com"
                    isDark={isDark}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-105 ${
                      isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                    } shadow-lg`}
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500">Email</p>
                      <p className="font-medium text-lg">rasikagudulkar1008@gmail.com</p>
                    </div>
                  </ShineCard>

                  <ShineCard
                    href="tel:+919876543210"
                    isDark={isDark}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-105 ${
                      isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                    } shadow-lg`}
                  >
                    <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg group-hover:scale-110 transition-transform">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500">Phone</p>
                      <p className="font-medium text-lg">+91 9321836151</p>
                    </div>
                  </ShineCard>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, label: 'GitHub', link: 'https://github.com/Rasika1975', color: 'from-gray-700 to-gray-800' },
                      { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/rasika-gudulkar-55867934a/', color: 'from-blue-600 to-blue-700' },
                    ].map(({ icon: Icon, label, link, color }) => (
                      <ShineCard
                        key={label}
                        href={link}
                        isDark={isDark}
                        className={`p-4 rounded-xl bg-gradient-to-br ${color} text-white hover:scale-110 transition-all shadow-lg`}
                        aria-label={label}
                      >
                        <Icon size={24} />
                      </ShineCard>
                    ))}
                  </div>
                </div>
              </div>

              <ShineCard isDark={isDark} className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                <div className="space-y-5">
                  <div>
                    <label className="block mb-2 font-semibold text-sm">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl transition-all ${
                        isDark 
                          ? 'bg-gray-900 border-gray-700 focus:border-blue-500' 
                          : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                      } border-2 focus:outline-none`}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold text-sm">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl transition-all ${
                        isDark 
                          ? 'bg-gray-900 border-gray-700 focus:border-blue-500' 
                          : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                      } border-2 focus:outline-none`}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold text-sm">Your Message</label>
                    <textarea
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows="5"
                      className={`w-full px-4 py-3 rounded-xl transition-all resize-none ${
                        isDark 
                          ? 'bg-gray-900 border-gray-700 focus:border-blue-500' 
                          : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                      } border-2 focus:outline-none`}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={formStatus === 'sending'}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle2 size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </ShineCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${isDark ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                Rasika Gudulkar
              </p>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Full-Stack Developer & AI Engineer
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                Privacy 
              </a>
              <a href="#" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                Terms
              </a>
            </div>
          </div>

          <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} text-center`}>
            <p className={isDark ? 'text-gray-500' : 'text-gray-600'}>
              © 2025 Rasika Gudulkar. Crafted with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;