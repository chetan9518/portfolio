import React from 'react';
import { SiTypescript, SiJavascript, SiC, SiCplusplus, SiHtml5, SiCss3, SiReact, SiExpress, SiNextdotjs, SiVite, SiTailwindcss, SiPrisma, SiFramer, SiRedis, SiPostgresql, SiMongodb, SiJsonwebtokens, SiGit, SiGithub, SiCloudflare } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const techStack = [
  {
    title: 'Languages',
    items: [
      { icon: <SiTypescript className="text-blue-600" />, label: 'TypeScript' },
      { icon: <SiJavascript className="text-yellow-400" />, label: 'JavaScript' },
      { icon: <SiC className="text-blue-800" />, label: 'C/C++' },
      { icon: <span className="font-bold text-green-700">SQL</span>, label: 'SQL' },
      { icon: <SiHtml5 className="text-orange-600" />, label: 'HTML' },
      { icon: <SiCss3 className="text-blue-500" />, label: 'CSS' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { icon: <SiReact className="text-cyan-500" />, label: 'React' },
      { icon: <SiExpress className="text-gray-800" />, label: 'Express.js' },
      { icon: <SiNextdotjs className="text-black dark:text-white" />, label: 'Next.js' },
      { icon: <SiVite className="text-purple-500" />, label: 'Vite' },
      { icon: <span className="font-bold text-blue-400">Recoil</span>, label: 'Recoil' },
      { icon: <SiTailwindcss className="text-teal-400" />, label: 'Tailwind CSS' },
      { icon: <SiPrisma className="text-black dark:text-white" />, label: 'Prisma' },
      { icon: <SiFramer className="text-pink-500" />, label: 'Framer Motion' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { icon: <SiRedis className="text-red-500" />, label: 'Redis' },
      { icon: <SiPostgresql className="text-blue-700" />, label: 'PostgreSQL' },
      { icon: <SiMongodb className="text-green-600" />, label: 'MongoDB' },
      { icon: <FaAws className="text-yellow-600" />, label: 'AWS S3' },
      { icon: <span className="font-bold text-blue-400">Cloudinary</span>, label: 'Cloudinary' },
      { icon: <SiJsonwebtokens className="text-orange-400" />, label: 'JWT' },
      { icon: <span className="font-bold text-green-500">Zod</span>, label: 'Zod' },
      { icon: <SiGit className="text-orange-700" />, label: 'Git' },
      { icon: <SiGithub className="text-black dark:text-white" />, label: 'GitHub' },
      { icon: <span className="font-bold text-blue-500">Resend</span>, label: 'Resend' },
    ],
  },
  {
    title: 'Concepts',
    items: [
      { icon: <span className="font-bold text-blue-600">API</span>, label: 'REST APIs' },
      { icon: <span className="font-bold text-purple-600">Auth</span>, label: 'Auth flows' },
      { icon: <span className="font-bold text-pink-600">OTP</span>, label: 'OTP systems' },
      { icon: <span className="font-bold text-green-600">File</span>, label: 'File uploads' },
      { icon: <span className="font-bold text-cyan-600">State</span>, label: 'State management' },
      { icon: <span className="font-bold text-blue-400">DevOps</span>, label: 'DevOps (Vercel, Render, Cloudflare)' },
    ],
  },
];

const TechStackSection: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="techstack">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Tech Stack
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {techStack.map((group) => (
          <div key={group.title} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{group.title}</h3>
            <div className="flex flex-wrap gap-4">
              {group.items.map((item, idx) => (
                <div key={item.label} className="flex flex-col items-center w-20">
                  <div className="text-3xl mb-1">{item.icon}</div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200 text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection; 