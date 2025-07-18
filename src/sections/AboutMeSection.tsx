import React from 'react';
import { motion } from 'framer-motion';

const AboutMeSection: React.FC = () => (
  <section className="py-16 px-4 max-w-3xl mx-auto" id="about">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      About Me
    </h2>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center"
    >
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
        I'm a 3rd-year CSE student at IIIT Agartala . I enjoy backend development, designing scalable systems, and working on real-world problems with secure cloud integrations. I’m a fast learner and love clean, typed code.
      </p>
    </motion.div>
  </section>
);

export default AboutMeSection; 