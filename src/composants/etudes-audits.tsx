import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, Variants } from 'framer-motion';
import { 
  Layers, BarChartBig, Globe, Users, CheckCircle, Activity,
  GitBranch, Target, Quote, ArrowRight, Download, Menu,
  MapPin, Phone, Mail, Award,
  Linkedin, Facebook, MessageCircle
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Définition des variants de Framer Motion
// Correction de l'erreur 2322 en utilisant 'as const' pour l'array d'easing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
};

const RevealOnScroll: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  // Ajout d'une marge négative pour déclencher l'animation plus tôt
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

// Composants internes pour le Deliverables Showcase
const BarChartDeliverable: React.FC<{ bars: number[] }> = ({ bars }) => (
  <div className="d-flex align-items-end h-100 gap-2 p-3 bg-dark rounded" style={{ backgroundColor: '#0A1A2F' }}>
    {bars.map((height, idx) => (
      <motion.div
        key={idx}
        className="rounded-top"
        style={{ width: '15%', height: `${height}%`, backgroundColor: '#E0751A' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
      />
    ))}
  </div>
);

const DiagramDeliverable: React.FC = () => (
  <div className="h-100 p-3 bg-dark rounded d-flex align-items-center justify-content-center" style={{ backgroundColor: '#0A1A2F' }}>
    <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ maxWidth: '100px' }}>
      <g stroke="#D4AF37" fill="none" strokeWidth="1">
        <motion.circle cx="50" cy="50" r="45" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
        <motion.circle cx="30" cy="30" r="10" fill="#E0751A" />
        <motion.circle cx="70" cy="30" r="10" fill="#E0751A" />
        <motion.circle cx="50" cy="70" r="10" fill="#E0751A" />
        <motion.path d="M30,30 L70,30 M30,30 L50,70 M70,30 L50,70" stroke="#7E8AA0" />
      </g>
      <text x="50" y="53" textAnchor="middle" fill="white" fontSize="6">RISKS</text>
    </svg>
  </div>
);

const ReportDeliverable: React.FC = () => (
  <div className="h-100 p-3 bg-dark rounded d-flex flex-column align-items-start justify-content-between" style={{ backgroundColor: '#0A1A2F' }}>
    <Target size={24} style={{ color: '#E0751A' }} />
    <div className="w-100">
      <motion.div className="mb-2" style={{ height: '8px', backgroundColor: '#7E8AA0' }} initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.8, delay: 0.5 }} />
      <motion.div className="mb-2" style={{ height: '8px', backgroundColor: '#7E8AA0' }} initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 0.8, delay: 0.7 }} />
      <motion.div style={{ height: '8px', backgroundColor: '#7E8AA0' }} initial={{ width: 0 }} animate={{ width: '50%' }} transition={{ duration: 0.8, delay: 0.9 }} />
    </div>
  </div>
);

const EtudesAuditsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.5]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const expertises = [
    {
      icon: <Layers size={20} />,
      title: 'Audit Organisationnel',
      description: 'Diagnostic global et cartographie des processus pour une efficacité opérationnelle maximale.'
    },
    {
      icon: <BarChartBig size={20} />,
      title: 'Audit Financier',
      description: 'Vérification rigoureuse, contrôle interne et fiabilisation des états financiers.'
    },
    {
      icon: <Globe size={20} />,
      title: 'Études Économiques',
      description: 'Benchmarking sectoriel et analyse des tendances marché en Afrique de l\'Ouest.'
    },
    {
      icon: <Users size={20} />,
      title: 'Audits RH',
      description: 'GPEC, analyse du climat social et alignement des compétences stratégiques.'
    }
  ];

  const methodology = [
    {
      number: '1',
      title: 'Kick-off & Compréhension',
      description: 'Définition précise du périmètre et des objectifs de la mission avec les parties prenantes.'
    },
    {
      number: '2',
      title: 'Collecte de Données',
      description: 'Immersion terrain, interviews, et extraction des données chiffrées pertinentes.'
    },
    {
      number: '3',
      title: 'Analyse & Modélisation',
      description: 'Traitement analytique, croisement des flux et identification des écarts.'
    },
    {
      number: '4',
      title: 'Rapport & Recommandations',
      description: 'Remise d\'un diagnostic clair et d\'un plan d\'action opérationnel hiérarchisé.'
    }
  ];

  const deepDive = [
    {
      title: 'Études Stratégiques',
      description: 'Nous anticipons les mutations de votre marché pour sécuriser vos investissements.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop',
      features: ['Analyse macro-économique', 'Études de faisabilité', 'Benchmarking concurrentiel'],
      reverse: false
    },
    {
      title: 'Audits Financiers & Fiscaux',
      description: 'La fiabilité de l\'information financière est le socle de la confiance des tiers.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2622&auto=format&fit=crop',
      features: ['Contrôle interne', 'Revue fiscale', 'Fiabilisation des comptes'],
      reverse: true
    }
  ];

  const deliverables = [
    {
      icon: <Activity size={16} />,
      title: 'Performance KPI',
      subtitle: 'Tableaux de bord dynamiques',
      bars: [40, 70, 50, 90, 100]
    },
    {
      icon: <GitBranch size={16} />,
      title: 'Process Mapping',
      subtitle: 'Cartographie des risques',
      diagram: true
    },
    {
      icon: <Target size={16} />,
      title: 'Stratégie',
      subtitle: 'Synthèses décisionnelles',
      report: true
    }
  ];

  const testimonials = [
    {
      quote: "L'audit organisationnel mené par le Cabinet Performances a permis une restructuration majeure de nos services, augmentant notre efficacité de 30%.",
      author: "Directeur Général",
      company: "Groupe Bancaire Panafricain",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      featured: false
    },
    {
      quote: "Une finesse d'analyse rare. Leur étude sectorielle a été déterminante pour notre entrée sur le marché ivoirien.",
      author: "DAF",
      company: "Industrie Pharmaceutique",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
      featured: true
    },
    {
      quote: "Rigueur, discrétion et pertinence. Un accompagnement sur-mesure pour nos enjeux de conformité fiscale.",
      author: "Secrétaire Général",
      company: "Administration Publique",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      featured: false
    }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', color: '#2F475E', fontFamily: 'Inter, sans-serif', overflowX: 'hidden' }}>
      {/* Header - Same as Homepage */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed-top bg-white shadow-sm"
        style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.95)', zIndex: 1000 }}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light py-3">
            <a href="#" className="navbar-brand d-flex align-items-center gap-2">
              <div className="bg-dark text-white p-2 rounded" style={{ backgroundColor: '#0A1A2F' }}>
                <span className="fw-bold fs-5">CP</span>
              </div>
              <div className="d-flex flex-column lh-1">
                <span className="fw-bold" style={{ fontSize: '1.1rem', color: '#0A1A2F' }}>CABINET</span>
                <span className="text-uppercase" style={{ fontSize: '0.7rem', color: '#E0751A', letterSpacing: '2px' }}>Performances</span>
              </div>
            </a>

            <button 
              className="navbar-toggler border-0" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>

            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto gap-4">
                <li className="nav-item"><a href="#services" className="nav-link fw-medium">FORMATIONS</a></li>
                <li className="nav-item"><a href="#consulting" className="nav-link fw-medium">ASSISTANCES & CONSEILS</a></li>
                <li className="nav-item"><a href="#audits" className="nav-link fw-medium">ÉTUDES & AUDITS</a></li>
                <li className="nav-item"><a href="#recrutement" className="nav-link fw-medium">RECRUTEMENTS</a></li>
                <li className="nav-item"><a href="#equipe" className="nav-link fw-medium">À PROPOS</a></li>
              </ul>
              <a 
                href="#contact" 
                className="btn ms-3 rounded-pill text-white fw-medium"
                style={{ backgroundColor: '#0A1A2F' }}
              >
                Contactez-nous
              </a>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Cinematic Hero */}
      <section 
        ref={heroRef}
        className="position-relative d-flex align-items-center justify-content-center overflow-hidden"
        style={{ height: '100vh', minHeight: '600px', marginTop: '80px', backgroundColor: '#0A1A2F' }}
      >
        <motion.div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ scale: heroScale, y: heroY, zIndex: 0 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
            alt="Corporate Architecture"
            className="w-100 h-100 object-fit-cover"
            style={{ opacity: 0.4 }}
          />
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ 
              background: 'linear-gradient(to top right, rgba(10, 26, 47, 1), rgba(10, 26, 47, 0.8), rgba(10, 26, 47, 0.3))'
            }}
          />
        </motion.div>

        {/* Floating Particles */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: i % 2 === 0 ? '4px' : '8px',
              height: i % 2 === 0 ? '4px' : '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              left: `${10 + i * 20}%`,
              bottom: 0
            }}
            animate={{
              y: [0, -window.innerHeight, 0],
              x: [0, 50, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}

        {/* Geometric Lines */}
        <svg 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ opacity: 0.1, zIndex: 1, pointerEvents: 'none' }}
          preserveAspectRatio="none"
        >
          <path d="M0,100 L100,0" stroke="white" strokeWidth="0.1" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M20,100 L100,20" stroke="white" strokeWidth="0.05" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M0,80 L80,0" stroke="white" strokeWidth="0.05" fill="none" vectorEffect="non-scaling-stroke" />
        </svg>

        <motion.div 
          className="position-relative text-center px-4"
          style={{ zIndex: 10, maxWidth: '900px' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span 
              className="rounded-circle"
              style={{ width: '6px', height: '6px', backgroundColor: '#E0751A' }}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-uppercase fw-semibold" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.65rem', letterSpacing: '0.2em' }}>
              Cabinet Performances
            </span>
          </motion.div>

          <h1 className="display-3 fw-bold mb-4" style={{ lineHeight: '1.1' }}>
            <span 
              className="d-block"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              ÉTUDES & AUDITS
            </span>
            <span className="d-block text-white fw-light fs-2 mt-2" style={{ opacity: 0.9 }}>
              Performance Durable
            </span>
          </h1>

          <p className="lead text-white-50 mb-5 mx-auto" style={{ maxWidth: '700px', fontSize: '0.95rem' }}>
            Transformez vos données en décisions stratégiques. Analyse experte, diagnostic financier 
            et optimisation organisationnelle pour les leaders de demain.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <motion.a
              href="#contact"
              className="btn btn-lg text-white fw-semibold d-inline-flex align-items-center justify-content-center gap-2 position-relative overflow-hidden"
              style={{ 
                backgroundColor: '#E0751A', 
                boxShadow: '0 0 20px rgba(224, 117, 26, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.75rem'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(224, 117, 26, 0.6)',
                y: -4
              }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un diagnostic <ArrowRight size={16} />
            </motion.a>
            <a 
              href="#"
              className="btn btn-lg fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.75rem'
              }}
            >
              <Download size={16} /> Télécharger Brochure
            </a>
          </div>
        </motion.div>
      </section>

      {/* Expertise Grid */}
      <section className="py-5 position-relative" style={{ backgroundColor: '#0A1A2F' }}>
        <div className="container py-5">
          <RevealOnScroll>
            <div className="mb-5">
              <h6 className="text-uppercase fw-bold mb-2" style={{ color: '#E0751A', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                Nos Domaines d'Intervention
              </h6>
              <h2 className="display-6 fw-semibold text-white">Expertise Multisectorielle</h2>
            </div>
          </RevealOnScroll>

          <div className="row g-4">
            {expertises.map((expertise, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <RevealOnScroll delay={index * 0.1}>
                  <motion.div 
                    className="card h-100 border position-relative overflow-hidden"
                    whileHover={{ 
                      y: -5,
                      borderColor: 'rgba(224, 117, 26, 0.5)',
                      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)'
                    }}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(12px)',
                      borderColor: 'rgba(255, 255, 255, 0.05)',
                      cursor: 'pointer'
                    }}
                  >
                    <div 
                      className="position-absolute top-0 end-0 rounded-circle"
                      style={{
                        width: '96px',
                        height: '96px',
                        background: 'rgba(224, 117, 26, 0.1)',
                        filter: 'blur(40px)'
                      }}
                    />
                    
                    <div className="card-body p-4">
                      <motion.div 
                        className="mb-4 d-inline-flex align-items-center justify-center rounded-circle"
                        style={{ 
                          width: '48px', 
                          height: '48px',
                          border: '1px solid rgba(224, 117, 26, 0.3)',
                          color: 'white'
                        }}
                        whileHover={{ 
                          borderColor: '#E0751A',
                          boxShadow: '0 0 15px rgba(224, 117, 26, 0.4)'
                        }}
                      >
                        {expertise.icon}
                      </motion.div>
                      <h5 className="fw-semibold text-white mb-3">{expertise.title}</h5>
                      <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        {expertise.description}
                      </p>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Timeline - CORRIGÉ */}
      <section className="py-5 position-relative" style={{ background: 'linear-gradient(to bottom, #0A1A2F, #06101d)' }}>
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.5
          }}
        />

        <div className="container py-5 position-relative">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <span 
                className="d-inline-block px-3 py-1 rounded-pill fw-bold"
                style={{ 
                  border: '1px solid #D4AF37',
                  color: '#D4AF37',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em'
                }}
              >
                MÉTHODOLOGIE
              </span>
              <h2 className="display-6 fw-semibold text-white mt-4">Notre Approche Structurée</h2>
            </div>
          </RevealOnScroll>

          <div className="position-relative" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Timeline Line */}
            <div 
              className="position-absolute d-none d-md-block"
              style={{
                left: '50%',
                top: '0',
                bottom: '0',
                width: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateX(-50%)'
              }}
            />

            {methodology.map((step, index) => (
              <div key={index} className="row align-items-center mb-5 position-relative">
                <RevealOnScroll delay={index * 0.1}>
                  
                  {/* TEXT BLOCK - Correction pour alterner l'alignement */}
                  <div 
                    className={`col-md-6 mb-3 mb-md-0 ${index % 2 === 0 ? 'text-md-end' : 'order-md-2 text-md-start'}`}
                  >
                    <h5 className="fw-semibold text-white">{step.title}</h5>
                    <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {step.description}
                    </p>
                  </div>

                  {/* CENTRAL DOT */}
                  <div className={`col-md-6 d-flex ${index % 2 === 0 ? 'justify-content-start' : 'justify-content-end'} d-md-block`}>
                    <motion.div 
                      className="d-flex align-items-center justify-content-center rounded-circle fw-bold"
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#0A1A2F',
                        border: '2px solid #D4AF37',
                        boxShadow: '0 0 10px #D4AF37',
                        color: '#D4AF37',
                        fontSize: '0.75rem',
                        zIndex: 10
                      }}
                      whileHover={{ scale: 1.25 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section style={{ backgroundColor: '#0A1A2F' }}>
        {deepDive.map((section, index) => (
          <div 
            key={index}
            className={`row g-0 align-items-center ${index !== deepDive.length - 1 ? 'border-bottom' : ''}`}
            style={{ minHeight: '60vh', borderColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <div className={`col-lg-6 ${section.reverse ? 'order-lg-2' : ''}`}>
              <RevealOnScroll>
                <motion.div 
                  className="position-relative overflow-hidden"
                  style={{ height: '400px' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 2 }}
                >
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ backgroundColor: 'rgba(10, 26, 47, 0.4)', zIndex: 1 }}
                  />
                  <img 
                    src={section.image}
                    alt={section.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                </motion.div>
              </RevealOnScroll>
            </div>

            <div className={`col-lg-6 ${section.reverse ? 'order-lg-1' : ''}`}>
              <RevealOnScroll delay={0.2}>
                <div className="p-5">
                  <h3 className="fs-3 fw-semibold text-white mb-3">{section.title}</h3>
                  <div className="mb-4" style={{ width: '64px', height: '2px', backgroundColor: '#D4AF37' }} />
                  <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {section.description}
                  </p>
                  <ul className="list-unstyled">
                    {section.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-center gap-3 mb-3 small text-white-50">
                        <CheckCircle size={16} style={{ color: '#E0751A' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        ))}
      </section>

      {/* Deliverables Showcase - Section complétée */}
      <section className="py-5 position-relative" style={{ backgroundColor: '#081526' }}>
        {/* Floating dots (corrigé) */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: i === 1 ? '6px' : '4px',
              height: i === 1 ? '6px' : '4px',
              backgroundColor: i === 1 ? 'rgba(224, 117, 26, 0.4)' : 'rgba(255, 255, 255, 0.2)',
              top: `${10 + i * 40}%`,
              [i % 2 === 0 ? 'left' : 'right']: `${5 + i * 5}%`
            }}
            animate={{
              y: [0, i % 2 === 0 ? 20 : -20, 0],
            }}
            transition={{
              duration: 8 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror"
            }}
          />
        ))}

        <div className="container py-5 position-relative">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h6 className="text-uppercase fw-bold mb-2" style={{ color: '#E0751A', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                LivRABLES CLÉS
              </h6>
              <h2 className="display-6 fw-semibold text-white">L'Impact Visuel de Nos Analyses</h2>
            </div>
          </RevealOnScroll>

          <div className="row g-4">
            {deliverables.map((item, index) => (
              <div key={index} className="col-md-4">
                <RevealOnScroll delay={index * 0.1}>
                  <div className="card h-100 border-0 shadow-lg" style={{ backgroundColor: '#0A1A2F', color: 'white' }}>
                    <div className="card-header border-0 p-4" style={{ backgroundColor: '#0A1A2F' }}>
                      <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="p-2 rounded-circle" style={{ backgroundColor: '#E0751A', color: 'white' }}>{item.icon}</div>
                        <h5 className="fw-semibold mb-0 text-white">{item.title}</h5>
                      </div>
                      <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{item.subtitle}</p>
                    </div>
                    <div className="card-body p-0" style={{ height: '200px' }}>
                      {item.bars && <BarChartDeliverable bars={item.bars} />}
                      {item.diagram && <DiagramDeliverable />}
                      {item.report && <ReportDeliverable />}
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container py-5">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h6 className="text-uppercase fw-bold mb-2" style={{ color: '#E0751A', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                TÉMOIGNAGES
              </h6>
              <h2 className="display-6 fw-semibold" style={{ color: '#0A1A2F' }}>Ils Témoignent de Notre Impact</h2>
            </div>
          </RevealOnScroll>

          <div className="row g-4">
            {testimonials.map((testi, index) => (
              <div key={index} className="col-md-4">
                <RevealOnScroll delay={index * 0.15}>
                  <motion.div 
                    className={`card h-100 p-4 ${testi.featured ? 'shadow-lg border-2' : 'shadow-sm border-0'}`}
                    style={{ 
                        borderColor: testi.featured ? '#E0751A' : 'transparent',
                        backgroundColor: testi.featured ? '#FFFFFF' : '#F5F5F5'
                    }}
                    whileHover={{ y: -5, boxShadow: testi.featured ? '0 10px 20px rgba(0, 0, 0, 0.2)' : '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                  >
                    <Quote size={32} style={{ color: '#E0751A', opacity: 0.2 }} className="mb-3" />
                    <p className="fst-italic mb-4" style={{ color: '#2F475E' }}>
                      {testi.quote}
                    </p>
                    <div className="d-flex align-items-center mt-auto">
                      <img 
                        src={testi.image} 
                        alt={testi.author} 
                        className="rounded-circle me-3 object-fit-cover"
                        style={{ width: '50px', height: '50px' }}
                      />
                      <div>
                        <h6 className="mb-0 fw-bold" style={{ color: '#0A1A2F' }}>{testi.author}</h6>
                        <p className="small text-muted mb-0">{testi.company}</p>
                      </div>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section*/}
      <section className="py-5" style={{ backgroundColor: '#0A1A2F' }}>
        <div className="container py-5 text-center">
          <RevealOnScroll>
            <h2 className="display-5 fw-bold mb-3 text-white">Besoin de nos services ?</h2>
            <p className="lead text-white-50 mb-4 mx-auto" style={{ maxWidth: '700px' }}>
              Contactez-nous aujourd'hui pour une évaluation personnalisée et confidentielle de vos besoins en études et audits.
            </p>
            <motion.a
              href="#contact"
              className="btn btn-lg text-white fw-semibold d-inline-flex align-items-center justify-content-center gap-2 rounded-pill"
              style={{ 
                backgroundColor: '#D4AF37', 
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.9rem'
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Démarrer la Conversation <ArrowRight size={18} />
            </motion.a>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-5 text-white" style={{ backgroundColor: '#0A1A2F' }}>
        <div className="container py-4">
          <div className="row g-5 mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="bg-white text-dark p-2 rounded">
                  <span className="fw-bold">CP</span>
                </div>
                <span className="fw-bold">CABINET PERFORMANCES</span>
              </div>
              <p className="small text-white-50 mb-4">
                Partenaire de confiance pour le développement des compétences et la performance organisationnelle en Afrique de l'Ouest.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-sm rounded-circle" style={{ backgroundColor: '#2F475E' }}>
                  <Linkedin size={16} />
                </a>
                <a href="#" className="btn btn-sm rounded-circle" style={{ backgroundColor: '#2F475E' }}>
                  <Facebook size={16} />
                </a>
                <a href="#" className="btn btn-sm rounded-circle" style={{ backgroundColor: '#2F475E' }}>
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <h5 className="fw-semibold mb-4">Liens Rapides</h5>
              <ul className="list-unstyled small">
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Accueil</a></li>
                <li className="mb-2"><a href="#services" className="text-white-50 text-decoration-none">Nos Formations</a></li>
                <li className="mb-2"><a href="#audits" className="text-white-50 text-decoration-none">Études & Audits</a></li>
                <li className="mb-2"><a href="#equipe" className="text-white-50 text-decoration-none">Notre Équipe</a></li>
                <li className="mb-2"><a href="#contact" className="text-white-50 text-decoration-none">Contact</a></li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <h5 className="fw-semibold mb-4">Contact</h5>
              <ul className="list-unstyled small text-white-50">
                <li className="mb-3 d-flex gap-3">
                  <MapPin size={20} style={{ color: '#E0751A' }} className="flex-shrink-0" />
                  <span>Cocody Riviera 3, Abidjan,<br />Côte d'Ivoire</span>
                </li>
                <li className="mb-3 d-flex gap-3">
                  <Phone size={20} style={{ color: '#E0751A' }} className="flex-shrink-0" />
                  <span>+225 07 07 00 00 00</span>
                </li>
                <li className="mb-3 d-flex gap-3">
                  <Mail size={20} style={{ color: '#E0751A' }} className="flex-shrink-0" />
                  <span>contact@cabinet-performances.com</span>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <h5 className="fw-semibold mb-4">Accréditations</h5>
              <div className="mb-3 p-3 rounded border border-secondary" style={{ backgroundColor: 'rgba(47, 71, 94, 0.3)' }}>
                <div className="d-flex align-items-center gap-3">
                  <Award size={32} style={{ color: '#E0751A' }} />
                  <div>
                    <p className="mb-0 small text-uppercase text-white-50" style={{ fontSize: '0.7rem' }}>Agrément</p>
                    <p className="mb-0 fw-bold small">FDFP Certifié</p>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded border border-secondary" style={{ backgroundColor: 'rgba(47, 71, 94, 0.3)' }}>
                <div className="d-flex align-items-center gap-3">
                  <CheckCircle size={32} style={{ color: '#E0751A' }} />
                  <div>
                    <p className="mb-0 small text-uppercase text-white-50" style={{ fontSize: '0.7rem' }}>Certificat</p>
                    <p className="mb-0 fw-bold small">CDMP Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top pt-4 text-center" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <p className="mb-0 small text-white-50">© 2025 Cabinet Performances. Tous droits réservés. Mentions Légales.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default EtudesAuditsPage;