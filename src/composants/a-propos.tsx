import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
            <h2 style={{ fontWeight: 'bold', marginBottom: '24px', fontSize: '2.5rem', color: '#0A1A2F' }}>A Propos de nous</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#2F475E' }}>
              Depuis plus de 20 ans, nous accompagnons les organisations publiques et privées dans
              leurs projets. Expertise certifiée (agréée FDFP), connaissance du contexte africain,
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
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '60px', fontSize: '2.5rem', color: '#0A1A2F' }}>Notre équipe</h2>
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
                    background: 'linear-gradient(to bottom, #87CEEB 0%, #87CEEB 50%, #90EE90 50%, #90EE90 100%)',
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
          <h2 style={{ fontWeight: 'bold', marginBottom: '60px', textAlign: 'center', fontSize: '2.5rem', color: '#0A1A2F' }}>Ils nous font confiance</h2>
          <div style={{ backgroundColor: '#F5F5F5', padding: '60px 40px', borderRadius: '20px' }}>
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
      <footer id="contact" style={{ backgroundColor: '#0A1A2F', color: 'white', padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ backgroundColor: 'white', color: '#0A1A2F', padding: '8px 12px', borderRadius: '4px' }}>
                  <span style={{ fontWeight: 'bold' }}>CP</span>
                </div>
                <span style={{ fontWeight: 'bold' }}>CABINET PERFORMANCES</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '20px' }}>
                Partenaire de confiance pour le développement des compétences et la performance organisationnelle en Afrique de l'Ouest.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ backgroundColor: '#2F475E', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white' }}>
                  <Linkedin size={16} />
                </a>
                <a href="#" style={{ backgroundColor: '#2F475E', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white' }}>
                  <Facebook size={16} />
                </a>
                <a href="#" style={{ backgroundColor: '#2F475E', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white' }}>
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

            <div>
              <h5 style={{ fontWeight: '600', marginBottom: '20px' }}>Liens Rapides</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
                <li style={{ marginBottom: '12px' }}><a href="/" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Accueil</a></li>
                <li style={{ marginBottom: '12px' }}><a href="/formations" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Nos Formations</a></li>
                <li style={{ marginBottom: '12px' }}><a href="/assistances-conseils" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Assistances & Conseils</a></li>
                <li style={{ marginBottom: '12px' }}><a href="/etudes-audits" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Études & Audits</a></li>
                <li style={{ marginBottom: '12px' }}><a href="/recrutements" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Recrutements</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 style={{ fontWeight: '600', marginBottom: '20px' }}>Contact</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                <li style={{ marginBottom: '16px', display: 'flex', gap: '12px' }}>
                  <MapPin size={20} style={{ color: '#E0751A', flexShrink: 0 }} />
                  <span>Cocody Cité Des Arts, Abidjan,<br />Côte d'Ivoire</span>
                </li>
                <li style={{ marginBottom: '16px', display: 'flex', gap: '12px' }}>
                  <Phone size={20} style={{ color: '#E0751A', flexShrink: 0 }} />
                  <span>+225 07 07 00 00 00</span>
                </li>
                <li style={{ marginBottom: '16px', display: 'flex', gap: '12px' }}>
                  <Mail size={20} style={{ color: '#E0751A', flexShrink: 0 }} />
                  <span>contact@cabinet-performances.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 style={{ fontWeight: '600', marginBottom: '20px' }}>Accréditations</h5>
              <div style={{ marginBottom: '16px', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(47, 71, 94, 0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Award size={32} style={{ color: '#E0751A' }} />
                  <div>
                    <p style={{ margin: 0, fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)' }}>Agrément</p>
                    <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>FDFP Certifié</p>
                  </div>
                </div>
              </div>
              <div style={{ padding: '16px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(47, 71, 94, 0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={32} style={{ color: '#E0751A' }} />
                  <div>
                    <p style={{ margin: 0, fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)' }}>Certificat</p>
                    <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>CDMP Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>© 2025 Cabinet Performances. Tous droits réservés. Mentions Légales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;