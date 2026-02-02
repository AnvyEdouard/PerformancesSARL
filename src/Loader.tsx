import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader: React.FC = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const duration = 1700; // durée totale du loader en ms
    const interval = 20; // mise à jour toutes les 20ms
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setPercentage((prev) => {
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <img 
          src="https://i.ibb.co/WSVRXxz/logo1.png" 
          alt="Loading..." 
          className="loader-logo"
        />
        <span className="loader-percentage">{Math.floor(percentage)}%</span>
      </div>
    </div>
  );
};

export default Loader;