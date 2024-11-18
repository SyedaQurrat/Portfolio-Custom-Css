'use client';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPeopleArrows, FaLightbulb, FaHandshake, FaClock } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si'; 
import styles from '@/Styles/Skills.module.css';

const Skills: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Skills</h1>

      {/* Technical Skills Section */}
      <section className="mb-10">
        <h2 className={styles.sectionTitle}>Technical Skills:</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <FaHtml5 className={styles.icon} />
            <div>
              <h3 className={styles.skillTitle}>HTML5</h3>
              <p className={styles.skillDescription}>Expertise in building responsive web layouts with semantic HTML5.</p>
            </div>
          </div>
          <div className={styles.skillCard}>
            <FaCss3Alt className={styles.icon} />
            <div>
              <h3 className={styles.skillTitle}>CSS3</h3>
              <p className={styles.skillDescription}>Proficient in styling and animations using CSS3 and preprocessors.</p>
            </div>
          </div>
          <div className={styles.skillCard}>
            <FaJsSquare className={styles.icon} />
            <div>
              <h3 className={styles.skillTitle}>JavaScript</h3>
              <p className={styles.skillDescription}>Skilled in creating interactive web applications using JavaScript.</p>
            </div>
          </div>
          <div className={styles.skillCard}>
            <SiTypescript className={styles.icon} />
            <div>
              <h3 className={styles.skillTitle}>TypeScript</h3>
              <p className={styles.skillDescription}>Enhanced type safety and scalability using TypeScript.</p>
            </div>
          </div>
          <div className={styles.skillCard}>
            <FaReact className={styles.icon} />
            <div>
              <h3 className={styles.skillTitle}>ReactJS</h3>
              <p className={styles.skillDescription}>Developing dynamic user interfaces with ReactJS and its ecosystem.</p>
            </div>
          </div>
         
          <div className={styles.skillCard}>
            <SiNextdotjs className={styles.icon} />
            <div>
              <h3 className={styles.skillTitle}>Next.js</h3>
              <p className={styles.skillDescription}>Building optimized and fast web applications with Next.js.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section>
        <h2 className={styles.sectionTitle}>Soft Skills:</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <FaPeopleArrows className={styles.icon} />
            <div>
              <h3 className={styles.skillTitle}>Teamwork</h3>
              <p className={styles.skillDescription}>Strong ability to work collaboratively in diverse team environments.</p>
            </div>
          </div>
          <div className={styles.skillCard}>
            <FaLightbulb className={styles.icon} />
            <div>
              <h3 className={styles.skillTitle}>Creativity</h3>
              <p className={styles.skillDescription}>Creative problem-solving to deliver efficient and innovative solutions.</p>
            </div>
          </div>
          <div className={styles.skillCard}>
            <FaHandshake className={styles.icon} />
            <div>
              <h3 className={styles.skillTitle}>Communication</h3>
              <p className={styles.skillDescription}>Excellent communication skills for effective interaction and presentations.</p>
            </div>
          </div>
          <div className={styles.skillCard}>
            <FaClock className={styles.icon} />
            <div>
              <h3 className={styles.skillTitle}>Time Management</h3>
              <p className={styles.skillDescription}>Efficiently balancing tasks and meeting deadlines under pressure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
