import React, { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Users, BarChart3, Monitor, Shield, Award, Target, 
  Flag, Globe, Download, Menu, ArrowRight,
  MapPin, Phone, Mail, CheckCircle, Linkedin, Facebook, MessageCircle,
  ChevronDown, Clock, UserCheck, X, PlayCircle
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// Types
interface Course {
  code: string;
  title: string;
  color: string;
  duration: string;
  participants: string;
  objectives: string[];
  audience: string[];
  prerequisites: string;
  methods: string[];
  icon: React.ReactNode;
}

interface FormationType {
  name: string;
  courses: Course[];
}

interface Domain {
  name: string;
  icon: React.ReactNode;
  types: FormationType[];
}

// Mock Data
const FORMATIONS_DATA: Domain[] = [
  {
    name: 'Qualité, Sécurité & Environnement (QSE)',
    icon: <Shield size={24} />,
    types: [
      {
        name: 'Certificats',
        courses: [
          {
            code: 'SE 100',
            title: 'MANAGEMENT SÉCURITÉ - ISO 45001',
            color: '#FF6600',
            duration: '2 à 4 jours',
            participants: '1 à 4 personnes',
            objectives: [
              'Comprendre les exigences de la norme ISO 45001',
              'Mettre en place un système de management de la santé et sécurité au travail',
              'Identifier et évaluer les risques professionnels',
              'Élaborer une politique de prévention efficace'
            ],
            audience: [
              'Responsables QSE',
              'Directeurs HSE',
              'Chefs de projet sécurité',
              'Responsables de sites industriels'
            ],
            prerequisites: 'Expérience en environnement industriel souhaitée',
            methods: [
              'Études de cas réels',
              'Ateliers pratiques d\'évaluation des risques',
              'Simulations de mise en conformité',
              'Exercices d\'audit interne'
            ],
            icon: <Shield size={20} />
          },
          {
            code: 'SE 101',
            title: 'Auditeur Interne ISO 45001',
            color: '#FF6600',
            duration: '3 jours',
            participants: '4 à 8 personnes',
            objectives: [
              'Maîtriser les techniques d\'audit ISO 45001',
              'Conduire un audit interne efficace',
              'Rédiger des rapports d\'audit pertinents'
            ],
            audience: ['Auditeurs internes', 'Responsables qualité', 'Consultants QSE'],
            prerequisites: 'Connaissance de la norme ISO 45001',
            methods: ['Jeux de rôle d\'audit', 'Cas pratiques', 'Rédaction de rapports'],
            icon: <Shield size={20} />
          }
        ]
      },
      {
        name: 'Formations Diplômantes',
        courses: [
          {
            code: 'SE 200',
            title: 'Diplôme Supérieur en Management QSE',
            color: '#FF6600',
            duration: '6 mois',
            participants: '10 à 20 personnes',
            objectives: [
              'Obtenir un diplôme reconnu en management QSE',
              'Maîtriser l\'ensemble des référentiels ISO (9001, 14001, 45001)',
              'Développer une expertise en gestion des risques'
            ],
            audience: ['Professionnels QSE', 'Cadres en reconversion', 'Managers industriels'],
            prerequisites: 'Bac+3 ou expérience professionnelle équivalente',
            methods: ['Cours magistraux', 'Projets de groupe', 'Mémoire professionnel'],
            icon: <Shield size={20} />
          }
        ]
      },
      {
        name: 'Formations Qualifiantes',
        courses: [
          {
            code: 'SE 300',
            title: 'Gestes et Postures au Travail',
            color: '#FF6600',
            duration: '1 jour',
            participants: '8 à 12 personnes',
            objectives: [
              'Prévenir les troubles musculosquelettiques',
              'Adopter les bonnes postures au travail',
              'Appliquer les techniques de manutention'
            ],
            audience: ['Tous salariés', 'Opérateurs de production', 'Personnel logistique'],
            prerequisites: 'Aucun',
            methods: ['Démonstrations pratiques', 'Exercices physiques', 'Mise en situation'],
            icon: <Shield size={20} />
          }
        ]
      }
    ]
  },
  {
    name: 'Management & Leadership',
    icon: <Users size={24} />,
    types: [
      {
        name: 'Certificats',
        courses: [
          {
            code: 'MG 100',
            title: 'Manager une équipe performante',
            color: '#FF6600',
            duration: '3 jours',
            participants: '6 à 10 personnes',
            objectives: [
              'Développer son leadership',
              'Maîtriser les techniques de délégation',
              'Gérer les conflits d\'équipe',
              'Motiver et fédérer ses collaborateurs'
            ],
            audience: ['Managers', 'Chefs d\'équipe', 'Superviseurs', 'Team leaders'],
            prerequisites: 'Expérience en encadrement d\'équipe',
            methods: ['Coaching de groupe', 'Jeux de rôle', 'Plans d\'action personnalisés'],
            icon: <Users size={20} />
          }
        ]
      },
      {
        name: 'Formations Qualifiantes',
        courses: [
          {
            code: 'MG 300',
            title: 'Conduite de réunion efficace',
            color: '#FF6600',
            duration: '2 jours',
            participants: '8 à 12 personnes',
            objectives: [
              'Préparer et animer des réunions productives',
              'Gérer les participants difficiles',
              'Favoriser la prise de décision collective'
            ],
            audience: ['Cadres', 'Chefs de projet', 'Animateurs'],
            prerequisites: 'Aucun',
            methods: ['Simulations de réunions', 'Feedback vidéo', 'Outils collaboratifs'],
            icon: <Users size={20} />
          }
        ]
      }
    ]
  },
  {
    name: 'Finance & Comptabilité',
    icon: <BarChart3 size={24} />,
    types: [
      {
        name: 'Certificats',
        courses: [
          {
            code: 'FC 100',
            title: 'Comptabilité SYSCOHADA Révisé',
            color: '#FF6600',
            duration: '5 jours',
            participants: '6 à 12 personnes',
            objectives: [
              'Maîtriser le référentiel SYSCOHADA révisé',
              'Tenir une comptabilité conforme',
              'Établir les états financiers OHADA'
            ],
            audience: ['Comptables', 'Contrôleurs de gestion', 'DAF'],
            prerequisites: 'Notions de base en comptabilité',
            methods: ['Cas pratiques', 'Exercices comptables', 'Logiciel de gestion'],
            icon: <BarChart3 size={20} />
          }
        ]
      }
    ]
  },
  {
    name: 'Bureautique & Informatique',
    icon: <Monitor size={24} />,
    types: [
      {
        name: 'Formations Qualifiantes',
        courses: [
          {
            code: 'IT 300',
            title: 'Excel Avancé pour Financiers',
            color: '#FF6600',
            duration: '3 jours',
            participants: '8 à 12 personnes',
            objectives: [
              'Maîtriser les tableaux croisés dynamiques',
              'Créer des macros et automatiser des tâches',
              'Utiliser les fonctions financières avancées'
            ],
            audience: ['Financiers', 'Contrôleurs de gestion', 'Analystes'],
            prerequisites: 'Bonne maîtrise d\'Excel de base',
            methods: ['Exercices pratiques', 'Cas d\'entreprise', 'Projets individuels'],
            icon: <Monitor size={20} />
          }
        ]
      }
    ]
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const RevealOnScroll: React.FC<{ children: React.ReactNode; variant?: any }> = ({ children, variant = fadeInUp }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
    >
      {children}
    </motion.div>
  );
};

// Preview Modal Component
const PreviewModal: React.FC<{ course: Course | null; onClose: () => void }> = ({ course, onClose }) => {
  
  // --- AJOUT POUR BLOQUER LE SCROLL ---
  useEffect(() => {
    if (course) {
      // Si un cours est sélectionné, on bloque le scroll du body
      document.body.style.overflow = 'hidden';
    } else {
      // Sinon on le remet par défaut
      document.body.style.overflow = 'unset';
    }

    // Sécurité : si le composant est démonté brutalement, on réactive le scroll
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [course]);
  // ------------------------------------

  if (!course) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
        style={{
          zIndex: 9999,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-4 shadow-lg position-relative overflow-hidden"
          style={{ maxWidth: '900px', width: '90%', maxHeight: '90vh', overflow: 'auto' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header avec couleur */}
          <div 
            className="p-4 text-white position-relative"
            style={{ backgroundColor: course.color }}
          >
            <button
              onClick={onClose}
              className="btn btn-sm btn-light rounded-circle position-absolute top-0 end-0 m-3"
              style={{ width: '36px', height: '36px', padding: 0 }}
            >
              <X size={20} />
            </button>
            
            <div className="d-flex align-items-center gap-3 mb-3">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center bg-white bg-opacity-25"
                style={{ width: '56px', height: '56px' }}
              >
                {course.icon}
              </div>
              <div>
                <div className="badge bg-white bg-opacity-25 mb-2">{course.code}</div>
                <h3 className="fw-bold mb-0">{course.title}</h3>
              </div>
            </div>

            {/* Organisation */}
            <div className="d-flex gap-4 mt-4">
              <div className="d-flex align-items-center gap-2">
                <Clock size={20} />
                <div>
                  <div className="small opacity-75">Durée</div>
                  <div className="fw-semibold">{course.duration}</div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <UserCheck size={20} />
                <div>
                  <div className="small opacity-75">Effectif</div>
                  <div className="fw-semibold">{course.participants}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu principal - 2 colonnes */}
          <div className="row g-0">
            <div className="col-lg-6 p-4 border-end">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: course.color }}>
                <Target size={20} />
                Objectifs visés
              </h5>
              <ul className="list-unstyled">
                {course.objectives.map((obj, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-start gap-2">
                    <CheckCircle size={16} className="mt-1 flex-shrink-0" style={{ color: course.color }} />
                    <span className="small">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-6 p-4">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: course.color }}>
                <Users size={20} />
                Personnel concerné
              </h5>
              <ul className="list-unstyled">
                {course.audience.map((aud, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-start gap-2">
                    <ArrowRight size={16} className="mt-1 flex-shrink-0" style={{ color: course.color }} />
                    <span className="small">{aud}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer gris */}
          <div className="p-4" style={{ backgroundColor: '#F3F4F6' }}>
            <div className="row g-4">
              <div className="col-md-6">
                <h6 className="fw-bold mb-2 small text-uppercase" style={{ color: '#6B7280' }}>
                  Prérequis
                </h6>
                <p className="small mb-0">{course.prerequisites}</p>
              </div>
              <div className="col-md-6">
                <h6 className="fw-bold mb-2 small text-uppercase" style={{ color: '#6B7280' }}>
                  Méthodes pédagogiques
                </h6>
                <ul className="list-unstyled mb-0">
                  {course.methods.map((method, idx) => (
                    <li key={idx} className="small mb-1">• {method}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="p-4 border-top">
            <div className="d-flex gap-3 justify-content-end">
              <button 
                className="btn btn-outline-secondary"
                onClick={onClose}
              >
                Fermer
              </button>
              <button 
                className="btn text-white fw-semibold"
                style={{ backgroundColor: course.color }}
              >
                Demander un devis
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const FormationsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [openDomains, setOpenDomains] = useState<{ [key: number]: boolean }>({});
  const [openTypes, setOpenTypes] = useState<{ [key: string]: boolean }>({});

  const toggleDomain = (index: number) => {
    setOpenDomains(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleType = (key: string) => {
    setOpenTypes(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Pop up formulaire header
  const [isContactOpen, setIsContactOpen] = useState(false);

  // États pour les compteurs de stats
const [formationsCount, setFormationsCount] = useState(0);
const [participantsCount, setParticipantsCount] = useState(0);
const [satisfactionCount, setSatisfactionCount] = useState(0);


  // Formations phares pour la première section
  const featuredCourses = [
    FORMATIONS_DATA[0].types[0].courses[0], // SE 100
    FORMATIONS_DATA[1].types[0].courses[0], // MG 100
    FORMATIONS_DATA[2].types[0].courses[0]  // FC 100
  ];

  // Animation des compteurs de stats
useEffect(() => {
  const animateCounter = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    target: number,
    duration: number = 2000
  ) => {
    const startTime = Date.now();
    
    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const current = Math.floor(progress * target);
      setter(current);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setter(target);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  // Démarrer les animations avec des délais échelonnés
  const timer1 = setTimeout(() => animateCounter(setFormationsCount, 150, 2000), 500);
  const timer2 = setTimeout(() => animateCounter(setParticipantsCount, 2500, 2500), 700);
  const timer3 = setTimeout(() => animateCounter(setSatisfactionCount, 98, 2000), 900);

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
  };
}, []);


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
                

   {/* Hero Section - Professional Layout */}
<section 
  className="position-relative overflow-hidden"
  style={{ marginTop: '60px', backgroundColor: '#FAFAFA', minHeight: 'calc(100vh - 60px)', fontFamily: 'Miguer Sans, sans-serif' }}
>
  <div className="container pt-4">
    <div className="row align-items-center g-5 py-3">
      {/* Texte à gauche */}
      <div className="col-lg-6">
        <RevealOnScroll variant={slideInLeft}>               
          <h1 
            className="display-4 fw-bold mb-3" 
            style={{ color: '#31083F', lineHeight: '1.1' }}
          >
            Développez vos compétences avec nos{' '}
            <span 
              style={{
                background: 'linear-gradient(to right, #FF6600, #FF6600)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              formations 
            </span>
          </h1>

          <p className="lead text-muted mb-4">
            Explorez nos catalogues et trouvez la formation qu’il vous faut
            et qui répond à vos besoins
          </p>

          <div className="d-flex gap-3 flex-wrap mb-4">
            <motion.a 
              href="#catalogue" 
              className="btn btn-lg fw-semibold text-white shadow px-4 py-3"
              style={{ 
                backgroundColor: '#31083F',
                border: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                borderRadius: '8px'
              }}
              whileHover={{ 
                backgroundColor: '#8B008B',
                scale: 1.02
              }}
              transition={{ duration: 0.2 }}
            >
              Explorer le catalogue
            </motion.a>
          </div>

          {/* Stats */}
          <div className="d-flex gap-4 pt-2">
            <div>
              <div className="fw-bold fs-3" style={{ color: '#FF6600' }}>{formationsCount}+</div>
              <div className="small text-muted">Formations</div>
            </div>
            <div>
              <div className="fw-bold fs-3" style={{ color: '#FF6600' }}>{participantsCount.toLocaleString('fr-FR')}+</div>
              <div className="small text-muted">Participants</div>
            </div>
            <div>
              <div className="fw-bold fs-3" style={{ color: '#FF6600' }}>{satisfactionCount}%</div>
              <div className="small text-muted">Satisfaction</div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Image à droite */}
      <div className="col-lg-6">
        <RevealOnScroll variant={slideInRight}>
          <div className="position-relative">
            <div className="rounded-4 overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Formation professionnelle"
                className="w-100"
                style={{ height: '420px', objectFit: 'cover' }}
              />
            </div>
            
            {/* Badge flottant */}
            <motion.div 
              className="position-absolute bg-white p-3 rounded-3 shadow-lg"
              style={{ bottom: '20px', left: '20px', maxWidth: '260px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="d-flex align-items-center gap-2 mb-1">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '40px',
                    height: '40px', 
                    backgroundColor: '#FF6600' 
                  }}
                >
                  <Award size={20} color="white" />
                </div>
                <div>
                  <div className="fw-bold small" style={{ color: '#FF6600', fontSize: '0.9rem' }}>Agréé FDFP depuis 2002</div>
                  <div className="small text-muted" style={{ fontSize: '0.75rem' }}>Certifié & Reconnu</div>
                </div>
              </div>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </div>
</section>

   {/* Formations Phares Section */}
<section className="py-4 bg-white">
  <div className="container py-2">
    {/* En-tête de section */}
    <RevealOnScroll>
      <div className="text-center mb-4">
        <span 
          className="text-uppercase fw-bold small"
          style={{ color: '#FF9682', letterSpacing: '0.15em' }}
        >
          Les plus demandées
        </span>
        <h2 className="display-6 fw-bold mt-1" style={{ color: '#31083F' }}>
          Formations Phares
        </h2>
        <div 
          className="mx-auto rounded-pill mt-2"
          style={{ width: '64px', height: '4px', backgroundColor: '#FF9682' }}
        />
      </div>
    </RevealOnScroll>

    {/* Grille des cartes avec align-items-stretch pour forcer la hauteur égale */}
    <div className="row g-4 d-flex align-items-stretch">
      {featuredCourses.map((course, index) => (
        <div key={index} className="col-md-6 col-lg-4 d-flex">
          {/* Div wrapper pour contourner l'erreur TypeScript de RevealOnScroll */}
          <div className="w-100 d-flex flex-column">
            <RevealOnScroll>
              <motion.div 
                className="card border-0 shadow-sm w-100 d-flex flex-column"
                style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  height: '100%', // Force la carte à prendre toute la hauteur du parent
                  backgroundColor: '#fff' 
                }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                {/* 1. Header avec HAUTEUR FIXE (Crucial pour l'alignement) */}
                <div 
                  className="p-4 text-white d-flex flex-column justify-content-center"
                  style={{ 
                    backgroundColor: '#671265', 
                    height: '140px' 
                  }}
                >
                  <div className="d-flex align-items-start justify-content-between mb-2">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center bg-white bg-opacity-25"
                      style={{ width: '36px', height: '36px' }}
                    >
                      {course.icon}
                    </div>
                    <div className="badge bg-white text-dark fw-bold" style={{ fontSize: '0.7rem' }}>
                      {course.code}
                    </div>
                  </div>
                  {/* Titre limité à 2 lignes pour éviter que la 1ère carte ne descende trop */}
                  <h5 
                    className="fw-bold mb-0" 
                    style={{ 
                      fontSize: '1.1rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {course.title}
                  </h5>
                </div>

                {/* 2. Corps de la carte */}
                <div className="card-body p-4 d-flex flex-column flex-grow-1">
                  {/* Infos secondaires */}
                  <div className="d-flex gap-3 mb-3 small text-muted">
                    <div className="d-flex align-items-center gap-1">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <UserCheck size={14} />
                      <span>{course.participants}</span>
                    </div>
                  </div>

                  {/* 3. Zone de texte avec HAUTEUR FIXE et TRONCATURE (Empêche les dépassements) */}
                  <div className="flex-grow-1">
                    <p 
                      className="text-muted small mb-0"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3, // Limite à 3 lignes
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        height: '4.5em', // Assure que même un texte court prend cette place
                        lineHeight: '1.5em'
                      }}
                    >
                      {course.objectives.join('. ')}
                    </p>
                  </div>

                  {/* 4. Bouton poussé vers le bas par mt-auto */}
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="btn w-100 fw-semibold d-flex align-items-center justify-content-center gap-2 mt-4"
                    style={{
                      backgroundColor: '#671265',
                      color: 'white',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '8px'
                    }}
                  >
                    <PlayCircle size={18} />
                    Détails
                  </button>
                </div>
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Modal de prévisualisation */}
      <PreviewModal 
        course={selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
      />

     {/* Catalogue Complet - Accordions Imbriqués */}
<section id="catalogue" className="py-4" style={{ backgroundColor: '#F8F9FA' }}>
  <div className="container py-2">
    <RevealOnScroll>
      <div className="text-center mb-4">
        <span 
          className="text-uppercase fw-bold small"
          style={{ color: '#FF9682', letterSpacing: '0.15em' }}
        >
          Catalogue complet
        </span>
        <h2 className="display-6 fw-bold mt-1" style={{ color: '#31083F' }}>
          Toutes nos formations
        </h2>
        <div 
          className="mx-auto rounded-pill mt-2"
          style={{ width: '64px', height: '4px', backgroundColor: '#FF9682' }}
        />
      </div>
    </RevealOnScroll>

    

    <div className="row row-cols-1 row-cols-lg-2 g-3">
      {FORMATIONS_DATA.map((domain, domainIndex) => (
        <div key={domainIndex} className="col">
          <RevealOnScroll>
            <div 
              className="bg-white rounded-3 shadow-sm h-100"
              style={{ overflow: 'hidden', border: '1px solid #eee' }}
            >
              {/* Niveau 1 - Domaine */}
              <motion.button
                className="w-100 d-flex align-items-center justify-content-between p-3 border-0 bg-white"
                onClick={() => toggleDomain(domainIndex)}
                whileHover={{ backgroundColor: '#F8F9FA' }}
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ 
                      width: '40px',
                      height: '40px', 
                      backgroundColor: '#8B008B', // Changement en Dark Magenta
                      color: 'white',
                      flexShrink: 0
                    }}
                  >
                    {domain.icon}
                  </div>
                  <h6 className="fw-bold mb-0 text-start" style={{ color: '#8B008B' }}> {/* Titre en Dark Magenta */}
                    {domain.name}
                  </h6>
                </div>
                <motion.div
                  animate={{ rotate: openDomains[domainIndex] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} style={{ color: '#8B008B' }} />
                </motion.div>
              </motion.button>

              {/* Contenu du domaine */}
              <AnimatePresence>
                {openDomains[domainIndex] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-3 pb-3">
                      <div className="d-flex flex-column gap-2">
                        {domain.types.map((type, typeIndex) => {
                          const typeKey = `${domainIndex}-${typeIndex}`;
                          return (
                            <div 
                              key={typeIndex}
                              className="border rounded-2"
                              style={{ backgroundColor: '#FAFAFA' }}
                            >
                              {/* Niveau 2 - Type de formation */}
                              <motion.button
                                className="w-100 d-flex align-items-center justify-content-between p-2 border-0"
                                onClick={() => toggleType(typeKey)}
                                whileHover={{ backgroundColor: '#F3F4F6' }}
                                style={{ cursor: 'pointer', backgroundColor: 'transparent' }}
                              >
                                <div className="d-flex align-items-center gap-2">
                                  <div style={{ width: '3px', height: '18px', backgroundColor: '#FF9682' }} />
                                  <span className="fw-semibold mb-0 small" style={{ color: '#31083F' }}>
                                    {type.name} 
                                    <span className="text-muted ms-1" style={{ fontSize: '0.75rem' }}>
                                      ({type.courses.length})
                                    </span>
                                  </span>
                                </div>
                                <motion.div
                                  animate={{ rotate: openTypes[typeKey] ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown size={16} style={{ color: '#31083F' }} />
                                </motion.div>
                              </motion.button>

                              {/* Niveau 3 - Liste des formations */}
                              <AnimatePresence>
                                {openTypes[typeKey] && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    style={{ overflow: 'hidden' }}
                                  >
                                    <div className="px-2 pb-2">
                                      {type.courses.map((course, courseIndex) => (
                                        <div
                                          key={courseIndex}
                                          className="p-2 mb-1 bg-white rounded border-bottom d-flex align-items-center justify-content-between"
                                          style={{ cursor: 'pointer', fontSize: '0.85rem' }}
                                          onClick={() => setSelectedCourse(course)}
                                        >
                                          <div className="text-truncate me-2">
                                            <span className="fw-bold me-2" style={{ color: course.color, fontSize: '0.75rem' }}>
                                              {course.code}
                                            </span>
                                            {course.title}
                                          </div>
                                          <PlayCircle size={14} style={{ color: course.color, flexShrink: 0 }} />
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>                        
                            </div>
                          );
                        })}
                        
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </RevealOnScroll>          
        </div>
      ))}
    </div>
    
    <br></br>
      <RevealOnScroll>
      <div className="text-center mb-4">
        <p className="text-muted mb-3">
          Explorez notre catalogue détaillé avec toutes les références et thématiques
        </p>
        <Link 
          to="/catalogue-de-formations"
          className="btn btn-lg fw-semibold text-white d-inline-flex align-items-center gap-2 shadow-sm"
          style={{ 
            backgroundColor: '#671265',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '10px'
          }}
        >
          📚 Consulter le Catalogue Complet
          <ArrowRight size={20} />
        </Link>
      </div>
    </RevealOnScroll>
  </div>
</section>

     {/* Why Choose Us Section - Version Compacte */}
<section className="py-4 bg-white"> {/* py-5 -> py-4 */}
  <div className="container py-2"> {/* py-5 -> py-2 */}
    <div className="row g-4 align-items-center"> {/* g-5 -> g-4 */}
      
      {/* Colonne Texte */}
      <div className="col-lg-6">
        <RevealOnScroll variant={slideInLeft}>
          <span 
            className="text-uppercase fw-bold"
            style={{ 
              color: '#FF6600',
              letterSpacing: '0.12em',
              fontSize: '0.75rem' // Plus petit
            }}
          >
            Notre Différence
          </span>
          <h2 className="h1 fw-bold mt-1 mb-3" style={{ color: '#31083F' }}>
            Pourquoi nous choisir ?
          </h2>
          
          <div className="d-flex flex-column gap-3"> {/* gap-4 -> gap-3 */}
            {/* Item 1 */}
            <motion.div 
              className="d-flex gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div 
                className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '40px', // 48px -> 40px
                  height: '40px',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  color: '#FF6600'
                }}
              >
                <Award size={20} />
              </div>
              <div>
                <h6 className="fw-bold mb-1" style={{ color: '#0B1120' }}>Formateurs Experts</h6>
                <p className="text-muted mb-0 small">
                  Consultants seniors certifiés avec 10+ ans d'expérience terrain.
                </p>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div 
              className="d-flex gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div 
                className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  color: '#FF6600'
                }}
              >
                <Target size={20} />
              </div>
              <div>
                <h6 className="fw-bold mb-1" style={{ color: '#31083F' }}>Approche Pratique 70/30</h6>
                <p className="text-muted mb-0 small">
                  70% d'exercices réels et 30% de théorie pour une application immédiate.
                </p>
              </div>
            </motion.div>

            {/* Item 3 */}
            <motion.div 
              className="d-flex gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div 
                className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  color: '#FF6600'
                }}
              >
                <CheckCircle size={20} />
              </div>
              <div>
                <h6 className="fw-bold mb-1" style={{ color: '#31083F' }}>Certifications Reconnues</h6>
                <p className="text-muted mb-0 small">
                  Agrément FDFP et CDMP. Diplômes reconnus sur le marché africain.
                </p>
              </div>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Colonne Image */}
      <div className="col-lg-6">
        <RevealOnScroll variant={slideInRight}>
          <div className="position-relative">
            <div className="rounded-4 overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Formation en entreprise"
                className="w-100"
                style={{ height: '320px', objectFit: 'cover' }} // 450px -> 320px
              />
            </div>
            
            {/* Badge de satisfaction plus petit */}
            <motion.div 
              className="position-absolute bg-white p-3 rounded-3 shadow-lg"
              style={{ bottom: '15px', left: '15px', maxWidth: '180px' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <div className="h2 fw-bold mb-0" style={{ color: '#FF6600' }}>98%</div>
                <div className="small fw-medium text-dark" style={{ fontSize: '0.7rem' }}>
                  Satisfaction client
                </div>
              </div>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>

    </div>
  </div>
</section>

{/* Catalogues Section - Version Gradient & Fuchsia */}
<section 
  className="py-4 position-relative overflow-hidden"
  style={{
    background: 'linear-gradient(90deg, #FF5CFF 0%, #B829B8 35%, #6A1B9A 70%, #31083F 100%)',
  }}
>
  {/* Cercles décoratifs conservés pour la profondeur */}
  <div 
    className="position-absolute rounded-circle"
    style={{
      top: '-10%',
      left: '25%',
      width: '300px',
      height: '300px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      filter: 'blur(80px)'
    }}
  />

  <div className="container py-2 position-relative" style={{ zIndex: 10 }}>
    <RevealOnScroll>
      <div className="text-center mb-4">
        <h2 className="display-6 fw-bold text-white mb-2" style={{ fontSize: '1.75rem' }}>
          Téléchargez nos Catalogues 2025-2026
        </h2>
        <p className="text-white small opacity-75">
          Planifiez votre plan de formation annuel dès maintenant.
        </p>
      </div>
    </RevealOnScroll>

    <div className="row g-3">
      {/* Catalogue National */}
      <div className="col-md-6">
        <RevealOnScroll>
          <motion.div 
            className="p-4 rounded-4 position-relative overflow-hidden h-100"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.07)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <div className="position-absolute top-0 end-0 p-3 opacity-10">
              <MapPin size={80} color="white" />
            </div>
            
            <div 
              className="d-inline-flex align-items-center justify-content-center mb-3 rounded"
              style={{
                width: '44px',
                height: '44px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FF00FF' // Bright Fuchsia
              }}
            >
              <Flag size={22} />
            </div>

            <h3 className="h4 fw-bold text-white mb-2">Catalogue National</h3>
            <p className="text-white-50 mb-3 small" style={{ lineHeight: '1.4' }}>
              Programmes standardisés et sur-mesure adaptés aux besoins locaux, 
              éligibles aux financements FDFP. Idéal pour les PME et grands comptes.
            </p>
            
            <motion.a 
              href="#" 
              className="btn btn-sm fw-bold d-inline-flex align-items-center gap-2 rounded-pill px-4 py-2"
              style={{ 
                backgroundColor: '#FF00FF', // Bright Fuchsia
                color: 'white',
                border: 'none'
              }}
              whileHover={{ 
                backgroundColor: '#FFFFFF', // Full White
                color: '#FF00FF',
                scale: 1.05
              }}
            >
              <Download size={14} /> Télécharger le PDF
            </motion.a>
          </motion.div>
        </RevealOnScroll>
      </div>

      {/* Catalogue International */}
      <div className="col-md-6">
        <RevealOnScroll>
          <motion.div 
            className="p-4 rounded-4 position-relative overflow-hidden h-100"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.07)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <div className="position-absolute top-0 end-0 p-3 opacity-10">
              <Globe size={80} color="white" />
            </div>
            
            <div 
              className="d-inline-flex align-items-center justify-content-center mb-3 rounded"
              style={{
                width: '44px',
                height: '44px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FF00FF'
              }}
            >
              <Globe size={22} />
            </div>

            <h3 className="h4 fw-bold text-white mb-2">Catalogue International</h3>
            <p className="text-white-50 mb-3 small" style={{ lineHeight: '1.4' }}>
              Formations alignées sur les standards mondiaux, séminaires à l'étranger 
              et certifications. Pour les cadres dirigeants et multinationales.
            </p>
            
            <motion.a 
              href="#" 
              className="btn btn-sm fw-bold d-inline-flex align-items-center gap-2 rounded-pill px-4 py-2"
              style={{ 
                backgroundColor: '#FF00FF',
                color: 'white',
                border: 'none'
              }}
              whileHover={{ 
                backgroundColor: '#FFFFFF',
                color: '#FF00FF',
                scale: 1.05
              }}
            >
              <Download size={14} /> Télécharger le PDF
            </motion.a>
          </motion.div>
        </RevealOnScroll>
      </div>
    </div>
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
    </div>
  );
};

export default FormationsPage;