'use client';
import React from 'react';
import Image from 'next/image';
import styles from '@/Styles/projects.module.css';

const Projects: React.FC = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsWrapper}>
        <h1 className={styles.projectsTitle}>Projects</h1>
        <div className={styles.gridContainer}>
          <a className={styles.projectLink} href="https://saon-website.vercel.app/">
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Salon-Website"
                  loading="lazy"
                  className={styles.projectImage}
                  src="/images/Salon-Website.jpg"
                  width={500} 
                  height={250} 
                />
              </div>
              <div className={styles.projectText}>
                <span>Salon-Website</span>
              </div>
            </div>
          </a>

          <a className={styles.projectLink} href="https://governor-web-site-toa4.vercel.app/">
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Governor Sindh Website"
                  loading="lazy"
                  className={styles.projectImage}
                  src="/images/Governor-Sindh-Website.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className={styles.projectText}>
                <span>Governor Sindh Website</span>
              </div>
            </div>
          </a>
          <a className={styles.projectLink} href="#">
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Resume Builder"
                  loading="lazy"
                  className={styles.projectImage}
                  src="/images/Resume.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className={styles.projectText}>
                <span>Resume Builder</span>
              </div>
            </div>
          </a>
          <a className={styles.projectLink} href="#">
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="To-Do-App"
                  loading="lazy"
                  className={styles.projectImage}
                  src="/images/To-Do-App.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className={styles.projectText}>
                <span>To-Do-App</span>
              </div>
            </div>
          </a>
          <a className={styles.projectLink} href="#">
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Assignment-45"
                  loading="lazy"
                  className={styles.projectImage}
                  src="/images/Assignment-45.jpg"
                  width={500} 
                  height={250}
                />
              </div>g
              <div className={styles.projectText}>
                <span>TypeScript Assignment-45</span>
              </div>
            </div>
          </a>
          <a className={styles.projectLink} href="#">
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="result-Checker app"
                  loading="lazy"
                  className={styles.projectImage}
                  src="/images/result-Checker app.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className={styles.projectText}>
                <span>Result-Checker app</span>
              </div>
            </div>
          </a>
          <a className={styles.projectLink} href="#">
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Node-Projects"
                  loading="lazy"
                  className={styles.projectImage}
                  src="/images/Node-Projects.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className={styles.projectText}>
                <span>Node-Projects</span>
              </div>
            </div>
          </a>
          <a className={styles.projectLink} href="#">
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Expense-Tracker-App"
                  loading="lazy"
                  className={styles.projectImage}
                  src="/images/Expense-Tracker-App.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className={styles.projectText}>
                <span>Expense-Tracker-App</span>
              </div>
            </div>
          </a>
          <a className={styles.projectLink} href="#">
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="word-Counter"
                  loading="lazy"
                  className={styles.projectImage}
                  src="/images/word-Counter.jpg"
                  width={500} 
                  height={250}
                />
              </div>
              <div className={styles.projectText}>
                <span>Word-Counter</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
