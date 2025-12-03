// ----------------------------------------------------
// 1. IMPORTS
// ----------------------------------------------------
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Badge,
  Navbar,
  Nav,
} from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// ----------------------------------------------------
// 2. COMPOSANTS ANIMÉS
// ----------------------------------------------------
const MotionDiv = motion.div;
const MotionCard = motion(Card);

// ----------------------------------------------------
// 3. DONNÉES
// ----------------------------------------------------
const navItems = [
  "Accueil",
  "Formations",
  "Assistances & Conseils",
  "Etudes & Audits",
  "Recrutements",
  "A propos",
  "Contacts",
];

// Formations Phares (3 principales)
const formationsPhares = [
  {
    id: 1,
    title: "Leadership & Management",
    icon: "👥",
    description: "Manager des équipes performantes à l'ère numérique",
    duration: "3 Jours",
    type: "Inter-Entreprise",
    level: "Intermédiaire",
    price: "250 000",
    currency: "FCFA",
    lieu: "Abidjan, Plateau",
    prochaines_sessions: [
      "15-19 Janvier 2025",
      "12-16 Février 2025",
      "18-22 Mars 2025",
    ],
    objectifs: [
      "Comprendre les fondamentaux du leadership moderne",
      "Développer sa posture de manager",
      "Maîtriser les techniques de communication d'équipe",
      "Gérer les conflits et situations difficiles",
      "Motiver et fédérer son équipe",
    ],
    programme: [
      "Jour 1-2 : Les fondamentaux du leadership",
      "Jour 3-4 : Communication et gestion d'équipe",
      "Jour 5 : Cas pratiques et certification",
    ],
    modalites: ["Présentiel", "En ligne", "Hybride"],
  },
  {
    id: 2,
    title: "Transformation Digitale",
    icon: "💻",
    description: "Manager des équipes internes à l'ère numérique",
    duration: "3 Jours",
    type: "Inter-Entreprise",
    level: "Avancé",
    price: "300 000",
    currency: "FCFA",
    lieu: "Abidjan, Plateau",
    prochaines_sessions: [
      "22-26 Janvier 2025",
      "19-23 Février 2025",
      "25-29 Mars 2025",
    ],
    objectifs: [
      "Comprendre les enjeux de la transformation digitale",
      "Piloter un projet de digitalisation",
      "Adopter les outils collaboratifs modernes",
      "Gérer le changement organisationnel",
    ],
    programme: [
      "Jour 1 : Introduction à la transformation digitale",
      "Jour 2 : Outils et méthodologies",
      "Jour 3 : Conduite du changement",
    ],
    modalites: ["Présentiel", "En ligne", "Hybride"],
  },
  {
    id: 3,
    title: "Data Science & IA",
    icon: "📊",
    description: "Manager des données performantes à l'ère numérique",
    duration: "3 Jours",
    type: "Inter-Entreprise",
    level: "Expert",
    price: "450 000",
    currency: "FCFA",
    lieu: "Abidjan, Plateau",
    prochaines_sessions: [
      "05-09 Février 2025",
      "05-09 Mars 2025",
      "02-06 Avril 2025",
    ],
    objectifs: [
      "Maîtriser les fondamentaux de la Data Science",
      "Utiliser les outils d'analyse de données",
      "Comprendre les algorithmes d'IA",
      "Mettre en œuvre des solutions IA",
    ],
    programme: [
      "Jour 1 : Introduction à la Data Science",
      "Jour 2 : Machine Learning",
      "Jour 3 : Applications pratiques IA",
    ],
    modalites: ["Présentiel", "En ligne"],
  },
];

// Formations Nationales (pour le carousel)
const formationsNationales = [
  {
    id: 4,
    title: "Agilité Scrum",
    icon: "🔄",
    description: "Maîtriser les méthodes agiles",
    duration: "2 Jours",
    price: "180 000",
    currency: "FCFA",
  },
  {
    id: 5,
    title: "Cybersécurité",
    icon: "🔒",
    description: "Protéger vos données",
    duration: "3 Jours",
    price: "280 000",
    currency: "FCFA",
  },
  {
    id: 6,
    title: "Design Thinking",
    icon: "🎨",
    description: "Innovation centrée utilisateur",
    duration: "2 Jours",
    price: "200 000",
    currency: "FCFA",
  },
  {
    id: 7,
    title: "Marketing Digital",
    icon: "📱",
    description: "Stratégies digitales efficaces",
    duration: "3 Jours",
    price: "250 000",
    currency: "FCFA",
  },
  {
    id: 8,
    title: "Gestion de Projet",
    icon: "📋",
    description: "Piloter vos projets avec succès",
    duration: "4 Jours",
    price: "320 000",
    currency: "FCFA",
  },
];

// Formations Internationales (pour le carousel)
const formationsInternationales = [
  {
    id: 9,
    title: "MBA Leadership",
    icon: "🎓",
    description: "Programme executive international",
    duration: "12 Mois",
    price: "3 500 000",
    currency: "FCFA",
  },
  {
    id: 10,
    title: "Certification PMP",
    icon: "📜",
    description: "Project Management Professional",
    duration: "5 Jours",
    price: "850 000",
    currency: "FCFA",
  },
  {
    id: 11,
    title: "PRINCE2 Foundation",
    icon: "👑",
    description: "Méthodologie projet internationale",
    duration: "3 Jours",
    price: "650 000",
    currency: "FCFA",
  },
  {
    id: 12,
    title: "Six Sigma Black Belt",
    icon: "⚫",
    description: "Excellence opérationnelle",
    duration: "10 Jours",
    price: "1 200 000",
    currency: "FCFA",
  },
  {
    id: 13,
    title: "ITIL v4 Foundation",
    icon: "💼",
    description: "Gestion des services IT",
    duration: "3 Jours",
    price: "550 000",
    currency: "FCFA",
  },
];

// ----------------------------------------------------
// 4. COMPOSANTS
// ----------------------------------------------------

// -------------------- HEADER ------------------------
const Header = () => (
  <Navbar
    bg="white"
    expand="lg"
    fixed="top"
    className="shadow-sm"
    style={{ borderBottom: "1px solid #e0e0e0" }}
  >
    <Container>
      <Navbar.Brand href="#home" className="fw-bold">
        Cabinet Performances
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {navItems.map((item) => (
            <Nav.Link key={item} href="#" className="mx-2">
              {item}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

// -------------------- HERO ------------------------
const HeroSection = () => (
  <section
    className="py-5"
    style={{
      background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
      marginTop: "56px",
    }}
  >
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="display-4 fw-bold mb-3">
              Formations : Développez Vos Compétences
            </h1>
            <p className="lead text-muted">
              Explorez notre catalogue et trouvez la formation adaptée à vos
              ambitions.
            </p>
          </MotionDiv>
        </Col>
        <Col xs={12} md={6}>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div style={{ fontSize: "8rem" }}>🧠💡📊</div>
          </MotionDiv>
        </Col>
      </Row>
    </Container>
  </section>
);

// -------------------- FORMATIONS PHARES ------------------------
const FormationsPhares = ({ onShowDetails }: any) => (
  <section className="py-5">
    <Container>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="fw-bold mb-4 text-center">Nos Formations Phares</h2>
        <Row className="g-4">
          {formationsPhares.map((formation, index) => (
            <Col xs={12} md={4} key={formation.id}>
              <MotionCard
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 15px 40px rgba(0,0,0,0.12)" }}
                className="h-100 border-0 shadow-sm"
                style={{ borderRadius: "15px", overflow: "hidden" }}
              >
                <Card.Body className="p-4">
                  {/* Icône */}
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#FFF3E0",
                      borderRadius: "50%",
                      fontSize: "2.5rem",
                    }}
                  >
                    {formation.icon}
                  </div>

                  {/* Titre */}
                  <h5 className="fw-bold mb-2">{formation.title}</h5>

                  {/* Description */}
                  <p className="text-muted small mb-3">
                    {formation.description}
                  </p>

                  {/* Infos */}
                  <div className="mb-3">
                    <Badge bg="light" text="dark" className="me-2">
                      {formation.duration}
                    </Badge>
                    <Badge bg="light" text="dark">
                      {formation.type}
                    </Badge>
                  </div>

                  {/* Bouton */}
                  <Button
                    variant="outline-danger"
                    className="w-100 fw-bold"
                    style={{
                      borderColor: "#FF5722",
                      color: "#FF5722",
                    }}
                    onClick={() => onShowDetails(formation)}
                  >
                    Voir le Programme
                  </Button>
                </Card.Body>
              </MotionCard>
            </Col>
          ))}
        </Row>
      </MotionDiv>
    </Container>
  </section>
);

// -------------------- CAROUSEL FORMATIONS ------------------------
const FormationsCarousel = ({
  title,
  formations,
  bgColor,
  onShowDetails,
}: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= formations.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(formations.length - itemsPerView, 0) : prev - 1
    );
  };

  const visibleFormations = formations.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <section className="py-5" style={{ backgroundColor: bgColor }}>
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">{title}</h2>
          <div className="d-flex gap-2">
            <Button
              variant="light"
              className="rounded-circle"
              style={{ width: "40px", height: "40px", padding: 0 }}
              onClick={prevSlide}
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="light"
              className="rounded-circle"
              style={{ width: "40px", height: "40px", padding: 0 }}
              onClick={nextSlide}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <Row className="g-3">
          <AnimatePresence mode="wait">
            {visibleFormations.map((formation: any, index: number) => (
              <Col xs={12} sm={6} md={3} key={formation.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card
                    className="h-100 border-0 shadow-sm text-center"
                    style={{
                      borderRadius: "12px",
                      cursor: "pointer",
                      transition: "transform 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Card.Body className="p-3">
                      <div style={{ fontSize: "2.5rem" }} className="mb-2">
                        {formation.icon}
                      </div>
                      <h6 className="fw-bold mb-2 small">
                        {formation.title}
                      </h6>
                      <p className="text-muted mb-2" style={{ fontSize: "0.75rem" }}>
                        {formation.description}
                      </p>
                      <div className="mb-2">
                        <Badge bg="light" text="dark" className="small">
                          {formation.duration}
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        style={{
                          backgroundColor: "#FF5722",
                          borderColor: "#FF5722",
                        }}
                        className="w-100"
                        onClick={() => onShowDetails(formation)}
                      >
                        Détails
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </Container>
    </section>
  );
};

// -------------------- MODAL DÉTAILS ------------------------
const DetailsModal = ({ show, onHide, formation }: any) => {
  if (!formation) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="formation-modal"
    >
      <Modal.Header
        className="border-0 pb-0"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="w-100">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className="fw-bold mb-2">{formation.title}</h3>
              <div className="d-flex gap-2 mb-3">
                <Badge bg="warning" text="dark">
                  {formation.level || "Tous niveaux"}
                </Badge>
                <Badge bg="info" text="dark">
                  Niveau {formation.level}
                </Badge>
              </div>
            </div>
            <Button
              variant="light"
              className="rounded-circle"
              style={{ width: "35px", height: "35px", padding: 0 }}
              onClick={onHide}
            >
              <X size={18} />
            </Button>
          </div>
        </div>
      </Modal.Header>

      <Modal.Body className="p-4">
        <Row>
          {/* Colonne gauche : Contenu */}
          <Col xs={12} md={8}>
            {/* Description */}
            <div className="mb-4">
              <h5 className="fw-bold mb-3">Description</h5>
              <p className="text-muted">{formation.description}</p>
            </div>

            {/* Objectifs pédagogiques */}
            {formation.objectifs && (
              <div className="mb-4">
                <h5 className="fw-bold mb-3">Objectifs pédagogiques</h5>
                <ul className="list-unstyled">
                  {formation.objectifs.map((obj: string, idx: number) => (
                    <li key={idx} className="mb-2">
                      <span className="text-success me-2">✓</span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Programme détaillé */}
            {formation.programme && (
              <div className="mb-4">
                <h5 className="fw-bold mb-3">Programme détaillé</h5>
                <ul className="list-unstyled">
                  {formation.programme.map((prog: string, idx: number) => (
                    <li key={idx} className="mb-2">
                      <span className="text-danger fw-bold me-2">•</span>
                      {prog}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Col>

          {/* Colonne droite : Prix et infos pratiques */}
          <Col xs={12} md={4}>
            {/* Carte Prix */}
            <Card
              className="border-0 shadow-sm mb-3"
              style={{
                backgroundColor: "#5B4FE9",
                color: "white",
                borderRadius: "15px",
              }}
            >
              <Card.Body className="p-4 text-center">
                <h2 className="fw-bold mb-2">
                  {formation.price} {formation.currency}
                </h2>
                <p className="mb-3 small">Prix par participant</p>
                <Button
                  variant="light"
                  className="w-100 mb-2 fw-bold"
                  style={{ color: "#5B4FE9" }}
                >
                  💳 Payer en ligne
                </Button>
                <Button
                  variant="outline-light"
                  className="w-100 fw-bold"
                >
                  📄 Demander un devis
                </Button>
              </Card.Body>
            </Card>

            {/* Informations pratiques */}
            <Card className="border-0 shadow-sm" style={{ borderRadius: "15px" }}>
              <Card.Body className="p-3">
                <h6 className="fw-bold mb-3">Informations pratiques</h6>

                <div className="mb-3">
                  <small className="text-muted d-block mb-1">Durée</small>
                  <strong>{formation.duration}</strong>
                </div>

                {formation.lieu && (
                  <div className="mb-3">
                    <small className="text-muted d-block mb-1">Lieu</small>
                    <strong>{formation.lieu}</strong>
                  </div>
                )}

                {formation.prochaines_sessions && (
                  <div className="mb-3">
                    <small className="text-muted d-block mb-1">
                      Prochaines sessions
                    </small>
                    {formation.prochaines_sessions.map(
                      (session: string, idx: number) => (
                        <div key={idx} className="small mb-1">
                          • {session}
                        </div>
                      )
                    )}
                  </div>
                )}

                {formation.modalites && (
                  <div>
                    <small className="text-muted d-block mb-2">
                      Modalités
                    </small>
                    <div className="d-flex gap-2 flex-wrap">
                      {formation.modalites.map(
                        (modalite: string, idx: number) => (
                          <Badge key={idx} bg="light" text="dark">
                            {modalite}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

// -------------------- FOOTER ------------------------
const Footer = () => (
  <footer className="py-5 text-white" style={{ backgroundColor: "#FF5722" }}>
    <Container>
      <Row className="g-4">
        <Col xs={12} md={4}>
          <h5 className="fw-bold mb-3">À propos de Cabinet Performances</h5>
          <p className="small mb-3" style={{ opacity: 0.9 }}>
            Depuis plus de 15 ans, Cabinet Performances SARL accompagne les
            entreprises en Côte d'Ivoire et en Afrique de l'Ouest dans leur
            développement.
          </p>
          <p className="small fw-bold">Cabinet FDFP et agréé CDMP</p>
        </Col>

        <Col xs={12} md={4}>
          <h5 className="fw-bold mb-3">Nos valeurs</h5>
          <div className="mb-3">
            <h3 className="fw-bold mb-0">500+</h3>
            <small style={{ opacity: 0.9 }}>Entreprises clientes</small>
          </div>
          <div>
            <h3 className="fw-bold mb-0">12K+</h3>
            <small style={{ opacity: 0.9 }}>Personnes formées</small>
          </div>
        </Col>

        <Col xs={12} md={4}>
          <h5 className="fw-bold mb-3">Contactez-nous</h5>
          <div className="small mb-2">
            <span className="me-2">📞</span>
            <span>+225 XX XX XX XX XX</span>
          </div>
          <div className="small mb-2">
            <span className="me-2">✉️</span>
            <span>contact@performances.ci</span>
          </div>
          <div className="small mb-3">
            <span className="me-2">📍</span>
            <span>Abidjan, Côte d'Ivoire</span>
          </div>
        </Col>
      </Row>

      <hr style={{ backgroundColor: "rgba(255,255,255,0.2)", marginTop: "2rem" }} />

      <p className="text-center small mb-0" style={{ opacity: 0.9 }}>
        © 2025 Cabinet Performances SARL — Tous droits réservés.
      </p>
    </Container>
  </footer>
);

// ----------------------------------------------------
// 5. PAGE PRINCIPALE
// ----------------------------------------------------
export default function FormationsPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState<any>(null);

  const handleShowDetails = (formation: any) => {
    setSelectedFormation(formation);
    setShowModal(true);
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <FormationsPhares onShowDetails={handleShowDetails} />
      <FormationsCarousel
        title="Toutes Nos Formations Nationales"
        formations={formationsNationales}
        bgColor="#f8f9fa"
        onShowDetails={handleShowDetails}
      />
      <FormationsCarousel
        title="Formations Internationales"
        formations={formationsInternationales}
        bgColor="white"
        onShowDetails={handleShowDetails}
      />
      <Footer />

      {/* Modal Détails */}
      <DetailsModal
        show={showModal}
        onHide={() => setShowModal(false)}
        formation={selectedFormation}
      />
    </div>
  );
}