import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: 'SkillMatch',
    description: 'A full-stack platform to match developers by skills.',
    features: [
      'OTP & Google OAuth',
      'Resume uploads to S3',
      'Real-time WebSocket chat',
      'Job search & filter',
      'PostgreSQL queries, Prisma ORM',
      'Redis caching',
    ],
    live: 'https://skillmatch.sbs',
    github: 'https://github.com/chetan9518/skillmatch',
    stack: ['React', 'TypeScript', 'Node.js', 'Redis', 'Prisma', 'PostgreSQL', 'AWS S3'],
  },
  {
    name: 'SkillPay – Digital Wallet Clone',
    description: 'Peer-to-peer payment system with OTP-auth, Redis token storage, access control.',
    features: [],
    live: '',
    github: 'https://github.com/chetan9518/skillpay',
    stack: ['Node.js', 'Express', 'MongoDB', 'React', 'Redis'],
  },
  {
    name: 'TodoList',
    description: 'Responsive to-do app with filter and persistent state.',
    features: [],
    live: '',
    github: 'https://github.com/chetan9518/todolist',
    stack: ['React', 'Recoil', 'Tailwind CSS'],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                {project.name}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-500 hover:text-blue-700">
                    <FaExternalLinkAlt />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="ml-1 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">
                    <FaGithub />
                  </a>
                )}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
              {project.features.length > 0 && (
                <ul className="mb-3 list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 