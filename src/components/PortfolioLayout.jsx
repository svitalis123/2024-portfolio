import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Book, ChevronDown, X, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

// Assume we have these components defined elsewhere
import TerminalPortfolio from './TerminalPortfolio';
import ProjectDetails from './ProjectDetails';
import RecentPublications from './RecentPublications.astro';
import Meteor from './shared/Meteor';
import Spotlight from './shared/Sportlight';

const PortfolioLayout = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState({ websites: 1, webapps: 1 });
  // const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 6;

  const projects = {
    websites: [
      { id: 1, title: 'E-commerce Website', image: '/api/placeholder/300/169', category: 'Website'  },
      { id: 2, title: 'Portfolio Site', image: '/api/placeholder/300/169', category: 'Website'  },
      { id: 3, title: 'Blog Platform', image: '/api/placeholder/300/169', category: 'Website'  },
      { id: 4, title: 'Corporate Website', image: '/api/placeholder/300/169', category: 'Website'  },
      { id: 5, title: 'Restaurant Booking Site', image: '/api/placeholder/300/169', category: 'Website'  },
      { id: 6, title: 'Photography Portfolio', image: '/api/placeholder/300/169', category: 'Website'  },
      { id: 7, title: 'Real Estate Listings', image: '/api/placeholder/300/169', category: 'Website'  },
      { id: 8, title: 'Online Magazine', image: '/api/placeholder/300/169', category: 'Website'  },
      { id: 9, title: 'Travel Blog', image: '/api/placeholder/300/169', category: 'Website'  },
      { id: 10, title: 'Fitness Trainer Website', image: '/api/placeholder/300/169', category: 'Website'  },
    ],
    webapps: [
      { id: 11, title: 'Weather App', image: '/api/placeholder/300/169', category: 'Web App' },
      { id: 12, title: 'Task Manager', image: '/api/placeholder/300/169', category: 'Web App' },
      { id: 13, title: 'Social Media Dashboard', image: '/api/placeholder/300/169', category: 'Web App' },
      { id: 14, title: 'Budget Tracker', image: '/api/placeholder/300/169', category: 'Web App' },
      { id: 15, title: 'Recipe Finder', image: '/api/placeholder/300/169', category: 'Web App' },
      { id: 16, title: 'Workout Planner', image: '/api/placeholder/300/169', category: 'Web App' },
      { id: 17, title: 'Language Learning Tool', image: '/api/placeholder/300/169', category: 'Web App' },
      { id: 18, title: 'Job Application Tracker', image: '/api/placeholder/300/169', category: 'Web App' },
      { id: 19, title: 'Habit Tracker', image: '/api/placeholder/300/169', category: 'Web App' },
      { id: 20, title: 'Meditation Timer', image: '/api/placeholder/300/169', category: 'Web App' },
    ],
  };


  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };


  const ProjectCard = ({ project }) => (
    <motion.div
      className="relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
      whileHover={{ borderRadius: "16px" }}
      onClick={() => setSelectedProject(project)}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4">
        <h4 className="text-white text-lg font-semibold">{project.title}</h4>
        <p className="text-white text-sm">{project.category}</p>
      </div>
    </motion.div>
  );

  // projects section

  const ProjectsGrid = ({ category }) => {
    const totalPages = Math.ceil(projects[category]?.length / projectsPerPage);
    const startIndex = (currentPage[category] - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = projects[category].slice(startIndex, endIndex);

    return (
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 dark:text-neutral-100">{category === 'websites' ? 'Websites' : 'Web Applications'}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => setCurrentPage(prev => ({ ...prev, [category]: Math.max(prev[category] - 1, 1) }))}
            disabled={currentPage[category] === 1}
            className="p-2 rounded-full hover:bg-gray-200 transition duration-300 disabled:opacity-50"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="mx-4 dark:text-neutral-300">
            Page {currentPage[category]} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => ({ ...prev, [category]: Math.min(prev[category] + 1, totalPages) }))}
            disabled={currentPage[category] === totalPages}
            className="p-2 rounded-full hover:bg-gray-200 transition duration-300 disabled:opacity-50"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="dark:bg-neutral-800 dark:text-neutral-300  ">
      <Spotlight />
      <Meteor />
      <AnimatePresence mode="wait">
        {activeSection === 'hero' && (
          <motion.section
            key="hero"
            className="dark:bg-neutral-800 dark:text-neutral-300 text-neutral-800 h-[100%] flex items-start justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sectionVariants}
          >
            <div className="text-center">
              <motion.h1
                className="text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Vitalis Mutwiri
              </motion.h1>
              <motion.p
                className="text-xl mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Web Developer | Designer | Tech Enthusiast
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className='flex flex-col w-[90%] mx-auto gap-[24px] md:block md:w-full'
              >
                <button
                  onClick={() => setActiveSection('terminal')}
                  className="dark:bg-neutral-500 hover:dark:bg-neutral-700 dark:text-neutral-300 bg-neutral-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-neutral-600 transition duration-300 mr-4"
                >
                  View Terminal
                </button>
                <button
                  onClick={() => setActiveSection('projects')}
                  className="dark:bg-neutral-500 hover:dark:bg-neutral-700 dark:text-neutral-300 bg-neutral-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-neutral-600 transition duration-300"
                >
                  See Projects
                </button>
                <a
                  href='/blog'
                  className="dark:bg-neutral-500 ml-4 no-underline hover:no-underline hover:dark:bg-neutral-700 bg-neutral-700 dark:text-neutral-300 text-white px-6 py-2 rounded-full font-semibold hover:bg-neutral-600 transition duration-300"
                >
                  See blogs
                </a>
              </motion.div>
            </div>
            {/* <motion.div
              className="absolute bottom-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={32} />
            </motion.div> */}
          </motion.section>
        )}

        {activeSection === 'terminal' && (
          <motion.section
            key="terminal"
            className="py-16 dark:bg-neutral-800 hover:dark:bg-neutral-800 min-h-screen"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sectionVariants}
          >
            <div className="container mx-auto px-4" id='terminal'>
              <h2 className="text-3xl font-bold text-center text-white mb-8">Interactive Portfolio</h2>
              <div className="max-w-4xl mx-auto h-full rounded-lg overflow-hidden ">
                <TerminalPortfolio />
              </div>
              <div className="text-center mt-8">
                <button
                  onClick={() => setActiveSection('hero')}
                  className="dark:bg-neutral-500 hover:dark:bg-neutral-700 dark:text-neutral-100 text-neutral-800 px-6 py-2 rounded-full font-semibold bg-blue-100 hover:bg-blue-200 transition duration-300"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'projects' && (
          <motion.section
            key="projects"
            className="py-16 dark:bg-neutral-800 dark:text-neutral-300 text-neutral-800 min-h-screen"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sectionVariants}
          >
            <div className="container mx-auto px-4" id='projects'>
              <h2 className="text-4xl font-bold text-center mb-12 dark:text-neutral-100">My Projects</h2>
              <ProjectsGrid category="websites" />
              <ProjectsGrid category="webapps" />
              <div className="text-center mt-8">
                <button
                  onClick={() => setActiveSection('hero')}
                  className="dark:bg-neutral-700 hover:dark:bg-neutral-600 dark:text-neutral-100 text-white px-6 py-2 rounded-full font-semibold bg-neutral-700 hover:bg-neutral-600 transition duration-300"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </motion.section>
        )}


       
      </AnimatePresence>

      <AnimatePresence>
       {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden max-w-2xl w-full"
            >
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 dark:text-neutral-100">{selectedProject.title}</h3>
                <p className="dark:text-neutral-300 mb-4">Category: {selectedProject.category}</p>
                <p className="dark:text-neutral-300">Detailed project description goes here...</p>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-6 bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-full transition duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    

      <motion.nav
        className="fixed bottom-4 left-1/2 !translate-x-[-50%] dark:bg-neutral-700 hover:dark:bg-neutral-600 dark:text-neutral-300 text-neutral-800 rounded-full shadow-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ul className="flex space-x-4 p-2">
          <li>
            <button
              onClick={() => setActiveSection('hero')}
              className="p-2 rounded-full hover:bg-gray-200 transition duration-300"
            >
              <Terminal size={24} />
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('projects')}
              className="p-2 rounded-full hover:bg-gray-200 transition duration-300"
            >
              <Book size={24} />
            </button>
          </li>
          <li className='flex'>
            <a
              href='/blog'
              className="p-2 rounded-full hover:bg-gray-200 transition duration-300 no-underline hover:no-underline w-[40px] h-[40px]"
            >
              <BookOpen size={24} />
            </a>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default PortfolioLayout;