import React from 'react';
<<<<<<< HEAD
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
=======
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b

import { ReactTyped } from 'react-typed';
import piyushPic from '../Assets/piyush-dawkhare-pic.png';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
import { trackGithubClick, trackLinkedinClick } from '../lib/analytics';
// Tailwind migration: inline classes
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b

const About = () => {
  return (
    <section
      id="about"
      className="container py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle frost decorations */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-1/4 w-80 h-80 bg-primary/[0.04] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl"
          animate={{
            scale: [1, 0.85, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          transition={{ duration: 0.7, ease: "easeOut" }}>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2 text-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}>
            {profile.name.split(' ')[0]}{' '}
            <span className="text-primary">{profile.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl font-medium text-muted-foreground mb-6 h-8"
            initial={{ opacity: 0, y: 15 }}
=======
          transition={{ duration: 0.6 }}>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            {profile.name}
          </motion.h1>
          <motion.h3
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <ReactTyped
              strings={profile.titles}
              typeSpeed={50}
              backSpeed={40}
              backDelay={2000}
              loop
              className="typed-text"
            />
          </motion.h2>

          {profile.bio.map((p, i) => (
            <motion.p
              key={i}
              className="mt-3 text-muted-foreground text-base leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}>
              {p}
            </motion.p>
          ))}
<<<<<<< HEAD
=======
        </motion.div>
        <motion.div
          className="flex-1 w-full flex flex-col items-center gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="relative group">
            {/* Enhanced glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg blur-lg opacity-20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating accent dots */}
            <motion.div
              className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-primary to-purple-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            <div className="relative w-full max-w-sm overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-500">
              <motion.img
                src={profile.image || adityaPic}
                alt="Aditya Kumar Srivastava - Software Engineer & Java Full Stack Developer"
                className="w-full h-auto"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b

          {/* Social links */}
          <motion.div
            className="flex items-center gap-3 mt-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <motion.a
              href={`mailto:${profile.social.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}>
              <FaEnvelope className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
<<<<<<< HEAD
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              whileHover={{ y: -2 }}
=======
              onClick={() => trackLinkedinClick('About Section')}
              className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 border border-border/50"
              whileHover={{ scale: 1.1, rotate: 5 }}
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
              whileTap={{ scale: 0.95 }}>
              <FaLinkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
<<<<<<< HEAD
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              whileHover={{ y: -2 }}
=======
              onClick={() => trackGithubClick('About Section')}
              className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 border border-border/50"
              whileHover={{ scale: 1.1, rotate: -5 }}
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
              whileTap={{ scale: 0.95 }}>
              <FaGithub className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={profile.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 border border-border/50"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}>
              <FaInstagram />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}>
          <div className="relative group">
            {/* Frost glow ring */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg group-hover:shadow-xl transition-all duration-500">
              <motion.img
                src={profile.image || piyushPic}
                alt="Piyush Dawkhare"
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
