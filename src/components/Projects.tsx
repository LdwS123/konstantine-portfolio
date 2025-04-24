'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const projects = [
  {
    title: 'HiveNet',
    tagline: 'Tokenized Cloud Ecosystem',
    description: 'A decentralized cloud platform aiming to reach 100M users through tokenized user contribution and AI-powered incentives.',
    role: 'Strategy, growth planning, tokenomics, community building',
    tech: ['Blockchain', 'AI', 'Tokenomics'],
    link: '#hivenet',
  },
  {
    title: 'PassMemo',
    tagline: 'AI Health App for Families',
    description: 'A full-stack app that lets caregivers manage memory notes, emergency contacts, and generate PDF summaries with QR codes.',
    tech: ['Python', 'Streamlit', 'AI'],
    link: '#passmemo',
  },
  {
    title: 'FIFA Agent Exam Trainer',
    tagline: 'Smart Quiz App',
    description: 'A smart quiz app using official materials, auto-generating realistic case-study questions with AI.',
    tech: ['Python', 'JavaScript', 'OpenAI API'],
    link: '#fifa-trainer',
  },
  {
    title: 'MSc Thesis',
    tagline: 'AI & Profitability in US Neobanks',
    description: 'Research on how AI, Blockchain, and Emerging Technologies are reshaping B2C Neobanks.',
    tech: ['Research', 'AI', 'Blockchain'],
    link: '#thesis',
  },
  {
    title: 'AI-Powered CV Assistant',
    tagline: 'No-code Resume Generator',
    description: 'A no-code tool to generate custom resumes using AI, powered by Make.com.',
    tech: ['AI', 'Make.com', 'Automation'],
    link: '#cv-assistant',
  },
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              My Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Building solutions that matter in fintech, AI, and blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary-600 dark:text-primary-400">
                    {project.tagline}
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  {project.role && (
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Role:</span> {project.role}
                    </p>
                  )}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="mt-6 inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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