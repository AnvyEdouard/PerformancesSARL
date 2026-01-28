import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, Variants, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, Activity,
  GitBranch, Target, Menu,
  MapPin, Phone, Mail, Award,
  Linkedin, Facebook, MessageCircle, ArrowRight
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// Définition des variants de Framer Motion


const EtudesAuditsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);

  // Pop up formulaire header
  const [isContactOpen, setIsContactOpen] = useState(false);



  const methodology = [
    { number: '1', title: 'Kick-off & Compréhension', description: 'Définition précise du périmètre et des objectifs de la mission avec les parties prenantes.' },
    { number: '2', title: 'Collecte de Données', description: 'Immersion terrain, interviews, et extraction des données chiffrées pertinentes.' },
    { number: '3', title: 'Analyse & Modélisation', description: 'Traitement analytique, croisement des flux et identification des écarts.' },
    { number: '4', title: 'Rapport & Recommandations', description: 'Remise d\'un diagnostic clair et d\'un plan d\'action opérationnel hiérarchisé.' }
  ];

  const deepDive = [
    { title: 'Audit et conformité réglementaire', description: 'Nous anticipons les mutations de votre marché pour sécuriser vos investissements.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop', features: ['Audit de vos informations économiques et financières', 'Vérification de la conformité avec les normes en vigueur', 'Analyses claires aux dirigeants et comités d\'audit','Identification des risques et proposition de solutions concrètes'], reverse: false },
    { title: 'Conseils stratégique et Accompagnement opérationnel', description: 'La fiabilité de l\'information financière est le socle de la confiance des tiers.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2622&auto=format&fit=crop', features: ['Production et présentation d’informations financières fiables', 'Optimisation de la gestion des risques', 'Aide à la prise de décision stratégique','Développement de la compétitivité et de l’efficacité interne'], reverse: true },
    { title: 'Recherche de financement', description: 'Nous anticipons les mutations de votre marché pour sécuriser vos investissements.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop', features: ['Études de faisabilité', 'Études de marché et d’impact', 'Business plans complets','Préparation de documents à destination des investisseurs et bailleurs'], reverse: false }
  ];

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
    
{/* ========================================
    SECTION: HERO SPLIT-SCREEN (Optimisée 100vh)
    ======================================== */}
<section 
  ref={heroRef} 
  className="position-relative d-flex align-items-center overflow-hidden" 
  style={{ 
    height: '100vh', 
    maxHeight: '100vh',
    backgroundColor: '#ffffff', // Orange Aura
    fontFamily: 'DM Sans, sans-serif'
  }}
>
  {/* Texture de fond */}
  <div className="position-absolute w-100 h-100" style={{ zIndex: 1, opacity: 0.3, backgroundImage: 'radial-gradient(#D4AF37 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />

  {/* On utilise pt-5 et un marginTop modéré pour laisser respirer le header */}
  <div className="container position-relative pt-5 mt-4" style={{ zIndex: 10 }}>
    <div className="row align-items-center g-5">
      
      {/* Côté Image - MAINTENANT À GAUCHE */}
      <motion.div 
        className="col-lg-6 d-none d-lg-block order-lg-1"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="position-relative me-auto" style={{ maxWidth: '480px' }}>
          <div 
            className="rounded-5 overflow-hidden border border-white border-opacity-10 shadow-lg"
            style={{ height: '320px' }} // Hauteur fixée assez courte pour éviter le scroll
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
              className="w-100 h-100 object-fit-cover"
              alt="Performance"
            />
          </div>

          {/* Badge compact façon image - positionné à droite maintenant */}
          <div 
            className="position-absolute p-3 rounded-4 shadow-xl"
            style={{ 
              bottom: '20px', 
              right: '-20px', // Changé de left à right
              backgroundColor: 'rgba(49, 8, 63, 1)',
              border: '1px solid rgba(49, 8, 63, 1)',
              backdropFilter: 'blur(8px)'
            }}
          >
             <div className="text-center">
                <div className="h3 fw-bold mb-0" style={{ color: '#FF8C32', fontFamily: 'Miguer Sans, sans-serif'}}>98%</div>
                <div className="text-white fw-medium" style={{ fontSize: '0.6rem', letterSpacing: '0.5px', fontFamily: 'Miguer Sans, sans-serif' }}>
                    SATISFACTION CLIENT
                </div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Côté Texte - MAINTENANT À DROITE */}
      <motion.div 
        className="col-lg-6 text-center text-lg-start order-lg-2"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
      >
        
        <h1 className="mb-4" style={{ maxWidth: '450px', fontSize: '2rem', lineHeight: '1.5', color: '#FF6600', fontWeight: '500', fontFamily: 'Miguer Sans, sans-serif' }}>
          Nous vous aidons à répondre aux exigences réglementaires et à sécuriser vos décisions grâce à des audits rigoureux et une expertise multisectorielle.
        </h1>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
          <motion.a 
            href="#contact"
            className="btn btn-lg text-white fw-bold px-4 py-3 border-0"
            style={{ backgroundColor: '#31083F', border: 'none', borderRadius: '8px', fontSize: '1rem', fontFamily: 'Miguer Sans, sans-serif'}} // Majestic Purple
            whileHover={{ scale: 1.05, backgroundColor: '#8B008B' }} // Dark Magenta Hover
          >
            Diagnostic gratuit
          </motion.a>
          <motion.a 
            href="#expertise"
            className="btn btn-lg text-white fw-bold px-4 py-3 border-0"
            style={{ backgroundColor: '#31083F', border: 'none', borderRadius: '8px', fontSize: '1rem', fontFamily: 'Miguer Sans, sans-serif' }} // Majestic Purple
            whileHover={{ scale: 1.05, backgroundColor: '#8B008B' }} // Dark Magenta Hover
          >
            Nos services
          </motion.a>
        </div>
      </motion.div>

    </div>
  </div>
</section>

{/* Methodology Section - Compact & One-Page Design */}
<section className="py-5 d-flex align-items-center" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
  <div className="container">
    <div className="text-center mb-5">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-uppercase fw-bold small"
        style={{ color: '#FF6600', letterSpacing: '0.15em' }} // Orange Cadmium
      >
        Notre Processus
      </motion.span>
      <h2 className="display-6 fw-bold mt-1" style={{ color: '#671265' }}>Approche Structurée</h2> {/* Charisma */}
    </div>

    {/* Grille compacte (2x2 sur desktop, 1 col sur mobile) */}
    <div className="row g-4 justify-content-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {methodology.map((step, index) => (
        <div key={index} className="col-md-6 col-lg-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ 
              y: -5, 
              backgroundColor: 'rgba(103, 18, 101, 0.03)', // Charisma très léger au hover
              borderColor: '#FF6600' 
            }}
            className="p-4 h-100 rounded-4 border transition-all"
            style={{ 
              backgroundColor: '#FFFFFF',
              borderColor: 'rgba(103, 18, 101, 0.1)', // Bordure légère Charisma
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              cursor: 'default',
              transition: 'all 0.3s ease'
            }}
          >
            <div className="d-flex align-items-start gap-3">
              {/* Cercle numéro en Orange Cadmium */}
              <div 
                className="d-flex align-items-center justify-content-center rounded-circle fw-bold flex-shrink-0"
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#FF6600', // Orange Cadmium
                  color: 'white',
                  fontSize: '1rem',
                  boxShadow: '0 4px 10px rgba(237, 135, 45, 0.3)'
                }}
              >
                {step.number}
              </div>

              <div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem', color: '#671265' }}>{step.title}</h5> {/* Charisma */}
                <p className="small mb-0" style={{ lineHeight: '1.4', color: '#671265', opacity: 0.8 }}> {/* Charisma */}
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Deep Dive Sections */}
      <section style={{ backgroundColor: '#000000' }}>
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
                  <li key={idx} className="text-white-50 mb-2 small"><CheckCircle size={16} className="me-2" style={{ color: '#671265' }} /> {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: '#ffffff' }}>
  <div className="container py-5" style={{ color: '#FF6600'}}>
    {/* Titre en blanc pour trancher avec l'orange aura */}
    <h2 className="display-5 fw-bold mb-4">Besoin de nos services ?</h2>
    
    {/* Texte secondaire avec une opacité légère pour la hiérarchie visuelle */}
    <p className="mb-4 fw-medium" style={{ color: '#FF6600', fontSize: '1.1rem' }}>
      Contactez-nous pour une évaluation personnalisée de vos besoins.
    </p>

    {/* Bouton Majestic Purple -> Dark Magenta */}
    <motion.a 
      href="#contact" 
      className="btn btn-lg rounded-pill px-5 fw-bold text-white border-0 shadow-lg"
      style={{ 
        backgroundColor: '#31083F', // Majestic Purple
        paddingTop: '12px',
        paddingBottom: '12px',
        transition: 'all 0.3s ease'
      }}
      whileHover={{ 
        backgroundColor: '#8B008B', // Dark Magenta
        scale: 1.05,
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
      }}
      whileTap={{ scale: 0.95 }}
    >
      Démarrer la Conversation
    </motion.a>
  </div>
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
    </div> // Fermeture du div racine
  ); // Fermeture du return
}; // Fermeture de la fonction composant

export default EtudesAuditsPage;