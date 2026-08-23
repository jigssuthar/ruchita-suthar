import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import {
  navigationItems,
  personalDetails,
  aboutContent,
  statistics,
  expertise,
  experience,
  education,
  skillGroups,
  processSteps,
  testimonials,
  contactInfo,
  socialLinks,
  contactFormOptions,
  seo,
} from './data/portfolioData';

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <Router>
      <HeadMeta />
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

function PortfolioHome() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-shell">
      <Navbar scrollY={scrollY} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <DesignProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function HeadMeta() {
  useEffect(() => {
    document.title = seo.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', seo.description);

    const setMeta = (selector, attr, value) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute(attr, value);
    };

    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:image"]', 'content', seo.ogImage);
    setMeta('meta[name="twitter:title"]', 'content', seo.title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);
    setMeta('link[rel="canonical"]', 'href', seo.canonical);
  }, []);

  return null;
}

function Navbar({ scrollY, mobileOpen, setMobileOpen, isDetailPage = false }) {
  const isScrolled = scrollY > 18;

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a href={isDetailPage ? '/' : '#home'} className="brand-mark" aria-label="Ruchita Suthar home page">
          <span className="brand-name">Ruchita Suthar</span>
        </a>
        <div className="nav-links desktop-nav" aria-label="Desktop navigation links">
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <a href="#contact" className="primary-button nav-button">Let’s Connect</a>
          <button
            type="button"
            className="hamburger-button"
            aria-expanded={mobileOpen}
            aria-label="Open menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}

function MobileMenu({ mobileOpen, setMobileOpen }) {
  return (
    <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
      <div className="mobile-menu-panel">
        {navigationItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="mobile-link">{item.label}</a>
        ))}
        <a href="#contact" className="primary-button mobile-cta" onClick={() => setMobileOpen(false)}>Let’s Connect</a>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay" />
      <motion.div initial="hidden" animate="visible" variants={sectionReveal} className="hero-copy" transition={{ duration: 0.7, ease: 'easeOut' }}>
        <p className="eyebrow hero-label">{personalDetails.label}</p>
        <h1>
          {personalDetails.headline.split('\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <h2>{personalDetails.subheading}</h2>
        <p className="hero-description">{personalDetails.description}</p>
        <div className="hero-actions">
          <a href="#contact" className="primary-button">Let’s Connect</a>
          <a href={`mailto:${contactInfo.email}?subject=Request%20for%20Ruchita%20Suthar%27s%20resume`} className="secondary-button">Request Résumé</a>
        </div>
        <div className="hero-meta">
          <span>Based in {personalDetails.location}</span>
          <span>•</span>
          <span>{personalDetails.availability}</span>
        </div>
      </motion.div>
      <div className="hero-visual" aria-label="Fashion portrait of Ruchita Suthar">
        <div className="image-frame">
          <img src={personalDetails.portrait} alt="Portrait of Ruchita Suthar" />
        </div>
        <div className="vertical-tag">PORTFOLIO / 2026</div>
        <div className="fabric-detail" aria-hidden="true" />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-shell about-shell">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal} transition={{ duration: 0.5 }} className="section-head">
        <p className="eyebrow">About</p>
        <h2>{aboutContent.heading}</h2>
      </motion.div>
      <div className="about-layout">
        <div className="about-image-collage">
          <img src={personalDetails.portrait} alt="Portrait of Ruchita Suthar" />
          <div className="mini-card">
            <span>{aboutContent.position}</span>
            <strong>{aboutContent.location}</strong>
          </div>
        </div>
        <div className="about-copy">
          <p>{aboutContent.intro}</p>
          <p>{aboutContent.body}</p>
          <ul className="about-list">
            <li><span>Location</span><strong>{personalDetails.location}</strong></li>
            <li><span>Education</span><strong>{aboutContent.education}</strong></li>
            <li><span>Current Role</span><strong>{aboutContent.position}</strong></li>
          </ul>
          <div className="cta-row">
            <a href="#contact" className="primary-button">Contact</a>
            <a href={`mailto:${contactInfo.email}?subject=Request%20for%20Ruchita%20Suthar%27s%20resume`} className="secondary-button">Request Résumé</a>
          </div>
        </div>
      </div>
      <div className="stat-grid">
        {statistics.map((stat, index) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="stat-card">
            <span>{stat.value}</span>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="section-shell expertise-shell">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal} transition={{ duration: 0.5 }} className="section-head">
        <p className="eyebrow">Expertise</p>
        <h2>Creative Focus</h2>
      </motion.div>
      <div className="expertise-grid">
        {expertise.map((item, index) => (
          <motion.article key={item.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="expertise-card">
            <div className="expertise-number">{item.number}</div>
            <div className="expertise-icon" aria-hidden="true"><span /></div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="section-shell experience-shell">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal} transition={{ duration: 0.5 }} className="section-head">
        <p className="eyebrow">Experience</p>
        <h2>Professional Journey</h2>
      </motion.div>
      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article key={`${item.company}-${item.role}`} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }} className="timeline-item">
            <div className="timeline-node" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-intro">
                <div>
                  <p className="timeline-role">{item.role}</p>
                  <h3>{item.company}</h3>
                </div>
                <span>{item.duration}</span>
              </div>
              <div className="timeline-details">
                <span>{item.employmentType}</span>
                <span>{item.location}</span>
                <span>{item.workMode}</span>
                <span>{item.industry}</span>
              </div>
              <ul>
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="section-shell education-shell">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal} transition={{ duration: 0.5 }} className="section-head">
        <p className="eyebrow">Education</p>
        <h2>Academic Foundation</h2>
      </motion.div>
      <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="education-card">
        <div className="education-badge">MSUB</div>
        <div className="education-info">
          <p>{education.institution}</p>
          <h3>{education.degree}</h3>
          <span>{education.duration}</span>
        </div>
        <ul>
          {education.focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </motion.article>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section-shell skills-shell">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal} transition={{ duration: 0.5 }} className="section-head">
        <p className="eyebrow">Skills</p>
        <h2>Creative Capabilities</h2>
      </motion.div>
      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <motion.div key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.05 }} className="skill-group">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function DesignProcessSection() {
  return (
    <section className="section-shell process-shell">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal} transition={{ duration: 0.5 }} className="section-head">
        <p className="eyebrow">Process</p>
        <h2>Design Process</h2>
      </motion.div>
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <motion.div key={step.number} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} className="process-step">
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-shell testimonials-shell">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal} transition={{ duration: 0.5 }} className="section-head">
        <p className="eyebrow">Testimonials</p>
        <h2>Kind Words</h2>
      </motion.div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote key={testimonial.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.07 }} className="testimonial-card">
            <p>{testimonial.quote}</p>
            <footer>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Fashion Collaboration',
    message: '',
    website: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!formData.message.trim()) nextErrors.message = 'Please share a brief project description.';
    if (formData.website) nextErrors.website = 'Invalid submission.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio enquiry - ${formData.projectType}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', phone: '', projectType: 'Fashion Collaboration', message: '', website: '' });
    }, 600);
  };

  return (
    <section id="contact" className="section-shell contact-shell">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal} transition={{ duration: 0.5 }} className="section-head">
        <p className="eyebrow">Contact</p>
        <h2>Let’s Create Something Meaningful</h2>
      </motion.div>
      <div className="contact-layout">
        <div className="contact-copy">
          <p>Have a creative opportunity, collaboration or fashion project in mind? I would love to hear about it.</p>
          <div className="contact-list">
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={contactInfo.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <span>{contactInfo.location}</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field-row">
            <label>
              Name
              <input type="text" name="name" value={formData.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
              {errors.name && <small>{errors.name}</small>}
            </label>
            <label>
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} />
              {errors.email && <small>{errors.email}</small>}
            </label>
          </div>
          <div className="field-row">
            <label>
              Phone
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
            <label>
              Project Type
              <select name="projectType" value={formData.projectType} onChange={handleChange}>
                {contactFormOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="full-width">
            Message
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
            {errors.message && <small>{errors.message}</small>}
          </label>
          <input type="text" name="website" value={formData.website} onChange={handleChange} className="honeypot" tabIndex="-1" autoComplete="off" aria-label="Leave this field empty" />
          <button type="submit" className="primary-button submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
          {isSent && <p className="success-message">Your message is ready to send via email.</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="footer-name">Ruchita Suthar</p>
          <p className="footer-title">Fashion Designer & Textile Creative</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-links social-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>Designed with purpose, detail and a love for textiles.</span>
        <span>© {new Date().getFullYear()} Ruchita Suthar</span>
      </div>
    </footer>
  );
}

export default App;
