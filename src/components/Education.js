import React from 'react';
import { education } from '../data/education';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Academic
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/60 whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-primary font-medium">{edu.institution}</p>
              {edu.extra && (
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{edu.extra.split(':')[0]}:</span>
                  {edu.extra.split(':').slice(1).join(':')}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;