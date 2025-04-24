'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = {
  'Soft Skills': [
    { name: 'Strategic thinking', level: 90 },
    { name: 'Storytelling & pitching', level: 85 },
    { name: 'Product management', level: 80 },
    { name: 'Problem-solving', level: 95 },
    { name: 'Cross-cultural communication', level: 90 },
  ],
  'Tech Tools': [
    { name: 'Python', level: 85 },
    { name: 'Make (no-code)', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'Streamlit', level: 85 },
    { name: 'Figma', level: 80 },
  ],
}

export function Skills() {
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
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-16"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Skills & Expertise
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Combining technical prowess with strategic thinking
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {Object.entries(skills).map(([category, categorySkills]) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {categorySkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-primary-600 dark:text-primary-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-primary-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
} 