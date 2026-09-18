import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import './Navbar.css';

const navigationItems = [
  {
    number: '01',
    label: 'Sobre',
    href: '#sobre',
  },
  {
    number: '02',
    label: 'Experiência',
    href: '#experiencia',
  },
  {
    number: '03',
    label: 'Projetos',
    href: '#projetos',
  },
  {
    number: '04',
    label: 'Stack',
    href: '#stack',
  },
  {
    number: '05',
    label: 'Contato',
    href: '#contato',
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigation(href: string) {
    setMenuOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <motion.header
      className="navbar"
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="navbar__container container">

        {/* LOGO */}

        <button
          className="navbar__logo"
          onClick={() => handleNavigation('#inicio')}
          aria-label="Voltar para o início"
        >
          FG<span>.</span>
        </button>

        {/* DESKTOP MENU */}

        <nav
          className={`navbar__menu ${
            menuOpen ? 'navbar__menu--open' : ''
          }`}
        >
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.href}
              className="navbar__link"
              onClick={() => handleNavigation(item.href)}
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15 + index * 0.05,
                duration: 0.4,
              }}
            >
              <span className="navbar__number">
                {item.number}
              </span>

              <span>
                {item.label}
              </span>
            </motion.button>
          ))}
        </nav>

        {/* MOBILE BUTTON */}

        <button
          className="navbar__mobile-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={
            menuOpen
              ? 'Fechar menu'
              : 'Abrir menu'
          }
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>
    </motion.header>
  );
}