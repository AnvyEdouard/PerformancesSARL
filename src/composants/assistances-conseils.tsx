import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, useInView, useScroll, useTransform, Variants 
} from 'framer-motion';
import { 
  Compass, Layers, Users, BarChart3, Crown, Users2, CheckCircle,
  Search, FileCheck, Cog, TrendingUp, Quote, ArrowRight, Menu,
  MapPin, Phone, Mail, Award, Linkedin, Facebook, 
  MessageCircle, ChevronDown
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Animation variants
const fadeInUp: Variants = { // <-- Ajout du type Variants
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] as any // <-- CORRECTION TS2322 : Cast pour le tableau de Bézier
    } 
  }
};

// const scaleIn = { // <-- CORRECTION TS6133 : Variable commentée car non utilisée
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
// };

const RevealOnScroll: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
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

const AssistanceConseilsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Timeline scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        let percentage = ((viewportHeight / 2 - sectionTop) / sectionHeight) * 100;
        percentage = Math.max(0, Math.min(100, percentage));
        setScrollProgress(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillars = [
    {
      icon: <Compass size={28} />,
      title: 'Conseil Stratégique',
      description: 'Définition de visions à long terme et alignement des ressources pour une croissance durable.'
    },
    {
      icon: <Layers size={28} />,
      title: 'Performance',
      description: 'Optimisation des processus opérationnels et restructuration pour l\'efficience.'
    },
    {
      icon: <Users size={28} />,
      title: 'Transformation RH',
      description: 'Accompagnement du capital humain, gestion des talents et culture d\'entreprise.'
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Conseil Financier',
      description: 'Expertise comptable, audit et pilotage de la performance financière.'
    }
  ];

  const methodology = [
    {
      number: '01',
      icon: <Search size={24} />,
      title: 'Diagnostic & Analyse',
      description: 'Audit complet de l\'existant, identification des points de friction et analyse des opportunités.',
      alignment: 'right'
    },
    {
      number: '02',
      icon: <FileCheck size={24} />,
      title: 'Recommandations',
      description: 'Élaboration d\'une feuille de route stratégique avec des actions concrètes et priorisées.',
      alignment: 'left'
    },
    {
      number: '03',
      icon: <Cog size={24} />,
      title: 'Mise en Œuvre',
      description: 'Accompagnement opérationnel sur le terrain pour déployer les solutions validées.',
      alignment: 'right'
    },
    {
      number: '04',
      icon: <TrendingUp size={24} />,
      title: 'Suivi & Reporting',
      description: 'Mesure des impacts, ajustements et garantie de la pérennité des résultats.',
      alignment: 'left'
    }
  ];

  const offers = [
    {
      icon: <Crown size={24} />,
      title: 'Conseil Stratégique & Direction',
      description: 'Accompagnement des instances dirigeantes dans les phases critiques de développement, fusion ou restructuration.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop',
      features: [
        'Plans de continuité d\'activité',
        'Gouvernance d\'entreprise',
        'Audit organisationnel global'
      ]
    },
    {
      icon: <Users2 size={24} />,
      title: 'Organisationnel & RH',
      description: 'Optimisez votre capital humain et vos processus pour créer une culture de la haute performance.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop',
      features: [
        'Gestion prévisionnelle des emplois',
        'Coaching de dirigeants',
        'Marque employeur et rétention'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Une approche chirurgicale de nos problématiques. Cabinet Performances a su restructurer notre pôle investissement avec une efficacité redoutable.",
      author: "Directeur Général",
      company: "Groupe Bancaire",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      quote: "L'humain est au cœur de leur méthode. La transformation culturelle menée sur 12 mois a drastiquement réduit notre turnover.",
      author: "DRH Groupe",
      company: "Leader BTP",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100",
      featured: true
    },
    {
      quote: "Un audit comptable et fiscal qui a permis de dégager des marges de manœuvre inespérées pour notre développement futur.",
      author: "Gérant",
      company: "Grande Pharmacie",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100"
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

      {/* Hero Section with Parallax */}
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
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
            alt="Strategy Meeting"
            className="w-100 h-100 object-fit-cover"
            style={{ opacity: 0.4, filter: 'grayscale(30%)' }}
          />
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ 
              background: 'linear-gradient(to right, rgba(10, 26, 47, 0.95), rgba(10, 26, 47, 0.8), rgba(10, 26, 47, 0.6))'
            }}
          />
        </motion.div>

        {/* Floating Particles */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0, pointerEvents: 'none' }}>
          <motion.div 
            className="position-absolute rounded-circle"
            style={{ 
              top: '25%',
              left: '25%',
              width: '8px',
              height: '8px',
              backgroundColor: '#D4AF37',
              opacity: 0.4
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="position-absolute rounded-circle"
            style={{ 
              bottom: '33%',
              right: '25%',
              width: '12px',
              height: '12px',
              backgroundColor: '#E0751A',
              opacity: 0.3
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div 
            className="position-absolute rounded-circle"
            style={{ 
              top: '50%',
              right: '40px',
              width: '256px',
              height: '256px',
              border: '1px solid rgba(212, 175, 55, 0.1)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div 
          className="position-relative text-center px-4"
          style={{ zIndex: 10, maxWidth: '900px', paddingTop: '80px' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              border: '1px solid rgba(212, 175, 55, 0.3)',
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <span className="text-uppercase fw-semibold" style={{ color: '#D4AF37', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
              Cabinet Performnces
            </span>
          </motion.div>

          <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: '1.1' }}>
            ASSISTANCES & <br />
            <span 
              style={{
                background: 'linear-gradient(to right, white, white, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              CONSEILS
            </span>
          </h1>

          <p className="lead text-white-50 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            Transformez votre organisation avec un accompagnement stratégique sur mesure, 
            conçu pour les leaders visionnaires.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <motion.a 
              href="#contact"
              className="btn btn-lg text-white fw-semibold d-inline-flex align-items-center justify-content-center gap-2 position-relative overflow-hidden"
              style={{ backgroundColor: '#E0751A', boxShadow: '0 10px 30px rgba(224, 117, 26, 0.2)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="position-relative">
                Prendre rendez-vous <ArrowRight size={16} className="ms-2" />
              </span>
            </motion.a>
            <a 
              href="#methodology"
              className="btn btn-lg fw-semibold"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)'
              }}
            >
              Demander un diagnostic
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="position-absolute"
          style={{ bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} color="white" />
        </motion.div>
      </section>

      {/* Pillars Section */}
      <section className="py-5 position-relative" style={{ backgroundColor: '#0A1A2F' }}>
        <div 
          className="position-absolute top-0 start-0 w-100"
          style={{ 
            height: '1px', 
            background: 'linear-gradient(to right, transparent, rgba(224, 117, 26, 0.3), transparent)' 
          }}
        />
        
        <div className="container py-5">
          <RevealOnScroll>
            <div className="text-center mb-5 text-white">
              <h2 className="display-6 fw-bold mb-3">Nos Piliers d'Intervention</h2>
              <div className="mx-auto rounded-pill" style={{ width: '64px', height: '4px', backgroundColor: '#E0751A' }} />
            </div>
          </RevealOnScroll>

          <div className="row g-4">
            {pillars.map((pillar, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <RevealOnScroll delay={index * 0.1}>
                  <motion.div 
                    className="card h-100 border"
                    whileHover={{ 
                      y: -8,
                      borderColor: 'rgba(224, 117, 26, 0.3)',
                      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)'
                    }}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(12px)',
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      cursor: 'default'
                    }}
                  >
                    <div className="card-body p-4">
                      <motion.div 
                        className="mb-4 d-inline-flex align-items-center justify-center rounded-circle"
                        style={{ 
                          width: '56px', 
                          height: '56px',
                          backgroundColor: 'rgba(224, 117, 26, 0.1)',
                          color: '#E0751A'
                        }}
                        whileHover={{ 
                          backgroundColor: '#E0751A', 
                          color: 'white', 
                          rotate: 15 
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {pillar.icon}
                      </motion.div>
                      <h5 className="card-title fw-semibold mb-3 text-white">
                        {pillar.title}
                      </h5>
                      <p className="card-text small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Timeline */}
      <section 
        id="methodology" 
        ref={timelineRef}
        className="py-5 position-relative" 
        style={{ backgroundColor: '#081526' }}
      >
        <div className="container py-5 position-relative">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <span className="text-uppercase fw-bold small" style={{ color: '#D4AF37', letterSpacing: '0.15em' }}>
                Notre Méthodologie
              </span>
              <h2 className="display-6 fw-bold text-white mt-2">Le Chemin vers l'Excellence</h2>
              </div>
          </RevealOnScroll>

          {/* Timeline Line */}
          <div 
            className="position-absolute d-none d-md-block"
            style={{
              left: '50%',
              top: '200px',
              bottom: '80px',
              width: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transform: 'translateX(-50%)'
            }}
          >
            <motion.div 
              className="position-absolute top-0 start-0 w-100"
              style={{
                background: 'linear-gradient(to bottom, #E0751A, #D4AF37)',
                height: `${scrollProgress}%`
              }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="row">
            {methodology.map((step, index) => {
              const stepProgress = ((index + 1) / methodology.length) * 100;
              const isActive = scrollProgress >= stepProgress - 10;

              return (
                <div key={index} className="col-12 mb-5">
                  <RevealOnScroll delay={index * 0.1}>
                    <div className={`row align-items-center ${step.alignment === 'left' ? 'flex-row-reverse' : ''}`}>
                      <div className="col-md-5">
                        <div className="position-relative">
                          <div 
                            className="position-absolute fw-bold"
                            style={{ 
                              fontSize: '3rem',
                              color: 'rgba(255, 255, 255, 0.05)',
                              top: '-20px',
                              [step.alignment === 'right' ? 'right' : 'left']: '0',
                              pointerEvents: 'none'
                            }}
                          >
                            {step.number}
                          </div>
                          <h5 className="fw-semibold text-white mb-2">{step.title}</h5>
                          <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div className="col-md-2 d-none d-md-flex justify-content-center my-4">
                        <motion.div 
                          className="rounded-circle border-2 d-flex align-items-center justify-content-center position-relative"
                          style={{
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#0A1A2F',
                            borderColor: '#E0751A',
                            borderStyle: 'solid'
                          }}
                          animate={{
                            backgroundColor: isActive ? '#E0751A' : '#0A1A2F'
                          }}
                        />
                      </div>

                      <div className="col-md-5 d-flex justify-content-center">
                        <div 
                          className="d-inline-flex align-items-center justify-content-center rounded"
                          style={{
                            width: '48px',
                            height: '48px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#D4AF37'
                          }}
                        >
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="py-5" style={{ backgroundColor: '#0A1A2F' }}>
        <div className="container py-5">
          {offers.map((offer, index) => (
            <div key={index} className={`row align-items-center g-5 ${index !== offers.length - 1 ? 'mb-5 pb-5' : ''}`}>
              <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                <RevealOnScroll>
                  <motion.div 
                    className="overflow-hidden rounded-4 position-relative"
                    style={{ aspectRatio: '4/3' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 transition-all"
                      style={{ backgroundColor: 'rgba(10, 26, 47, 0.2)', zIndex: 1 }}
                    />
                    <motion.img 
                      src={offer.image}
                      alt={offer.title}
                      className="w-100 h-100 object-fit-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1.5 }}
                    />
                  </motion.div>
                </RevealOnScroll>
              </div>

              <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                <RevealOnScroll delay={0.1}>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div style={{ color: '#E0751A' }}>
                      {offer.icon}
                    </div>
                    <h3 className="fs-3 fw-bold text-white mb-0">{offer.title}</h3>
                  </div>

                  <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    {offer.description}
                  </p>

                  <ul className="list-unstyled mb-4">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-start gap-3 mb-3 small text-white-50">
                        <CheckCircle size={20} className="flex-shrink-0" style={{ color: '#D4AF37' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>               
                </RevealOnScroll>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5" style={{ background: 'linear-gradient(to bottom, #0A1A2F, #081526)' }}>
        <div className="container py-5">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold text-white">La Confiance de nos Clients</h2>
            </div>
          </RevealOnScroll>

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <RevealOnScroll delay={index * 0.1}>
                  <motion.div 
                    className="card h-100 border position-relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      y: testimonial.featured ? 0 : -5,
                      borderColor: 'rgba(224, 117, 26, 0.3)'
                    }}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(12px)',
                      borderColor: testimonial.featured ? 'rgba(224, 117, 26, 0.3)' : 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      ...(testimonial.featured && { marginTop: '-16px' })
                    }}
                  >
                    <div className="position-absolute top-0 end-0 p-4">
                      <Quote size={40} style={{ color: 'rgba(224, 117, 26, 0.2)' }} />
                    </div>
                    
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center gap-3 mb-4">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-circle border"
                          style={{ 
                            width: '48px', 
                            height: '48px', 
                            borderColor: 'rgba(212, 175, 55, 0.5)',
                            objectFit: 'cover'
                          }}
                        />
                        <div>
                          <div className="text-white fw-medium">{testimonial.author}</div>
                          <div className="text-uppercase small fw-medium" style={{ color: '#E0751A', fontSize: '0.7rem' }}>
                            {testimonial.company}
                          </div>
                        </div>
                      </div>

                      <p className="fst-italic small mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {testimonial.quote}
                      </p>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: '#0A1A2F' }}>
        <motion.div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(to right, #0A1A2F, rgba(224, 117, 26, 0.2), #0A1A2F)',
            backgroundSize: '200% 200%'
          }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="container text-center position-relative py-5" style={{ zIndex: 10 }}>
          <RevealOnScroll>
            <h2 className="display-5 fw-bold text-white mb-4">
              Prêt à transformer votre <br />
              <span 
                style={{
                  background: 'linear-gradient(to right, #E0751A, #D4AF37)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                organisation ?
              </span>
            </h2>
            <p className="text-white-50 fs-5 mb-5">
              L'excellence opérationnelle n'attend pas. Discutons de vos enjeux.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <motion.a 
                href="#contact"
                className="btn btn-lg fw-bold text-white shadow-lg position-relative overflow-hidden"
                style={{ 
                  backgroundColor: '#E0751A', 
                  boxShadow: '0 20px 40px rgba(224, 117, 26, 0.3)' 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -4, 
                  boxShadow: '0 25px 50px rgba(224, 117, 26, 0.5)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contacter un consultant
              </motion.a>
              <a 
                href="#"
                className="btn btn-lg fw-semibold"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  backgroundColor: 'transparent',
                  backdropFilter: 'blur(10px)'
                }}
              >
                Télécharger la brochure
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer - Same as Homepage */}
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

export default AssistanceConseilsPage;