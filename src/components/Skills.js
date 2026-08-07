import React from 'react';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = skills.map((c) => ({ title: c.title, skills: c.items }));

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <h3 className="text-base font-semibold mb-5 pb-3 border-b border-border/60">
                <span className="text-primary">{category.title}</span>
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group flex flex-col items-center gap-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: (index * 0.05) + (skillIndex * 0.03)
                    }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-muted/30 border border-border/40 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="max-h-7 max-w-7 transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-center text-[11px] text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;