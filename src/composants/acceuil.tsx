import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  GraduationCap, Users, Calculator, Briefcase, Presentation, 
  Handshake, FileBarChart, UserCheck, Quote, MapPin, Phone, 
  Mail, Award, CheckCircle, Menu, ArrowRight, Check, Linkedin, 
  Facebook, MessageCircle
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const RevealOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImages = [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const domains = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Formations Professionelles',
      description: 'Développement des compétences et renforcement des capacités pour vos équipes.'
    },
    {
      icon: <Users size={24} />,
      title: 'Ressources Humaines',
      description: 'Gestion prévisionnelle, administration du personnel et conformité légale.'
    },
    {
      icon: <Calculator size={24} />,
      title: 'Comptabilité & Gestion',
      description: 'Tenue comptable, états financiers et contrôle de gestion rigoureux.'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Recrutement',
      description: 'Chasse de tête et placement de cadres supérieurs et opérationnels.'
    }
  ];

  const services = [
    {
      icon: <Presentation size={20} />,
      title: 'Formations Professionnelles',
      description: 'Des programmes sur mesure adaptés aux besoins spécifiques des entreprises et administrations. Nous utilisons des méthodes pédagogiques actives pour garantir la montée en compétence de vos collaborateurs.',
      features: ['Management & Leadership', 'Techniques de vente', 'Bureautique & Digital'],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      imageRight: false
    },
    {
      icon: <Handshake size={20} />,
      title: 'Assistances & Conseils',
      description: 'Accompagnement stratégique et opérationnel pour améliorer la performance globale et l\'organisation interne de votre structure. Nous agissons comme des partenaires de votre croissance.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      imageRight: true
    },
    {
      icon: <FileBarChart size={20} />,
      title: 'Études & Audits',
      description: 'Diagnostics approfondis, audits organisationnels et audits comptables pour sécuriser vos processus et garantir la fiabilité de vos informations financières.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      imageRight: false
    },
    {
      icon: <UserCheck size={20} />,
      title: 'Recrutements & Placements',
      description: 'Sourcing rigoureux, sélection, tests psychotechniques, entretiens et placement de profils qualifiés. Nous trouvons les talents qui partagent vos valeurs.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      imageRight: true
    }
  ];

  const team = [
    { name: 'Jean-Marc Koffi', role: 'Directeur Général', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'Aminata Diallo', role: 'Responsable Formation', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'Stéphane Kouassi', role: 'Expert Audit', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'Sarah N\'Diaye', role: 'Consultante RH', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
  ];

  const testimonials = [
    {
      quote: "Le Cabinet Performances a su identifier nos besoins en formation avec une précision remarquable. Nos équipes sont plus performantes.",
      author: "Directeur Administratif",
      company: "Grande Pharmacie Abidjan",
      initials: "DA"
    },
    {
      quote: "Un accompagnement comptable rigoureux qui nous a permis de structurer notre croissance. Je recommande vivement leurs services.",
      author: "Directeur Général",
      company: "PME Agroalimentaire",
      initials: "DG"
    },
    {
      quote: "Grâce à leur service de recrutement, nous avons trouvé notre Directeur Technique en un temps record. Professionnalisme exemplaire.",
      author: "Responsable RH",
      company: "Groupe BTP",
      initials: "RRH"
    }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', color: '#2F475E', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
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

      {/* Hero Section */}
      <section className="position-relative d-flex align-items-center justify-content-center" style={{ height: '100vh', minHeight: '600px', marginTop: '80px' }}>
        {heroImages.map((img, index) => (
          <motion.div
            key={index}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: index === currentSlide ? 1 : 0
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(10, 26, 47, 0.8)', zIndex: 2 }} />

        <motion.div 
          className="position-relative text-center text-white px-4"
          style={{ zIndex: 10, maxWidth: '900px' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="badge rounded-pill mb-4" style={{ backgroundColor: 'rgba(224, 117, 26, 0.2)', border: '1px solid #E0751A', color: '#E0751A' }}>
            Excellence en Afrique de l'Ouest
          </span>
          <h1 className="display-4 fw-bold mb-4">
            Cabinet Performances — Expertise, Formation & Ressources Humaines
          </h1>
          <p className="lead mb-5 text-white-50">
            Nous accompagnons entreprises, organisations et administrations avec des solutions adaptées au contexte africain pour maximiser votre potentiel.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href="#contact" className="btn btn-lg rounded-pill text-white" style={{ backgroundColor: '#E0751A' }}>
              Contactez-nous
            </a>
            <a href="#services" className="btn btn-lg btn-outline-light rounded-pill">
              Demander un devis
            </a>
          </div>
        </motion.div>

        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-2" style={{ zIndex: 10 }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-circle bg-white"
              style={{
                width: '8px',
                height: '8px',
                opacity: i === currentSlide ? 1 : 0.4,
                transition: 'opacity 0.3s'
              }}
            />
          ))}
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0A1A2F' }}>Nos domaines d'intervention</h2>
              <div className="mx-auto rounded-pill" style={{ width: '80px', height: '4px', backgroundColor: '#E0751A' }} />
            </div>
          </RevealOnScroll>

          <div className="row g-4">
            {domains.map((domain, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <RevealOnScroll>
                  <motion.div 
                    className="card h-100 border-0 shadow-sm"
                    whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    style={{ backgroundColor: '#FAFAFA' }}
                  >
                    <div className="card-body p-4">
                      <div className="mb-4 text-white rounded d-inline-flex p-3" style={{ backgroundColor: '#0A1A2F' }}>
                        {domain.icon}
                      </div>
                      <h5 className="card-title fw-bold mb-3" style={{ color: '#0A1A2F' }}>{domain.title}</h5>
                      <p className="card-text text-muted small">{domain.description}</p>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5" style={{ backgroundColor: '#F2EDE7' }}>
        <div className="container py-5">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <span className="text-uppercase fw-medium small" style={{ color: '#E0751A', letterSpacing: '2px' }}>Expertise</span>
              <h2 className="display-5 fw-bold mt-2" style={{ color: '#0A1A2F' }}>Découvrez nos services</h2>
            </div>
          </RevealOnScroll>

          {services.map((service, index) => (
            <RevealOnScroll key={index}>
              <div className={`row align-items-center g-5 ${index !== services.length - 1 ? 'mb-5 pb-5' : ''}`}>
                <div className={`col-lg-6 ${service.imageRight ? 'order-lg-2' : ''}`}>
                  <motion.div 
                    className="rounded-4 overflow-hidden shadow-lg"
                    style={{ height: '450px' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img src={service.image} alt={service.title} className="w-100 h-100 object-fit-cover" />
                  </motion.div>
                </div>
                <div className={`col-lg-6 ${service.imageRight ? 'order-lg-1' : ''}`}>
                  <div className="bg-white rounded-circle d-inline-flex p-3 mb-4 shadow-sm" style={{ color: '#E0751A' }}>
                    {service.icon}
                  </div>
                  <h3 className="display-6 fw-bold mb-4" style={{ color: '#0A1A2F' }}>{service.title}</h3>
                  <p className="lead mb-4" style={{ color: '#2F475E' }}>{service.description}</p>
                  {service.features && (
                    <ul className="list-unstyled mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-center gap-2 mb-2">
                          <Check size={16} style={{ color: '#E0751A' }} />
                          <span className="small">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a href="#" className="text-decoration-none fw-semibold d-inline-flex align-items-center gap-2" style={{ color: '#E0751A' }}>
                    En savoir plus <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-5 bg-white">
        <div className="container py-5">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0A1A2F' }}>Une équipe expérimentée</h2>
              <p className="text-muted">Des consultants seniors et experts métiers dédiés à votre réussite.</p>
            </div>
          </RevealOnScroll>

          <div className="row g-4">
            {team.map((member, index) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <RevealOnScroll>
                  <motion.div whileHover={{ y: -10 }}>
                    <div className="rounded-3 overflow-hidden mb-3" style={{ aspectRatio: '4/5' }}>
                      <motion.img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-100 h-100 object-fit-cover"
                        style={{ filter: 'grayscale(100%)' }}
                        whileHover={{ filter: 'grayscale(0%)', scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <h5 className="fw-bold mb-1" style={{ color: '#0A1A2F' }}>{member.name}</h5>
                    <p className="small fw-medium" style={{ color: '#E0751A' }}>{member.role}</p>
                  </motion.div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container py-5">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold" style={{ color: '#0A1A2F' }}>Ils nous font confiance</h2>
            </div>
          </RevealOnScroll>

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4">
                <RevealOnScroll>
                  <div className="card h-100 border-0 shadow-sm bg-white position-relative p-4">
                    <Quote size={32} className="position-absolute top-0 end-0 m-4 opacity-25" style={{ color: '#E0751A' }} />
                    <p className="fst-italic text-muted mb-4">{testimonial.quote}</p>
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: '40px', height: '40px', fontSize: '0.75rem' }}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="mb-0 fw-bold small" style={{ color: '#0A1A2F' }}>{testimonial.author}</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '0.75rem' }}>{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-5 bg-white border-top">
        <div className="container">
          <p className="text-center text-uppercase text-muted small mb-4" style={{ letterSpacing: '2px' }}>Ils collaborent avec nous</p>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
            <span className="fw-bold fs-5" style={{ color: '#0A1A2F' }}>orange</span>
            <span className="fw-bold fs-5 fst-italic" style={{ color: '#0A1A2F' }}>MTN</span>
            <span className="fw-bold fs-5" style={{ color: '#0A1A2F' }}>PharmaGroup</span>
            <span className="fw-bold fs-5" style={{ color: '#0A1A2F' }}>SOCIÉTÉ GÉNÉRALE</span>
            <span className="fw-bold fs-5" style={{ color: '#0A1A2F' }}>CIE</span>
          </div>
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
            <p className="mb-0 small text-white-50">© 2023 Cabinet Performances. Tous droits réservés. Mentions Légales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;