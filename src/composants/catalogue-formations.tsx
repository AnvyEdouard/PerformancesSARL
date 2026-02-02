import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';
import { Container, Form, Alert, Spinner } from 'react-bootstrap';
import { ArrowLeft, Download, Search, Filter, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Type pour une formation
interface Formation {
  Ref: string;
  Domaine: string;
  Thème: string;
}

// Couleurs du thème
const THEME = {
  primary: '#602080',      // Majestic Purple
  secondary: '#ED872D',    // Cadmium Orange
  gradient: 'linear-gradient(135deg, #602080 0%, #ED872D 100%)',
  gradientReverse: 'linear-gradient(135deg, #ED872D 0%, #602080 100%)',
  lightPurple: 'rgba(96, 32, 128, 0.1)',
  lightOrange: 'rgba(237, 135, 45, 0.1)',
};

// Variants d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const rowVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20
    }
  }
};

const CataloguePage = () => {
  const navigate = useNavigate();
  const [formations, setFormations] = useState<Formation[]>([]);
  const [filteredFormations, setFilteredFormations] = useState<Formation[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Chargement des données CSV
  useEffect(() => {
    Papa.parse('/formations.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      encoding: 'UTF-8',
      complete: (results) => {
        const data = results.data.map((row: any) => {
          const cleanRow: any = {};
          Object.keys(row).forEach(key => {
            const cleanKey = key.replace(/^\uFEFF/, '').trim();
            cleanRow[cleanKey] = row[key];
          });
          return cleanRow as Formation;
        });

        setFormations(data);
        setFilteredFormations(data);
        setLoading(false);
      },
      error: (err) => {
        setError(`Erreur lors du chargement : ${err.message}`);
        setLoading(false);
      }
    });
  }, []);

  // Filtrage dynamique
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredFormations(formations);
    } else {
      const filtered = formations.filter((formation) => {
        const search = searchTerm.toLowerCase();
        return (
          formation.Domaine?.toLowerCase().includes(search) ||
          formation.Thème?.toLowerCase().includes(search) ||
          formation.Ref?.toLowerCase().includes(search)
        );
      });
      setFilteredFormations(filtered);
    }
  }, [searchTerm, formations]);

  // Export CSV
  const handleExportCSV = () => {
    const csv = Papa.unparse(filteredFormations);
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `catalogue_formations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #FAFAFA 0%, #F5F5F5 100%)',
      paddingTop: '2rem',
      paddingBottom: '4rem'
    }}>
      <Container style={{ maxWidth: '1400px' }}>
        
        {/* HEADER SECTION */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Bouton Retour Discret */}
          <motion.button
            onClick={() => navigate('/formations')}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: THEME.primary,
              fontSize: '0.95rem',
              fontWeight: 500,
              cursor: 'pointer',
              marginBottom: '2rem',
              padding: '8px 0',
              transition: 'all 0.3s ease'
            }}
          >
            <ArrowLeft size={20} />
            <span>Retour aux formations</span>
          </motion.button>

          {/* Titre Principal avec Bordure Gradient */}
          <div style={{ marginBottom: '3rem' }}>
            <h1 
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700,
                color: THEME.primary,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                lineHeight: 1.2
              }}
            >
              Catalogue de Formations
            </h1>
            <div 
              style={{
                height: '4px',
                width: '120px',
                background: THEME.gradient,
                borderRadius: '2px'
              }}
            />
            <p style={{
              color: '#64748B',
              fontSize: '1.1rem',
              marginTop: '1rem',
              fontWeight: 400
            }}>
              Explorez notre offre complète de {formations.length} formations professionnelles
            </p>
          </div>
        </motion.div>

        {/* SEARCH & FILTER BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
          }}
        >
          <div className="row g-3 align-items-center">
            {/* Barre de recherche */}
            <div className="col-lg-8">
              <div style={{ position: 'relative' }}>
                <Search 
                  size={20}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: isSearchFocused ? THEME.primary : '#94A3B8',
                    transition: 'color 0.3s ease'
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder="Rechercher par domaine, thème ou référence..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  style={{
                    paddingLeft: '48px',
                    paddingRight: '16px',
                    height: '56px',
                    fontSize: '1rem',
                    border: `2px solid ${isSearchFocused ? THEME.primary : '#E2E8F0'}`,
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    boxShadow: isSearchFocused ? `0 0 0 4px ${THEME.lightPurple}` : 'none'
                  }}
                />
              </div>
            </div>

            {/* Bouton Export Premium */}
            <div className="col-lg-4">
              <motion.button
                onClick={handleExportCSV}
                disabled={filteredFormations.length === 0}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  height: '56px',
                  background: THEME.gradientReverse,
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: filteredFormations.length === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 12px rgba(237, 135, 45, 0.3)',
                  opacity: filteredFormations.length === 0 ? 0.5 : 1,
                  transition: 'all 0.3s ease'
                }}
              >
                <Download size={20} />
                Exporter en CSV
              </motion.button>
            </div>
          </div>

          {/* Compteur de résultats */}
          <div style={{
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#64748B',
            fontSize: '0.95rem'
          }}>
            <Filter size={16} />
            <span>
              <strong style={{ color: THEME.primary }}>{filteredFormations.length}</strong> formation{filteredFormations.length > 1 ? 's' : ''} trouvée{filteredFormations.length > 1 ? 's' : ''}
              {searchTerm && <span> pour <strong>"{searchTerm}"</strong></span>}
            </span>
          </div>
        </motion.div>

        {/* LOADING STATE */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '4rem',
              textAlign: 'center',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}
          >
            <Spinner animation="border" role="status" style={{ color: THEME.primary, width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Chargement...</span>
            </Spinner>
            <p style={{ marginTop: '1.5rem', color: '#64748B', fontSize: '1.1rem' }}>
              Chargement des formations en cours...
            </p>
          </motion.div>
        )}

        {/* ERROR STATE */}
        {error && (
          <Alert variant="danger" style={{ borderRadius: '12px', border: 'none' }}>
            <strong>Erreur:</strong> {error}
          </Alert>
        )}

        {/* TABLEAU PREMIUM */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)'
            }}
          >
            {/* En-tête du tableau */}
            <div 
              style={{
                background: THEME.primary,
                color: 'white',
                padding: '1.5rem 2rem',
                display: 'grid',
                gridTemplateColumns: '140px 1fr 2fr',
                gap: '2rem',
                fontWeight: 600,
                fontSize: '0.95rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              <div>Référence</div>
              <div>Domaine</div>
              <div>Thème</div>
            </div>

            {/* Corps du tableau avec animations */}
            <AnimatePresence mode="wait">
              {filteredFormations.length > 0 ? (
                <motion.div
                  key="table-content"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {filteredFormations.map((formation, index) => (
                    <motion.div
                      key={`${formation.Ref}-${index}`}
                      variants={rowVariants}
                      whileHover={{
                        backgroundColor: '#FAFAFA',
                        x: 4,
                        transition: { duration: 0.2 }
                      }}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '140px 1fr 2fr',
                        gap: '2rem',
                        padding: '1.5rem 2rem',
                        borderBottom: '1px solid #F1F5F9',
                        cursor: 'pointer',
                        position: 'relative',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {/* Bordure gauche au survol */}
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileHover={{ scaleY: 1 }}
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '4px',
                          background: THEME.gradient,
                          transformOrigin: 'top'
                        }}
                      />

                      {/* Référence avec badge */}
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          style={{
                            background: THEME.lightOrange,
                            color: THEME.secondary,
                            padding: '6px 14px',
                            borderRadius: '8px',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            letterSpacing: '0.03em',
                            border: `1.5px solid ${THEME.secondary}`,
                            display: 'inline-block'
                          }}
                        >
                          {formation.Ref}
                        </motion.span>
                      </div>

                      {/* Domaine */}
                      <div style={{
                        color: THEME.primary,
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        {formation.Domaine}
                      </div>

                      {/* Thème */}
                      <div style={{
                        color: '#475569',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        {formation.Thème}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{
                    padding: '4rem 2rem',
                    textAlign: 'center'
                  }}
                >
                  <FileText size={64} style={{ color: '#CBD5E1', marginBottom: '1rem' }} />
                  <h3 style={{ color: '#64748B', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    Aucune formation trouvée
                  </h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>
                    Essayez de modifier vos critères de recherche
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* FOOTER INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '3rem',
            textAlign: 'center',
            color: '#94A3B8',
            fontSize: '0.9rem'
          }}
        >
          <p style={{ marginBottom: '0.5rem' }}>
            Besoin d'informations complémentaires sur une formation ?
          </p>
          <motion.a
            href="/formations"
            whileHover={{ scale: 1.05 }}
            style={{
              color: THEME.secondary,
              fontWeight: 600,
              textDecoration: 'none',
              borderBottom: `2px solid ${THEME.secondary}`
            }}
          >
            Contactez notre équipe →
          </motion.a>
        </motion.div>

      </Container>
    </div>
  );
};

export default CataloguePage;