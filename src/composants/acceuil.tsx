// ----------------------------------------------------
// 1. IMPORTS
// ----------------------------------------------------
import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Container,
  Card,
  Stack,
  Grid,
  Divider
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import {
  School,
  Business,
  People,
  BarChart,
  CheckCircle,
  WorkspacePremium,
  Phone,      
  Email,     
  LocationOn, 
  Facebook,   
  LinkedIn,   
  Twitter,    
} from "@mui/icons-material";

import { motion, AnimatePresence } from "framer-motion";

// ----------------------------------------------------
// 2. COMPOSANTS ANIMÉS
// ----------------------------------------------------
const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionButton = motion(Button);

// ----------------------------------------------------
// 3. DONNÉES
// ----------------------------------------------------
const navItems = ["Accueil", "Formations", "Assistances & Conseils", "Etudes & Audits", "Contacts"];

const domains = [
  {
    icon: <School fontSize="large" color="primary" />,
    title: "Formations",
    description:
      "Catalogue complet de formations certifiées pour développer vos compétences.",
  },
  {
    icon: <Business fontSize="large" color="primary" />,
    title: "Consulting & Transformation",
    description:
      "Accompagnement stratégique pour transformer durablement vos organisations.",
  },
  {
    icon: <People fontSize="large" color="primary" />,
    title: "Coaching",
    description:
      "Programmes de coaching individualisés et coaching d'équipe.",
  },
  {
    icon: <BarChart fontSize="large" color="primary" />,
    title: "Études & Audits",
    description:
      "Analyses approfondies, diagnostics RH et performance continue.",
  },
];

const formations = [
  {
    category: "Management & Leadership",
    items: [
      "Leadership transformationnel",
      "Management agile",
      "Gestion de conflits",
      "Soft skills avancées",
    ],
  },
  {
    category: "Performance & Productivité",
    items: [
      "Techniques de productivité",
      "Optimisation des process",
      "Gestion du temps",
      "Méthodes Lean",
    ],
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
  { name: "MTN" , logo: "M"},
  { name: "MOOV CI", logo:"M" },
];

// ----------------------------------------------------
// 4. SECTIONS DE LA PAGE
// ----------------------------------------------------

// -------------------- HERO ------------------------
const HeroSection = () => (
  <Box
    sx={{
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      background: "linear-gradient(to right, #000, #222)",
      color: "white",
      p: 6,
    }}
  >
    <Container maxWidth="lg">
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" fontWeight="bold">
          CABINET PERFORMANCES
        </Typography>

        <Typography variant="h6" sx={{ mt: 2, opacity: 0.8 }}>
          Formations — Assistances & Conseils — Etudes & Audits — Recrutements
        </Typography>

        <MotionButton
          variant="contained"
          sx={{ mt: 4, bgcolor: "#FF5722", color: "white" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Découvrir nos offres
        </MotionButton>
      </MotionBox>
    </Container>
  </Box>
);

// -------------------- DOMAINES ------------------------
const DomainesSection = () => (
  <Container maxWidth="lg" sx={{ py: 10 }}>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
      Nos Domaines d'Expertises
    </Typography>

    <Grid container spacing={4}>
      {domains.map((item, index) => (
        <Grid size={{ xs: 12, md: 3 }} key={index}>
          <MotionCard
            whileHover={{ y: -10, boxShadow: 8 }}
            transition={{ duration: 0.3 }}
            sx={{ p: 3, textAlign: "center", borderRadius: 3 }}
          >
            <Box>{item.icon}</Box>
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </MotionCard>
        </Grid>
      ))}
    </Grid>
  </Container>
);

// -------------------- CATALOGUE ------------------------
const CatalogueSection = () => (
  <Container maxWidth="lg" sx={{ py: 10 }}>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
      Catalogue de Formations
    </Typography>

    <Grid container spacing={4}>
      {formations.map((block, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index}>
          <MotionCard whileHover={{ y: -8 }} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              {block.category}
            </Typography>

            {block.items.map((item, i) => (
              <Stack key={i} direction="row" spacing={1} sx={{ mb: 1 }}>
                <CheckCircle fontSize="small" color="primary" />
                <Typography>{item}</Typography>
              </Stack>
            ))}
          </MotionCard>
        </Grid>
      ))}
    </Grid>
  </Container>
);

// -------------------- A PROPOS ------------------------
const AProposSection = () => (
  <Container maxWidth="lg" sx={{ py: 10 }}>
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
          À propos du cabinet
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Depuis plus de 15 ans, nous accompagnons entreprises, dirigeants et
          équipes dans la transformation de leur performance.
        </Typography>

        <Stack spacing={2} sx={{ mt: 3 }}>
          {values.map((v, index) => (
            <Stack
              direction="row"
              spacing={2}
              key={index}
              sx={{ alignItems: "center" }}
            >
              <WorkspacePremium color="primary" />
              <Box>
                <Typography fontWeight="bold">{v.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {v.description}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <MotionBox
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            height: 350,
            borderRadius: 4,
            background:
              "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </Grid>
  </Container>
);

// -------------------- CLIENTS ------------------------
const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5; // Nombre de logos visibles à la fois

  // Défilement automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Obtenir les clients visibles avec effet de boucle infinie
  const getVisibleClients = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(clients[(currentIndex + i) % clients.length]);
    }
    return visible;
  };

  return (
    <Box sx={{ bgcolor: "#f9f9f9", py: 8, overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 6, textAlign: "center" }}
        >
          Ils nous font confiance
        </Typography>

        {/* Slider Container */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            minHeight: 100,
          }}
        >
          <AnimatePresence mode="wait">
            {getVisibleClients().map((client, index) => (
              <motion.div
                key={`${client.name}-${currentIndex}-${index}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ flex: "0 0 auto" }}
              >
                <Card
                  sx={{
                    width: 140,
                    height: 80,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: 2,
                    borderRadius: 2,
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <Typography variant="h3">{client.logo}</Typography>
                  <Typography
                    variant="caption"
                    sx={{ mt: 1, textAlign: "center", px: 1 }}
                  >
                    {client.name}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>

        {/* Indicateurs de position */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 4 }}>
          {clients.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: index === currentIndex ? "#FF5722" : "#ddd",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};


// -------------------- FOOTER ------------------------
const FooterSection = () => (
  <Box sx={{ bgcolor: "#FF5722", color: "white", py: 6 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Section À propos */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            À propos de Cabinet Performances
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
            Depuis plus de 15 ans, Cabinet Performances SARL accompagne les
            entreprises en Côte d'Ivoire et en Afrique de l'Ouest dans leur
            développement.
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Cabinet FDFP et agréé CDMP
          </Typography>
        </Grid>

        {/* Section Statistiques */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            Nos valeurs
          </Typography>
          <Stack spacing={1.5}>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                500+
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Entreprises clientes
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                12K+
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Personnes formées
              </Typography>
            </Box>
          </Stack>
        </Grid>

        {/* Section Contact */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            Contactez-nous
          </Typography>
          <Stack spacing={1.5}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Phone fontSize="small" />
              <Typography variant="body2">+225 XX XX XX XX XX</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Email fontSize="small" />
              <Typography variant="body2">contact@performances.ci</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="flex-start">
              <LocationOn fontSize="small" />
              <Typography variant="body2">
                Abidjan, Côte d'Ivoire
              </Typography>
            </Stack>
          </Stack>

          {/* Réseaux sociaux */}
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <IconButton sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}>
              <LinkedIn />
            </IconButton>
            <IconButton sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}>
              <Twitter />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.2)" }} />

      {/* Copyright */}
      <Typography variant="body2" sx={{ textAlign: "center", opacity: 0.9 }}>
        © 2025 Cabinet Performances SARL — Tous droits réservés.
      </Typography>
    </Container>
  </Box>
);

// ----------------------------------------------------
// 5. HEADER FIXE
// ----------------------------------------------------
const Header = () => (
  <AppBar position="fixed" color="default" elevation={0}>
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant="h6" fontWeight="bold">
        Cabinet Performances
      </Typography>

      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
        {navItems.map((item) => (
          <Button key={item} sx={{ color: "#444" }}>
            {item}
          </Button>
        ))}
      </Box>

      <IconButton sx={{ display: { md: "none" } }}>
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

// ----------------------------------------------------
// 6. HOMEPAGE (PAGE FINALE ASSEMBLÉE)
// ----------------------------------------------------
export default function HomePage() {
  return (
    <Box sx={{ mt: 10 }}>
      <Header />
      <HeroSection />
      <DomainesSection />
      <CatalogueSection />
      <AProposSection />
      <ClientsSection />
      <FooterSection />
    </Box>
  );
}