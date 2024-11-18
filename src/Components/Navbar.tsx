'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="Logo" width={40} height={50} />
        </div>
        <div className={styles.brandName}>
          <h1>Syeda Qurrat</h1>
        </div>
      </div>
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.mobileMenu : ''}`}>
        <ul className={styles.linkList}>
          <li><Link href="/" onClick={handleLinkClick} className={styles.link}>Home</Link></li>
          <li><Link href="/journey" onClick={handleLinkClick} className={styles.link}>Journey</Link></li>
          <li><Link href="/projects" onClick={handleLinkClick} className={styles.link}>Projects</Link></li>
          <li><Link href="/contact" onClick={handleLinkClick} className={styles.link}>Contact</Link></li>
        </ul>
      </div>

      <button
        className={styles.menuToggle}
        onClick={handleToggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? 'X' : '☰'}
      </button>

      {isMenuOpen && (
        <div className={styles.mobileDropdown}>
          <ul className={styles.mobileLinkList}>
            <li><Link href="/" onClick={handleLinkClick} className={styles.link}>Home</Link></li>
            <li><Link href="/journey" onClick={handleLinkClick} className={styles.link}>Journey</Link></li>
            <li><Link href="/projects" onClick={handleLinkClick} className={styles.link}>Projects</Link></li>
            <li><Link href="/contact" onClick={handleLinkClick} className={styles.link}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;