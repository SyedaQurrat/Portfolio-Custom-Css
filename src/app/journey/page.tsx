'use client';
import styles from '@/Styles/journey.module.css';

const Journey: React.FC = () => {
    return (
        <section className={styles.journeyContainer}>
            <article className={styles.journeyArticle}>
                <h1 className={styles.journeyHeading}>
                    The Journey
                </h1>
                <p className={styles.journeyParagraph}>
                    This section is a look into my path as a developer, where my focus on growth and a love for creative problem-solving have guided every step. Starting with HTML5 and CSS3, I built a strong foundation, bringing static designs to life with engaging and responsive web pages. I then progressed into JavaScript and TypeScript, developing an understanding of the complex logic and interactions that create a seamless user experience. Each project has been a stepping stone toward mastering the craft of web development.

                    Today, I am working with Next.js, blending my skills across both front-end and back-end to build high-performance applications. My journey reflects a commitment to building digital experiences that are both functional and impactful.

                    As I look to the future, my passion is pushing me toward Artificial Intelligence. The potential for AI to shape intelligent, adaptive digital solutions is incredibly inspiring, and I am excited to bring these tools into my work. This evolving journey is about more than just code—it&#39;s about staying on the cutting edge and embracing the endless possibilities technology offers.
                </p>
            </article>
        </section>
    );
};

export default Journey;
