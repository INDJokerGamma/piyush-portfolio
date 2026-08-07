// src/App.js
<<<<<<< HEAD
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
=======
import React, { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import { SkeletonGrid } from "./components/ui/skeleton";
import { initGA, trackPageView } from "./lib/analytics";
import "./index.css";
const Experience = React.lazy(() => import("./components/Experience"));
const Blog = React.lazy(() => import("./components/Blog"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));
const Education = React.lazy(() => import("./components/Education"));
const Certifications = React.lazy(() => import("./components/Certifications"));
const Contact = React.lazy(() => import("./components/Contact"));
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b

function App() {
  useEffect(() => {
    initGA();
    trackPageView();
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground grain-overlay">
      <Helmet>
<<<<<<< HEAD
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
=======
        <title>
          Aditya Kumar Srivastava — Java Full Stack Developer | Spring Boot,
          React, AWS
        </title>
        <meta
          name="description"
          content="Aditya Kumar Srivastava — Java Full Stack Developer with 3.5+ years building enterprise-grade applications using Java, Spring Boot, React, PostgreSQL, Redis, and AWS. AWS Certified Developer."
        />
        <meta
          name="keywords"
          content="Adityasri, AdityaSri, adityasri.in, Aditya Kumar Srivastava,adityasri portfolio, aditya kumar portfolio, Software Engineer, Aditya Kumar Srivastava, Java Full Stack Developer, Spring Boot Developer, Java Developer India, React Developer, AWS Certified Developer, Microservices Architecture, REST API Design, PostgreSQL, Redis Caching, Spring Security, JUnit Mockito, Cognizant Developer, Software Engineer Noida, adityasri.in, Spring AI"
        />
        <meta name="author" content="Aditya Kumar Srivastava" />
        <meta
          property="og:title"
          content="Aditya Kumar Srivastava — Java Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Java Full Stack Developer specializing in Spring Boot, React, PostgreSQL & AWS. 3.5+ years of enterprise experience. Explore projects, skills & certifications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adityasri.in" />
        <meta
          property="og:site_name"
          content="Aditya Kumar Srivastava Portfolio"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adityasri_in" />
        <meta name="twitter:creator" content="@adityasri_in" />
        <meta
          name="twitter:title"
          content="Aditya Kumar Srivastava — Java Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Java Full Stack Developer with 3.5+ years in Spring Boot, React, PostgreSQL & AWS. View my portfolio."
        />
        <link rel="canonical" href="https://adityasri.in" />
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
<<<<<<< HEAD
            "name": "Piyush Vikas Dawkhare",
            "sameAs": [
              "https://github.com/INDJokerGamma",
              "https://www.linkedin.com/in/piyush-dawkhare"
            ],
            "jobTitle": "Software Developer",
            "description": "Portfolio website of Piyush Vikas Dawkhare, Software Developer. Projects, skills, experience, and contact information."
=======
            "name": "Aditya Kumar Srivastava",
            "alternateName": [
              "Aditya Software Engineer",
              "Aditya Srivastava",
              "Aditya Kumar",
              "Aditya Full Stack Developer"
            ],
            "url": "https://adityasri.in",
            "image": "https://adityasri.in/aditya_kumar_pic.jpg",
            "sameAs": [
              "https://github.com/adityaSrivastava29",
              "https://www.linkedin.com/in/adityakumar29",
              "https://x.com/adityasri_in",
              "https://www.instagram.com/adityasrivastava29"
            ],
            "jobTitle": "Software Engineer / Java Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Cognizant Technology Solutions"
            },
            "knowsAbout": ["Java", "Spring Boot", "React", "PostgreSQL", "Redis", "AWS", "Microservices", "REST API", "Docker", "CI/CD", "Software Engineering", "System Design"],
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Noida Institute of Engineering and Technology"
            },
            "description": "Aditya Kumar Srivastava is a Software Engineer and Java Full Stack Developer with 3.5+ years of experience delivering enterprise-grade applications using Java, Spring Boot, React, and PostgreSQL.",
            "email": "adityasri.in@gmail.com"
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
          }
        `}</script>
        {/* Structured Data: WebSite (for sitelinks search box) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Aditya Kumar Srivastava Portfolio",
            "url": "https://adityasri.in",
            "description": "Portfolio of Aditya Kumar Srivastava — Java Full Stack Developer specializing in Spring Boot, React, and AWS."
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
          <Blog />
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
