import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // On récupère le chemin actuel (ex: /formations)
  const { pathname } = useLocation();

  useEffect(() => {
    // Cette fonction s'exécute à chaque fois que 'pathname' change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant ne rend rien visuellement
};

export default ScrollToTop;