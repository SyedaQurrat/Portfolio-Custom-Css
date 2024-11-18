'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/Styles/resume.module.css'; 

const Resume: React.FC = () => {
  return (
    <div className={styles['resume-container']}>
      <h1 className={styles['resume-heading']}>
        My Resume
      </h1>

      <div className={styles['resume-image-container']}>
        <Image
          src="/images/Syeda Resume.jpeg" 
          alt="Resume"
          width={800} 
          height={1000}
          className={styles['resume-image']}
        />
      </div>
    </div>
  );
};

export default Resume;
