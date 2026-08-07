<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiPaperAirplane } from 'react-icons/hi2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// ============================================================
// EmailJS Configuration
// ============================================================
// To set up EmailJS:
// 1. Create a free account at https://www.emailjs.com/
// 2. Add an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with these variables:
//    - {{from_name}} — sender's name
//    - {{from_email}} — sender's email
//    - {{message}} — the message body
// 4. Replace the values below with your actual IDs
// ============================================================
const EMAILJS_SERVICE_ID = 'service_flqja3i';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_os1gvgl'; // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'GxUdwdq4S46TLOnCV';    // e.g. 'aBcDeFgHiJkLmN'
=======
import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { trackContactSubmit, trackGithubClick, trackLinkedinClick } from "../lib/analytics";
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
<<<<<<< HEAD
    from_name: '',
    from_email: '',
    message: ''
=======
    name: "",
    email: "",
    message: "",
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
<<<<<<< HEAD

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent! I\'ll get back to you soon.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          borderRadius: '12px',
          fontFamily: 'Inter, sans-serif',
        }
      });

      setFormData({
        from_name: '',
        from_email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again or email me directly.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          borderRadius: '12px',
          fontFamily: 'Inter, sans-serif',
        }
      });
=======

    try {
      const response = await fetch(
        "https://formsubmit.co/adityasri.in@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Track the submission event
        trackContactSubmit(formData.email);

        toast.success(
          "Thank you for your message! I will get back to you soon.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast.error(
        "Sorry, there was an error sending your message. Please try again later.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<<<<<<< HEAD
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-3xl" />
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
            Say Hello
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Get In Touch
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Have a project in mind or just want to chat? Drop me a message.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-5">
          {/* Contact info — left side */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:piyushdawkhare0000@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <FaEnvelope className="w-4 h-4 text-primary" />
                  </div>
                  <span>piyushdawkhare0000@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/piyush-dawkhare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <FaLinkedin className="w-4 h-4 text-primary" />
                  </div>
                  <span>linkedin.com/in/piyush-dawkhare</span>
                </a>
                <a
                  href="https://github.com/INDJokerGamma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <FaGithub className="w-4 h-4 text-primary" />
                  </div>
                  <span>github.com/INDJokerGamma</span>
=======
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Contact Me
          </h2>
        </div>

        <div className="flex flex-wrap gap-10">
          <div className="flex-1 min-w-[280px]">
            <ToastContainer />
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <p className="text-muted-foreground mt-2">
              Feel free to contact me for any work or suggestions below.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:adityasri.in@gmail.com"
                  className="hover:text-primary transition-colors">
                  adityasri.in@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-primary" />
                <a
                  href="https://www.linkedin.com/in/adityakumar29"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLinkedinClick('Contact Section')}
                  className="hover:text-primary transition-colors">
                  linkedin.com/in/adityakumar29
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaGithub className="text-primary" />
                <a
                  href="https://github.com/adityaSrivastava29"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackGithubClick('Contact Section')}
                  className="hover:text-primary transition-colors">
                  github.com/adityaSrivastava29
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
                </a>
              </div>
            </div>
          </motion.div>

<<<<<<< HEAD
          {/* Contact form — right side */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ToastContainer />
            <form
              ref={formRef}
              className="rounded-xl border border-border/60 bg-card p-6 shadow-sm"
              onSubmit={handleSubmit}
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-muted-foreground/50"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-muted-foreground/50"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 min-h-[140px] resize-y placeholder:text-muted-foreground/50"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows="5"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <HiPaperAirplane className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
=======
          <div className="flex-1 min-w-[280px]">
            <form
              className="rounded-md border border-border bg-card p-5 shadow-sm"
              onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  rows="5"></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
                disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
>>>>>>> bdd1dcc3179570a8ff7d381c2b9fca20c2e1938b
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
