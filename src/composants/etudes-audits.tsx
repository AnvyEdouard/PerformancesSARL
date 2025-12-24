import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, Variants } from 'framer-motion';
import { 
  Layers, BarChartBig, Globe, Users, CheckCircle, Activity,
  GitBranch, Target, Quote, ArrowRight, Download, Menu,
  MapPin, Phone, Mail, Award,
  Linkedin, Facebook, MessageCircle
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// Définition des variants de Framer Motion
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
};

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

// Composants internes pour le Deliverables Showcase
const BarChartDeliverable: React.FC<{ bars: number[] }> = ({ bars }) => (
  <div className="d-flex align-items-end h-100 gap-2 p-3 rounded" style={{ backgroundColor: '#0A1A2F' }}>
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
  <div className="h-100 p-3 rounded d-flex align-items-center justify-content-center" style={{ backgroundColor: '#0A1A2F' }}>
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
  <div className="h-100 p-3 rounded d-flex flex-column align-items-start justify-content-between" style={{ backgroundColor: '#0A1A2F' }}>
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
    { icon: <Layers size={20} />, title: 'Audit Organisationnel', description: 'Diagnostic global et cartographie des processus pour une efficacité opérationnelle maximale.' },
    { icon: <BarChartBig size={20} />, title: 'Audit Financier', description: 'Vérification rigoureuse, contrôle interne et fiabilisation des états financiers.' },
    { icon: <Globe size={20} />, title: 'Études Économiques', description: 'Benchmarking sectoriel et analyse des tendances marché en Afrique de l\'Ouest.' },
    { icon: <Users size={20} />, title: 'Audits RH', description: 'GPEC, analyse du climat social et alignement des compétences stratégiques.' }
  ];

  const methodology = [
    { number: '1', title: 'Kick-off & Compréhension', description: 'Définition précise du périmètre et des objectifs de la mission avec les parties prenantes.' },
    { number: '2', title: 'Collecte de Données', description: 'Immersion terrain, interviews, et extraction des données chiffrées pertinentes.' },
    { number: '3', title: 'Analyse & Modélisation', description: 'Traitement analytique, croisement des flux et identification des écarts.' },
    { number: '4', title: 'Rapport & Recommandations', description: 'Remise d\'un diagnostic clair et d\'un plan d\'action opérationnel hiérarchisé.' }
  ];

  const deepDive = [
    { title: 'Études Stratégiques', description: 'Nous anticipons les mutations de votre marché pour sécuriser vos investissements.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop', features: ['Analyse macro-économique', 'Études de faisabilité', 'Benchmarking concurrentiel'], reverse: false },
    { title: 'Audits Financiers & Fiscaux', description: 'La fiabilité de l\'information financière est le socle de la confiance des tiers.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2622&auto=format&fit=crop', features: ['Contrôle interne', 'Revue fiscale', 'Fiabilisation des comptes'], reverse: true },
    { title: 'Études Stratégiques', description: 'Nous anticipons les mutations de votre marché pour sécuriser vos investissements.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop', features: ['Analyse macro-économique', 'Études de faisabilité', 'Benchmarking concurrentiel'], reverse: false }
  ];

  const deliverables = [
    { icon: <Activity size={16} />, title: 'Performance KPI', subtitle: 'Tableaux de bord dynamiques', bars: [40, 70, 50, 90, 100] },
    { icon: <GitBranch size={16} />, title: 'Process Mapping', subtitle: 'Cartographie des risques', diagram: true },
    { icon: <Target size={16} />, title: 'Stratégie', subtitle: 'Synthèses décisionnelles', report: true }
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
      <section ref={heroRef} className="position-relative d-flex align-items-center justify-content-center overflow-hidden" style={{ height: '100vh', minHeight: '600px', marginTop: '80px', backgroundColor: '#0A1A2F' }}>
        <motion.div className="position-absolute top-0 start-0 w-100 h-100" style={{ scale: heroScale, y: heroY, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" alt="Corporate" className="w-100 h-100 object-fit-cover" style={{ opacity: 0.4 }} />
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to top right, rgba(10, 26, 47, 1), rgba(10, 26, 47, 0.8), rgba(10, 26, 47, 0.3))' }} />
        </motion.div>
        
        <motion.div className="position-relative text-center px-4" style={{ zIndex: 10, maxWidth: '900px' }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="display-3 fw-bold mb-4">
            <span className="d-block" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ÉTUDES & AUDITS</span>
            <span className="d-block text-white fw-light fs-2 mt-2" style={{ opacity: 0.9 }}>Performance Durable</span>
          </h1>
          <p className="lead text-white-50 mb-5 mx-auto" style={{ maxWidth: '700px', fontSize: '0.95rem' }}>Transformez vos données en décisions stratégiques. Analyse experte pour les leaders de demain.</p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <motion.a href="#contact" className="btn btn-lg text-white fw-semibold d-inline-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#E0751A', borderRadius: '50px', padding: '12px 30px' }} whileHover={{ scale: 1.05 }}>Demander un diagnostic <ArrowRight size={16} /></motion.a>
          </div>
        </motion.div>
      </section>

      {/* Expertise Grid */}
      <section className="py-5" style={{ backgroundColor: '#0A1A2F' }}>
        <div className="container py-5">
          <RevealOnScroll>
            <div className="mb-5">
              <h6 className="text-uppercase fw-bold mb-2" style={{ color: '#E0751A', fontSize: '0.7rem', letterSpacing: '0.2em' }}>NOS DOMAINES D'INTERVENTION</h6>
              <h2 className="display-6 fw-semibold text-white">Expertise Multisectorielle</h2>
            </div>
          </RevealOnScroll>
          <div className="row g-4">
            {expertises.map((expertise, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <RevealOnScroll delay={index * 0.1}>
                  <div className="card h-100 p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white' }}>
                    <div className="mb-4 text-warning">{expertise.icon}</div>
                    <h5 className="fw-semibold mb-3">{expertise.title}</h5>
                    <p className="small text-white-50">{expertise.description}</p>
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Timeline */}
      <section className="py-5" style={{ backgroundColor: '#06101d' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-semibold text-white">Notre Approche Structurée</h2>
          </div>
          <div className="position-relative" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {methodology.map((step, index) => (
              <div key={index} className="row align-items-center mb-5">
                <div className={`col-md-5 ${index % 2 === 0 ? 'text-md-end' : 'order-md-2 text-md-start'}`}>
                  <h5 className="text-white fw-bold">{step.title}</h5>
                  <p className="text-white-50 small">{step.description}</p>
                </div>
                <div className="col-md-2 text-center">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle border border-warning text-warning fw-bold" style={{ width: '40px', height: '40px' }}>{step.number}</div>
                </div>
                <div className="col-md-5 d-none d-md-block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section style={{ backgroundColor: '#0A1A2F' }}>
        {deepDive.map((section, index) => (
          <div key={index} className={`row g-0 align-items-center ${index !== deepDive.length - 1 ? 'border-bottom border-secondary' : ''}`} style={{ minHeight: '60vh' }}>
            <div className={`col-lg-6 ${section.reverse ? 'order-lg-2' : ''}`}>
              <div style={{ height: '400px' }} className="overflow-hidden">
                <img src={section.image} alt={section.title} className="w-100 h-100 object-fit-cover" />
              </div>
            </div>
            <div className={`col-lg-6 p-5 ${section.reverse ? 'order-lg-1' : ''}`}>
              <h3 className="text-white mb-4">{section.title}</h3>
              <p className="text-white-50 mb-4">{section.description}</p>
              <ul className="list-unstyled">
                {section.features.map((feature, idx) => (
                  <li key={idx} className="text-white-50 mb-2 small"><CheckCircle size={16} className="text-warning me-2" /> {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Deliverables Showcase */}
      <section className="py-5" style={{ backgroundColor: '#081526' }}>
        <div className="container py-5 text-center">
          <h2 className="text-white mb-5">L'Impact Visuel de Nos Analyses</h2>
          <div className="row g-4">
            {deliverables.map((item, index) => (
              <div key={index} className="col-md-4 text-start">
                <div className="card h-100 p-4 shadow" style={{ backgroundColor: '#0A1A2F', color: 'white', border: 'none' }}>
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <div className="p-2 bg-warning rounded-circle text-dark">{item.icon}</div>
                    <h5 className="mb-0">{item.title}</h5>
                  </div>
                  <div style={{ height: '180px' }}>
                    {item.bars && <BarChartDeliverable bars={item.bars} />}
                    {item.diagram && <DiagramDeliverable />}
                    {item.report && <ReportDeliverable />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: '#0A1A2F' }}>
        <div className="container py-5">
          <h2 className="display-5 fw-bold mb-4">Besoin de nos services ?</h2>
          <p className="text-white-50 mb-4">Contactez-nous pour une évaluation personnalisée de vos besoins.</p>
          <a href="#contact" className="btn btn-warning btn-lg rounded-pill px-5 fw-bold">Démarrer la Conversation</a>
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
                      <li className="mb-2"><a href="/" className="text-white-50 text-decoration-none">Accueil</a></li>
                <li className="mb-2"><a href="/formations" className="text-white-50 text-decoration-none">Nos Formations</a></li>
                <li className="mb-2"><a href="/assistances-conseils" className="text-white-50 text-decoration-none">Assistances & Conseils</a></li>
                <li className="mb-2"><a href="/etudes-audits" className="text-white-50 text-decoration-none">Études & Audits</a></li>
                <li className="mb-2"><a href="/recrutements" className="text-white-50 text-decoration-none">Recrutements</a></li>
                <li className="mb-2"><a href="#contact" className="text-white-50 text-decoration-none">Contact</a></li>
                    </ul>
                  </div>
      
                  <div className="col-md-6 col-lg-3">
                    <h5 className="fw-semibold mb-4">Contact</h5>
                    <ul className="list-unstyled small text-white-50">
                      <li className="mb-3 d-flex gap-3">
                        <MapPin size={20} style={{ color: '#E0751A' }} className="flex-shrink-0" />
                        <span>Cocody Cité Des Arts, Abidjan,<br />Côte d'Ivoire</span>
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
    </div> // Fermeture du div racine
  ); // Fermeture du return
}; // Fermeture de la fonction composant

export default EtudesAuditsPage;