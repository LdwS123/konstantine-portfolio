'use client'

import { SparklesIcon, LightBulbIcon, RocketLaunchIcon, PresentationChartLineIcon, GlobeAltIcon, BoltIcon, FireIcon } from '@heroicons/react/24/outline'

const softSkills = [
  {
    name: 'Product Thinking',
    description: 'I define problems like a PM, test like a hacker, and simplify like a designer.',
    icon: LightBulbIcon,
  },
  {
    name: 'Strategic Vision',
    description: 'I connect tech possibilities with business realities and scale potential.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Growth Mindset',
    description: 'I build fast, learn fast, iterate even faster.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Pitching & Influence',
    description: 'From VC rooms to internal teams — I make ideas land.',
    icon: SparklesIcon,
  },
  {
    name: 'Cross-cultural Fluency',
    description: 'Multilingual, international mindset, frictionless collaboration.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Execution Under Pressure',
    description: `I've launched in hackathons, live demos, and tight student-led sprints.`,
    icon: BoltIcon,
  },
  {
    name: 'Resilience & Drive',
    description: 'I adapt and keep moving — I turn constraints into creative fuel.',
    icon: FireIcon,
  },
]

const techStack = [
  {
    category: 'No-Code Power Tools',
    skills: [
      { name: 'Make (Integromat)', level: 95, description: 'Complex workflows, AI integrations, automation chains' },
      { name: 'Notion', level: 90, description: 'Databases, client tools, product mockups' },
      { name: 'Airtable', level: 85, description: 'Relational DB, scoring models, content management' },
      { name: 'Zapier', level: 80, description: 'Process automation, alerts, notifications' },
    ],
  },
  {
    category: 'AI & Data Tools',
    skills: [
      { name: 'OpenAI (GPT)', level: 85, description: 'Content generation, AI assistants, smart automation' },
      { name: 'Streamlit', level: 90, description: 'Data apps, MVPs, interactive dashboards' },
      { name: 'Pandas & NumPy', level: 90, description: 'Data analysis, product insights' },
      { name: 'Cursor', level: 60, description: 'AI-powered development assistance' },
    ],
  },
  {
    category: 'Product Tools',
    skills: [
      { name: 'Figma', level: 70, description: 'UI design, pitch decks, product mockups' },
      { name: 'APIs & Integration', level: 70, description: 'System connections, data flows, webhooks' },
      { name: 'Python Basics', level: 65, description: 'Simple scripts, automation, prototypes' },
      { name: 'QR/PDF Tools', level: 85, description: 'Document generation, branded outputs' },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Soft Skills Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                Soft Skills That Power My Projects
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                I Build Without Code. I Understand Tech. I Deliver Products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative group bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="p-6 relative">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                        <skill.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                My Tech Stack
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                The Toolbox I Actually Use to Ship
              </p>
            </div>

            <div className="space-y-12">
              {techStack.map((category) => (
                <div key={category.category} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {skill.name}
                            </h4>
                            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                            <div
                              className="bg-primary-600 dark:bg-primary-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Positioning Statement */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Positioning
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a tech-savvy product builder who understands code but focuses on solving business problems with the fastest route to value. Whether it's using AI, APIs, or no-code tools — I get it done.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 