'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from '@/Styles/HeroSection.module.css'; 

const HeroSection: React.FC = () => {
  return (
    <div className={styles['hero-container']}>
      {/* Background Overlay */}
      <div className={styles['hero-overlay']}></div>

      <div className={styles['hero-content']}>
        <div className={styles['hero-text']}>
          <h1 className="sm">Hi,</h1>
          <h1 className="md">I am Syeda Qurrat-ul-Ain</h1>
          <h2 className="lg">Navigating Code & Intelligence <br /> Next.js, TypeScript & AI Enthusiast</h2>
          <p className={styles['hero-description']}>
            Passionate about building seamless user experiences with Next.js and TypeScript. Let&#39;s collaborate!
          </p>
          <div className={styles['hero-buttons']}>
            <a href="/contact">
              <button className={styles['hero-button']}>
                Hire Me
              </button>
            </a>
            <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
              <a href="/resume">
                <button className={styles['hero-button']}>
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image  */}
        <div className={styles['hero-image']}>
          <Image
            alt="Syeda Qurrat"
            src="/images/image-6.png"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
