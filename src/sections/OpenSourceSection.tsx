import React from 'react';
import { motion } from 'framer-motion';

const OpenSourceSection: React.FC = () => (
  <section className="py-16 px-4 max-w-4xl mx-auto" id="opensource">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Open Source Contribution
    </h2>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center"
    >
      <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
        AWS Powertools for AWS Lambda (TypeScript)
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-3">
        Refactored legacy code, improved tests, passed CI/CD, and followed open-source PR practices.
      </p>
      <a
        href="https://github.com/aws-powertools/powertools-lambda-typescript/pull/4137"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-200"
      >
        View Pull Request
      </a>
    </motion.div>
  </section>
);

export default OpenSourceSection; 