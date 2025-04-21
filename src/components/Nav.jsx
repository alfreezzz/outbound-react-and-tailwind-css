import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-primary text-white py-2 sm:py-4 px-4 shadow-md fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo or Brand */}
        <div className='flex items-center'>
          <img
            src={`${import.meta.env.BASE_URL}icon.png`}
            alt='icon'
            className='w-9 h-9 mr-2'
          />
          <a href='#home' className='text-lg'>
            <span className='italic'>Wanna</span> Outbound
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-9'>
          <li>
            <a href='#home' className='relative group'>
              Home
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-fourth transition-all duration-300 group-hover:w-full'></span>
            </a>
          </li>
          <li>
            <a href='#about' className='relative group'>
              About
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-fourth transition-all duration-300 group-hover:w-full'></span>
            </a>
          </li>
          <li>
            <a href='#package' className='relative group'>
              Package
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-fourth transition-all duration-300 group-hover:w-full'></span>
            </a>
          </li>
          <li>
            <a href='#gallery' className='relative group'>
              Gallery
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-fourth transition-all duration-300 group-hover:w-full'></span>
            </a>
          </li>
          <li>
            <a href='#contact' className='relative group'>
              Contact
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-fourth transition-all duration-300 group-hover:w-full'></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='hover:bg-fourth border-b cursor-pointer border-campfire p-2 rounded transition-colors duration-300 focus:outline-none'
            aria-label='Toggle Menu'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - With Transitions */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='mt-4 flex flex-col space-y-3 font-medium pb-4'>
          <a
            href='#home'
            onClick={toggleMenu}
            className='hover:bg-fourth border-b border-campfire p-2 rounded transition-colors duration-300'
          >
            Home
          </a>

          <a
            href='#about'
            onClick={toggleMenu}
            className='hover:bg-fourth border-b border-campfire p-2 rounded transition-colors duration-300'
          >
            About
          </a>

          <a
            href='#package'
            onClick={toggleMenu}
            className='hover:bg-fourth border-b border-campfire p-2 rounded transition-colors duration-300'
          >
            Package
          </a>

          <a
            href='#gallery'
            onClick={toggleMenu}
            className='hover:bg-fourth border-b border-campfire p-2 rounded transition-colors duration-300'
          >
            Gallery
          </a>

          <a
            href='#contact'
            onClick={toggleMenu}
            className='hover:bg-fourth border-b border-campfire p-2 rounded transition-colors duration-300'
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
