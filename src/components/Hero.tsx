'use client'

import { ArrowDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function Hero() {
  const handleExploreClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const yOffset = -100; // Offset to account for fixed header
      const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Shaping the Future of Fintech</span>
            <br />
            <span className="text-3xl sm:text-5xl lg:text-6xl mt-4 block">
              with AI, Blockchain & Vision
            </span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Driven by purpose, fueled by technology.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={handleExploreClick}
              className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors duration-300"
            >
              Explore My Projects
              <ArrowDownIcon className="ml-2 -mr-1 h-5 w-5 animate-bounce" />
            </button>
            <Link
              href="/Konstantine Gugunava gen.pdf"
              download
              className="text-lg font-semibold leading-6 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              Download Resume <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 