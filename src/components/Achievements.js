import React from 'react';
import { FaCode, FaMedal, FaStar, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';

const icons = { code: FaCode, medal: FaMedal, star: FaStar, trophy: FaTrophy };

const Achievements = () => (
  <section id="achievements" className="py-16 sm:py-20 lg:py-24">
    <div className="container">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
          Highlights
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Achievements
        </h2>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {achievements.map((achievement, index) => {
          const Icon = icons[achievement.icon];
          return (
            <motion.div
              key={achievement.title}
              className="rounded-xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="text-base font-semibold text-foreground">{achievement.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{achievement.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Achievements;
