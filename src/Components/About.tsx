'use client';
import { useRouter } from 'next/navigation';
import styles from '@/Styles/About.module.css';

const About: React.FC = () => {
    const router = useRouter();

    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.aboutHeading}>
                About me!
            </h1>
            <p className={styles.aboutParagraph}>
                I am Syeda Qurrat, a passionate web developer skilled in HTML5, CSS3, Tailwind CSS, JavaScript, and TypeScript. I enjoy creating user-friendly web applications and constantly improving my coding techniques. Recently, I&#39;ve started exploring Next.js, which has sharpened my ability to build fast, scalable web applications. With features like server-side rendering and static site generation, I look forward to creating dynamic and SEO-friendly websites that deliver seamless user experiences.
            </p>
        </div>
    );
};

export default About;
