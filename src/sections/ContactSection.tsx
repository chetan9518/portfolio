import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const socialLinks = [
  { href: 'mailto:chetan951817@gmail.com', icon: <FaEnvelope />, label: 'Email' },
  { href: 'https://github.com/chetan9518', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/chetan-bb87bb31a', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://leetcode.com/u/chetan9518', icon: <FaCode />, label: 'LeetCode' },
];

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Contact
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="flex flex-row gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
