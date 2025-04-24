'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 'hivenet',
    title: 'HiveNet',
    tagline: 'Tokenized Cloud Ecosystem',
    description: 'A decentralized cloud platform aiming to reach 100M users through tokenized user contribution and AI-powered incentives.',
    role: 'Strategy, growth planning, tokenomics, community building',
    tech: ['Blockchain', 'AI', 'Tokenomics'],
    impact: [
      'Designed a 3-year expansion plan',
      'Created Pi Network-inspired growth strategy',
      'Developed tokenomics model for user incentives',
    ],
    challenges: [
      'Balancing decentralization with user experience',
      'Creating sustainable token economics',
      'Building trust in a new cloud model',
    ],
    nextSteps: [
      'Launch MVP with initial user base',
      'Implement AI-powered incentive system',
      'Expand to enterprise partnerships',
    ],
  },
  {
    id: 'passmemo',
    title: 'PassMemo',
    tagline: 'AI Health App for Families',
    description: 'A full-stack app that lets caregivers manage memory notes, emergency contacts, and generate PDF summaries with QR codes.',
    tech: ['Python', 'Streamlit', 'AI'],
    impact: [
      'Built for real-world use by families and nurses',
      'Implemented secure data export system',
      'Created intuitive user interface for elderly users',
    ],
    challenges: [
      'Ensuring data privacy and security',
      'Making the interface accessible for elderly users',
      'Integrating with existing healthcare systems',
    ],
    nextSteps: [
      'Add offline functionality',
      'Implement multi-language support',
      'Integrate with healthcare providers',
    ],
  },
  {
    id: 'fifa-trainer',
    title: 'FIFA Agent Exam Trainer',
    tagline: 'Smart Quiz App',
    description: 'A smart quiz app using official materials, auto-generating realistic case-study questions with AI.',
    tech: ['Python', 'JavaScript', 'OpenAI API'],
    impact: [
      'Helped candidates prepare for official exam',
      'Generated realistic case studies',
      'Provided instant feedback on answers',
    ],
    challenges: [
      'Keeping content up to date with FIFA regulations',
      'Generating realistic case studies',
      'Ensuring accuracy of AI-generated questions',
    ],
    nextSteps: [
      'Add performance analytics',
      'Implement multilingual support',
      'Create mobile version',
    ],
  },
  {
    id: 'thesis',
    title: 'MSc Thesis',
    tagline: 'AI & Profitability in US Neobanks',
    description: 'Research on how AI, Blockchain, and Emerging Technologies are reshaping B2C Neobanks.',
    tech: ['Research', 'AI', 'Blockchain'],
    impact: [
      'Analyzed case studies of successful neobanks',
      'Identified key factors for profitability',
      'Provided actionable insights for the industry',
    ],
    challenges: [
      'Accessing reliable data from neobanks',
      'Balancing theoretical and practical insights',
      'Predicting future trends accurately',
    ],
    nextSteps: [
      'Publish findings in academic journals',
      'Present at fintech conferences',
      'Develop practical implementation guide',
    ],
  },
  {
    id: 'cv-assistant',
    title: 'AI-Powered CV Assistant',
    tagline: 'No-code Resume Generator',
    description: 'A no-code tool to generate custom resumes using AI, powered by Make.com.',
    tech: ['AI', 'Make.com', 'Automation'],
    impact: [
      'Helped students create tailored resumes',
      'Reduced time spent on application preparation',
      'Improved application success rates',
    ],
    challenges: [
      'Ensuring AI-generated content is accurate',
      'Maintaining different resume formats',
      'Integrating with job platforms',
    ],
    nextSteps: [
      'Add cover letter generation',
      'Implement job matching features',
      'Create enterprise version for universities',
    ],
  },
]

export default function ProjectsPage() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link
          href="/"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              My Projects
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Building solutions that matter in fintech, AI, and blockchain
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-lg text-primary-600 dark:text-primary-400">
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
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Impact
                      </h3>
                      <ul className="space-y-2">
                        {project.impact.map((item) => (
                          <li
                            key={item}
                            className="flex items-start text-gray-600 dark:text-gray-300"
                          >
                            <span className="text-primary-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Challenges
                      </h3>
                      <ul className="space-y-2">
                        {project.challenges.map((item) => (
                          <li
                            key={item}
                            className="flex items-start text-gray-600 dark:text-gray-300"
                          >
                            <span className="text-primary-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Next Steps
                      </h3>
                      <ul className="space-y-2">
                        {project.nextSteps.map((item) => (
                          <li
                            key={item}
                            className="flex items-start text-gray-600 dark:text-gray-300"
                          >
                            <span className="text-primary-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 