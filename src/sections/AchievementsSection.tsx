import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  'Solved 100+ DSA problems on LeetCode',
  'Built 2+ full-stack apps with cloud deployment',
  'Integrated Redis, AWS S3, and Cloudinary in real projects',
  'Built mobile-first UIs with Tailwind + Framer Motion',
  'Currently learning and building with Next.js (in progress)',
];

const AchievementsSection: React.FC = () => (
  <section className="py-16 px-4 max-w-4xl mx-auto" id="achievements">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Achievements
    </h2>
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="space-y-4"
    >
      {achievements.map((ach, idx) => (
        <motion.li
          key={ach}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 text-gray-700 dark:text-gray-200 text-lg"
        >
          {ach}
        </motion.li>
      ))}
    </motion.ul>
  </section>
);

export default AchievementsSection; 