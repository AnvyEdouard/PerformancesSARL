// ----------------------------------------------------
// 1. IMPORTS
// ----------------------------------------------------
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

// ----------------------------------------------------
// 2. COMPOSANTS ANIMÉS
// ----------------------------------------------------
const MotionDiv = motion.div;
const MotionCard = motion(Card as any);

// ----------------------------------------------------
// 3. DONNÉES
// ----------------------------------------------------
const navItems = [
  "Accueil",
  "Formations",
  "Assistances & Conseils",
  "Etudes & Audits",
  "Recrutements",
  "A propros",
  "Contacts",
];

const domains = [
  {
    icon: "🎓",
    title: "Formations",
    description:
      "Catalogue complet de formations certifiées pour développer vos compétences.",
  },
  {
    icon: "🏢",
    title: "Assistances & Conseils",
    description:
      "Accompagnement stratégique pour transformer durablement vos organisations.",
  },
  {
    icon: "📊",
    title: "Études & Audits",
    description: "Analyses approfondies, diagnostics RH et performance continue.",
  },
  {
    icon: "👥",
    title: "Recrutements",
    description: "Programmes de coaching individualisés et coaching d'équipe.",
  },
];

const formations = [
  {
    category: "Management",
    icon: "📊",
    description: "Leadership, gestion d'équipe, stratégie d'entreprise",
    count: "14 formations disponibles",
    // CORRECTION : Ajout de la propriété 'items' qui était manquante pour le rendu
    items: ["Gestion d'équipe", "Leadership Stratégique", "Prise de parole"],
  },
  {
    category: "Finance & Comptabilité",
    icon: "💰",
    description: "Analyse financière, contrôle de gestion, audit",
    count: "12 formations disponibles",
    items: ["Analyse financière", "Contrôle de gestion", "Trésorerie"],
  },
  {
    category: "Ressources Humaines",
    icon: "👥",
    description: "Recrutement, GPEC, paie, relations sociales",
    count: "18 formations disponibles",
    items: ["Recrutement", "Gestion de la Paie", "Droit social"],
  },
  {
    category: "Marketing & Communication",
    icon: "📢",
    description: "Stratégie marketing, digital, communication",
    count: "14 formations disponibles",
    items: ["Marketing Digital", "Stratégie de Contenu", "Community Management"],
  },
  {
    category: "Qualité & Sécurité",
    icon: "✅",
    description: "Normes ISO, HSE, management qualité",
    count: "10 formations disponibles",
    items: ["Norme ISO 9001", "HSE", "Audit Qualité"],
  },
  {
    category: "Supply Chain",
    icon: "🚚",
    description: "Logistique, achats, gestion des stocks",
    count: "11 formations disponibles",
    items: ["Gestion des Achats", "Optimisation Logistique", "Gestion des Stocks"],
  },
];

// 📌 Données pour Solutions de Recrutement 
const recrutementServices = [
  {
    title: "Chasseur de têtes",
    icon: "🔍",
    description: "Identification et approche de profils hautement qualifiés",
  },
  {
    title: "Recrutement de masse",
    icon: "👥",
    description: "Campagnes de recrutement à grande échelle",
  },
  {
    title: "Évaluation RH",
    icon: "📋",
    description: "Tests psychotechniques et assessment centers",
  },
];

const assistancesServices = [
  {
    title: "Conseil en organisation",
    description: "Optimisation des structures et processus",
  },
  {
    title: "Assistance RH",
    description: "GPEC, recrutement, formation, paie",
  },
  {
    title: "Conseil stratégique",
    description: "Élaboration de stratégie et développement",
  },
];

const etudesServices = [
  {
    title: "Audits organisationnels",
    description: "Évaluation complète de vos structures et processus",
  },
  {
    title: "Études de marché",
    description: "Analyses sectorielles et études de faisabilité",
  },
  {
    title: "Diagnostics RH",
    description: "Évaluation des pratiques et politiques RH",
  },
];

const values = [
  {
    title: "Excellence",
    description: "Nos standards et méthodes garantissent un niveau premium.",
  },
  {
    title: "Impact réel",
    description: "Chaque action doit créer de la valeur mesurable.",
  },
  {
    title: "Innovation",
    description: "Approches modernes, outils digitaux et expérimentation.",
  },
];

const clients = [
  { name: "UBA", logo: "U" },
  { name: "Orange", logo: "O" },
  { name: "SODECI", logo: "S" },
  { name: "MTN", logo: "M" },
  { name: "MOOV CI", logo: "M" },
];

// ----------------------------------------------------
// 4. SECTIONS DE LA PAGE
// ----------------------------------------------------

// -------------------- HEADER ------------------------
const Header = () => (
  <Navbar
    bg="white"
    expand="lg"
    fixed="top"
    className="shadow-sm"
    style={{ borderBottom: "1px solid #e0e0e0", zIndex: 1030 }} // Ajout de zIndex pour être sûr
  >
    <Container>
      <Navbar.Brand href="#home" className="fw-bold">
        Cabinet Performances
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {navItems.map((item) => (
            <Nav.Link key={item} href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} className="mx-2">
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
    id="accueil" // Ajout d'un ID pour la navigation
    className="hero-section d-flex align-items-center text-white"
    style={{
      minHeight: "90vh",
      background: "linear-gradient(to right, #000, #222)",
      padding: "3rem 0",
    }}
  >
    <Container>
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="display-3 fw-bold mb-3">CABINET PERFORMANCES</h1>
        <h5 className="mb-4" style={{ opacity: 0.8 }}>
          Formations — Assistances & Conseils — Etudes & Audits — Recrutements
        </h5>
        <Button
          variant="danger"
          size="lg"
          className="mt-3"
          style={{ backgroundColor: "#FF5722", borderColor: "#FF5722" }}
        >
          Découvrir nos offres
        </Button>
      </MotionDiv>
    </Container>
  </section>
);

// -------------------- DOMAINES ------------------------
const DomainesSection = () => (
  <section className="py-5">
    <Container>
      <h2 className="fw-bold mb-4">Nos Domaines d'Expertises</h2>
      <Row className="g-4">
        {domains.map((item, index) => (
          <Col xs={12} md={3} key={index}>
            <MotionCard
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
              className="h-100 text-center p-4 border-0 shadow-sm"
              style={{ borderRadius: "15px" }}
            >
              <div style={{ fontSize: "3rem" }} className="mb-3">
                {item.icon}
              </div>
              <Card.Title className="fw-bold">{item.title}</Card.Title>
              <Card.Text className="text-muted small">
                {item.description}
              </Card.Text>
            </MotionCard>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

// -------------------- CATALOGUE ------------------------
const CatalogueSection = () => (
  <section className="py-5" id="formations"> {/* Ajout d'un ID pour la navigation */}
    <Container>
      <h2 className="fw-bold mb-4 text-center">Catalogue de Formations</h2>
      <Row className="g-4">
        {formations.map((block, index) => (
          <Col xs={12} md={6} lg={4} key={index}>
            <MotionCard
              whileHover={{ y: -8 }}
              className="p-4 border-0 shadow-sm h-100"
              style={{ borderRadius: "15px" }}
            >
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                    <div style={{ fontSize: "1.8rem" }} className="me-3">
                        {block.icon}
                    </div>
                    <Card.Title className="fw-bold mb-0">
                        {block.category}
                    </Card.Title>
                </div>

                <p className="text-muted small mb-3">
                    {block.description}
                </p>

                {/* CORRECTION CRITIQUE ICI : 'items' n'existait pas dans l'objet de données 'formations' original, mais était mappé ici. J'ai ajouté 'items' aux données de formations ci-dessus. */}
                {block.items && block.items.map((item, i) => ( 
                  <div key={i} className="d-flex align-items-center mb-2">
                    <span className="text-success me-2">✓</span>
                    <span className="small">{item}</span>
                  </div>
                ))}
                
              </Card.Body>
              <Card.Footer className="bg-white border-0 pt-0">
                    <p className="fw-bold text-danger mb-0 mt-3">{block.count}</p>
              </Card.Footer>
            </MotionCard>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-5">
          <Button
            size="lg"
            style={{ backgroundColor: "#FF5722", borderColor: "#FF5722" }}
          >
            Voir tout le catalogue (75+)
          </Button>
      </div>
    </Container>
  </section>
);

// -------------------- ASSISTANCES & CONSEILS ------------------------
const AssistancesSection = () => (
  <section
    className="py-5 text-white"
    style={{ backgroundColor: "#FF5722" }}
    id="assistances-conseils" // Ajout d'un ID pour la navigation
  >
    <Container>
      <Row className="align-items-center g-4">
        {/* Colonne gauche : Contenu texte */}
        <Col xs={12} md={6}>
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fw-bold mb-4">Assistances & Conseils</h2>
            <p className="mb-4" style={{ lineHeight: 1.8, opacity: 0.95 }}>
              Nos consultants experts vous accompagnent dans vos projets
              stratégiques et opérationnels pour améliorer la performance de
              votre organisation.
            </p>

            {/* Liste des services */}
            {assistancesServices.map((service, index) => (
              <div key={index} className="d-flex mb-3">
                <span className="me-3">✓</span>
                <div>
                  <h6 className="fw-bold mb-1">{service.title}</h6>
                  <p className="mb-0 small" style={{ opacity: 0.9 }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}

            <Button
              variant="light"
              className="mt-3"
              style={{ color: "#FF5722" }}
            >
              Découvrir nos services →
            </Button>
          </MotionDiv>
        </Col>

        {/* Colonne droite : Image/Slide */}
        <Col xs={12} md={6}>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="d-flex align-items-center justify-content-center text-center p-5"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              minHeight: "400px",
              border: "2px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <h4 style={{ fontStyle: "italic", opacity: 0.7 }}>
              Un slide ou une image
            </h4>
          </MotionDiv>
        </Col>
      </Row>
    </Container>
  </section>
);

// -------------------- ÉTUDES & AUDITS ------------------------
const EtudesSection = () => (
  <section className="py-5 bg-white" id="etudes-audits"> {/* Ajout d'un ID pour la navigation */}
    <Container>
      <Row className="align-items-center g-4">
        {/* Colonne gauche : Image/Slide */}
        <Col xs={12} md={6}>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="d-flex align-items-center justify-content-center text-center p-5"
            style={{
              backgroundColor: "#FFF3E0",
              borderRadius: "20px",
              minHeight: "400px",
              border: "2px solid #FFE0B2",
            }}
          >
            <h4
              className="text-muted"
              style={{ fontStyle: "italic", opacity: 0.7 }}
            >
              Un slide ou une image
            </h4>
          </MotionDiv>
        </Col>

        {/* Colonne droite : Contenu texte */}
        <Col xs={12} md={6}>
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fw-bold mb-4">Études & Audits</h2>
            <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
              Des diagnostics approfondis et des études personnalisées pour
              éclairer vos décisions stratégiques.
            </p>

            {/* Liste des services */}
            {etudesServices.map((service, index) => (
              <div key={index} className="d-flex mb-3">
                <div
                  className="d-flex align-items-center justify-content-center me-3"
                  style={{
                    backgroundColor: "#FFF3E0",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                  }}
                >
                  <span style={{ color: "#FF5722", fontSize: "1.2rem" }}>
                    📊
                  </span>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">{service.title}</h6>
                  <p className="text-muted mb-0 small">{service.description}</p>
                </div>
              </div>
            ))}

            <Button
              className="mt-3"
              style={{
                backgroundColor: "#FF5722",
                borderColor: "#FF5722",
              }}
            >
              En savoir plus →
            </Button>
          </MotionDiv>
        </Col>
      </Row>
    </Container>
  </section>
);

// -------------------- SOLUTIONS DE RECRUTEMENT ------------------------
// ✅ NOUVELLE SECTION : Ajoutée entre "Études & Audits" et "À propos"
const RecrutementSection = () => (
  <section
    className="py-5"
    style={{
      background: "linear-gradient(135deg, #FF5722 0%, #FF7043 100%)",
      color: "white",
    }}
  >
    <Container>
      {/* Titre centré */}
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-2">Solutions de recrutement</h2>
        <p style={{ opacity: 0.95 }}>
          Trouvez les meilleurs talents pour votre entreprise
        </p>
      </div>

      {/* Grille des services */}
      <Row className="g-4 mb-4">
        {recrutementServices.map((service, index) => (
          <Col xs={12} md={4} key={index}>
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-100 border-0 shadow-lg text-center"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                }}
              >
                <Card.Body className="p-4">
                  {/* Icône circulaire */}
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#FFF3E0",
                      borderRadius: "50%",
                      fontSize: "2rem",
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Titre */}
                  <h5 className="fw-bold mb-2" style={{ color: "#333" }}>
                    {service.title}
                  </h5>

                  {/* Description */}
                  <p className="text-muted small mb-0">
                    {service.description}
                  </p>
                </Card.Body>
              </Card>
            </MotionDiv>
          </Col>
        ))}
      </Row>

      {/* ✅ Bouton "Découvrir nos solutions" centré */}
      <div className="text-center mt-4">
        <Button
          variant="light"
          size="lg"
          className="fw-bold"
          style={{
            color: "#FF5722",
            padding: "12px 40px",
            borderRadius: "8px",
          }}
        >
          Découvrir nos solutions →
        </Button>
      </div>
    </Container>
  </section>
);

// -------------------- A PROPOS ------------------------
const AProposSection = () => (
  <section className="py-5">
    <Container>
      <Row className="g-4">
        <Col xs={12} md={6}>
          <h2 className="fw-bold mb-4">À propos du cabinet</h2>
          <p className="text-muted mb-3">
            Depuis plus de 15 ans, nous accompagnons entreprises, dirigeants et
            équipes dans la transformation de leur performance.
          </p>

          {values.map((v, index) => (
            <div key={index} className="d-flex mb-3">
              <span className="text-primary me-3" style={{ fontSize: "1.5rem" }}>
                ⭐
              </span>
              <div>
                <h6 className="fw-bold mb-1">{v.title}</h6>
                <p className="text-muted mb-0 small">{v.description}</p>
              </div>
            </div>
          ))}
          {/* 🚀 AJOUT DU BOUTON ICI */}
          <Button
            className="mt-4" // Marge supérieure pour séparer des valeurs
            style={{
              backgroundColor: "#FF5722", // Couleur de l'identité visuelle
              borderColor: "#FF5722",
            }}
            // Vous pouvez ajouter un lien vers une page dédiée si elle existe
            onClick={() => console.log("Clic sur Qui sommes-nous ?")} 
          >
            Qui sommes-nous ? →
          </Button>
          {/* 🚀 FIN DE L'AJOUT */}
        </Col>

        <Col xs={12} md={6}>
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              height: "350px",
              borderRadius: "20px",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Col>
      </Row>
    </Container>
  </section>
);

// -------------------- CLIENTS ------------------------
const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      // Le calcul de l'index doit être basé sur le nombre total d'éléments, non sur la vue
      setCurrentIndex((prev) => (prev + 1) % clients.length); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleClients = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(clients[(currentIndex + i) % clients.length]);
    }
    return visible;
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <Container>
        <h2 className="fw-bold text-center mb-5">Ils nous font confiance</h2>

        <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
          <AnimatePresence mode="wait">
            {/* Clé de la motion.div pour forcer le remount (exit/enter animation) */}
            {getVisibleClients().map((client, index) => ( 
              <motion.div
                key={`${client.name}-${currentIndex}-${index}`} // Clé composite pour assurer une animation de transition correcte
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="text-center shadow-sm"
                  style={{
                    width: "140px",
                    height: "80px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center p-2">
                    <h1 className="mb-0">{client.logo}</h1>
                    <small className="text-muted">{client.name}</small>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Indicateurs */}
        <div className="d-flex justify-content-center gap-2 mt-4">
          {clients.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: index === currentIndex ? "#FF5722" : "#ddd",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

// -------------------- FOOTER ------------------------
const FooterSection = () => (
  <footer className="py-5 text-white" style={{ backgroundColor: "#FF5722" }} id="contacts"> {/* Ajout d'un ID pour la navigation */}
    <Container>
      <Row className="g-4">
        {/* Section À propos */}
        <Col xs={12} md={4}>
          <h5 className="fw-bold mb-3">À propos de Cabinet Performances</h5>
          <p className="small mb-3" style={{ opacity: 0.9 }}>
            Depuis plus de 15 ans, Cabinet Performances SARL accompagne les
            entreprises en Côte d'Ivoire et en Afrique de l'Ouest dans leur
            développement.
          </p>
          <p className="small fw-bold">Cabinet FDFP et agréé CDMP</p>
        </Col>

        {/* Section Statistiques */}
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

        {/* Section Contact */}
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

          {/* Réseaux sociaux */}
          <div className="d-flex gap-2 mt-3">
            <Button
              variant="light"
              size="sm"
              className="rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "none",
                color: "white",
              }}
            >
              f
            </Button>
            <Button
              variant="light"
              size="sm"
              className="rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "none",
                color: "white",
              }}
            >
              in
            </Button>
            <Button
              variant="light"
              size="sm"
              className="rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "none",
                color: "white",
              }}
            >
              𝕏
            </Button>
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
// 6. HOMEPAGE (PAGE FINALE ASSEMBLÉE)
// ----------------------------------------------------
export default function HomePage() {
  return (
    <> {/* CORRECTION 1: Remplacement de la div par un Fragment (<>) */}
      <Header />
      {/* CORRECTION 2: Ajout d'une div pour le décalage, car la Navbar est `fixed="top"` */}
      <div style={{ paddingTop: "56px" }}> 
        <HeroSection />
        <DomainesSection />
        <CatalogueSection />
        <AssistancesSection />
        <EtudesSection />
        <RecrutementSection />
        <AProposSection />
        <ClientsSection />
        <FooterSection />
      </div>
    </>
  );
}