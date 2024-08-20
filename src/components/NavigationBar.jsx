import React, { useState, useEffect } from 'react';
import './HeroSection/HeroSection.scss';
import { Link } from 'react-router-dom';


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
        <Link to="/" className="brand"><strong>Train</strong><strong className='text-warning'>Fit</strong></Link>
        <div className={`burger ${isMenuOpen ? 'is-active' : ''}`} id="burger" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <div className={` menu ${isMenuOpen ? 'is-active' : ''}`} id="menu">
          <ul className="menu-inner ps-0">
            <li className="menu-item"><Link to="/" className="menu-link" onClick={closeMenu}>Inicio</Link></li>
            <li className="menu-item"><Link to="/calculadoras" className="menu-link" onClick={closeMenu}>Calculadoras</Link></li>
            <li className="menu-item"><Link to="/SobreNosotros" className="menu-link" onClick={closeMenu}>Nosotros</Link></li>
            <li className="menu-item"><Link to="" className="menu-link" onClick={closeMenu}>Legal</Link></li>
          </ul>
        </div>
        <Link to="/contacto" className="menu-block">Contacto</Link>
      </nav>
    </header>
  );
};

export default NavigationBar;
