import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Users,  Award, Target, 
  Flag, Menu, ArrowRight,
  MapPin, Phone, Mail, CheckCircle, Linkedin, Facebook, MessageCircle,
    UserCheck, BookOpen, Search,
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

  // Pop up formulaire header
  const [isContactOpen, setIsContactOpen] = useState(false);

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
    <div style={{ backgroundColor: '#FAFAFA', color: '#2F475E', fontFamily: 'Miguer Sans, sans-serif' }}>
           {/* Header */}
                <motion.header 
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  className="fixed-top bg-white shadow-sm"
                  style={{ 
                    backdropFilter: 'blur(10px)', 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    zIndex: 1000 
                  }}
                >
                  <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light py-2">
                      {/* Remplacement par votre Logo Image */}
                      <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img 
                          src="https://i.ibb.co/7t7J2Cpk/logo2.png" 
                          alt="Logo Performances" 
                          style={{ 
                            height: '50px', // Ajustez cette valeur selon vos préférences
                            width: 'auto',
                            display: 'block'
                          }} 
                        />
                      </Link>
          
                      {/* Bouton Menu Mobile */}
                      <button 
                        className="navbar-toggler border-0" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        <Menu size={24} />
                      </button>
          
                      {/* Menu de Navigation */}
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
                              ASSISTANCE & CONSEIL
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/etudes-audits" className="nav-link fw-medium" style={{ fontSize: '0.8rem' }}>
                              ÉTUDES & AUDIT
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/recrutements" className="nav-link fw-medium" style={{ fontSize: '0.8rem' }}>
                              RECRUTEMENT
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/a-propos" className="nav-link fw-medium" style={{ fontSize: '0.8rem' }}>
                              À PROPOS
                            </Link>
                          </li>
                        </ul>
                        
                        {/* Bouton Contact */}
                        <button
                onClick={() => setIsContactOpen(true)}
                className="btn ms-lg-3 rounded-pill text-white fw-medium"
                style={{ backgroundColor: '#31083F', padding: '10px 25px' }}
                 >
                Contactez-nous
                </button>
                      </div>
                    </nav>
                  </div>
                </motion.header>

                 <AnimatePresence>
                  {isContactOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 15 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.7)",
                        zIndex: 2000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px"
                      }}
                    >
                      {/* Card popup */}
                      <motion.div
                        initial={{ y: 80, scale: 0.9 }}
                        animate={{ y: 0, scale: 1 }}
                        exit={{ y: 80, scale: 0.9 }}
                        transition={{ duration: 0.35 }}
                        className="rounded-5 p-4 p-md-5 text-white"
                        style={{
                          maxWidth: "700px",
                          width: "100%",
                          background: "rgba(49, 8, 63, 1)",
                          backdropFilter: "blur(15px)",
                          position: "relative"
                        }}
                      >
                        {/* Bouton fermer */}
                        <button
                          onClick={() => setIsContactOpen(false)}
                          style={{
                            position: "absolute",
                            top: 20,
                            right: 25,
                            background: "transparent",
                            border: "none",
                            color: "#fff",
                            fontSize: "1.8rem",
                            cursor: "pointer"
                          }}
                        >
                          ×
                        </button>
                
                        <h3 className="fw-bold mb-4 text-center">
                          Contactez-nous
                        </h3>
                
                        {/* ✅ TON FORMULAIRE */}
                        <form 
                           action="https://formspree.io/f/mwvogplo"
                           method="POST"
                          className="bg-white bg-opacity-10 p-4 rounded-4"
                          >
                          <div className="row g-3">
                            <div className="col-md-6">
                              <input
                                name="nom"
                                type="text"
                                className="form-control bg-white bg-opacity-10 border-0 text-white"
                                placeholder="Nom *"
                                style={{ backdropFilter: "blur(10px)" }}
                              />
                            </div>
                
                            <div className="col-md-6">
                              <input
                                name="prenom"
                                type="text"
                                className="form-control bg-white bg-opacity-10 border-0 text-white"
                                placeholder="Prénom *"
                                style={{ backdropFilter: "blur(10px)" }}
                              />
                            </div>
                
                            <div className="col-12">
                              <input
                                name="email"
                                type="email"
                                className="form-control bg-white bg-opacity-10 border-0 text-white"
                                placeholder="Email *"
                                style={{ backdropFilter: "blur(10px)" }}
                              />
                            </div>
                
                            <div className="col-12">
                              <input
                                name="entreprise"
                                type="text"
                                className="form-control bg-white bg-opacity-10 border-0 text-white"
                                placeholder="Entreprise *"
                                style={{ backdropFilter: "blur(10px)" }}
                              />
                            </div>
                
                            <div className="col-12">
                              <select
                                name="sujet"
                                className="form-select bg-white bg-opacity-10 border-0 text-white"
                                style={{ backdropFilter: "blur(10px)" }}
                              >
                                <option className="text-dark">Sujet de votre demande *</option>
                                <option className="text-dark">Formation</option>
                                <option className="text-dark">Assistance & Conseil</option>
                                <option className="text-dark">Étude & Audit</option>
                                <option className="text-dark">Recrutement</option>
                                <option className="text-dark">Autre</option>
                              </select>
                            </div>
                
                            <div className="col-12">
                              <textarea
                                name="message"
                                rows={4}
                                className="form-control bg-white bg-opacity-10 border-0 text-white"
                                placeholder="Votre message *"
                                style={{ backdropFilter: "blur(10px)" }}
                              />
                            </div>
                
                            <div className="col-12">
                              <motion.button
                                type="submit"
                                className="btn btn-lg rounded-pill text-white fw-medium w-100"
                                style={{ backgroundColor: "#FF6600", border: "none" }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                              >
                                Envoyer le message
                              </motion.button>
                            </div>
                          </div>
                        </form>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

 {/* --- SECTION HERO --- */}
    <section 
  className="py-5 d-flex align-items-center" 
  style={{ 
    minHeight: '60vh', 
    // Dégradé inspiré de la photo : du violet très profond vers le Charisma
    background: 'linear-gradient(90deg, #1A0521 0%, #31083F 35%, #671265 100%)', 
    color: 'white', 
    marginTop: '78px',
    position: 'relative',
    overflow: 'hidden'
  }}
>
  {/* Optionnel : ajout d'un léger voile pour la texture comme sur l'image */}
  <div 
    className="position-absolute w-100 h-100 top-0 start-0" 
    style={{ 
      background: 'radial-gradient(circle at 20% 50%, rgba(103, 18, 101, 0.4) 0%, transparent 70%)',
      pointerEvents: 'none' 
    }} 
  />

  <div className="container position-relative" style={{ zIndex: 2 }}>
    <div className="row align-items-center">
      <motion.div 
        className="col-lg-8" 
        initial="hidden" 
        animate="visible" 
        variants={fadeIn}
      >
        <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
          Recrutement : Sécurisez vos talents
        </h1>
        
        <p className="lead mb-5 opacity-75" style={{ maxWidth: '700px', lineHeight: '1.6' }}>
          Des solutions de recrutement ciblées pour sécuriser vos recrutements, 
          réduire les risques et renforcer la performance de vos équipes.
        </p>

        <motion.button 
          whileHover={{ 
            scale: 1.05, 
            backgroundColor: '#FF9682', // Orange Aura au survol
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
          }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-lg px-5 py-3 fw-bold text-white shadow-sm" 
          style={{ 
            backgroundColor: '#FF6600', // Orange Cadmium de base
            border: 'none',
            borderRadius: '8px',
            transition: 'background-color 0.3s ease'
          }}
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
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="fw-bold" style={{ color: '#31083F' }}>
            Qu'est-ce que la chasse de tête ?
          </motion.h2>
          <div className="mx-auto mt-2" style={{ width: '60px', height: '4px', backgroundColor: '#FF6600' }}></div>
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
                    backgroundColor: '#FF6600',
                    width: '80px',
                    height: '80px'
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="fw-bold mb-3" style={{ color: '#31083F' }}>{item.title}</h4>
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
      style={{ color: '#31083F' }}
    >
      Notre Processus de Recrutement
    </motion.h2>
    <div className="mx-auto mt-2" style={{ width: '60px', height: '4px', backgroundColor: '#FF6600' }}></div>
  </div>
  <div className="container">
    <motion.div className="row g-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
      {[
        { step: "Analyse des besoins et definition du profil", icon: <BookOpen size={30} /> }, // Taille icône légèrement augmentée
        { step: "Sourcing et identification des candidats", icon: <Search size={30} /> },
        { step: "Entretiens et evaluation des compétences", icon: <Users size={30} /> },
        { step: "Short-list & présentation des candidats", icon: <Flag size={30} /> },
        { step: "Accompagnement à l'intégration", icon: <UserCheck size={30} /> }
      ].map((item, i) => (
        <motion.div key={i} className="col-md" variants={fadeIn}>
          <motion.div 
            className="position-relative p-4 text-center h-100 bg-white shadow-sm rounded"
            whileHover={{ 
              y: -10, 
              boxShadow: '0 15px 40px rgba(255, 127, 0, 0.2)',
              borderColor: '#FF6600'
            }}
            transition={{ duration: 0.3 }}
            style={{ border: '2px solid transparent' }}
          >
            {/* L'ICÔNE se trouve maintenant dans le cercle */}
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
              style={{ 
                width: '70px', 
                height: '70px', 
                backgroundColor: '#31083F',
                color: 'white'
              }}
            >
              {item.icon}
            </div>

            {/* LE CHIFFRE se trouve maintenant ici */}
            <div className="mb-2 fw-bold fs-5" style={{ color: '#FF6600' }}>
              {i + 1}
            </div>

            <h6 className="fw-bold" style={{ fontSize: '0.9rem', color: '#31083F' }}>{item.step}</h6>
            
            {i < 4 && (
              <div className="d-none d-lg-block position-absolute top-50 translate-middle-y" style={{ left: '100%', marginLeft: '-10px' }}>
                <ArrowRight size={20} style={{ color: '#FF6600' }} />
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
            style={{ color: '#31083F' }}
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
              <thead style={{ backgroundColor: '#31083F', color: 'white' }}>
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
                            style={{ backgroundColor: '#FF6600' }}
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
           <footer id="contact" className="py-5 text-white" style={{ backgroundColor: '#31083F' }}>
             <div className="container py-4">
               <div className="row g-5 mb-5">
                 <div className="col-md-6 col-lg-3">
                   <div className="d-flex align-items-center gap-2 mb-4">
                     <img 
                src="https://i.ibb.co/NdkrxWnk/logo4.png" 
                alt="CP Cabinet Performances" 
                style={{ height: '50px', width: 'auto', objectFit: 'contain' }} 
              />
                   </div>
                   <p className="small text-white-50 mb-4">
                     Partenaire de confiance pour le développement des compétences et la performance organisationnelle en Afrique de l'Ouest.
                   </p>
                   <div className="d-flex gap-3">
                     <a href="#" className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#FF6600', width: '32px', height: '32px', color: 'white' }}>
                       <Linkedin size={16} />
                     </a>
                     <a href="#" className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#FF6600', width: '32px', height: '32px', color: 'white' }}>
                       <Facebook size={16} />
                     </a>
                     <a href="#" className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#FF6600', width: '32px', height: '32px', color: 'white' }}>
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
                       <MapPin size={20} style={{ color: '#FF6600' }} className="flex-shrink-0" />
                       <span>Cocody Cité Des Arts, Abidjan,<br />Côte d'Ivoire</span>
                     </li>
                     <li className="mb-3 d-flex gap-3">
                       <Phone size={20} style={{ color: '#FF6600' }} className="flex-shrink-0" />
                       <span>+225 07 07 00 00 00</span>
                     </li>
                     <li className="mb-3 d-flex gap-3">
                       <Mail size={20} style={{ color: '#FF6600' }} className="flex-shrink-0" />
                       <span>info@cabinetperformances.com</span>
                     </li>
                   </ul>
                 </div>
           
                 <div className="col-md-6 col-lg-3">
                   <h5 className="fw-semibold mb-4">Accréditations</h5>
                   <div className="mb-3 p-3 rounded border border-white border-opacity-25" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                     <div className="d-flex align-items-center gap-3">
                       <Award size={32} style={{ color: '#FF6600' }} />
                       <div>
                         <p className="mb-0 small text-uppercase text-white-50" style={{ fontSize: '0.7rem' }}>Agrément</p>
                         <p className="mb-0 fw-bold small text-white">FDFP Certifié</p>
                       </div>
                     </div>
                   </div>
                   <div className="p-3 rounded border border-white border-opacity-25" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                     <div className="d-flex align-items-center gap-3">
                       <CheckCircle size={32} style={{ color: '#FF6600' }} />
                       <div>
                         <p className="mb-0 small text-uppercase text-white-50" style={{ fontSize: '0.7rem' }}>Certificat</p>
                         <p className="mb-0 fw-bold small text-white">CDMP Partner</p>
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