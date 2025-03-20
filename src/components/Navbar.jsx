import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg py-3' 
        : 'bg-gradient-to-r from-blue-500 to-blue-700 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-white font-bold uppercase tracking-wider text-2xl md:text-3xl hover:text-yellow-300 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Sulthaniya
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className="text-white hover:text-yellow-300 px-4 py-2 text-lg font-medium rounded-md hover:bg-blue-700/50 transition-all duration-300"
            >
              Home
            </Link>
            <Link 
              to="/pdf" 
              className="text-white hover:text-yellow-300 px-4 py-2 text-lg font-medium rounded-md hover:bg-blue-700/50 transition-all duration-300"
            >
              PDF Viewer
            </Link>
            <Link 
              to="/contact" 
              className="ml-2 bg-white text-blue-600 hover:bg-yellow-300 hover:text-blue-800 px-5 py-2 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="flex flex-col justify-between w-8 h-6 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`h-1 w-full bg-white rounded-lg transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-800/90 backdrop-blur-sm">
          <Link 
            to="/" 
            className="block text-white text-xl font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/pdf" 
            className="block text-white text-xl font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            PDF Viewer
          </Link>
          <Link 
            to="/contact" 
            className="block text-white text-xl font-medium py-3 px-4 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-300 my-2"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;