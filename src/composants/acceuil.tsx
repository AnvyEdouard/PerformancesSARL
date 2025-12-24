import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  GraduationCap, Users, Calculator, Briefcase, Presentation, 
  Handshake, FileBarChart, UserCheck, Quote, MapPin, Phone, 
  Mail, Award, CheckCircle, Menu, ArrowRight, Check, Linkedin, 
  Facebook, MessageCircle, TrendingUp, Shield, Package, Search,
  ClipboardCheck, BarChart3
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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

  // Logos partenaires - Vous devrez remplacer ces URLs par vos vraies images hébergées
  const partnerLogos = [
    { name: 'CADERAC', src: 'https://i.ibb.co/G4pSCqw0/Caderac-logo.png' },
    { name: 'GESTOCI', src: 'https://i.ibb.co/hF5QB17j/Gestoci-Logo.jpg' },
    { name: 'Hotel TIAMA', src: 'https://i.ibb.co/38JpNh8/Hotel-tiama-logo.png' },
    { name: 'SGS SICTA', src: 'https://i.ibb.co/zhBfSph5/logo-sgs.jpg' },
    { name: 'ABB', src: 'https://i.ibb.co/3mCRpjth/logo-abb.jpg' },
    { name: 'ANAC', src: 'https://i.ibb.co/yn3B13fN/logo-anac.jpg' },
    { name: 'BCH', src: 'https://i.ibb.co/whM5Fg9X/logo-bch-congo.jpg' },
    { name: 'BCRG', src: 'https://i.ibb.co/Y4TfJnPC/logo-bcrg.jpg' },
    { name: 'BRINKS', src: 'https://i.ibb.co/n8t6c2fw/logo-brinks.jpg' },
    { name: 'CASTELLI', src: 'https://i.ibb.co/Nn6T6X06/logo-castelli.jpg' },
    { name: 'CIE', src: 'https://i.ibb.co/PvK18N5F/logo-cie.jpg' },
    { name: 'Fonds Africain', src: 'https://i.ibb.co/ZzwfxFkG/logo-Fagace.png' },
    { name: 'G4S', src: 'https://i.ibb.co/PvqFY314/logo-g4s.jpg' },
    { name: 'CIG', src: 'https://i.ibb.co/3YcK3hvy/logo-gandour-2.jpg' },
    { name: 'Moov Africa', src: 'https://i.ibb.co/vvc4vN7F/logo-moov.png' },
    { name: 'SICTA', src: 'https://i.ibb.co/RTD5N2kV/logo-sicta-450.jpg' },
    { name: 'SONAR', src: 'https://i.ibb.co/jjm9wLK/LOGO-SONAR-IARD.jpg' },
    { name: 'SOTRA', src: 'https://i.ibb.co/vvQDq9qq/Sotra-logo.png' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const assistanceServices = [
    {
      title: 'Assistance comptable & expertise financière',
    },
    {
      title: 'Gestion Administrative du Personel par Deleguation (GAPD)',
    },
    {
      title: 'Conseil organisationnel & Assistance opérationnelle',
    }
  ];

  const auditServices = [
    {
      title: 'Audits et conformité réglementaire',
    },
    {
      title: 'Conseil stratégique et Accompagnement opérationnel',
    },
    {
      title: 'Recherche de financement',
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
            <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
              <div className="bg-dark text-white p-2 rounded" style={{ backgroundColor: '#0A1A2F' }}>
                <span className="fw-bold fs-5">CP</span>
              </div>
              <div className="d-flex flex-column lh-1">
                <span className="fw-bold" style={{ fontSize: '1.1rem', color: '#0A1A2F' }}>CABINET</span>
                <span className="text-uppercase" style={{ fontSize: '0.7rem', color: '#E0751A', letterSpacing: '2px' }}>Performances</span>
              </div>
            </Link>

            <button 
              className="navbar-toggler border-0" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>

            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto gap-2">
                <li className="nav-item">
                  <Link to="/" className="nav-link fw-medium" style={{ fontSize: '0.8rem' }}>
                    ACCUEIL
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/formations" className="nav-link fw-medium" style={{ fontSize: '0.8rem' }}>
                    FORMATIONS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/assistances-conseils" className="nav-link fw-medium" style={{ fontSize: '0.8rem' }}>
                    ASSISTANCES & CONSEILS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/etudes-audits" className="nav-link fw-medium" style={{ fontSize: '0.8rem' }}>
                    ÉTUDES & AUDITS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/recrutements" className="nav-link fw-medium" style={{ fontSize: '0.8rem' }}>
                    RECRUTEMENTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/a-propos" className="nav-link fw-medium" style={{ fontSize: '0.8rem' }}>
                    À PROPOS
                  </Link>
                </li>
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
      <section className="position-relative d-flex align-items-center" style={{ height: '100vh', minHeight: '600px', marginTop: '80px' }}>
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
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(10, 26, 47, 0.7)', zIndex: 2 }} />
        
        <div className="container position-relative" style={{ zIndex: 10 }}>       
          <motion.div 
            className="row"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="col-12 text-white position-relative">
              {/* Logos/Agréments en haut à droite */}
              <div className="d-inline-flex align-items-center gap-2 mb-4 p-2 rounded-3 position-absolute top-0 end-0" style={{ border: '1px solid #E0751A', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <Award size={20} style={{ color: '#E0751A' }} />
                <span className="small fw-medium">Agréé FDFP  depuis 2002</span>
              </div>

              {/* Titre */}
              <h1 className="display-5 fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
                Le partenaire qu'il vous faut pour votre
                <br />
                <span style={{ color: '#E0751A', fontSize: '1.2em' }}>PERFORMANCE</span><span style={{ color: '#E0751A' }}> !</span>
              </h1>

              {/* Description */}
              <p className="mb-4 text-white-75" style={{ fontSize: '1rem', maxWidth: '700px' }}>
                PERFORMANCES SARL est un cabinet de Formation, d'Assistances & Conseils, d'Etudes & Audits et de Recrutements dédié à la performance durable des entreprises et administrations en Afrique.
              </p>

              {/* KPI */}
              <div className="d-flex gap-4 mb-4 flex-wrap">
                <div>
                  <span className="display-6 fw-bold" style={{ color: '#E0751A' }}>23+</span>
                  <p className="mb-0 small">Années d'expérience</p>
                </div>
                <div>
                  <span className="display-6 fw-bold" style={{ color: '#E0751A' }}>2000+</span>
                  <p className="mb-0 small">Formations majeures</p>
                </div>
                <div>
                  <span className="display-6 fw-bold" style={{ color: '#E0751A' }}>50000+</span>
                  <p className="mb-0 small">Participants</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="d-flex gap-3 flex-wrap">
                <motion.a 
                  href="#message-directeur" 
                  className="btn btn-lg rounded-pill text-white fw-medium px-4" 
                  style={{ backgroundColor: '#E0751A' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Message du directeur
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="btn btn-lg btn-outline-light rounded-pill fw-medium px-4"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contactez-nous
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Indicateurs de slide */}
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

      {/* Section À Propos */}
      <section id="a-propos" className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-6">
              <RevealOnScroll>
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#0A1A2F' }}>À Propos de Cabinet Performances</h2>
                <p className="text-muted mb-4">
                  Depuis plus de 23 ans, Cabinet Performances accompagne les entreprises et administrations dans leur développement et leur transformation. Notre mission est de renforcer les compétences, optimiser les organisations et favoriser la performance durable.
                </p>
                <p className="text-muted mb-4">
                  Nos valeurs : Excellence, Innovation, Partenariat et Engagement. Nous croyons en une approche personnalisée qui place vos besoins au cœur de nos solutions.
                </p>
              </RevealOnScroll>
            </div>
            <div className="col-lg-6">
              <RevealOnScroll>
                <div id="message-directeur" className="bg-light rounded-4 p-5 shadow-sm">
                  <div className="d-flex align-items-start gap-4 mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Directeur Général" 
                      className="rounded-circle"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: '#0A1A2F' }}>Message du Directeur</h5>
                      <p className="text-muted small mb-0">Jean-Marc Koffi, Directeur Général</p>
                    </div>
                  </div>
                  <p className="text-muted fst-italic">
                    "Nous sommes ravis de vous présenter notre nouveau visage ! Ce revamp marque une étape importante dans notre évolution. Nous restons plus que jamais dédiés à votre succès avec des services enrichis et une approche modernisée. Ensemble, construisons la performance de demain."
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Carrousel de logos partenaires */}
          <RevealOnScroll>
            <p className="text-center text-uppercase text-muted small mb-4" style={{ letterSpacing: '2px' }}>Ils nous font confiance</p>
            <div className="overflow-hidden position-relative" style={{ height: '100px' }}>
              <motion.div 
                className="d-flex align-items-center gap-5 position-absolute"
                animate={{ x: [0, -2000] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ whiteSpace: 'nowrap' }}
              >
                {[...Array(3)].map((_, repeatIndex) => (
                  <React.Fragment key={repeatIndex}>
                    {partnerLogos.map((logo, index) => (
                      <div 
                        key={`${repeatIndex}-${index}`}
                        className="d-flex align-items-center justify-content-center"
                        style={{ 
                          minWidth: '150px',
                          height: '80px',
                          padding: '10px'
                        }}
                      >
                        <img 
                          src={logo.src} 
                          alt={logo.name}
                          style={{ 
                            maxWidth: '140px',
                            maxHeight: '70px',
                            objectFit: 'contain',
                            filter: 'grayscale(30%)',
                            opacity: 0.8
                          }}
                          onError={(e) => {
                            // Fallback en cas d'erreur de chargement
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

     {/* Nos Domaines - 4 Carrés */}
<section className="py-5" style={{ backgroundColor: '#F8F9FA' }}>
  <div className="container py-5">
    <RevealOnScroll>
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold mb-3" style={{ color: '#0A1A2F' }}>Nos Domaines d'Expertise</h2>
        <p className="text-muted">Un accompagnement complet pour la performance de votre organisation</p>
      </div>
    </RevealOnScroll>

    <div className="row g-4 d-flex align-items-stretch">
      {[
        { 
          icon: <GraduationCap size={40} />, 
          title: 'Formations', 
          desc: "Formation diplômantes, qualifiantes et certificats axée sur la pratique et l'innovation",
          link: '/formations' 
        },
        { 
          icon: <Handshake size={40} />, 
          title: 'Assistances & Conseils', 
          desc: "Bénéficiez d'une expertise stratégique pour débloquer votre potentiel",
          link: '/assistances-conseils' 
        },
        { 
          icon: <FileBarChart size={40} />, 
          title: 'Études & Audits', 
          desc: "Nos études de faisabilité et nos audits rigoureux vous fournissent une base solide pour la planification et l'investissement",
          link: '/etudes-audits' 
        },
        { 
          icon: <Users size={40} />, 
          title: 'Recrutement', 
          desc: 'À la recherche de votre nouveau/nouvelle collaborateur/collaboratrice ? Faites-nous confiance !',
          link: '/recrutements' 
        }
      ].map((domaine, index) => (
        <div key={index} className="col-md-6 col-lg-3 d-flex">
          <RevealOnScroll>
            {/* On enveloppe la motion.div dans une div qui gère la hauteur pour contourner la restriction de RevealOnScroll */}
            <div className="h-100 d-flex flex-column">
              <motion.div 
                whileHover={{ y: -10 }}
                className="card border-0 shadow-sm bg-white p-4 h-100 d-flex flex-column" 
                style={{ borderRadius: '15px' }}
              >
                {/* 1. Icône */}
                <div className="text-center mb-4">
                  <div className="d-inline-flex p-4 rounded-circle" style={{ backgroundColor: 'rgba(224, 117, 26, 0.1)' }}>
                    {React.cloneElement(domaine.icon, { style: { color: '#E0751A' } })}
                  </div>
                </div>

                {/* 2. Titre */}
                <h5 className="fw-bold text-center mb-3" style={{ color: '#0A1A2F' }}>
                  {domaine.title}
                </h5>

                {/* 3. Descriptif */}
                <p className="text-muted text-center small mb-4">
                  {domaine.desc}
                </p>

                {/* 4. CTA */}
                <div className="mt-auto text-center">
                  <a 
                    href={domaine.link} 
                    className="btn btn-sm px-4 py-2"
                    style={{ 
                      backgroundColor: '#E0751A', 
                      color: 'white',
                      borderRadius: '25px',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}
                  >
                    En savoir plus
                  </a>
                </div>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>
      ))}
    </div>
  </div>
</section>

   {/* Formations - 3 Blocs */}
<section id="formations" className="py-5 bg-white">
  <div className="container py-5">
    <RevealOnScroll>
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold mb-3" style={{ color: '#0A1A2F' }}>Nos Formations</h2>
        <p className="text-muted">Nous ne faisons pas que former, nous créons des experts.</p>
      </div>
    </RevealOnScroll>

    <div className="row g-4 d-flex align-items-stretch">
      {[
        { 
          title: 'Formations Qualifiantes', 
          description: 'Développez vos compétences et obtenez des certifications reconnues.',
          icon: <CheckCircle size={32} />
        },
        { 
          title: 'Formations Diplômantes', 
          description: 'Nous accompagnons étudiants et jeunes actifs à développer des compétences pratiques',
          icon: <GraduationCap size={32} />
        },
        { 
          title: 'Certificats', 
          description: 'Apprenez un métier rapidement et renforcez votre employabilité.',
          icon: <Award size={32} />
        }
      ].map((formation, index) => (
        <div key={index} className="col-lg-4 d-flex">
          {/* On utilise une div wrapper à l'intérieur de RevealOnScroll pour forcer la hauteur sans prop className */}
          <RevealOnScroll>
            <div className="h-100 d-flex flex-column">
              <motion.div 
                className="card h-100 border-0 shadow-sm d-flex flex-column"
                style={{ backgroundColor: '#FAFAFA', borderRadius: '15px' }}
                whileHover={{ y: -10 }}
              >
                <div className="card-body p-5 text-center d-flex flex-column">
                  {/* Icône */}
                  <div className="mb-4 d-inline-flex p-3 rounded-circle mx-auto" style={{ backgroundColor: 'rgba(224, 117, 26, 0.1)' }}>
                    {React.cloneElement(formation.icon, { style: { color: '#E0751A' } })}
                  </div>

                  {/* Titre */}
                  <h5 className="fw-bold mb-3" style={{ color: '#0A1A2F' }}>{formation.title}</h5>
                  
                  {/* Description */}
                  <p className="text-muted mb-4">{formation.description}</p>
                  
                  {/* CTA - mt-auto assure l'alignement des boutons en bas */}
                  <div className="mt-auto">
                    <a 
                      href="/formations" 
                      className="btn btn-outline-dark rounded-pill fw-medium px-4"
                    >
                      Voir les formations
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Assistances & Conseils Section - Optimisée */}
      <section id="assistances" className="py-5" style={{ backgroundColor: '#F8F9FA', minHeight: '100vh' }}>
        <div className="container py-5 d-flex align-items-center" style={{ minHeight: 'calc(100vh - 100px)' }}>
          <div className="row align-items-center g-5 w-100">
            <div className="col-lg-6">
              <RevealOnScroll>
                <div className="bg-white rounded-4 p-4 shadow-sm">
                  <div className="d-inline-flex p-3 rounded-circle mb-3" style={{ backgroundColor: 'rgba(224, 117, 26, 0.1)' }}>
                    <Handshake size={28} style={{ color: '#E0751A' }} />
                  </div>
                  <h2 className="h3 fw-bold mb-3" style={{ color: '#0A1A2F' }}>Assistances & Conseils</h2>
                  <p className="mb-4 text-muted">
                    Nous assurons la conformité et l'éfficacité de vos processus internes. 
                  </p>
                  
                  <div className="mb-4">
                    {assistanceServices.map((service, index) => (
                      <div key={index} className="d-flex gap-3 mb-3 p-3 rounded" style={{ backgroundColor: 'rgba(224, 117, 26, 0.05)' }}>
                        <Check size={18} className="flex-shrink-0 mt-1" style={{ color: '#E0751A' }} />
                        <div>
                          <h6 className="fw-bold mb-1 small" style={{ color: '#0A1A2F' }}>{service.title}</h6>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="/assistances-conseils" 
                    className="btn rounded-pill text-white fw-medium"
                    style={{ backgroundColor: '#E0751A' }}
                  >
                    Découvrir nos services
                  </a>
                </div>
              </RevealOnScroll>
            </div>

            <div className="col-lg-6">
              <RevealOnScroll>
                <motion.div 
                  className="rounded-4 overflow-hidden shadow-lg" 
                  style={{ height: '400px', backgroundColor: 'rgba(224, 117, 26, 0.1)' }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src="https://agb-conseils.com/website/images/conseil-1.jpg" 
                    alt="Assistance et Conseil" 
                    className="w-100 h-100 object-fit-cover"
                  />                       
                </motion.div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Études & Audits Section - Optimisée */}
      <section id="audits" className="py-5 bg-white" style={{ minHeight: '100vh' }}>
        <div className="container py-5 d-flex align-items-center" style={{ minHeight: 'calc(100vh - 100px)' }}>
          <div className="row align-items-center g-5 w-100">
            <div className="col-lg-6">
              <RevealOnScroll>
                <motion.div 
                  className="rounded-4 overflow-hidden shadow-lg" 
                  style={{ height: '400px', backgroundColor: 'rgba(10, 26, 47, 0.05)' }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img  
                    src="https://www.made-in-sml.fr/wp-content/uploads/2024/02/les-metiers-de-l-audit-730x402.jpg"  
                    alt="Études et Audits"  
                    className="w-100 h-100 object-fit-cover"
                  />
                </motion.div>
              </RevealOnScroll>
            </div>

            <div className="col-lg-6">
              <RevealOnScroll>
                <div className="bg-white rounded-4 p-4">
                  <div className="d-inline-flex p-3 rounded-circle mb-3" style={{ backgroundColor: 'rgba(10, 26, 47, 0.1)' }}>
                    <FileBarChart size={28} style={{ color: '#0A1A2F' }} />
                  </div>
                  <h2 className="h3 fw-bold mb-3" style={{ color: '#0A1A2F' }}>Études & Audits</h2>
                  <p className="mb-4 text-muted">
                    Avant d'agir nous analysons. Zero risque, Max confiance.
                  </p>
                  
                  <div className="mb-4">
                    {auditServices.map((service, index) => (
                      <div key={index} className="d-flex gap-3 mb-3 p-3 rounded" style={{ backgroundColor: 'rgba(10, 26, 47, 0.03)' }}>
                        <FileBarChart size={18} className="flex-shrink-0 mt-1" style={{ color: '#0A1A2F' }} />
                        <div>
                          <h6 className="fw-bold mb-1 small" style={{ color: '#0A1A2F' }}>{service.title}</h6>

                        </div>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="/etudes-audits" 
                    className="btn rounded-pill text-white fw-medium"
                    style={{ backgroundColor: '#E0751A' }}
                  >
                    Découvrir nos services
                  </a>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions de Recrutement Section - 3 Blocs */}
<section id="recrutement" className="py-4" style={{ backgroundColor: '#F8F9FA' }}>
  <div className="container py-2"> {/* Padding réduit de py-5 à py-2 */}
    <RevealOnScroll>
      <div className="text-center mb-4">
        <h2 className="display-6 fw-bold mb-2" style={{ color: '#0A1A2F' }}>Recrutements</h2>
        <p className="text-muted small">Trouvez les meilleurs talents pour votre équipe !</p>
      </div>
    </RevealOnScroll>

    <div className="row g-3 mb-4 d-flex align-items-stretch"> {/* g-3 réduit l'espace entre les cartes */}
      {[
        {
          icon: <Search size={32} />, // Icône plus petite (32 au lieu de 40)
          title: 'Chasse de têtes',
          description: 'Nous identifions et approchons les meilleurs talents du marché grâce à une recherche ciblée et confidentielle.'
        },
        {
          icon: <Users size={32} />,
          title: 'Recrutements',
          description: 'Des profils qualifiés, sélectionnés avec précision pour accélérer votre performance.'
        },
        {
          icon: <ClipboardCheck size={32} />,
          title: "Offres d'emplois",
          description: "Consultez nos opportunités et découvrez nos dernières offres d\'emplois."
        }
      ].map((solution, index) => (
        <div key={index} className="col-lg-4 d-flex">
          <RevealOnScroll>
            <div className="h-100 d-flex flex-column">
              <motion.div 
                className="card h-100 border-0 shadow-sm bg-white text-center d-flex flex-column"
                whileHover={{ y: -5 }} // Effet de survol réduit
                style={{ borderRadius: '12px' }}
              >
                <div className="card-body p-4 d-flex flex-column"> {/* Padding card réduit de p-5 à p-4 */}
                  <div className="mb-3 d-inline-flex p-3 rounded-circle mx-auto" style={{ backgroundColor: 'rgba(224, 117, 26, 0.1)' }}>
                    {React.cloneElement(solution.icon, { style: { color: '#E0751A' } })}
                  </div>
                  <h6 className="fw-bold mb-2" style={{ color: '#0A1A2F' }}>{solution.title}</h6>
                  <p className="card-text text-muted small mb-0" style={{ lineHeight: '1.4' }}>
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>
      ))}
    </div>

    <RevealOnScroll>
      <div className="text-center mt-2">
        <a 
          href="/recrutements" 
          className="btn btn-md rounded-pill text-white fw-medium px-5"
          style={{ backgroundColor: '#E0751A', fontSize: '0.9rem' }}
        >
          Découvrez nos offres
        </a>
      </div>
    </RevealOnScroll>
  </div>
</section>

      {/* CTA Section - Contactez-nous */}
      <section className="py-5" style={{ backgroundColor: 'rgba(224, 117, 26, 0.05)' }}>
        <div className="container py-5">
          <RevealOnScroll>
            <div className="text-center">
              <h2 className="display-5 fw-bold mb-4" style={{ color: '#0A1A2F' }}>
                Prêt à faire évoluez votre organisation ?
              </h2>
              <p className="lead text-muted mb-5">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins en formation, conseil ou recrutement.
              </p>
              <a 
                href="#contact" 
                className="btn btn-lg rounded-pill text-white fw-medium px-5 py-3"
                style={{ backgroundColor: '#E0751A', fontSize: '1.1rem' }}
              >
                Contactez-nous maintenant
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer avec formulaire */}
      <footer id="contact" className="py-5 text-white" style={{ backgroundColor: '#0A1A2F' }}>
        <div className="container py-4">
          <div className="row g-5 mb-5">
            {/* Colonne Gauche - Formulaire de contact */}
            <div className="col-lg-6">
              <h4 className="fw-bold mb-4">Contactez-nous</h4>
              <form className="bg-white bg-opacity-10 p-4 rounded-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      className="form-control bg-white bg-opacity-10 border-0 text-white" 
                      placeholder="Nom *"
                      style={{ backdropFilter: 'blur(10px)' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      className="form-control bg-white bg-opacity-10 border-0 text-white" 
                      placeholder="Prénom *"
                      style={{ backdropFilter: 'blur(10px)' }}
                    />
                  </div>
                  <div className="col-12">
                    <input 
                      type="email" 
                      className="form-control bg-white bg-opacity-10 border-0 text-white" 
                      placeholder="Email *"
                      style={{ backdropFilter: 'blur(10px)' }}
                    />
                  </div>
                  <div className="col-12">
                    <input 
                      type="tel" 
                      className="form-control bg-white bg-opacity-10 border-0 text-white" 
                      placeholder="Entreprise *"
                      style={{ backdropFilter: 'blur(10px)' }}
                    />
                  </div>
                  <div className="col-12">
                    <select 
                      className="form-select bg-white bg-opacity-10 border-0 text-white" 
                      style={{ backdropFilter: 'blur(10px)' }}
                    >
                      <option>Sujet de votre demande *</option>
                      <option>Formation</option>
                      <option>Assistance & Conseil</option>
                      <option>Étude & Audit</option>
                      <option>Recrutement</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea 
                      className="form-control bg-white bg-opacity-10 border-0 text-white" 
                      rows={4} 
                      placeholder="Votre message *"
                      style={{ backdropFilter: 'blur(10px)' }}
                    />
                  </div>
                  <div className="col-12">
                    <button 
                      type="submit" 
                      className="btn btn-lg rounded-pill text-white fw-medium w-100"
                      style={{ backgroundColor: '#E0751A' }}
                    >
                      Envoyer le message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Colonne Droite - Informations de contact */}
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <div className="bg-white text-dark p-2 rounded">
                      <span className="fw-bold">CP</span>
                    </div>
                    <span className="fw-bold">CABINET PERFORMANCES</span>
                  </div>
                  <p className="text-white-50 mb-4">
                    Partenaire de confiance pour le développement des compétences et la performance organisationnelle en Afrique de l'Ouest.
                  </p>
                </div>

                <div className="col-12">
                  <h5 className="fw-semibold mb-4">Nos coordonnées</h5>
                  <ul className="list-unstyled text-white-50">
                    <li className="mb-3 d-flex gap-3 align-items-start">
                      <MapPin size={24} style={{ color: '#E0751A' }} className="flex-shrink-0" />
                      <div>
                        <p className="mb-0 fw-medium text-white">Adresse</p>
                        <span>Cocody Cité Des Arts, Abidjan, Côte d'Ivoire</span>
                      </div>
                    </li>
                    <li className="mb-3 d-flex gap-3 align-items-start">
                      <Phone size={24} style={{ color: '#E0751A' }} className="flex-shrink-0" />
                      <div>
                        <p className="mb-0 fw-medium text-white">Téléphone</p>
                        <span>+225 07 07 00 00 00</span>
                      </div>
                    </li>
                    <li className="mb-3 d-flex gap-3 align-items-start">
                      <Mail size={24} style={{ color: '#E0751A' }} className="flex-shrink-0" />
                      <div>
                        <p className="mb-0 fw-medium text-white">Email</p>
                        <span>contact@cabinet-performances.com</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="col-12">
                  <h5 className="fw-semibold mb-3">Suivez-nous</h5>
                  <div className="d-flex gap-3">
                    <a href="#" className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#2F475E', width: '40px', height: '40px' }}>
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#2F475E', width: '40px', height: '40px' }}>
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#2F475E', width: '40px', height: '40px' }}>
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>

                <div className="col-12">
                  <h5 className="fw-semibold mb-3">Accréditations</h5>
                  <div className="d-flex gap-3">
                    <div className="p-3 rounded border border-secondary flex-fill" style={{ backgroundColor: 'rgba(47, 71, 94, 0.3)' }}>
                      <div className="d-flex align-items-center gap-2">
                        <Award size={24} style={{ color: '#E0751A' }} />
                        <div>
                          <p className="mb-0 small text-uppercase text-white-50" style={{ fontSize: '0.7rem' }}>Agrément</p>
                          <p className="mb-0 fw-bold small">FDFP</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 rounded border border-secondary flex-fill" style={{ backgroundColor: 'rgba(47, 71, 94, 0.3)' }}>
                      <div className="d-flex align-items-center gap-2">
                        <CheckCircle size={24} style={{ color: '#E0751A' }} />
                        <div>
                          <p className="mb-0 small text-uppercase text-white-50" style={{ fontSize: '0.7rem' }}>Certificat</p>
                          <p className="mb-0 fw-bold small">CDMP</p>
                        </div>
                      </div>
                    </div>
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

export default HomePage;