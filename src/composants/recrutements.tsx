import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Users, BarChart3, Monitor, Shield, Award, Target, 
  Flag, Globe, Download, Quote, Menu, ArrowRight,
  MapPin, Phone, Mail, CheckCircle, Linkedin, Facebook, MessageCircle,
  ChevronDown, Clock, UserCheck, BookOpen, X, PlayCircle, Search,
  Calendar
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// --- Thème de couleurs ---
const colors = {
  primaryBlue: '#0A2540',
  secondaryOrange: '#FF7F00',
  lightGray: '#f8f9fa',
  white: '#ffffff',
};

// --- Types ---
interface JobOffer {
  id: string;
  poste: string;
  secteur: string;
  lieu: string;
  typeContrat: string;
  datePublication: string;
}

// --- Données Mockées ---
const mockJobOffers: JobOffer[] = [
  { id: '1', poste: 'Développeur Fullstack React', secteur: 'IT', lieu: 'Paris', typeContrat: 'CDI', datePublication: '15/12/2025' },
  { id: '2', poste: 'Chef de Projet Data', secteur: 'Marketing', lieu: 'Lyon', typeContrat: 'CDI', datePublication: '18/12/2025' },
  { id: '3', poste: 'Directeur Commercial', secteur: 'Vente', lieu: 'Nantes', typeContrat: 'CDI', datePublication: '20/12/2025' },
  { id: '4', poste: 'Consultant RH', secteur: 'Conseil', lieu: 'Bordeaux', typeContrat: 'Freelance', datePublication: '22/12/2025' },
];

const RecruitmentPage: React.FC = () => {
  // --- ÉTATS (Hooks) ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // --- Animations ---
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    }),
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
  };

  // Remplace ton objet de variantes par celui-ci :
const menuVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

  const filteredOffers = mockJobOffers.filter(offer =>
    offer.poste.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.secteur.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      {/* --- SECTION HERO --- */}
      <section className="py-5 d-flex align-items-center" style={{ minHeight: '60vh', background: `linear-gradient(135deg, ${colors.primaryBlue} 0%, #1a3a5a 100%)`, color: colors.white, marginTop: '90px' }}>
        <div className="container">
          <div className="row align-items-center">
            <motion.div className="col-lg-8" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="display-3 fw-bold mb-4">Recrutement : Sécurisez vos talents</h1>
              <p className="lead mb-5 opacity-75">
                Des solutions de recrutement ciblées pour sécuriser vos recrutements, réduire les risques et renforcer la performance de vos équipes.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-lg px-5 py-3 fw-bold" 
                style={{ backgroundColor: colors.secondaryOrange, color: 'white', border: 'none' }}
              >
                Nous confier une mission
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION CHASSE DE TÊTE --- */}
      <section className="py-5 container">
        <div className="text-center mb-5">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="fw-bold" style={{ color: colors.primaryBlue }}>
            Qu'est-ce que la chasse de tête ?
          </motion.h2>
          <div className="mx-auto mt-2" style={{ width: '60px', height: '4px', backgroundColor: colors.secondaryOrange }}></div>
        </div>

        <div className="row g-4 mt-4">
          {[
            { icon: <Target size={40} />, title: "Approche Directe", desc: "Identification proactive des candidats passifs à haut potentiel." },
            { icon: <Users size={40} />, title: "Analyse Culturelle", desc: "Adéquation parfaite entre la vision du candidat et votre ADN." },
            { icon: <CheckCircle size={40} />, title: "Sélection Rigoureuse", desc: "Processus d'évaluation multicritères pour sécuriser le recrutement." }
          ].map((item, idx) => (
            <motion.div key={idx} className="col-md-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <motion.div 
                className="p-4 h-100 shadow-sm border-0 card text-center"
                whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle" 
                  style={{ 
                    color: colors.white, 
                    backgroundColor: colors.secondaryOrange,
                    width: '80px',
                    height: '80px'
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="fw-bold mb-3" style={{ color: colors.primaryBlue }}>{item.title}</h4>
                <p className="text-muted">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION PROCESSUS (5 Étapes) --- */}
      <section className="py-5" style={{ backgroundColor: colors.lightGray }}>
        <div className="container text-center mb-5">
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeIn}
            className="fw-bold" 
            style={{ color: colors.primaryBlue }}
          >
            Notre Processus de Recrutement
          </motion.h2>
          <div className="mx-auto mt-2" style={{ width: '60px', height: '4px', backgroundColor: colors.secondaryOrange }}></div>
        </div>
        <div className="container">
          <motion.div className="row g-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { step: "Définition du besoin", icon: <BookOpen size={24} /> },
              { step: "Sourcing & Approche", icon: <Search size={24} /> },
              { step: "Entretiens", icon: <Users size={24} /> },
              { step: "Présentation", icon: <Flag size={24} /> },
              { step: "Suivi d'intégration", icon: <UserCheck size={24} /> }
            ].map((item, i) => (
              <motion.div key={i} className="col-md" variants={fadeIn}>
                <motion.div 
                  className="position-relative p-4 text-center h-100 bg-white shadow-sm rounded"
                  whileHover={{ 
                    y: -10, 
                    boxShadow: '0 15px 40px rgba(255, 127, 0, 0.2)',
                    borderColor: colors.secondaryOrange
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ border: '2px solid transparent' }}
                >
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                    style={{ 
                      width: '70px', 
                      height: '70px', 
                      backgroundColor: colors.primaryBlue,
                      color: 'white'
                    }}
                  >
                    <span className="fw-bold fs-4">{i + 1}</span>
                  </div>
                  <div className="mb-2" style={{ color: colors.secondaryOrange }}>
                    {item.icon}
                  </div>
                  <h6 className="fw-bold" style={{ fontSize: '0.9rem', color: colors.primaryBlue }}>{item.step}</h6>
                  {i < 4 && (
                    <div className="d-none d-lg-block position-absolute top-50 translate-middle-y" style={{ left: '100%', marginLeft: '-10px' }}>
                      <ArrowRight size={20} style={{ color: colors.secondaryOrange }} />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION OFFRES D'EMPLOI --- */}
      <section className="py-5 container">
        <div className="d-md-flex justify-content-between align-items-center mb-4">
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeIn}
            className="fw-bold" 
            style={{ color: colors.primaryBlue }}
          >
            Offres d'emploi
          </motion.h2>
          <div className="position-relative mt-3 mt-md-0 shadow-sm">
            <Search className="position-absolute top-50 translate-middle-y ms-3 text-muted" size={18} />
            <input 
              type="text" 
              placeholder="Rechercher un poste..." 
              className="form-control ps-5 border-0 py-2" 
              style={{ borderRadius: '25px', width: '300px', backgroundColor: '#fff' }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
          className="shadow-sm rounded-3 overflow-hidden"
        >
          <div className="table-responsive">
            <table className="table align-middle bg-white mb-0 border-0">
              <thead style={{ backgroundColor: colors.primaryBlue, color: 'white' }}>
                <tr>
                  <th className="py-3 px-4 border-0" style={{ borderTopLeftRadius: '12px' }}>Poste</th>
                  <th className="py-3 border-0">Secteur</th>
                  <th className="py-3 border-0">Lieu</th>
                  <th className="py-3 border-0">Contrat</th>
                  <th className="py-3 border-0">
                    <div className="d-flex align-items-center gap-2">
                      <Calendar size={16} />
                      Date
                    </div>
                  </th>
                  <th className="py-3 text-end px-4 border-0" style={{ borderTopRightRadius: '12px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="popLayout">
                  {filteredOffers.length > 0 ? (
                    filteredOffers.map((offer, index) => (
                      <motion.tr 
                        key={offer.id}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tableRowVariants}
                        layout
                        style={{ borderBottom: '1px solid #f0f0f0' }}
                      >
                        <td className="py-3 px-4 fw-bold">{offer.poste}</td>
                        <td><span className="badge bg-light text-dark border">{offer.secteur}</span></td>
                        <td className="text-muted">{offer.lieu}</td>
                        <td><span className="badge" style={{ backgroundColor: '#e8f5e9', color: '#2e7d32' }}>{offer.typeContrat}</span></td>
                        <td className="text-muted small">{offer.datePublication}</td>
                        <td className="text-end px-4">
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-sm rounded-pill px-4 text-white" 
                            style={{ backgroundColor: colors.secondaryOrange }}
                          >
                            Postuler
                          </motion.button>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <motion.tr
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <td colSpan={6} className="text-center py-5 text-muted">Aucune offre trouvée</td>
                    </motion.tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>
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
    </div>
  );
};

export default RecruitmentPage;