import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';

interface RouteLoaderProps {
  children: React.ReactNode;
  duration?: number; // durée en millisecondes
}

const RouteLoader: React.FC<RouteLoaderProps> = ({ children, duration = 1700 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Gestion du chargement initial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  // Gestion des changements de route
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [location.pathname, duration]);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default RouteLoader;
