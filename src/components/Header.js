import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ModeToggle } from './theme/mode-toggle';
import { cn } from '../lib/utils';
import resumePdf from '../Assets/Aditya_kumar_Java_full_stack_developer_resume.pdf';
import { trackResumeDownload } from '../lib/analytics';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={cn(
      'sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl transition-all duration-300',
      scrolled ? 'border-border/60 shadow-sm' : 'border-transparent'
    )}>
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <button
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => scrollToSection('about')}
          >
            Piyush<span className="text-primary">.</span>
          </button>
<<<<<<< HEAD

          <ul className="hidden md:flex items-center gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={cn(
                    'px-3 py-2 rounded-lg transition-all duration-300 relative',
                    activeSection === item.id
                      ? 'text-primary bg-primary/8 font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="ml-2">
              <a
                href="https://drive.google.com/file/d/1fldTztMS-MU08XEVPBXLoe1RSHx5kZ7T/view?usp=sharing"
                download="Resume.pdf"
                className="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md"
=======
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a className="hover:text-primary transition-colors" href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a className="hover:text-primary transition-colors" href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a className="hover:text-primary transition-colors" href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a className="hover:text-primary transition-colors" href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a className="hover:text-primary transition-colors" href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</a></li>
            <li><a className="hover:text-primary transition-colors" href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li>
              <a 
                href={resumePdf} 
                download="Aditya_Kumar_Resume.pdf" 
                onClick={() => trackResumeDownload('Desktop PDF')}
                className="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
              >
                Resume
              </a>
            </li>
            <li className="ml-1">
              <ModeToggle />
            </li>
          </ul>

          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-foreground hover:bg-muted/50 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
<<<<<<< HEAD

      {/* Mobile menu */}
      <div className={cn(
        'md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl overflow-hidden transition-all duration-300',
        menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="container py-4">
          <ul className="flex flex-col gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={cn(
                    'block px-3 py-2.5 rounded-lg transition-all duration-300',
                    activeSection === item.id
                      ? 'text-primary bg-primary/8 font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
=======
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4">
            <ul className="flex flex-col gap-3 text-sm">
              <li><a className="block hover:text-primary" href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a className="block hover:text-primary" href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a className="block hover:text-primary" href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a className="block hover:text-primary" href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a className="block hover:text-primary" href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
              <li><a className="block hover:text-primary" href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</a></li>
              <li><a className="block hover:text-primary" href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
              <li>
                <a 
                  href={resumePdf} 
                  download="Aditya_Kumar_Resume.pdf" 
                  onClick={() => trackResumeDownload('Mobile PDF')}
                  className="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="https://drive.google.com/file/d/1fldTztMS-MU08XEVPBXLoe1RSHx5kZ7T/view?usp=sharing"
                download="Resume.pdf"
                className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
