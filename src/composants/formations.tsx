import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Users, BarChart3, Monitor, Shield, Award, Target, 
  Flag, Globe, Download, Quote, Menu, ArrowRight,
  MapPin, Phone, Mail, CheckCircle, Linkedin, Facebook, MessageCircle,
  ChevronDown, Clock, UserCheck, BookOpen, X, PlayCircle
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
        name: 'Formations Certifiantes',
        courses: [
          {
            code: 'SE 100',
            title: 'MANAGEMENT SÉCURITÉ - ISO 45001',
            color: '#DC2626',
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
            color: '#DC2626',
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
        name: 'Formations Diplomantes',
        courses: [
          {
            code: 'SE 200',
            title: 'Diplôme Supérieur en Management QSE',
            color: '#DC2626',
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
            color: '#DC2626',
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
        name: 'Formations Certifiantes',
        courses: [
          {
            code: 'MG 100',
            title: 'Manager une équipe performante',
            color: '#0B1120',
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
            color: '#0B1120',
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
        name: 'Formations Certifiantes',
        courses: [
          {
            code: 'FC 100',
            title: 'Comptabilité SYSCOHADA Révisé',
            color: '#D4AF37',
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
            color: '#059669',
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

  // Formations phares pour la première section
  const featuredCourses = [
    FORMATIONS_DATA[0].types[0].courses[0], // SE 100
    FORMATIONS_DATA[1].types[0].courses[0], // MG 100
    FORMATIONS_DATA[2].types[0].courses[0]  // FC 100
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

      {/* Hero Section - Professional Layout */}
      <section 
        className="position-relative overflow-hidden"
        style={{ marginTop: '80px', backgroundColor: '#FAFAFA' }}
      >
        <div className="container py-5">
          <div className="row align-items-center g-5 py-5">
            {/* Texte à gauche */}
            <div className="col-lg-6">
              <RevealOnScroll variant={slideInLeft}>              
                <h1 
                  className="display-4 fw-bold mb-4"
                  style={{ color: '#0B1120', lineHeight: '1.2' }}
                >
                  Développez vos compétences avec nos{' '}
                  <span 
                    style={{
                      background: 'linear-gradient(to right, #e1610bff, #B8860B)',
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
                  <a 
                    href="#catalogue" 
                    className="btn btn-lg fw-semibold text-white shadow"
                    style={{ backgroundColor: '#0B1120' }}
                  >
                    Explorer le catalogue
                  </a>
  
                </div>

                <div className="d-flex gap-4 pt-3">
                  <div>
                    <div className="fw-bold fs-3" style={{ color: '#dc540aff' }}>150+</div>
                    <div className="small text-muted">Formations</div>
                  </div>
                  <div>
                    <div className="fw-bold fs-3" style={{ color: '#dc540aff' }}>2500+</div>
                    <div className="small text-muted">Participants formés</div>
                  </div>
                  <div>
                    <div className="fw-bold fs-3" style={{ color: '#dc540aff' }}>98%</div>
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
                      style={{ height: '500px', objectFit: 'cover' }}
                    />
                  </div>
                  
                  {/* Badge flottant */}
                  <motion.div 
                    className="position-absolute bg-white p-4 rounded-3 shadow-lg"
                    style={{ bottom: '20px', left: '20px', maxWidth: '280px' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ 
                          width: '48px', 
                          height: '48px', 
                          backgroundColor: '#df6704ff' 
                        }}
                      >
                        <Award size={24} color="white" />
                      </div>
                      <div>
                        <div className="fw-bold" style={{ color: '#df6704ff' }}>Agréé FDFP  depuis 2002</div>
                        <div className="small text-muted">Certifié & Reconnu</div>
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
      <section className="py-5 bg-white">
        <div className="container py-5">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <span 
                className="text-uppercase fw-bold small"
                style={{ 
                  color: '#df6704ff',
                  letterSpacing: '0.15em'
                }}
              >
                Les plus demandées
              </span>
              <h2 className="display-6 fw-bold mt-2" style={{ color: '#0B1120' }}>
                Formations Phares
              </h2>
              <div 
                className="mx-auto rounded-pill mt-3"
                style={{ 
                  width: '64px',
                  height: '4px',
                  backgroundColor: '#df6704ff'
                }}
              />
              <p className="text-muted mt-3">
                Nos programmes les plus plébiscités par les entreprises
              </p>
            </div>
          </RevealOnScroll>

          <div className="row g-4">
            {featuredCourses.map((course, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <RevealOnScroll>
                  <motion.div 
                    className="card h-100 border-0 shadow-sm"
                    style={{ borderRadius: '16px', overflow: 'hidden' }}
                    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header coloré */}
                    <div 
                      className="p-4 text-white"
                      style={{ backgroundColor: course.color }}
                    >
                      <div className="d-flex align-items-start justify-content-between mb-3">
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center bg-white bg-opacity-25"
                          style={{ width: '48px', height: '48px' }}
                        >
                          {course.icon}
                        </div>
                        <div className="badge bg-white text-dark fw-bold">{course.code}</div>
                      </div>
                      <h5 className="fw-bold mb-0">{course.title}</h5>
                    </div>

                    {/* Corps de la carte */}
                    <div className="card-body p-4">
                      <div className="d-flex gap-3 mb-3 small">
                        <div className="d-flex align-items-center gap-1 text-muted">
                          <Clock size={16} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1 text-muted">
                          <UserCheck size={16} />
                          <span>{course.participants}</span>
                        </div>
                      </div>

                      <p className="text-muted small mb-4">
                        {course.objectives.slice(0, 2).join('. ')}.
                      </p>

                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="btn w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                        style={{
                          backgroundColor: course.color,
                          color: 'white',
                          border: 'none'
                        }}
                      >
                        <PlayCircle size={18} />
                        Prévisualiser la formation
                      </button>
                    </div>
                  </motion.div>
                </RevealOnScroll>
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
      <section id="catalogue" className="py-5" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container py-5">
          <RevealOnScroll>
            <div className="text-center mb-5">
              <span 
                className="text-uppercase fw-bold small"
                style={{ 
                  color: '#df6704ff',
                  letterSpacing: '0.15em'
                }}
              >
                Catalogue complet
              </span>
              <h2 className="display-6 fw-bold mt-2" style={{ color: '#0B1120' }}>
                Toutes nos formations
              </h2>
              <div 
                className="mx-auto rounded-pill mt-3"
                style={{ 
                  width: '64px',
                  height: '4px',
                  backgroundColor: '#df6704ff'
                }}
              />
            </div>
          </RevealOnScroll>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex flex-column gap-3">
                {FORMATIONS_DATA.map((domain, domainIndex) => (
                  <RevealOnScroll key={domainIndex}>
                    <div 
                      className="bg-white rounded-3 shadow-sm"
                      style={{ overflow: 'hidden' }}
                    >
                      {/* Niveau 1 - Domaine */}
                      <motion.button
                        className="w-100 d-flex align-items-center justify-content-between p-4 border-0 bg-white"
                        onClick={() => toggleDomain(domainIndex)}
                        whileHover={{ backgroundColor: '#F8F9FA' }}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div 
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{ 
                              width: '48px', 
                              height: '48px', 
                              backgroundColor: '#0B1120',
                              color: 'white'
                            }}
                          >
                            {domain.icon}
                          </div>
                          <h5 className="fw-bold mb-0" style={{ color: '#0B1120' }}>
                            {domain.name}
                          </h5>
                        </div>
                        <motion.div
                          animate={{ rotate: openDomains[domainIndex] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={24} style={{ color: '#6B7280' }} />
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
                            <div className="px-4 pb-4">
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
                                        className="w-100 d-flex align-items-center justify-content-between p-3 border-0"
                                        onClick={() => toggleType(typeKey)}
                                        whileHover={{ backgroundColor: '#F3F4F6' }}
                                        style={{ 
                                          cursor: 'pointer',
                                          backgroundColor: 'transparent'
                                        }}
                                      >
                                        <div className="d-flex align-items-center gap-2">
                                          <div 
                                            className="rounded"
                                            style={{ 
                                              width: '4px', 
                                              height: '24px', 
                                              backgroundColor: '#df6704ff'
                                            }}
                                          />
                                          <h6 className="fw-semibold mb-0" style={{ color: '#2F475E' }}>
                                            {type.name}
                                            <span className="badge bg-secondary ms-2 small">
                                              {type.courses.length}
                                            </span>
                                          </h6>
                                        </div>
                                        <motion.div
                                          animate={{ rotate: openTypes[typeKey] ? 180 : 0 }}
                                          transition={{ duration: 0.3 }}
                                        >
                                          <ChevronDown size={20} style={{ color: '#9CA3AF' }} />
                                        </motion.div>
                                      </motion.button>

                                      {/* Niveau 3 - Liste des formations */}
                                      <AnimatePresence>
                                        {openTypes[typeKey] && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            style={{ overflow: 'hidden' }}
                                          >
                                            <div className="px-3 pb-3">
                                              <div className="d-flex flex-column gap-2">
                                                {type.courses.map((course, courseIndex) => (
                                                  <motion.div
                                                    key={courseIndex}
                                                    className="p-3 bg-white rounded-2 border"
                                                    whileHover={{ 
                                                      borderColor: course.color,
                                                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                                                    }}
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => setSelectedCourse(course)}
                                                  >
                                                    <div className="d-flex align-items-start justify-content-between">
                                                      <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center gap-2 mb-2">
                                                          <span 
                                                            className="badge fw-bold"
                                                            style={{ 
                                                              backgroundColor: course.color,
                                                              color: 'white'
                                                            }}
                                                          >
                                                            {course.code}
                                                          </span>
                                                          <h6 className="mb-0 fw-semibold" style={{ color: '#0B1120' }}>
                                                            {course.title}
                                                          </h6>
                                                        </div>
                                                        <div className="d-flex gap-3 small text-muted">
                                                          <span className="d-flex align-items-center gap-1">
                                                            <Clock size={14} />
                                                            {course.duration}
                                                          </span>
                                                          <span className="d-flex align-items-center gap-1">
                                                            <UserCheck size={14} />
                                                            {course.participants}
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <button
                                                        className="btn btn-sm"
                                                        style={{
                                                          backgroundColor: course.color,
                                                          color: 'white',
                                                          border: 'none'
                                                        }}
                                                        onClick={(e) => {
                                                          e.stopPropagation();
                                                          setSelectedCourse(course);
                                                        }}
                                                      >
                                                        <PlayCircle size={16} />
                                                      </button>
                                                    </div>
                                                  </motion.div>
                                                ))}
                                              </div>
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <RevealOnScroll variant={slideInLeft}>
                <span 
                  className="text-uppercase fw-bold small"
                  style={{ 
                    color: '#da5706ff',
                    letterSpacing: '0.15em'
                  }}
                >
                  Notre Différence
                </span>
                <h2 className="display-6 fw-bold mt-2 mb-4" style={{ color: '#0B1120' }}>
                  Pourquoi choisir Cabinet Performances ?
                </h2>
                
                <div className="d-flex flex-column gap-4">
                  <motion.div 
                    className="d-flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div 
                      className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        color: '#df7008ff'
                      }}
                    >
                      <Award size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2" style={{ color: '#0B1120' }}>
                        Formateurs Experts
                      </h5>
                      <p className="text-muted mb-0">
                        Consultants seniors certifiés avec 10+ ans d'expérience terrain dans leurs domaines.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="d-flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div 
                      className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        color: '#d55200ff'
                      }}
                    >
                      <Target size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2" style={{ color: '#0B1120' }}>
                        Approche Pratique 70/30
                      </h5>
                      <p className="text-muted mb-0">
                        70% d'exercices et études de cas réels, 30% de théorie essentielle pour une application immédiate.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="d-flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div 
                      className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        color: '#d97502ff'
                      }}
                    >
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2" style={{ color: '#0B1120' }}>
                        Certifications Reconnues
                      </h5>
                      <p className="text-muted mb-0">
                        Agrément FDFP, partenaire CDMP - Attestations et diplômes reconnus sur le marché africain.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </RevealOnScroll>
            </div>

            <div className="col-lg-6">
              <RevealOnScroll variant={slideInRight}>
                <div className="position-relative">
                  <div className="rounded-4 overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                      alt="Formation en entreprise"
                      className="w-100"
                      style={{ height: '450px', objectFit: 'cover' }}
                    />
                  </div>
                  
                  <motion.div 
                    className="position-absolute bg-white p-4 rounded-3 shadow-lg"
                    style={{ bottom: '20px', left: '20px', maxWidth: '240px' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-center">
                      <div className="display-4 fw-bold mb-2" style={{ color: '#eb5c04ff' }}>
                        98%
                      </div>
                      <div className="small fw-medium" style={{ color: '#0B1120' }}>
                        Taux de satisfaction client
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
                    className="d-inline-flex align-items-center justify-content-center mb-4 rounded"
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#df6704ff'
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
                    className="d-inline-flex align-items-center justify-content-center mb-4 rounded"
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#df6704ff'
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

export default FormationsPage;