import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { FaTimes } from 'react-icons/fa';
import { SpotlightCard } from './ui/SpotlightCard';

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-3xl" />
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
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((proj, idx) => (
            <SpotlightCard
              key={idx}
              className="group p-6"
              delay={idx * 0.08}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {proj.period}
                  </p>
                </div>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <motion.button
                      className="inline-flex h-8 items-center rounded-lg border border-border/60 px-3 text-xs text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label={`View details for ${proj.title}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Details
                    </motion.button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50" />
                    <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border/60 bg-card p-6 shadow-xl focus:outline-none">
                      <Dialog.Title className="text-xl font-semibold text-foreground">
                        {proj.title}
                      </Dialog.Title>
                      <Dialog.Description className="text-sm text-muted-foreground mt-1">
                        {proj.period}
                      </Dialog.Description>
                      <ul className="mt-5 space-y-3">
                        {proj.bullets.map((b, i) => (
                          <motion.li
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                          >
                            <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0" />
                            <span>{b}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="mt-6 flex gap-3">
                        {proj.links.code && (
                          <a
                            href={proj.links.code}
                            className="inline-flex items-center gap-2 rounded-lg border border-border/60 px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub /> Code
                          </a>
                        )}
                        {proj.links.demo && (
                          <a
                            href={proj.links.demo}
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt className="w-3 h-3" /> Demo
                          </a>
                        )}
                      </div>
                      <Dialog.Close asChild>
                        <button
                          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-300"
                          aria-label="Close dialog"
                        >
                          <FaTimes className="w-3 h-3" />
                        </button>
                      </Dialog.Close>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>

              <ul className="space-y-2">
                {proj.bullets.slice(0, 2).map((b, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-2 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {proj.tags && (
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {proj.tags.map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium text-primary/80 bg-primary/8 border border-primary/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-3 mt-5 pt-4 border-t border-border/40">
                {proj.links.code && (
                  <a
                    href={proj.links.code}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-4 h-4" /> Code
                  </a>
                )}
                {proj.links.demo && (
                  <a
                    href={proj.links.demo}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" /> Demo
                  </a>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
