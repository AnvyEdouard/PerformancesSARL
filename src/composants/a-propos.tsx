import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, BarChart3, Monitor, Shield, Award, Target, 
  Flag, Globe, Download, Quote, Menu, ArrowRight,
  MapPin, Phone, Mail, CheckCircle, Linkedin, Facebook, MessageCircle,
  ChevronDown, Clock, UserCheck, BookOpen, X, PlayCircle, Search,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Interfaces pour les données
interface TeamMember {
  id: number;
  name: string;
  post: string;
  description: string;
  imageUrl: string;
}

interface Partner {
  id: number;
  name: string;
  logoUrl: string;
}

// Données fictives pour l'équipe et les partenaires
const teamMembers: TeamMember[] = [
  { id: 1, name: "Nom Prénom 1", post: "Poste", description: "Description/Mot de la personne", imageUrl: "https://via.placeholder.com/150/EEEEEE/80a000?text=Membre+1" },
  { id: 2, name: "Nom Prénom 2", post: "Poste", description: "Description/Mot de la personne", imageUrl: "https://via.placeholder.com/150/EEEEEE/80a000?text=Membre+2" },
  { id: 3, name: "Nom Prénom 3", post: "Poste", description: "Description/Mot de la personne", imageUrl: "https://via.placeholder.com/150/EEEEEE/80a000?text=Membre+3" },
  { id: 4, name: "Nom Prénom 4", post: "Poste", description: "Description/Mot de la personne", imageUrl: "https://via.placeholder.com/150/EEEEEE/80a000?text=Membre+4" },
];

const partners: Partner[] = [
  { id: 1, name: "CADERAC", logoUrl: "https://i.ibb.co/G4pSCqw0/Caderac-logo.png" },
  { id: 2, name: "GESTOCI", logoUrl: "https://i.ibb.co/hF5QB17j/Gestoci-Logo.jpg" },
  { id: 3, name: "Hotel TIAMA", logoUrl: "https://i.ibb.co/38JpNh8/Hotel-tiama-logo.png" },
  { id: 4, name: "SGS SICTA", logoUrl: "https://i.ibb.co/zhBfSph5/logo-sgs.jpg" },
  { id: 5, name: "ABB", logoUrl: "https://i.ibb.co/3mCRpjth/logo-abb.jpg" },
  { id: 6, name: "ANAC", logoUrl: "https://i.ibb.co/yn3B13fN/logo-anac.jpg" },
  { id: 7, name: "BCH", logoUrl: "https://i.ibb.co/whM5Fg9X/logo-bch-congo.jpg" },
  { id: 8, name: "BCRG", logoUrl: "https://i.ibb.co/Y4TfJnPC/logo-bcrg.jpg" },
  { id: 9, name: "BRINKS", logoUrl: "https://i.ibb.co/n8t6c2fw/logo-brinks.jpg" },
  { id: 10, name: "CASTELLI", logoUrl: "https://i.ibb.co/Nn6T6X06/logo-castelli.jpg" },
  { id: 11, name: "CIE", logoUrl: "https://i.ibb.co/PvK18N5F/logo-cie.jpg" },
  { id: 12, name: "Fonds Africain", logoUrl: "https://i.ibb.co/ZzwfxFkG/logo-Fagace.png" },
  { id: 13, name: "G4S", logoUrl: "https://i.ibb.co/PvqFY314/logo-g4s.jpg" },
  { id: 14, name: "CIG", logoUrl: "https://i.ibb.co/3YcK3hvy/logo-gandour-2.jpg" },
  { id: 15, name: "Moov Africa", logoUrl: "https://i.ibb.co/vvc4vN7F/logo-moov.png" },
  { id: 16, name: "SICTA", logoUrl: "https://i.ibb.co/RTD5N2kV/logo-sicta-450.jpg" },
  { id: 17, name: "SONAR", logoUrl: "https://i.ibb.co/jjm9wLK/LOGO-SONAR-IARD.jpg" },
  { id: 18, name: "SOTRA", logoUrl: "https://i.ibb.co/vvQDq9qq/Sotra-logo.png" },
];

const AboutPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Pop up formulaire header
  const [isContactOpen, setIsContactOpen] = useState(false);

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

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 20px 60px' }}>
        {/* SECTION HERO */}
        <motion.section
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center', marginBottom: '80px', paddingTop: '40px', paddingBottom: '40px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 style={{ fontWeight: 'bold', marginBottom: '24px', fontSize: '2.5rem', color: '#FF6600' }}>A Propos de nous</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#31083F' }}>
              Depuis plus de 23 ans, nous accompagnons les organisations publiques et privées dans
              leurs projets. Expertise certifiée (agrée FDFP), connaissance du contexte africain,
              approche orientée résultats et solutions sur-mesure sont nos mots-clés pour vous
              satisfaire.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://www.goafricaonline.com/uploads/media/company_media/0005/79/679bb2b7d86d3-visuel-galerie-23.jpg"
              alt="Équipe de travail"
              style={{ maxHeight: '400px', width: '100%', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
        </motion.section>

        {/* SECTION ÉQUIPE */}
        <motion.section 
          id="equipe"
          style={{ marginBottom: '80px', paddingTop: '40px', paddingBottom: '40px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '60px', fontSize: '2.5rem', color: '#31083F' }}>Notre équipe</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', justifyItems: 'center' }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                style={{ textAlign: 'center' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  style={{ 
                    width: '150px', 
                    height: '150px',
                    background: 'linear-gradient(to bottom, #31083F 0%, #31083F 50%, #FF6600 50%, #FF6600 100%)',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div 
                    style={{ 
                      width: '50px', 
                      height: '50px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      marginBottom: '-10px'
                    }}
                  />
                </div>
                <h5 style={{ fontWeight: 'bold', marginBottom: '8px', color: '#0A1A2F', fontSize: '1.1rem' }}>{member.post}</h5>
                <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: 0 }}>{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION PARTENAIRES */}
        <motion.section 
          style={{ paddingTop: '40px', paddingBottom: '40px', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontWeight: 'bold', marginBottom: '60px', textAlign: 'center', fontSize: '2.5rem', color: '#31083F' }}>Ils nous font confiance</h2>
          <div style={{ backgroundColor: '#ffffffff', padding: '60px 40px', borderRadius: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '30px', justifyItems: 'center', alignItems: 'center' }}>
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  <div 
                    style={{ 
                      backgroundColor: 'white',
                      minWidth: '120px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                      cursor: 'pointer'
                    }}
                  >
                    <img
                      src={partner.logoUrl}
                      alt={partner.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        filter: 'grayscale(100%)',
                        opacity: 0.7,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'grayscale(0%)';
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'grayscale(100%)';
                        e.currentTarget.style.opacity = '0.7';
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

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

export default AboutPage;