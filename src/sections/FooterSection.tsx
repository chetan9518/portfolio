import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const socialLinks = [
  { href: 'mailto:chetan951817@gmail.com', icon: <FaEnvelope />, label: 'Email' },
  { href: 'https://github.com/chetan9518', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/chetan-bb87bb31a', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://leetcode.com/u/chetan9518', icon: <FaCode />, label: 'LeetCode' },
];

const FooterSection: React.FC = () => (
  <footer className="py-8 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-12">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4"
    >
      <div className="flex flex-row gap-4 mb-2 md:mb-0">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="text-gray-600 dark:text-gray-300 text-sm text-center">
        &copy; {new Date().getFullYear()} Chetan. All rights reserved.
      </div>
    </motion.div>
  </footer>
);

export default FooterSection; 