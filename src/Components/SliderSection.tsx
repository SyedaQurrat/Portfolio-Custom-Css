'use client'; 
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/Styles/SliderSectionm.module.css';

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images = [
  '/images/Salon-Website.jpg',
  '/images/Governor-Sindh-Website.jpg',
  '/images/Resume.jpg',
  '/images/To-Do-App.jpg',
  '/images/Assignment-45.jpg',
  '/images/SQL.jpg',
  '/images/foody.jpg',
  '/images/result-Checker app.jpg',
  '/images/Node-Projects.jpg',
  '/images/Expense-Tracker-App.jpg',
  '/images/word-Counter.jpg',
] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide + 1 >= images.length ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.sliderContainer}>
      <h1 className={styles.sliderHeading}>Projects Highlight</h1>
      <div 
        className={styles.sliderWrapper} 
        style={{ transform: `translateX(-${currentSlide * 50}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.slide}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.slideImage}
              width={800} 
              height={400} 
            />
          </div>
        ))}
      </div>
      <div className={styles.indicatorWrapper}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${currentSlide === index ? styles.activeIndicator : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
