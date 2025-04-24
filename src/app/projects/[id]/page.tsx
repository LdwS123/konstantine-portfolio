'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const projects = {
  'msc-thesis': {
    title: 'MSc Thesis',
    tagline: 'AI & Profitability in US Neobanks',
    description: 'Research on how AI, Blockchain, and Emerging Technologies are reshaping B2C Neobanks.',
    role: 'Lead Researcher',
    tech: ['AI/ML', 'Data Analysis', 'Financial Modeling', 'Python', 'R'],
    impact: [
      'Analyzing profitability metrics of major US neobanks',
      'Evaluating AI implementation strategies',
      'Developing recommendations for sustainable growth'
    ],
    timeline: 'Jan 2024 - Present',
    status: 'In Progress',
    challenges: [
      'Complex data collection from multiple sources',
      'Rapidly evolving technology landscape',
      'Integration of multiple research methodologies'
    ],
    nextSteps: [
      'Complete data analysis phase',
      'Validate findings with industry experts',
      'Prepare final thesis defense'
    ]
  },
  'predict-tag-ai': {
    title: 'PredictTagAI',
    tagline: 'AI-Powered Dynamic Pricing & Tagging',
    description: 'An AI-driven tool designed to optimize pricing and metadata tagging in real-time for retail products.',
    role: 'Technical Lead',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Docker'],
    impact: [
      '20% increase in product discoverability',
      'Automated tagging accuracy of 95%',
      'Reduced manual tagging time by 80%'
    ],
    timeline: 'Sep 2023 - Dec 2023',
    status: 'Completed',
    challenges: [
      'Handling large-scale data processing',
      'Ensuring real-time performance',
      'Maintaining high accuracy across diverse product categories'
    ],
    nextSteps: [
      'Expand to additional product categories',
      'Implement advanced ML models',
      'Scale infrastructure for larger datasets'
    ]
  },
  'finka': {
    title: 'FinKa',
    tagline: 'P2P Microfinance App for Students',
    description: 'A peer-to-peer lending platform offering accessible microfinance services to university students.',
    role: 'Full Stack Developer',
    tech: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
    impact: [
      'Facilitated $50K+ in student loans',
      'Achieved 98% repayment rate',
      'Onboarded 500+ active users'
    ],
    timeline: 'Mar 2023 - Aug 2023',
    status: 'Live',
    challenges: [
      'Implementing secure payment processing',
      'Building trust among users',
      'Ensuring regulatory compliance'
    ],
    nextSteps: [
      'Expand to additional universities',
      'Implement AI-driven risk assessment',
      'Add new financial products'
    ]
  },
  'hivenet': {
    title: 'HiveNet',
    tagline: 'Tokenized Cloud Ecosystem',
    description: 'A decentralized cloud platform aiming to reach 100M users through tokenized user contribution and AI-powered incentives.',
    role: 'Blockchain Developer',
    tech: ['Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS'],
    impact: [
      'Developed smart contracts for token distribution',
      'Implemented decentralized storage solution',
      'Created user incentive mechanisms'
    ],
    timeline: 'Jun 2023 - Sep 2023',
    status: 'Beta',
    challenges: [
      'Ensuring scalability of blockchain operations',
      'Optimizing gas costs',
      'Maintaining decentralization while scaling'
    ],
    nextSteps: [
      'Launch mainnet deployment',
      'Implement governance system',
      'Expand node network'
    ]
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]
  
  if (!project) {
    notFound()
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Projects
          </Link>

          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h1>
            <p className="text-xl text-primary-600 dark:text-primary-400">
              {project.tagline}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p>{project.description}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Role
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Timeline
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{project.timeline}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Status
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                {project.status}
              </span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Impact
              </h3>
              <ul className="space-y-2">
                {project.impact.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-primary-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Challenges
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-primary-500 mr-2">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Next Steps
              </h3>
              <ul className="space-y-2">
                {project.nextSteps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-primary-500 mr-2">•</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 