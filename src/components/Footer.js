<<<<<<< HEAD
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
=======
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import { trackGithubClick, trackLinkedinClick } from "../lib/analytics";
// Tailwind migration: inline classes
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<<<<<<< HEAD
    <footer className="mt-16 border-t border-border/60">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-4 justify-between">
          {/* Brand */}
          <motion.div
            className="space-y-3 max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-foreground">
              Piyush<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Software Engineer with a passion for creating innovative, scalable, and high-performance solutions.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Links</h3>
            <ul className="space-y-2.5 text-sm">
              {['About', 'Experience', 'Projects', 'Skills'].map((link) => (
                <li key={link}>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    href={`#${link.toLowerCase()}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
=======
    <footer className="mt-16 border-t border-border bg-foreground/[0.02]">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Aditya Kumar Srivastava</h3>
            <p className="max-w-md text-sm text-muted-foreground">
              Software Engineer with a passion for creating innovative,
              scalable, and high-performance solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#about">
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#skills">
                  Skills
                </a>
              </li>
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
            </ul>
          </motion.div>

<<<<<<< HEAD
          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Connect</h3>
            <ul className="flex items-center gap-3">
              {[
                { href: 'https://www.linkedin.com/in/piyush-dawkhare', icon: FaLinkedin, label: 'LinkedIn' },
                { href: 'https://github.com/INDJokerGamma', icon: FaGithub, label: 'GitHub' },
                { href: 'mailto:piyushdawkhare0000@gmail.com', icon: FaEnvelope, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                </li>
              ))}
=======
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="mt-3 flex items-center gap-4">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://www.linkedin.com/in/adityakumar29"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLinkedinClick('Footer')}
                  aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://github.com/adityaSrivastava29"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackGithubClick('Footer')}
                  aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="mailto:adityasri.in@gmail.com"
                  aria-label="Email">
                  <FaEnvelope size={20} />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://www.instagram.com/adityasrivastava29"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram">
                  <FaInstagram size={20} />
                </a>
              </li>
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
            </ul>
          </motion.div>
        </div>

<<<<<<< HEAD
        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Piyush Vikas Dawkhare. All rights reserved.
=======
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Aditya Kumar. All rights reserved.
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
