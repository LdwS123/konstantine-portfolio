'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 'msc-thesis',
    title: 'MSc Thesis',
    tagline: 'AI & Profitability in US Neobanks',
    description: 'Research on how AI, Blockchain, and Emerging Technologies are reshaping B2C Neobanks.',
    tech: ['AI/ML', 'Data Analysis', 'Financial Modeling'],
    isCurrent: true,
    highlight: 'Currently working on this project',
  },
  {
    id: 'predict-tag-ai',
    title: 'PredictTagAI',
    tagline: 'AI-Powered Dynamic Pricing & Tagging',
    description: 'An AI-driven tool designed to optimize pricing and metadata tagging in real-time for retail products.',
    tech: ['Python', 'TensorFlow', 'FastAPI'],
  },
  {
    id: 'finka',
    title: 'FinKa',
    tagline: 'P2P Microfinance App for Students',
    description: 'A peer-to-peer lending platform offering accessible microfinance services to university students.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
  },
  {
    id: 'hivenet',
    title: 'HiveNet',
    tagline: 'Tokenized Cloud Ecosystem',
    description: 'A decentralized cloud platform aiming to reach 100M users through tokenized user contribution and AI-powered incentives.',
    tech: ['Solidity', 'Web3.js', 'React'],
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Projects
            </h2>
            <p className="mt-3 text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
              Explore my latest work and ongoing projects
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`
                  relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl
                  ${project.isCurrent ? 'ring-2 ring-yellow-500 dark:ring-yellow-400' : ''}
                `}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.isCurrent && (
                      <div className="flex items-center space-x-2">
                        <AcademicCapIcon className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
                        <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                          Current Project
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
                    {project.tagline}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className={`
                      inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                      ${
                        project.isCurrent
                          ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:hover:bg-yellow-900/30'
                          : 'bg-primary-100 text-primary-800 hover:bg-primary-200 dark:bg-primary-900/20 dark:text-primary-300 dark:hover:bg-primary-900/30'
                      }
                    `}
                  >
                    Learn More
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 