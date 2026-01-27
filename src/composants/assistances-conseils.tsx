import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, useInView, useScroll, useTransform, Variants, AnimatePresence
} from 'framer-motion';
import { 
  Compass, Layers, Users, BarChart3, Crown, Users2, CheckCircle,
  Search, FileCheck, Cog, TrendingUp, Menu,
  MapPin, Phone, Mail, Award, Linkedin, Facebook, 
  MessageCircle
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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

// ========================================
// COMPOSANT: ServiceCard
// Affiche un service avec texte ou vidéo selon contentType
// ========================================
interface ServiceCardProps {
  service: {
    icon: React.ReactNode;
    title: string;
    contentType: 'image' | 'video';
    description: string;
    imageUrl?: string;
    videoUrl?: string;
    features: string[];
  };
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <div className={`row align-items-center g-5 ${index !== 2 ? 'mb-5 pb-5' : ''}`}>
      {/* Colonne média (image ou vidéo) */}
      <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
        <RevealOnScroll>
          {service.contentType === 'video' ? (
            // Rendu vidéo
            <motion.div 
              className="overflow-hidden rounded-4 position-relative shadow-lg"
              style={{ aspectRatio: '16/9', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                width="100%"
                height="100%"
                src={service.videoUrl}
                title={service.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-4"
              />
            </motion.div>
          ) : (
            // Rendu image
            <motion.div 
              className="overflow-hidden rounded-4 shadow-lg"
              style={{ height: '400px' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={service.imageUrl}
                alt={service.title}
                className="w-100 h-100 object-fit-cover"
              />
            </motion.div>
          )}
        </RevealOnScroll>
      </div>

      {/* Colonne informations */}
      <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
        <RevealOnScroll delay={0.1}>
          <div className="d-flex align-items-center gap-3 mb-4">
            <motion.div 
              className="d-inline-flex align-items-center justify-center rounded-circle"
              style={{ 
                width: '48px', 
                height: '48px',
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
              {service.icon}
            </motion.div>
            <h3 className="fs-4 fw-bold text-white mb-0">{service.title}</h3>
          </div>

          <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            {service.description}
          </p>

          <ul className="list-unstyled mb-0">
            {service.features.map((feature, idx) => (
              <li key={idx} className="d-flex align-items-start gap-3 mb-3 small text-white-50">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: '#FF6600' }} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </div>
  );
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
 
// Pop up formulaire header
const [isContactOpen, setIsContactOpen] = useState(false);

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

// ========================================
// DONNÉES: SERVICES (TEXTE/VIDÉO)
// 3 services avec contentType pour rendu conditionnel
// ========================================
const subServices = [
  {
    icon: <BarChart3 size={24} color="#FF6600"/>,
    title: 'Assistance Comptable & Expertise Financière',
    contentType: 'image' as const,
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop',
    description: 'Expertise comptable et financière de haut niveau pour une gestion rigoureuse et conforme.',
    features: [
      'Mise en place et suivi de la comptabilité',
      'Tenue des journaux et gestion des pièces justificatives',
      'Élaboration des états financiers',
      'Assistance fiscale et parafiscale'
    ]
  },
  {
    icon: <FileCheck size={24} color="#FF6600"/>,
    title: 'Gestion Administrative du Personnel par Délégation (GAPD)',
    contentType: 'video' as const,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Structuration et sécurisation de vos processus de gouvernance pour une performance maîtrisée.',
    features: [
      'Assistance et conseil RH',
      'Suivi des dossiers administratifs',
      'Contrats de travail & formalités',
      'Représentation auprès des administrations',
      'Gestion complète de la paie'
    ]
  },
  {
    icon: <Users2 size={24} color="#FF6600"/>,
    title: 'Conseil organisationnel & Assistance opérationnelle',
    contentType: 'image' as const,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    description: 'Transformation organisationnelle et excellence opérationnelle pour libérer le potentiel de vos équipes.',
    features: [
      'Analyse des besoins et cadrage de mission',
      'Recommandations pratiques et pilotage sur mesure',
      'Intervention rapide de collaborateurs spécialisés'
    ]
  }
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
                    <form className="bg-white bg-opacity-10 p-4 rounded-4">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control bg-white bg-opacity-10 border-0 text-white"
                            placeholder="Nom *"
                            style={{ backdropFilter: "blur(10px)" }}
                          />
                        </div>
            
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control bg-white bg-opacity-10 border-0 text-white"
                            placeholder="Prénom *"
                            style={{ backdropFilter: "blur(10px)" }}
                          />
                        </div>
            
                        <div className="col-12">
                          <input
                            type="email"
                            className="form-control bg-white bg-opacity-10 border-0 text-white"
                            placeholder="Email *"
                            style={{ backdropFilter: "blur(10px)" }}
                          />
                        </div>
            
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control bg-white bg-opacity-10 border-0 text-white"
                            placeholder="Entreprise *"
                            style={{ backdropFilter: "blur(10px)" }}
                          />
                        </div>
            
                        <div className="col-12">
                          <select
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
    SECTION: HERO OPTIMISÉE (Plein écran strict)
    ======================================== */}
<section 
  ref={heroRef} 
  className="position-relative d-flex align-items-center overflow-hidden" 
  style={{ 
    height: '100vh', 
    maxHeight: '100vh', 
    backgroundColor: '#FF6600'
  }}
>
  {/* Fond avec Overlay */}
  <motion.div 
    className="position-absolute top-0 start-0 w-100 h-100" 
    style={{ scale: heroScale, y: heroY, zIndex: 0 }}
  >
    <img 
      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
      alt="Strategy Meeting" 
      className="w-100 h-100 object-fit-cover" 
      style={{ opacity: 0.15 }} 
    />
    <div 
      className="position-absolute top-0 start-0 w-100 h-100" 
      style={{ background: 'linear-gradient(90deg, #ffffff 20%, rgba(49, 8, 63, 1) 100%)' }} 
    />
  </motion.div>

  <div className="container position-relative" style={{ zIndex: 10, marginTop: '40px' }}>
    <div className="row align-items-center">
      
      {/* Texte avec couleur Charisma */}
      <motion.div 
        className="col-lg-7 text-center text-lg-start"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
      >
        <h1 className="mb-4 fw-medium" style={{ maxWidth: '550px', fontSize: '2rem', color: '#671265', lineHeight: '1.4' }}>
          Nous vous accompagnons dans la gestion comptable, financière et RH pour optimiser vos performances et gagner en sérénité. Des opérations fluides, conformes et parfaitement maîtrisées.
        </h1>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
          {/* Premier bouton : Bright Fuchsia -> Dark Magenta */}
          <motion.a 
            href="#contact"
            className="btn btn-lg text-white fw-bold px-4 py-3 border-0"
            style={{ 
              backgroundColor: '#FF00FF', // Bright Fuchsia
              fontSize: '1rem',
              borderRadius: '8px'
            }}
            whileHover={{ 
              backgroundColor: '#8B008B', // Dark Magenta
              scale: 1.05 
            }}
            transition={{ duration: 0.2 }}
          >
            Prendre rendez-vous
          </motion.a>

          {/* Deuxième bouton : Bright Fuchsia -> Dark Magenta */}
          <motion.a 
            href="#methodology"
            className="btn btn-lg text-white fw-bold px-4 py-3 border-0"
            style={{ 
              backgroundColor: '#FF00FF', // Bright Fuchsia
              fontSize: '1rem',
              borderRadius: '8px'
            }}
            whileHover={{ 
              backgroundColor: '#8B008B', // Dark Magenta
              scale: 1.05 
            }}
            transition={{ duration: 0.2 }}
          >
            Diagnostic gratuit
          </motion.a>
        </div>
      </motion.div>

      {/* Image décorative */}
      <motion.div className="col-lg-5 d-none d-lg-block">
        <div className="position-relative ms-auto" style={{ maxWidth: '400px' }}>
          <div className="rounded-4 overflow-hidden border border-white border-opacity-10 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80" 
              className="w-100"
              style={{ height: '300px', objectFit: 'cover' }}
              alt="Performance"
            />
          </div>
          <div 
            className="position-absolute bg-white px-3 py-2 rounded-3 shadow-lg"
            style={{ bottom: '-10px', left: '-10px' }}
          >
             <div className="text-center">
                <span className="h4 fw-bold mb-0" style={{ color: '#FF6600' }}>98%</span>
                <div className="small fw-bold text-dark" style={{ fontSize: '0.65rem' }}>Satisfaction</div>
             </div>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>


{/* Methodology Timeline - Version Horizontale avec Animation Progressive */}
<section 
  id="methodology" 
  className="py-5 bg-white position-relative overflow-hidden"
>
  <div className="container py-4">
    <RevealOnScroll>
      <div className="text-center mb-5">
        <span className="text-uppercase fw-bold" style={{ color: '#FF8C32', letterSpacing: '0.15em', fontSize: '0.75rem' }}>
          Notre Méthodologie
        </span>
        <h2 className="display-6 fw-bold mt-2" style={{ color: '#31083F' }}>Le Chemin vers l'Excellence</h2>
        <div className="mx-auto rounded-pill mt-3" style={{ width: '60px', height: '4px', backgroundColor: '#FF8C32' }} />
      </div>
    </RevealOnScroll>

    <div className="row g-4 position-relative">
      {/* Ligne de fond (grise) */}
      <div 
        className="position-absolute d-none d-lg-block" 
        style={{ 
          top: '45px', 
          left: '10%', 
          right: '10%', 
          height: '3px', 
          backgroundColor: '#E0E0E0', 
          zIndex: 0 
        }} 
      />

      {/* Ligne de progression animée (orange) */}
      <motion.div 
        className="position-absolute d-none d-lg-block" 
        initial={{ width: '0%' }}
        whileInView={{ width: '80%' }}
        viewport={{ once: true }}
        transition={{ 
          duration: 2,
          delay: 0.5,
          ease: "easeInOut"
        }}
        style={{ 
          top: '45px', 
          left: '10%', 
          height: '3px', 
          backgroundColor: '#FF8C32', 
          zIndex: 1,
          boxShadow: '0 0 10px rgba(255, 140, 50, 0.5)'
        }} 
      />

      {methodology.map((step, index) => (
        <div key={index} className="col-lg-3 col-md-6">
          <motion.div 
            className="text-center position-relative"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.3, // Délai progressif pour chaque étape
              ease: "easeOut"
            }}
            style={{ zIndex: 2 }}
          >
            
            {/* Cercle avec Icône */}
            <motion.div 
              className="mx-auto d-flex align-items-center justify-content-center rounded-circle shadow-sm mb-4"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.3 + 0.2,
                ease: "backOut"
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 10px 30px rgba(255, 140, 50, 0.3)'
              }}
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#fff',
                border: '3px solid #FF8C32',
                color: '#671265',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {React.cloneElement(step.icon, { size: 32 })}
              
              {/* Numéro d'étape avec animation */}
              <motion.div 
                className="position-absolute rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.3 + 0.4,
                  ease: "backOut"
                }}
                style={{
                  top: '0',
                  right: 'calc(50% - 45px)',
                  width: '28px',
                  height: '28px',
                  backgroundColor: '#31083F',
                  fontSize: '0.75rem',
                  border: '2px solid #fff'
                }}
              >
                {index + 1}
              </motion.div>

              {/* Effet de pulsation au survol */}
              <motion.div
                className="position-absolute rounded-circle"
                style={{
                  width: '100%',
                  height: '100%',
                  border: '2px solid #FF8C32',
                  opacity: 0
                }}
                whileHover={{
                  scale: [1, 1.2, 1.4],
                  opacity: [0.8, 0.4, 0],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeOut"
                  }
                }}
              />
            </motion.div>

            {/* Contenu Texte avec animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.3 + 0.3
              }}
            >
              <h5 className="fw-bold mb-3" style={{ color: '#31083F', fontSize: '1.1rem' }}>
                {step.title}
              </h5>
              <p className="text-muted small px-3 mb-0" style={{ lineHeight: '1.5' }}>
                {step.description}
              </p>
            </motion.div>

            {/* Flèche de progression (sauf pour le dernier élément) */}
            {index < methodology.length - 1 && (
              <motion.div
                className="position-absolute d-none d-lg-block"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.3 + 0.5
                }}
                style={{
                  top: '35px',
                  right: '-15%',
                  color: '#FF8C32',
                  fontSize: '1.5rem',
                  zIndex: 3
                }}
              >
                
              </motion.div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Featured Offers */}
     {/* ========================================
    SECTION: SERVICES
    Utilise le composant ServiceCard pour chaque service
    ======================================== */}
<section className="py-5" style={{ backgroundColor: '#000000' }}>
  <div className="container py-5">
    <RevealOnScroll>
      <div className="text-center mb-5">
        <span className="text-uppercase fw-bold small" style={{ color: '#FF9682', letterSpacing: '0.15em' }}>
          Nos Services
        </span>
        <h2 className="display-6 fw-bold text-white mt-2">Excellence & Expertise</h2>
      </div>
    </RevealOnScroll>

    {subServices.map((service, index) => (
      <ServiceCard key={index} service={service} index={index} />
    ))}
  </div>
</section>

     {/* CTA Final */}
<section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: '#31083F' }}>
  <motion.div 
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background: 'linear-gradient(to right, #0A1A2F, rgba(255, 0, 255, 0.1), #0A1A2F)', // Touche de Fuschia dans le gradient
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
            background: 'linear-gradient(to right, #FF00FF, #FF8C32)', // Dégradé Fuschia vers Orange Aura
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
        {/* Bouton Principal : Bright Fuschia -> Charisma */}
        <motion.a 
          href="#contact"
          className="btn btn-lg fw-bold text-white shadow-lg border-0"
          style={{ 
            backgroundColor: '#FF00FF', // Bright Fuschia
            padding: '15px 35px',
            borderRadius: '12px',
            boxShadow: '0 10px 20px rgba(103, 18, 101, 0.3)' 
          }}
          whileHover={{ 
            backgroundColor: '#671265', // Charisma
            scale: 1.05, 
            y: -4, 
            boxShadow: '0 15px 30px rgba(103, 18, 101, 0.5)' 
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Contacter un consultant
        </motion.a>

        {/* Bouton Secondaire : Bright Fuschia -> Charisma */}
        <motion.a 
          href="#"
          className="btn btn-lg fw-bold text-white shadow-lg border-0"
          style={{
            backgroundColor: '#FF00FF', // Bright Fuschia
            padding: '15px 35px',
            borderRadius: '12px',
            boxShadow: '0 10px 20px rgba(103, 18, 101, 0.3)'
          }}
          whileHover={{ 
            backgroundColor: '#671265', // Charisma
            scale: 1.05, 
            y: -4,
            boxShadow: '0 15px 30px rgba(103, 18, 101, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Télécharger la brochure
        </motion.a>
      </div>
    </RevealOnScroll>
  </div>
</section>
      {/* Footer - Same as Homepage */}
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
                  <span>contact@cabinet-performances.com</span>
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

export default AssistanceConseilsPage;