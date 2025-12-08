import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Users, BarChart3, Monitor, Briefcase, Award, Target, Map, 
  FileCheck, Flag, Globe, Download, Quote, Menu, ArrowRight,
  MapPin, Phone, Mail, CheckCircle, Linkedin, Facebook, MessageCircle
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const RevealOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

const FormationsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const domains = [
    {
      icon: <Users size={28} />,
      title: 'Ressources Humaines',
      description: 'Gestion des talents, administration du personnel, droit social et GPEC.'
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Comptabilité & Finance',
      description: 'Normes SYSCOHADA, fiscalité d\'entreprise, audit et contrôle de gestion.'
    },
    {
      icon: <Monitor size={28} />,
      title: 'Bureautique & IT',
      description: 'Maîtrise d\'Excel avancé, Power BI, sécurité informatique et outils digitaux.'
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Management & Leadership',
      description: 'Leadership transformationnel, gestion de projet, communication et entrepreneuriat.'
    }
  ];

  const programs = [
    {
      image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      badge: 'PRATIQUE',
      badgeColor: '#D4AF37',
      title: 'Excel Avancé pour Financiers',
      description: 'Maîtrisez les tableaux croisés dynamiques, les macros et l\'analyse de données financières complexes.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      badge: 'CERTIFIANT',
      badgeColor: '#0B1120',
      title: 'Manager une équipe performante',
      description: 'Techniques de coaching, délégation efficace et gestion des conflits en milieu professionnel.'
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      badge: 'RÉGLEMENTAIRE',
      badgeColor: '#D4AF37',
      title: 'Fiscalité des entreprises (2024)',
      description: 'Mise à jour sur la loi de finances, déclarations fiscales et optimisation légale.'
    }
  ];

  const advantages = [
    {
      icon: <Award size={20} />,
      title: 'Formateurs Certifiés & Experts',
      description: 'Des consultants seniors avec une expérience terrain avérée.'
    },
    {
      icon: <Target size={20} />,
      title: 'Méthodologie Pratique (70/30)',
      description: '70% de pratique et cas réels, 30% de théorie essentielle.'
    },
    {
      icon: <Map size={20} />,
      title: 'Adapté au contexte Africain',
      description: 'Études de cas locales et conformité aux normes OHADA/FDFP.'
    },
    {
      icon: <FileCheck size={20} />,
      title: 'Reconnaissance',
      description: 'Attestations reconnues, cabinet agréé FDFP et partenaire CDMP.'
    }
  ];

  const testimonials = [
    {
      quote: "La formation en Management a complètement changé ma façon de déléguer. Les outils sont concrets et immédiatement applicables.",
      author: "Aïssa Koné",
      role: "DRH, Banque Atlantique",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Une expertise technique rare en Afrique de l'Ouest. Le module sur la fiscalité nous a permis d'optimiser nos déclarations.",
      author: "Marc K.",
      role: "DAF, Groupe BTP",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Cabinet très professionnel. L'organisation logistique des séminaires est impeccable et les formateurs sont de haut niveau.",
      author: "Jean-Paul Y.",
      role: "DG, PME Agro",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', color: '#2F475E', fontFamily: 'Inter, sans-serif' }}>
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

      {/* Hero Section */}
      <section 
        className="position-relative d-flex align-items-center justify-content-center overflow-hidden"
        style={{ height: '650px', marginTop: '80px' }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        >
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: 'linear-gradient(to right, rgba(11, 17, 32, 1), rgba(11, 17, 32, 0.9), rgba(11, 17, 32, 0.6))'
            }}
          />
        </div>

        <motion.div 
          className="position-relative px-4"
          style={{ zIndex: 10, maxWidth: '1200px', paddingTop: '40px' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={{ maxWidth: '750px' }}>
            <div 
              className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4"
              style={{
                border: '1px solid rgba(212, 175, 55, 0.3)',
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span 
                className="rounded-circle"
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#D4AF37',
                  animation: 'pulse 2s infinite'
                }}
              />
              <span 
                className="text-uppercase fw-semibold"
                style={{ 
                  color: '#D4AF37',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em'
                }}
              >
                Excellence & Expertise
              </span>
            </div>

            <h1 
              className="display-4 fw-bold text-white mb-4"
              style={{ lineHeight: '1.1' }}
            >
              Formations Qualifiantes, Diplomantes <br />
              <span 
                style={{
                  background: 'linear-gradient(to right, #D4AF37, #F3E5AB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                & Certifications
              </span>
            </h1>

            <p className="lead text-white-50 mb-5" style={{ maxWidth: '600px' }}>
              Développez les compétences essentielles pour votre carrière ou votre équipe. 
              Des programmes adaptés aux réalités du marché ouest-africain.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <a 
                href="#devis" 
                className="btn btn-lg fw-semibold text-white"
                style={{
                  background: 'linear-gradient(to right, #D4AF37, #B8860B)',
                  border: 'none',
                  boxShadow: '0 10px 30px rgba(212, 175, 55, 0.2)'
                }}
              >
                Demander un devis
              </a>
              <a 
                href="#contact" 
                className="btn btn-lg fw-semibold"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  backgroundColor: 'transparent',
                  backdropFilter: 'blur(10px)'
                }}
              >
                Nous contacter
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Domains Section */}
      <section 
        className="py-5 bg-white position-relative shadow-lg"
        style={{ 
          marginTop: '-40px',
          zIndex: 10,
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px'
        }}
      >
        <div className="container py-5">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <span 
                className="text-uppercase fw-bold"
                style={{ 
                  color: '#D4AF37',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em'
                }}
              >
                Expertise
              </span>
              <h2 className="display-6 fw-bold mt-2" style={{ color: '#0B1120' }}>
                Nos domaines de formation
              </h2>
              <div 
                className="mx-auto rounded-pill mt-3"
                style={{ 
                  width: '64px',
                  height: '4px',
                  backgroundColor: '#D4AF37'
                }}
              />
            </div>
          </RevealOnScroll>

          <div className="row g-4">
            {domains.map((domain, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <RevealOnScroll>
                  <motion.div 
                    className="card h-100 border shadow-sm"
                    whileHover={{ 
                      y: -10,
                      borderColor: 'rgba(212, 175, 55, 0.5)',
                      boxShadow: '0 10px 30px rgba(212, 175, 55, 0.1)'
                    }}
                    style={{ 
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="card-body p-4">
                      <motion.div 
                        className="mb-4 d-inline-flex p-3 rounded"
                        style={{ backgroundColor: '#0B1120', color: 'white' }}
                        whileHover={{ backgroundColor: '#D4AF37' }}
                      >
                        {domain.icon}
                      </motion.div>
                      <h5 className="card-title fw-bold mb-3" style={{ color: '#0B1120' }}>
                        {domain.title}
                      </h5>
                      <p className="card-text small text-muted">
                        {domain.description}
                      </p>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container py-5">
          <RevealOnScroll>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-end mb-5">
              <div>
                <h2 className="display-6 fw-bold" style={{ color: '#0B1120' }}>
                  Programmes phares
                </h2>
                <p className="text-muted mt-2">
                  Les formations les plus demandées par les entreprises.
                </p>
              </div>
              <a 
                href="#" 
                className="d-none d-md-flex align-items-center gap-2 text-decoration-none fw-semibold"
                style={{ color: '#D4AF37' }}
              >
                Voir tout le catalogue <ArrowRight size={16} />
              </a>
            </div>
          </RevealOnScroll>

          <div className="row g-4">
            {programs.map((program, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <RevealOnScroll>
                  <motion.div 
                    className="card h-100 border-0 shadow-sm overflow-hidden"
                    whileHover={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  >
                    <div className="position-relative" style={{ height: '192px' }}>
                      <motion.img 
                        src={program.image}
                        alt={program.title}
                        className="w-100 h-100 object-fit-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <span 
                        className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded text-white fw-bold"
                        style={{ 
                          backgroundColor: program.badgeColor,
                          fontSize: '0.7rem'
                        }}
                      >
                        {program.badge}
                      </span>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-3" style={{ color: '#0B1120' }}>
                        {program.title}
                      </h5>
                      <p className="card-text text-muted small mb-4">
                        {program.description}
                      </p>
                      <a 
                        href="#" 
                        className="d-inline-flex align-items-center text-decoration-none fw-semibold small"
                        style={{ color: '#0B1120' }}
                      >
                        Voir le programme <ArrowRight size={16} className="ms-2" />
                      </a>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <RevealOnScroll>
                <span 
                  className="text-uppercase fw-bold"
                  style={{ 
                    color: '#D4AF37',
                    fontSize: '0.8rem',
                    letterSpacing: '0.15em'
                  }}
                >
                  Notre Valeur Ajoutée
                </span>
                <h2 className="display-6 fw-bold mt-2 mb-4" style={{ color: '#0B1120' }}>
                  Pourquoi choisir<br />Cabinet Performances ?
                </h2>
                <p className="text-muted mb-5">
                  Nous ne faisons pas que dispenser des cours. Nous transformons le potentiel 
                  de vos collaborateurs en résultats tangibles.
                </p>

                <div className="d-flex flex-column gap-4">
                  {advantages.map((adv, index) => (
                    <motion.div 
                      key={index}
                      className="d-flex gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div 
                        className="flex-shrink-0 rounded-circle d-flex align-items-center justify-center"
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: 'rgba(212, 175, 55, 0.1)',
                          color: '#D4AF37'
                        }}
                      >
                        {adv.icon}
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1" style={{ color: '#0B1120' }}>
                          {adv.title}
                        </h5>
                        <p className="small text-muted mb-0">
                          {adv.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            <div className="col-lg-6">
              <RevealOnScroll>
                <div className="position-relative">
                  <div className="rounded-4 overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                      alt="Meeting"
                      className="w-100"
                    />
                  </div>
                  
                  <motion.div 
                    className="position-absolute bg-white p-4 rounded shadow-lg d-none d-md-block"
                    style={{ bottom: '-24px', left: '-24px', border: '1px solid #e9ecef' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="display-4 fw-bold" style={{ color: '#D4AF37' }}>
                        98%
                      </div>
                      <div className="small fw-medium lh-sm" style={{ color: '#0B1120' }}>
                        Taux de satisfaction<br />client
                      </div>
                    </div>
                  </motion.div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogues Section */}
      <section 
        className="py-5 position-relative overflow-hidden"
        style={{
          backgroundColor: '#0B1120',
          backgroundImage: `
            radial-gradient(rgba(212, 175, 55, 0.5) 0.5px, transparent 0.5px),
            radial-gradient(rgba(212, 175, 55, 0.5) 0.5px, #0B1120 0.5px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      >
        <div 
          className="position-absolute rounded-circle"
          style={{
            top: 0,
            left: '25%',
            width: '384px',
            height: '384px',
            backgroundColor: 'rgba(212, 175, 55, 0.2)',
            filter: 'blur(80px)'
          }}
        />
        <div 
          className="position-absolute rounded-circle"
          style={{
            bottom: 0,
            right: '25%',
            width: '384px',
            height: '384px',
            backgroundColor: 'rgba(30, 58, 138, 0.4)',
            filter: 'blur(80px)'
          }}
        />

        <div className="container py-5 position-relative" style={{ zIndex: 10 }}>
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold text-white mb-3">
                Téléchargez nos Catalogues 2025-2026
              </h2>
              <p className="text-white-50">
                Planifiez votre plan de formation annuel dès maintenant.
              </p>
            </div>
          </RevealOnScroll>

          <div className="row g-4">
            <div className="col-md-6">
              <RevealOnScroll>
                <motion.div 
                  className="p-5 rounded-4 position-relative overflow-hidden"
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="position-absolute top-0 end-0 p-4 opacity-25">
                    <MapPin size={128} color="white" />
                  </div>
                  
                  <div 
                    className="d-inline-flex align-items-center justify-center mb-4 rounded"
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#D4AF37'
                    }}
                  >
                    <Flag size={28} />
                  </div>

                  <h3 className="fs-3 fw-bold text-white mb-3">
                    Catalogue National
                  </h3>
                  <p className="text-white-50 mb-4">
                    Programmes standardisés et sur-mesure adaptés aux besoins locaux, 
                    éligibles aux financements FDFP. Idéal pour les PME et grandes entreprises locales.
                  </p>
                  <a 
                    href="#" 
                    className="btn fw-semibold d-inline-flex align-items-center gap-2"
                    style={{ 
                      backgroundColor: 'white',
                      color: '#0B1120'
                    }}
                  >
                    <Download size={16} /> Télécharger le PDF
                  </a>
                </motion.div>
              </RevealOnScroll>
            </div>

            <div className="col-md-6">
              <RevealOnScroll>
                <motion.div 
                  className="p-5 rounded-4 position-relative overflow-hidden"
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="position-absolute top-0 end-0 p-4 opacity-25">
                    <Globe size={128} color="white" />
                  </div>
                  
                  <div 
                    className="d-inline-flex align-items-center justify-center mb-4 rounded"
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#D4AF37'
                    }}
                  >
                    <Globe size={28} />
                  </div>

                  <h3 className="fs-3 fw-bold text-white mb-3">
                    Catalogue International
                  </h3>
                  <p className="text-white-50 mb-4">
                    Formations alignées sur les standards mondiaux, séminaires à l'étranger 
                    et certifications partenaires. Pour les cadres dirigeants et multinationales.
                  </p>
                  <a 
                    href="#" 
                    className="btn fw-semibold d-inline-flex align-items-center gap-2"
                    style={{ 
                      border: '1px solid white',
                      color: 'white',
                      backgroundColor: 'transparent'
                    }}
                  >
                    <Download size={16} /> Télécharger le PDF
                  </a>
                </motion.div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold" style={{ color: '#0B1120' }}>
                Ce qu'ils disent de nous
              </h2>
            </div>
          </RevealOnScroll>

          <div className="overflow-auto pb-4">
            <div className="d-flex gap-4" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, index) => (
                <RevealOnScroll key={index}>
                  <motion.div 
                    className="card border shadow-sm position-relative"
                    style={{ 
                      width: '400px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '16px'
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="position-absolute top-0 end-0 p-4">
                      <Quote size={32} style={{ color: 'rgba(212, 175, 55, 0.2)' }} />
                    </div>
                    <div className="card-body p-4">
                      <p className="fst-italic text-muted mb-4">
                        {testimonial.quote}
                      </p>
                      <div className="d-flex align-items-center gap-3">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-circle object-fit-cover"
                          style={{ width: '48px', height: '48px' }}
                        />
                        <div>
                          <h6 className="fw-bold mb-0" style={{ color: '#0B1120' }}>
                            {testimonial.author}
                          </h6>
                          <p 
                            className="mb-0 text-uppercase small fw-medium"
                            style={{ 
                              color: '#D4AF37',
                              fontSize: '0.7rem'
                            }}
                          >
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-5 position-relative overflow-hidden"
        style={{ backgroundColor: '#0B1120' }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
          style={{
            backgroundImage: 'url(https://www.transparenttextures.com/patterns/cubes.png)'
          }}
        />
        
        <div className="container text-center position-relative py-4" style={{ zIndex: 10 }}>
          <RevealOnScroll>
            <h2 className="display-6 fw-bold text-white mb-4">
              Besoin d'un programme personnalisé ?
            </h2>
            <p className="text-white-50 mb-5 fs-5">
              Nous concevons des plans de formation sur-mesure pour vos équipes, 
              directement dans vos locaux ou en ligne.
            </p>
            <motion.a 
              href="#contact" 
              className="btn btn-lg fw-bold text-white shadow-lg"
              style={{ backgroundColor: '#D4AF37' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Parler à un conseiller
            </motion.a>
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
            <p className="mb-0 small text-white-50">© 2023 Cabinet Performances. Tous droits réservés. Mentions Légales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FormationsPage;