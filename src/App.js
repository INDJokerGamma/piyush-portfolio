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
const Achievements = React.lazy(() => import('./components/Achievements'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground grain-overlay">
      <Helmet>
        <title>Piyush V. Dawkhare - Full Stack Developer</title>
        <meta name="description" content="Portfolio of Piyush V. Dawkhare, a Computer Science student and full-stack developer building reliable software, APIs, and cloud applications." />
        <meta name="keywords" content="Piyush Dawkhare, Full Stack Developer, React, Node.js, Azure, Portfolio" />
        <meta name="author" content="Piyush V. Dawkhare" />
        <meta property="og:title" content="Piyush V. Dawkhare - Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Piyush V. Dawkhare - Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Piyush V. Dawkhare",
            "sameAs": [
              "https://github.com/INDJokerGamma",
              "https://www.linkedin.com/in/piyush-dawkhare"
            ],
            "jobTitle": "Software Developer",
            "description": "Portfolio website of Piyush V. Dawkhare, full-stack developer and Computer Science student."
          }
        `}</script>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Helmet>
      <Header />
      <ScrollFeatures />
      <div className="main-content">
        <About />
        <Suspense
          fallback={
            <div className="container py-16">
              <SkeletonGrid count={6} />
            </div>
          }>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Achievements />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
