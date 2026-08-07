// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import { ScrollFeatures } from './components/ui/ScrollFeatures';
import './index.css';
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground grain-overlay">
      <Helmet>
        <title>Piyush Vikas Dawkhare - Software Developer</title>
        <meta name="description" content="Welcome to Piyush Vikas Dawkhare's portfolio website. A passionate software developer showcasing projects, skills, and experience." />
        <meta name="keywords" content="Piyush Dawkhare, Piyush Vikas Dawkhare, Software Developer, Full Stack Developer, Portfolio" />
        <meta name="author" content="Piyush Vikas Dawkhare" />
        <meta property="og:title" content="Piyush Vikas Dawkhare - Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Piyush Vikas Dawkhare - Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Piyush Vikas Dawkhare",
            "sameAs": [
              "https://github.com/INDJokerGamma",
              "https://www.linkedin.com/in/piyush-dawkhare"
            ],
            "jobTitle": "Software Developer",
            "description": "Portfolio website of Piyush Vikas Dawkhare, Software Developer. Projects, skills, experience, and contact information."
          }
        `}</script>
        {/* SEO: Robots meta tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <ScrollFeatures />
      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;