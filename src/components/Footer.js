import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
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
            </ul>
          </motion.div>

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
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Piyush V. Dawkhare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
