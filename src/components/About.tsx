'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function About() {
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
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Bio Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hi, I'm Konstantine, a business & tech student at SKEMA Business School, passionate about fintech, AI, and blockchain. As a former political refugee who arrived in France at age 11, I've learned to turn challenges into fuel for growth.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm building real-world solutions that matter — from tokenized cloud storage to AI-driven health tech. My goal? Help reshape financial systems by merging vision, tech, and human-centered thinking.
            </p>
          </motion.div>

          {/* Languages & Core Values */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { lang: 'French', level: 'Native' },
                  { lang: 'English', level: 'Fluent' },
                  { lang: 'Georgian', level: 'Native' },
                  { lang: 'Russian', level: 'Proficient' },
                  { lang: 'Spanish', level: 'Conversational' },
                ].map((language) => (
                  <div
                    key={language.lang}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                  >
                    <p className="font-medium text-gray-900 dark:text-white">
                      {language.lang}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {language.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Core Values
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Resilience', 'Innovation', 'Transparency', 'Purpose'].map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 