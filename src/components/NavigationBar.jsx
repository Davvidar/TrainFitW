import React, { useState, useEffect } from 'react';
import './HeroSection/HeroSection.scss';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 85) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'on-scroll' : ''}`} id="header">
      <nav className="navbar container">
        <a href="/" className="brand"><strong>Train</strong><strong className='text-warning'>Fit</strong></a>
        <div className={`burger ${isMenuOpen ? 'is-active' : ''}`} id="burger" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <div className={` menu ${isMenuOpen ? 'is-active' : ''}`} id="menu">
          <ul className="menu-inner ps-0">
            <li className="menu-item"><a href="/" className="menu-link" onClick={closeMenu}>Inicio</a></li>
            <li className="menu-item"><a href="" className="menu-link" onClick={closeMenu}>Nosotros</a></li>
            <li className="menu-item"><a href="" className="menu-link" onClick={closeMenu}>Legal</a></li>
            <li className="menu-item"><a href="/calculadoras" className="menu-link" onClick={closeMenu}>Calculadoras</a></li>
          </ul>
        </div>
        <a href="/contacto" className="menu-block">Contacto</a>
      </nav>
    </header>
  );
};

export default NavigationBar;
