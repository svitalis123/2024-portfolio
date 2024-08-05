import React from 'react'
import {motion} from 'framer-motion'
import { Book, BookOpen, Terminal } from 'lucide-react'
const PopUpfooter = () => {
  return (
    <main>
       <motion.nav
        className="fixed bottom-4 left-1/2 transform !-translate-x-1/2 bg-white rounded-full shadow-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ul className="flex space-x-4 p-2">
          <li className='flex'>
            <a
              href='/#terminal'
              className="p-2 rounded-full hover:bg-gray-200 transition duration-300"
            >
              <Terminal size={24} />
            </a>
          </li>
          <li className='flex'>
            <a
              href='/#projects'
              className="p-2 rounded-full hover:bg-gray-200 transition duration-300"
            >
              <Book size={24} />
            </a>
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
    </main>
  )
}

export default PopUpfooter
