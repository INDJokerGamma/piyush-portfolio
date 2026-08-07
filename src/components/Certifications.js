import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaAws, FaGithub } from 'react-icons/fa';
import { certifications } from '../data/certifications';
import { motion } from 'framer-motion';

const Certifications = () => {
  const [isFlipped, setIsFlipped] = useState({
    awsDev: false,
    awsCloud: false,
    github: false,
  });

  const handleFlip = (key) => {
    setIsFlipped((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  const certKeys = ['awsDev', 'awsCloud', 'github'];

  const getIcon = (cert) => {
    if (cert.icon === 'aws') return <FaAws size={36} className="text-[#FF9900]" />;
    return <FaGithub size={36} className="text-foreground" />;
  };

  const getBackBg = (cert) => {
    if (cert.icon === 'aws') return 'bg-[#FF9900]';
    return 'bg-foreground';
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Certifications
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Recognized achievements in the field of technology. Click a card to see the certificate.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <ReactCardFlip isFlipped={isFlipped[certKeys[idx]]} flipDirection="horizontal">
                {/* Front Side */}
                <div
                  className="rounded-xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-400 cursor-pointer text-center min-h-[220px] flex flex-col items-center justify-center"
                  onClick={() => handleFlip(certKeys[idx])}
                >
                  <div className="mb-4 p-3 rounded-xl bg-muted/30 border border-border/40 inline-flex">
                    {getIcon(cert)}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.period}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View on Credly →
                  </a>
                </div>

                {/* Back Side */}
                <div
                  className={`rounded-xl ${getBackBg(cert)} p-4 cursor-pointer min-h-[220px] flex items-center justify-center shadow-md`}
                  onClick={() => handleFlip(certKeys[idx])}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.name} Certificate`}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
              </ReactCardFlip>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
