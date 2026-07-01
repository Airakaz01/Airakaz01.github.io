import React, { useState, useEffect, useRef } from 'react';
import { Camera, User, Briefcase, Code, Rocket, Mail, Phone, Linkedin, Github, GraduationCap, ChevronDown, ChevronUp, Menu, X, Download, ExternalLink, Brain, Database, BarChart3, Languages, Target, Award, Zap, Star, Sparkles, Calendar, MapPin, Clock, Terminal, Cpu, Layers, Shield, CheckCircle } from 'lucide-react';
const BASE_URL = import.meta.env.BASE_URL;
// ============= CONFIGURATION =============
const CONFIG = {
  personal: {
    name: "Zakaria EL HOUARI",
    title: "Ingénieur en Informatique et Ingénierie des Données",
    subtitle: "Data Engineering, Data Science & IA Générative",
    school: "ENSA Khouribga",
    year: "Promotion 2026",
    availability: "Disponible · Recherche d'un premier poste (Data / IA)",
    image: "/assets/zakaria.jpg"
  },
  contact: {
    email: "elhouari.zakaria01@gmail.com",
    phone: "+212 6 34 30 33 00",
    linkedin: "https://linkedin.com/in/zakaria-el-houari-0b2910221",
    github: "https://github.com/Airakaz01"
  },
  cv: {
    DA: `${BASE_URL}/assets/Zakaria_EL_HOUARI_CV.pdf`,
    DS: `${BASE_URL}/assets/Zakaria_EL_HOUARI_CV.pdf`,
    DE: `${BASE_URL}/assets/Zakaria_EL_HOUARI_CV.pdf`
  },
  stats: [
    { number: '12+', label: 'Projets', icon: Target },
    { number: '3', label: 'Stages Réalisés', icon: Award },
    { number: '20+', label: 'Technologies', icon: Code },
    { number: '2026', label: 'Diplôme', icon: GraduationCap }
  ]
};

// ============= ANIMATIONS & EFFECTS =============
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(${Math.random() * 50 + 100}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.3 + 0.1})`;
        this.oscillation = Math.random() * Math.PI * 2;
      }

      update() {
        this.oscillation += 0.02;
        this.x += this.speedX + Math.cos(this.oscillation) * 0.3;
        this.y += this.speedY + Math.sin(this.oscillation) * 0.3;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none" />;
};

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-1"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-2"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-3"></div>
    </div>
    <ParticleBackground />
  </div>
);

// ============= UI COMPONENTS =============
const GlassCard = ({ children, className = "", hover = true }) => (
  <div className={`bg-slate-900/60 backdrop-blur-xl border-l-4 border-blue-500 shadow-2xl shadow-blue-500/10 clip-corner ${hover ? 'hover:bg-slate-900/80 hover:border-cyan-500 hover:scale-[1.02] hover:shadow-blue-500/30 hover:shadow-2xl' : ''} transition-all duration-500 ${className}`}>
    {children}
  </div>
);

const GradientText = ({ children, className = "" }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 ${className}`}>
    {children}
  </span>
);

const IconBadge = ({ icon: Icon, gradient = "from-blue-500 to-cyan-500", size = 24 }) => (
  <div className={`flex items-center justify-center w-14 h-14 clip-corner bg-gradient-to-br ${gradient} shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
    <Icon size={size} className="text-white" />
  </div>
);

// ============= CV DOWNLOAD BUTTON =============
const CVButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/CV_EL_HOUARI_Zakaria.pdf";
    link.download = "CV_EL_HOUARI_Zakaria.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="group px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-slate-900/80 backdrop-blur-xl border-l-4 border-cyan-500 clip-corner font-bold flex items-center gap-2 sm:gap-3 hover:border-blue-500 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
    >
      <Download size={18} className="sm:w-5 sm:h-5 group-hover:animate-bounce" />
      <span className="hidden sm:inline">DOWNLOAD_CV</span>
      <span className="sm:hidden">CV</span>
    </button>
  );
};

// ============= NAVIGATION =============
const Navigation = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Camera },
    { id: 'about', label: 'À propos', icon: User },
    { id: 'experience', label: 'Expérience', icon: Briefcase },
    { id: 'skills', label: 'Compétences', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'projects', label: 'Projets', icon: Rocket },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 py-2 sm:py-3' : 'bg-transparent py-4 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
            <Sparkles className="text-blue-400 animate-pulse w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-lg sm:text-xl md:text-2xl font-black">
              <GradientText>{CONFIG.personal.name.split(' ')[0]}</GradientText>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-2 bg-slate-900/50 backdrop-blur-xl rounded-full p-1.5 sm:p-2 border border-slate-700/50">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-medium flex items-center gap-1.5 sm:gap-2 transition-all duration-300 text-sm sm:text-base ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <item.icon size={16} className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform" />
                <span className="hidden lg:inline">{item.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 sm:p-3 bg-slate-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all"
          >
            {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 mx-4 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden animate-slide-down">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full px-6 py-4 flex items-center gap-4 transition-all ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-l-4 border-blue-500 text-blue-400' 
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// ============= HERO SECTION =============
const HeroSection = ({ setActiveSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6 relative scanline">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Tech Corner Accent */}
          <div className="absolute -left-4 -top-4 w-32 h-32 border-l-4 border-t-4 border-blue-500 opacity-50"></div>
          
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border-l-4 border-blue-500 mb-4">
              <span className="text-blue-400 font-tech text-sm tracking-wider flex items-center gap-2">
                <Terminal size={16} />
                // DATA & SOFTWARE ENGINEER
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-tight font-orbitron">
              <div className="text-neon hover-neon">
                {CONFIG.personal.name.split(' ').map((word, i) => (
                  <div key={i} className="block" style={{ animationDelay: `${i * 0.1}s` }}>
                    {word}
                  </div>
                ))}
              </div>
            </h1>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="h-1 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"></div>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-rajdhani font-semibold tracking-wide">{CONFIG.personal.title}</p>
            </div>
            
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-slate-900/80 border-l-4 border-green-500 backdrop-blur-sm">
              <div className="flex gap-1">
                <Cpu size={14} className="sm:w-4 sm:h-4 text-green-400 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              <span className="text-green-400 font-tech text-xs sm:text-sm tracking-wide">{CONFIG.personal.availability}</span>
            </div>
          </div>
          
          <div className="pl-4 sm:pl-6 md:pl-8 border-l-2 border-blue-500/30">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed animate-fade-in-delayed-2 font-rajdhani">
              <span className="text-blue-400 font-tech">&gt;_</span> Ingénieur en Informatique et Ingénierie des Données (ENSA Khouribga, 2026),
              en fin de stage PFE chez <strong className="text-cyan-400 font-semibold">Capgemini Engineering</strong>.
              Expérience concrète de bout en bout&nbsp;: pipelines data,
              <strong className="text-cyan-400 font-semibold"> LLM/RAG</strong>,
              <strong className="text-cyan-400 font-semibold"> optimisation</strong> et aide à la décision,
              du prototype au <strong className="text-cyan-400 font-semibold">déploiement cloud</strong>.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 clip-corner font-bold flex items-center gap-2 sm:gap-3 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <User size={18} className="sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10 font-audiowide tracking-wider">PROFIL_DATA</span>
            </button>
            
            <button
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-slate-900/80 backdrop-blur-xl border-l-4 border-blue-500 clip-corner font-bold flex items-center gap-2 sm:gap-3 hover:border-cyan-500 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              <Rocket size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span className="font-audiowide tracking-wider">PROJETS</span>
            </button>
            
            <CVButton />
          </div>
          
          {/* Tech Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
            <div className="text-center group cursor-pointer">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-cyan-400 font-orbitron group-hover:scale-110 transition-transform">10+</div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-tech tracking-wider">PROJECTS</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-blue-400 font-orbitron group-hover:scale-110 transition-transform">20+</div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-tech tracking-wider">TECH_STACK</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-indigo-400 font-orbitron group-hover:scale-110 transition-transform">2026</div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-tech tracking-wider">GRADUATE</div>
            </div>
          </div>
        </div>

        {/* Image with Tech Frame */}
        <div className="flex justify-center animate-fade-in-scale relative mt-8 lg:mt-0">
          <div className="relative group">
            {/* Corner Brackets */}
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-blue-500"></div>
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-cyan-500"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-cyan-500"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-blue-500"></div>
            
            {/* Tech Dots */}
            <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-blue-500 rotate-45"></div>
            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-cyan-500 rotate-45"></div>
            <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-cyan-500 rotate-45"></div>
            <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-blue-500 rotate-45"></div>
            
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="relative w-full h-full clip-corner overflow-hidden bg-slate-900 border-2 sm:border-4 border-slate-800">
                <img
                  src={CONFIG.personal.image}
                  alt={CONFIG.personal.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Floating Tech Labels - Hide on mobile */}
            <div className="hidden sm:block absolute -left-6 md:-left-8 top-1/4 px-2 md:px-3 py-1 bg-blue-500 clip-corner text-[10px] md:text-xs font-audiowide font-bold">
              ML
            </div>
            <div className="hidden sm:block absolute -right-6 md:-right-8 top-1/3 px-2 md:px-3 py-1 bg-cyan-500 clip-corner text-[10px] md:text-xs font-audiowide font-bold">
              DATA
            </div>
            <div className="hidden sm:block absolute -left-6 md:-left-8 bottom-1/3 px-2 md:px-3 py-1 bg-indigo-500 clip-corner text-[10px] md:text-xs font-audiowide font-bold">
              BI
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const element = document.getElementById('about');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce hover:text-blue-400 transition-colors"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

// ============= STATS SECTION =============
const StatsSection = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-16">
    {CONFIG.stats.map((stat, i) => (
      <GlassCard key={i} className="p-8 group text-center">
        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 clip-corner bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300 mx-auto mb-3 sm:mb-4">
          <stat.icon size={24} className="text-white" />
        </div>
        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-4 mb-2">
          {stat.number}
        </div>
        <div className="text-sm text-slate-400">{stat.label}</div>
      </GlassCard>
    ))}
  </div>
);

// ============= ABOUT SECTION =============
const AboutSection = ({ setActiveSection }) => {
  const skills = [
    {
      icon: Brain,
      title: 'Data Science & IA Générative',
      desc: 'Python, Machine Learning, Deep Learning, LLM/RAG',
      color: 'from-blue-500 to-cyan-500',
      details: ['LangChain', 'Computer Vision', 'NLP', 'Model Deployment']
    },
    {
      icon: Database,
      title: 'Data Engineering',
      desc: 'SQL, ETL, Apache Kafka, Spark, Hadoop',
      color: 'from-cyan-500 to-indigo-500',
      details: ['Data Pipelines', 'Big Data', 'MongoDB', 'PostgreSQL']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      desc: 'Power BI, SSIS, SSAS, Tableau',
      color: 'from-indigo-500 to-blue-600',
      details: ['Dashboards', 'Reporting', 'Data Visualization', 'SQL Server']
    },
    {
      icon: Code,
      title: 'Développement & Cloud',
      desc: 'FastAPI, React/TypeScript, Azure, Docker',
      color: 'from-blue-600 to-cyan-600',
      details: ['Backend', 'Frontend', 'CI/CD', 'DevOps']
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-4 font-orbitron">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-neon">À PROPOS</span>
        </h2>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
        <p className="text-center text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg font-rajdhani tracking-wide">
          Passionné par l'intelligence artificielle et la valorisation des données
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 group">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 group-hover:border-cyan-500 transition-colors duration-300 relative">
              <img
                src={CONFIG.personal.image}
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-white">
              {CONFIG.personal.name}
            </h3>
            <p className="text-gray-400 text-center text-sm">{CONFIG.personal.school} - {CONFIG.personal.year}</p>
            <p className="text-gray-400 text-center text-sm">Spécialité: Informatique & Ingénierie des Données</p>
            
            <div className="mt-6 space-y-3 flex justify-center">
              <CVButton />
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Vision & Mission
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Ingénieur diplômé de l'ENSA Khouribga (promotion 2026), je me spécialise dans le
                Data Engineering, la Data Science et l'IA Générative. Mon stage PFE chez Capgemini Engineering
                et mes projets m'ont permis de développer une expertise solide couvrant l'ensemble du cycle de vie
                des projets data, du prototype au déploiement en production.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Passionné par la valorisation des données et la construction de solutions intelligentes, j'ai conçu
                des plateformes complètes intégrant optimisation, pipelines <strong>LLM/RAG</strong> et déploiement
                <strong> cloud (Azure, CI/CD)</strong>. Mon objectif est d'appliquer mes compétences à des projets
                innovants et à fort impact dans le domaine de la Data et de l'IA.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-500 hover:scale-105 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-semibold mb-1 text-white">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-2">{skill.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {skill.details.map((detail, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('experience');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/50"
            >
              <Briefcase size={20} />
              Mes expériences
            </button>
          </div>
        </div>

        <StatsSection />
      </div>
    </section>
  );
};

// ============= EXPERIENCE SECTION AMÉLIORÉE =============
const ExperienceSection = ({ setActiveSection }) => {
  const experiences = [
    {
      date: 'Février - Juillet 2026',
      title: 'Stage PFE — Data & IA Générative, Supply Chain Engineering (client Stellantis)',
      company: 'Capgemini Engineering',
      location: 'Casablanca',
      type: 'Stage PFE - Data & IA Générative',
      duration: '6 mois',
      description: 'Conception et déploiement de la Smart Warehousing Platform : digitalisation du dimensionnement des meubles kitting et de l\'analyse d\'offres fournisseurs pour le site Stellantis Kénitra.',
      achievements: [
        'Développé une plateforme à 6 modules : optimisation multi-objectif vectorisée NumPy, algorithme de bin-packing FFD contraint (11 règles métier validées), visualisation 3D Plotly, exports Word/Excel/DXF AutoCAD',
        'Automatisé l\'analyse des offres fournisseurs par pipeline RAG/LLM (LangChain, GenEngine/Amazon Nova, fallback Ollama) : d\'une demi-journée à moins de 3 minutes ; génération de cahiers des charges enrichis par Knowledge Base',
        'Industrialisé la solution : déploiement Azure App Service avec CI/CD GitHub Actions, suite pytest (226 tests), authentification OTP ; rapport Power BI d\'analyse capacitaire',
        'Livré une seconde version en architecture découplée FastAPI + React/TypeScript (TanStack Query) pour ouvrir l\'application à des utilisateurs non-techniques'
      ],
      technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'LangChain', 'RAG/LLM', 'NumPy', 'Plotly', 'Azure', 'CI/CD', 'pytest', 'Power BI', 'Streamlit'],
      tags: ['IA Générative', 'RAG/LLM', 'Optimisation', 'Cloud', 'MLOps'],
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      date: 'Juin - Septembre 2025',
      title: 'Projet de Fin d\'Année : Pipeline de Vision par Ordinateur pour l\'Analyse de Linéaires',
      company: 'SC-INC',
      location: 'Hybride',
      type: 'PFA - Deep Learning',
      duration: '4 mois',
      description: 'Conception d\'un pipeline Deep Learning pour l\'automatisation de l\'analyse stratégique de linéaires complexes, remplaçant les audits manuels.',
      achievements: [
        'Optimisé un pipeline multi-modèles (Faster R-CNN R-101 FPN, tiling pour petits objets; ResNet-18 : 97% précision; YOLOv8n) pour environnements denses',
        'Géré la préparation et l\'annotation d\'un dataset propriétaire (524 images, +114k annotations) avec CVAT (prétraitement, augmentations robustes)',
        'Développé une application Streamlit pour la mesure automatisée de la Part de Linéaire et l\'audit de conformité, offrant des analyses rapides et objectives'
      ],
      technologies: ['Python', 'PyTorch', 'Faster R-CNN R-101 FPN', 'ResNet-18', 'YOLOv8n', 'CVAT', 'Streamlit', 'Computer Vision', 'Deep Learning'],
      tags: ['Deep Learning', 'Computer Vision', 'Object Detection', 'Image Classification'],
      icon: Brain,
      gradient: 'from-cyan-500 to-indigo-500'
    },
    {
      date: 'Juillet - Septembre 2024',
      title: 'Stagiaire Développeur Full Stack',
      company: 'TSUNAMI IT',
      location: 'À distance',
      type: 'Stage d\'été',
      duration: '2 mois',
      description: 'Développement d\'un jeu Scrabble multijoueur avec architecture full stack moderne. Technologies: Angular, ASP.NET, SQL Server, Pusher.',
      achievements: [
        'Développement d\'une application web full stack avec Angular et ASP.NET',
        'Conception et implémentation de la base de données SQL Server',
        'Intégration de la fonctionnalité temps réel avec Pusher pour le multijoueur',
        'Mise en place de l\'architecture MVC pour une meilleure maintenabilité',
        'Tests unitaires et d\'intégration pour assurer la qualité du code'
      ],
      technologies: ['Angular', 'ASP.NET', 'SQL Server', 'Pusher', 'TypeScript', 'C#', 'HTML/CSS'],
      tags: ['Full Stack', 'Web Development', 'Real-time', 'SQL'],
      icon: Code,
      gradient: 'from-indigo-500 to-blue-600'
    }
   
  ];

  const [expandedExperience, setExpandedExperience] = useState(null);

  const toggleExperience = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <section id="experience" className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 font-orbitron">
            <GradientText>PARCOURS PRO</GradientText>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-rajdhani">Des expériences enrichissantes qui ont façonné mon expertise</p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, i) => (
            <GlassCard key={i} className="p-4 sm:p-6 md:p-8 group transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 clip-corner bg-gradient-to-br ${exp.gradient} shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300`}>
                    <exp.icon size={28} className="sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3 sm:mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={14} className="sm:w-4 sm:h-4 text-cyan-400" />
                        <span className="text-xs sm:text-sm font-bold text-cyan-400 font-tech">{exp.date}</span>
                        <span className="text-slate-500">•</span>
                        <Clock size={14} className="sm:w-4 sm:h-4 text-cyan-400" />
                        <span className="text-xs sm:text-sm text-cyan-400 font-tech">{exp.duration}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all font-rajdhani">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="sm:w-4 sm:h-4 text-slate-400" />
                        <h4 className="text-base sm:text-lg text-slate-300 font-rajdhani">{exp.company}</h4>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin size={14} className="sm:w-4 sm:h-4 text-slate-400" />
                        <span className="text-slate-400 text-xs sm:text-sm font-tech">{exp.location}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400 text-xs sm:text-sm font-tech">{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base font-rajdhani">{exp.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {exp.technologies.map((tech, j) => (
                      <span key={j} className="px-2 sm:px-3 py-1 bg-slate-800/50 border border-slate-700 clip-corner text-[10px] sm:text-xs hover:border-blue-500/50 transition-all font-tech">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Achievements */}
                  <div className="border-t border-slate-700/50 pt-3 sm:pt-4">
                    <button
                      onClick={() => toggleExperience(i)}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-3 sm:mb-4 font-tech text-xs sm:text-sm"
                    >
                      <ChevronDown 
                        size={18} 
                        className={`sm:w-5 sm:h-5 transition-transform duration-300 ${expandedExperience === i ? 'rotate-180' : ''}`} 
                      />
                      <span className="font-semibold">
                        {expandedExperience === i ? 'Masquer les détails' : `Voir les réalisations (${exp.achievements.length})`}
                      </span>
                    </button>

                    {expandedExperience === i && (
                      <div className="space-y-3 animate-fade-in">
                        <h5 className="font-semibold text-slate-300 text-sm sm:text-base font-rajdhani">Principales réalisations :</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, j) => (
                            <li key={j} className="flex items-start gap-3 text-slate-400 text-xs sm:text-sm font-rajdhani">
                              <div className="w-2 h-2 bg-cyan-500 clip-corner mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Timeline Indicator */}
        <div className="relative mt-12 sm:mt-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-20 sm:h-24 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
          <div className="text-center pt-24 sm:pt-28">
            <button
              onClick={() => {
                const element = document.getElementById('skills');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 clip-corner font-semibold flex items-center gap-2 sm:gap-3 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 mx-auto group text-sm sm:text-base font-audiowide"
            >
              <Code size={18} className="sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
              <span className="hidden sm:inline">Découvrir mes compétences techniques</span>
              <span className="sm:hidden">COMPÉTENCES</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============= SKILLS SECTION =============
const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: 'Data Science & IA',
      skills: ['Python', 'Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Computer Vision', 'Scikit-learn'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Languages,
      title: 'IA Générative & NLP',
      skills: ['LLM', 'RAG', 'LangChain', 'Prompt Engineering', 'Ollama', 'NLP', 'TF-IDF', 'Pandas', 'NumPy'],
      color: 'from-cyan-500 to-indigo-500'
    },
    {
      icon: BarChart3,
      title: 'Data Engineering & Big Data',
      skills: ['SQL', 'ETL', 'Apache Kafka', 'Spark', 'MongoDB', 'PostgreSQL', 'Data Pipeline'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'Business Intelligence',
      skills: ['Power BI', 'SSIS', 'SSAS', 'SQL Server', 'Reporting', 'Dashboards'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Code,
      title: 'Développement Full Stack',
      skills: ['FastAPI', 'React', 'TypeScript', 'Streamlit', 'Spring Boot', 'Angular', 'ASP.NET', 'Node.js', 'HTML/CSS'],
      color: 'from-cyan-600 to-indigo-600'
    },
    {
      icon: Layers,
      title: 'DevOps, Cloud & Outils',
      skills: ['Azure', 'Docker', 'CI/CD (GitHub Actions)', 'pytest', 'Git/GitHub', 'Jira', 'Scrum', 'Jupyter'],
      color: 'from-indigo-600 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 font-orbitron">
            <GradientText>COMPÉTENCES</GradientText>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, i) => (
            <GlassCard key={i} className="p-4 sm:p-6 md:p-8 group hover:scale-[1.02] transition-all duration-300">
              <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 clip-corner bg-gradient-to-br ${category.color} shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6`}>
                <category.icon size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white font-rajdhani">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span 
                    key={j} 
                    className="px-3 py-1.5 sm:py-2 bg-slate-800/50 border border-slate-700 clip-corner text-xs sm:text-sm font-tech text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800/80 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============= CERTIFICATIONS SECTION =============
const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Developing Applications with LangChain',
      issuer: 'DataCamp',
      date: '2026',
      credentialId: null,
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Power BI Fundamentals Track',
      issuer: 'DataCamp',
      date: '2026',
      credentialId: null,
      icon: BarChart3,
      gradient: 'from-cyan-500 to-indigo-500'
    },
    {
      title: 'Learn Express.js',
      issuer: 'Scrimba',
      date: 'Nov 2025',
      credentialId: null,
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Kafka Fundamentals',
      issuer: 'LearnKartS - Customized eLearning Content Provider',
      date: 'Oct 2025',
      credentialId: null,
      icon: Database,
      gradient: 'from-cyan-500 to-indigo-500'
    },
    {
      title: 'How to Create a Jira SCRUM Project',
      issuer: 'Coursera',
      date: 'Mar 2025',
      credentialId: '933CYY806MSY',
      icon: Target,
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Data Analyst Career Track',
      issuer: '365 Data Science',
      date: 'Dec 2024',
      credentialId: 'DD-913B76E703',
      icon: BarChart3,
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'MLOps Hackathon',
      issuer: 'DataVerse - OpenSource',
      date: '2024',
      credentialId: null,
      icon: Layers,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Frontend for Java Full Stack Development',
      issuer: 'Board Infinity',
      date: 'Jun 2024',
      credentialId: null,
      icon: Code,
      gradient: 'from-cyan-600 to-indigo-600'
    },
    {
      title: 'Fundamentals of Java Programming',
      issuer: 'Board Infinity',
      date: 'Feb 2024',
      credentialId: null,
      icon: Terminal,
      gradient: 'from-indigo-600 to-blue-500'
    },
    {
      title: 'HTML, CSS, and Javascript for Web Developers',
      issuer: 'John Hopkins University',
      date: 'Feb 2024',
      credentialId: null,
      icon: Layers,
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="certifications" className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 font-orbitron">
            <GradientText>CERTIFICATIONS</GradientText>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-rajdhani">Formation continue et développement professionnel</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {certifications.map((cert, i) => (
            <GlassCard key={i} className="group overflow-hidden hover:scale-[1.02] transition-all duration-300">
              {/* Header with gradient */}
              <div className={`p-4 sm:p-6 bg-gradient-to-br ${cert.gradient} relative overflow-hidden`}>
                <div className="flex items-center justify-between">
                  <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 clip-corner bg-white/20 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <cert.icon size={24} className="sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="sm:w-5 sm:h-5 text-white" />
                    <span className="text-white font-tech text-[10px] sm:text-xs tracking-wider">VERIFIED</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white font-rajdhani leading-tight">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Shield size={14} className="sm:w-4 sm:h-4 text-blue-400" />
                  <p className="text-slate-400 text-xs sm:text-sm font-tech">{cert.issuer}</p>
                </div>

                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="sm:w-4 sm:h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-xs sm:text-sm font-tech">{cert.date}</span>
                  </div>
                </div>

                {cert.credentialId && (
                  <div className="pt-3 sm:pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 text-[10px] sm:text-xs font-tech">ID:</span>
                      <span className="text-slate-300 text-[10px] sm:text-xs font-tech tracking-wider">{cert.credentialId}</span>
                    </div>
                  </div>
                )}

                {!cert.credentialId && (
                  <div className="pt-3 sm:pt-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:gap-8 max-w-xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-cyan-400 font-orbitron mb-1 sm:mb-2">10+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-slate-500 font-tech tracking-wider">CERTIFICATIONS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-indigo-400 font-orbitron mb-1 sm:mb-2">100%</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-slate-500 font-tech tracking-wider">VERIFIED</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============= PROJECTS SECTION =============
const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      icon: '🏭',
      category: 'data',
      title: 'Smart Warehousing Platform (PFE Capgemini · Stellantis)',
      description: 'Plateforme d\'avant-projet logistique : optimisation multi-objectif du dimensionnement des meubles (bin-packing FFD, NumPy), analyse d\'offres fournisseurs par RAG/LLM et génération de cahiers des charges. Déployée sur Azure (CI/CD), 226 tests pytest.',
      tags: ['Python', 'FastAPI', 'React', 'LangChain', 'RAG/LLM', 'Azure', 'Plotly', 'Power BI'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🤖',
      category: 'data',
      title: 'Plateforme Web Intelligente & Système de Recommandation (CODEX)',
      description: 'Plateforme web avec système de recommandation CV-offre basé sur l\'IA. Modélisation ML (Random Forest, Keras) et NLP (TF-IDF) pour le matching sémantique.',
      tags: ['React', 'Spring Boot', 'MySQL', 'Machine Learning', 'NLP', 'Flask'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚙️',
      category: 'data',
      title: 'Maintenance Prédictive par Machine Learning & BI',
      description: 'Solution complète de préparation de données, benchmark de 10 algorithmes ML. Random Forest sélectionné avec 98.5% de précision. Dashboards Power BI.',
      tags: ['Python', 'Machine Learning', 'Random Forest', 'Power BI', 'Scikit-learn'],
      gradient: 'from-cyan-500 to-indigo-500'
    },
    {
      icon: '💊',
      category: 'data',
      title: 'Projet BI : Analyse d\'Effets Médicamenteux',
      description: 'Solution BI complète avec pipeline ETL (SSIS), cube OLAP (SSAS), et dashboards interactifs (Power BI) sur SQL Server.',
      tags: ['Power BI', 'SSIS', 'SSAS', 'SQL Server', 'ETL'],
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: '🎯',
      category: 'data',
      title: 'Pipeline Vision par Ordinateur (Deep Learning)',
      description: 'Pipeline de Deep Learning pour l\'analyse d\'images. Implémentation de YOLOv8, Faster R-CNN. +500 images et +100k annotations traitées.',
      tags: ['PyTorch', 'YOLOv8', 'Faster R-CNN', 'Computer Vision', 'Streamlit'],
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: '🎮',
      category: 'dev',
      title: 'Jeu Scrabble Multijoueur',
      description: 'Application web full stack avec fonctionnalités temps réel. Architecture MVC avec Angular, ASP.NET et SQL Server.',
      tags: ['Angular', 'ASP.NET', 'SQL Server', 'Pusher', 'TypeScript'],
      gradient: 'from-cyan-600 to-indigo-600'
    },
    {
      icon: '📊',
      category: 'data',
      title: 'Système de Recommandation & Analytics',
      description: 'Développement de systèmes de recommandation intelligents avec algorithmes de ML et analyse de données avancée.',
      tags: ['Python', 'Recommendation Systems', 'Data Analytics', 'ML'],
      gradient: 'from-indigo-600 to-blue-500'
    },
    {
      icon: '📋',
      category: 'dev',
      title: 'Plateforme de Gestion des Notes Academix (Full Stack)',
      description: 'Développement Full Stack d\'une plateforme de gestion des notes pour établissements scolaires, incluant gestion des professeurs, modules, étudiants et authentification sécurisée.',
      tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Spring Security', 'JWT', 'REST API', 'Tailwind CSS', 'Material UI'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🗣️',
      category: 'data',
      title: 'Reconnaissance d\'\u00c9motions Vocales (SER)',
      description: 'Exploration et comparaison de modèles (SVM, Random Forest, LSTM) pour la reconnaissance d\'émotions vocales sur datasets combinés (CREMA-D, RAVDESS) et TESS. Extraction avancée de caractéristiques audio.',
      tags: ['Python', 'Deep Learning', 'Machine Learning', 'SER', 'LSTM', 'SVM', 'Librosa', 'Keras'],
      gradient: 'from-orange-400 to-red-600'
    },
    {
      icon: '👤',
      category: 'data',
      title: 'Segmentation Faciale par Deep Learning',
      description: 'Analyse comparative d\'architectures de Deep Learning (U-Net, PSPNet, SegNet) pour la segmentation précise des traits du visage sur le dataset LaPa, avec gestion des occlusions.',
      tags: ['Python', 'Deep Learning', 'Computer Vision', 'Image Segmentation', 'U-Net', 'PSPNet', 'SegNet', 'TensorFlow'],
      gradient: 'from-teal-400 to-emerald-600'
    },
    {
      icon: '🛍️',
      category: 'dev',
      title: 'Site E-commerce "Inzo Shop" (Full Stack)',
      description: 'Développement d\'une plateforme e-commerce attrayante et fonctionnelle. Gestion complète des produits, utilisateurs, paniers et commandes, avec une interface intuitive et un backend robuste.',
      tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Laravel', 'PHP', 'MySQL'],
      gradient: 'from-fuchsia-500 to-rose-500'
    },
    {
      icon: '📦',
      category: 'dev',
      title: 'Application de Gestion des Commandes "EasyOrder" (Java POO)',
      description: 'Développement d\'une application JavaFX Full Stack pour la gestion complète des commandes, clients, produits, facturation et analyse des ventes. Intégration MySQL et architecture MVC.',
      tags: ['Java', 'JavaFX', 'MySQL', 'JDBC', 'MVC', 'POO'],
      gradient: 'from-lime-400 to-green-600'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 font-orbitron">
            <GradientText>MES PROJETS</GradientText>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'Tous' },
            { id: 'data', label: 'Data Science' },
            { id: 'dev', label: 'Développement' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 clip-corner font-audiowide tracking-wider transition-all duration-300 text-sm sm:text-base ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-slate-900/50 border border-slate-700 text-slate-400 hover:border-blue-500/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <GlassCard key={i} className="overflow-hidden group">
              <div className={`p-8 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white font-rajdhani">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed font-rajdhani">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-800/50 border border-slate-700 clip-corner text-xs font-tech hover:border-blue-500/50 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============= CONTACT SECTION =============
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const mailtoLink = `mailto:${CONFIG.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`)}`;
      window.location.href = mailtoLink;
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: CONFIG.contact.email, link: `mailto:${CONFIG.contact.email}`, color: 'from-blue-500 to-cyan-500' },
    { icon: Phone, title: 'Téléphone', value: CONFIG.contact.phone, link: `tel:${CONFIG.contact.phone}`, color: 'from-cyan-500 to-indigo-500' },
    { icon: Linkedin, title: 'LinkedIn', value: 'Zakaria EL HOUARI', link: CONFIG.contact.linkedin, color: 'from-indigo-600 to-blue-700' },
    { icon: Github, title: 'GitHub', value: 'Airakaz01', link: CONFIG.contact.github, color: 'from-slate-600 to-slate-800' }
  ];

  return (
    <section id="contact" className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 font-orbitron">
            <GradientText>CONTACT</GradientText>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-rajdhani">Prêt à collaborer sur des projets innovants</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <GlassCard key={i} className="p-6 group">
                <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-4">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-white">{info.title}</h3>
                    <p className="text-slate-400 hover:text-blue-400 transition-colors">{info.value}</p>
                  </div>
                </a>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="p-8">
            <h3 className="text-3xl font-bold mb-6 font-rajdhani">
              <GradientText>ENVOYEZ UN MESSAGE</GradientText>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white font-rajdhani">Nom complet *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white font-rajdhani">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white font-rajdhani">Sujet *</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500 transition-all text-white"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white font-rajdhani">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500 transition-all resize-none text-white"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 clip-corner font-audiowide tracking-wider flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105'
                } transition-all duration-300 text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Mail size={20} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

// ============= FOOTER =============
const Footer = () => (
  <footer className="bg-slate-950/50 backdrop-blur-xl border-t border-slate-800 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h4 className="text-2xl font-bold mb-4 font-orbitron">
            <GradientText>{CONFIG.personal.name}</GradientText>
          </h4>
          <p className="text-slate-400 mb-6 font-rajdhani">Ingénieur en Data Engineering, Data Science & IA Générative</p>
          <div className="flex gap-3">
            <a href={CONFIG.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center hover:border-blue-500 hover:scale-110 transition-all">
              <Linkedin size={18} />
            </a>
            <a href={CONFIG.contact.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center hover:border-blue-500 hover:scale-110 transition-all">
              <Github size={18} />
            </a>
            <a href={`mailto:${CONFIG.contact.email}`} className="w-10 h-10 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center hover:border-blue-500 hover:scale-110 transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-lg text-white font-rajdhani tracking-wide">Navigation</h4>
          <ul className="space-y-2 text-slate-400">
            {['Accueil', 'À propos', 'Expérience', 'Compétences', 'Certifications', 'Projets', 'Contact'].map((item, i) => (
              <li key={i}>
                <a href={`#${item.toLowerCase().replace(' ', '-').replace('à-propos', 'about').replace('expérience', 'experience').replace('compétences', 'skills').replace('accueil', 'home')}`} className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-lg text-white font-rajdhani tracking-wide">Contact</h4>
          <ul className="space-y-3 text-slate-400">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-blue-400" />
              {CONFIG.contact.email}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-blue-400" />
              {CONFIG.contact.phone}
            </li>
            <li className="flex items-center gap-2">
              <GraduationCap size={16} className="text-blue-400" />
              {CONFIG.personal.school}
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-slate-800 text-slate-400">
        <p className="font-tech text-sm">&copy; 2026 {CONFIG.personal.name}. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

// ============= SCROLL TO TOP =============
const ScrollToTop = ({ setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={`fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all duration-500 z-50 ${
        isVisible ? 'opacity-100 scale-100 hover:scale-110' : 'opacity-0 scale-0'
      }`}
    >
      <ChevronUp size={24} className="sm:w-7 sm:h-7" />
    </button>
  );
};

// ============= MAIN APP =============
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* All sections rendered for continuous scroll */}
      <HeroSection setActiveSection={setActiveSection} />
      <AboutSection setActiveSection={setActiveSection} />
      <ExperienceSection setActiveSection={setActiveSection} />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
      
      <Footer />
      <ScrollToTop setActiveSection={setActiveSection} />
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&family=Audiowide&display=swap');
        
        .font-orbitron {
          font-family: 'Orbitron', sans-serif;
        }
        
        .font-rajdhani {
          font-family: 'Rajdhani', sans-serif;
        }
        
        .font-tech {
          font-family: 'Share Tech Mono', monospace;
        }
        
        .font-audiowide {
          font-family: 'Audiowide', sans-serif;
        }
        
        .text-stroke {
          -webkit-text-stroke: 2px rgba(59, 130, 246, 0.5);
          text-stroke: 2px rgba(59, 130, 246, 0.5);
        }
        
        .text-neon {
          text-shadow: 
            0 0 10px rgba(59, 130, 246, 0.8),
            0 0 20px rgba(59, 130, 246, 0.6),
            0 0 30px rgba(59, 130, 246, 0.4),
            0 0 40px rgba(6, 182, 212, 0.3);
        }
        
        .text-3d {
          text-shadow: 
            1px 1px 0 #0284c7,
            2px 2px 0 #0284c7,
            3px 3px 0 #0284c7,
            4px 4px 0 #0369a1,
            5px 5px 10px rgba(0, 0, 0, 0.5);
        }
        
        .hover-neon:hover {
          animation: neon-pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes neon-pulse {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(59, 130, 246, 0.8),
              0 0 20px rgba(59, 130, 246, 0.6),
              0 0 30px rgba(59, 130, 246, 0.4);
          }
          50% {
            text-shadow: 
              0 0 20px rgba(59, 130, 246, 1),
              0 0 30px rgba(59, 130, 246, 0.8),
              0 0 40px rgba(59, 130, 246, 0.6),
              0 0 50px rgba(6, 182, 212, 0.5);
          }
        }
        .clip-corner {
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
        }
        
        .hex-shape {
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }
        
        .tech-border {
          position: relative;
        }
        
        .tech-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #3b82f6, #06b6d4, #3b82f6);
          background-size: 200% 200%;
          animation: border-flow 3s linear infinite;
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
          z-index: -1;
        }
        
        @keyframes border-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .glitch {
          position: relative;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch::before {
          animation: glitch-1 2s infinite;
          color: #06b6d4;
          z-index: -1;
        }
        
        .glitch::after {
          animation: glitch-2 2s infinite;
          color: #3b82f6;
          z-index: -2;
        }
        
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
        }
        
        .scanline {
          position: relative;
          overflow: hidden;
        }
        
        .scanline::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
          animation: scan 3s linear infinite;
        }
        
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(1000px); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-120deg); }
          66% { transform: translate(20px, -20px) rotate(-240deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -10px) scale(1.1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float-1 { animation: float-1 20s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 25s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 15s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
        .animate-fade-in-scale { animation: fade-in-scale 1s ease-out both; }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
        .animate-gradient { animation: gradient 15s ease infinite; background-size: 200% 200%; }
        .animate-bounce { animation: bounce 2s infinite; }
        .animate-fade-in-delayed-2 { 
          animation: fade-in-up 0.8s ease-out 0.6s both; 
        }
        
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.5); }
        ::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #0284c7, #06b6d4); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, #0369a1, #0891b2); }
        
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(59, 130, 246, 0.3); }
      `}</style>
    </div>
  );
};

export default Portfolio;