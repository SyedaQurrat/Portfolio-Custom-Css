
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import Styles from '@/Styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footerContainer}>
      <div className={Styles.footerContent}>
        
        {/* Column 1: Websites & Apps */}
        <div className={Styles.footerColumn}>
          <h1 className={Styles.footerHeading}>Websites</h1>
          <div className={Styles.footerLinks}>
            <a href="https://saon-website.vercel.app/">SQ Salon</a>
            <a href="https://governor-web-site-toa4.vercel.app/">Governor Sindh Website</a>
            <a href="#">Portfolio</a>

            <h1 className={Styles.footerHeading}>Apps</h1>
            <a href="/compulsory/3">Resume Builder</a>
            <a href="/compulsory/3">To-Do-App</a>
            <a href="/compulsory/3">Result Checker App</a>
            <a href="/compulsory/3">Expense Tracker App</a>
            <a href="/compulsory/3">Word Counter</a>
          </div>
        </div>

        {/* Column 2: Node Projects */}
        <div className={Styles.footerColumn}>
          <h2 className={Styles.footerHeading}>Node Projects</h2>
          <ul className={Styles.footerLinks}>
            <li><a href="https://github.com/SyedaQurrat/BMI-Calculater.git">BMI-Calculater</a></li>
            <li><a href="https://github.com/SyedaQurrat/OOP_MY_BANK.git">OOP_MY_BANK</a></li>
            <li><a href="https://github.com/SyedaQurrat/Object-Oriente_-Programming.git">Object-Oriente Programming</a></li>
            <li><a href="https://github.com/SyedaQurrat/COUNTDOWN_TIMER.git">COUNTDOWN_TIMER</a></li>
            <li><a href="https://github.com/SyedaQurrat/Advanture_Game.git">Advanture_Game</a></li>
            <li><a href="https://github.com/SyedaQurrat/Students_Mannagement_System.git">Students_Mannagement_System</a></li>
            <li><a href="https://github.com/SyedaQurrat/currency_converter.git">currency_converter</a></li>
            <li><a href="https://github.com/SyedaQurrat/ATM-machine.git">ATM-machine</a></li>
            <li><a href="https://github.com/SyedaQurrat/Cli-Number-Gassing-Game.git">Cli-Number-Gassing-Game</a></li>
            <li><a href="https://github.com/SyedaQurrat/simple-calculation-station.git">Simple Calculater</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className={Styles.footerColumn}>
          <h2 className={Styles.footerHeading}>Contact Information</h2>
          <ul className={Styles.footerContact}>
            <li><Mail className={Styles.icon} /> <a href="mailto:qurratnafees02@gmail.com">qurratnafees02@gmail.com</a></li>
            <li><Phone className={Styles.icon} /> <a href="tel:+923302413208">+92 3302413208</a></li>
            <li><Github className={Styles.icon} /> <a href="https://github.com/SyedaQurrat">Github</a></li>
            <li><Linkedin className={Styles.icon} /> <a href="https://www.linkedin.com/in/syeda-qurrat1991">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
