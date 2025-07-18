import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Chetan
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
          Full-Stack Developer | Backend Engineer
        </h2>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
          “I build scalable, secure, and real-time web applications with modern backend tools.”
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Chetan-Resume.pdf"
            download
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold shadow-lg hover:bg-blue-50 dark:hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 blur-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection; 