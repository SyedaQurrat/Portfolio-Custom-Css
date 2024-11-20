'use client';
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import styles from '@/Styles/Contact.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    if (!message) newErrors.message = 'Message cannot be empty.';
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSent(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className={styles.container}>
      <div className="flex-1">
        <h1 className={styles.heading}>Get in Touch</h1>
        <p className={styles.subheading}>We&#39;d love to hear from you. Please fill out the form below to send us a message.</p>
        <div className={styles.contactInfo}>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <ul className="space-y-4">
            <li className={styles.iconText}>
              <Mail className="w-5 h-5" />
              <a href="mailto:qurratnafees02@gmail.com" className={styles.contactLink}>qurratnafees02@gmail.com</a>
            </li>
            <li className={styles.iconText}>
              <Phone className="w-5 h-5" />
              <a href="tel:+923302413208" className={styles.contactLink}>+92 3302413208</a>
            </li>
            <li className={styles.iconText}>
              <Linkedin className="w-5 h-5" />
              <a href="https://www.linkedin.com/in/syeda-qurrat1991" className={styles.contactLink}>www.linkedin.com/in/syeda-qurrat1991</a>
            </li>
            <li className={styles.iconText}>
              <Github className="w-5 h-5" />
              <a href="https://github.com/SyedaQurrat" className={styles.contactLink}>https://github.com/SyedaQurrat</a>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
            />
            {errors.message && <p className={styles.errorText}>{errors.message}</p>}
          </div>
          <button
            type="submit"
            className={styles.submitButton}
          >
            Send Message
          </button>
          {sent && (
            <p className={styles.successMessage}>Message sent successfully!</p>
          )}
        </form>
      </div>

      <div className="flex-1 mt-10 lg:mt-0 lg:ml-10 flex items-center justify-center">
        <div className={styles.imageContainer}>
          <Image
            src='/images/image-6.png'
            alt="Contact Image"
            layout="intrinsic"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
