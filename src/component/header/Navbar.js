import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePagesMenu = () => {
    setIsPagesOpen(!isPagesOpen);
  };

  return (
    <header className="bg-blue-700 p-5">
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-200">
          Cogni<span className="text-black">GenNxt</span>
        </h1>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <nav className={`${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-lg">
            <li><NavLink to="/" exact className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
            <li><NavLink to="/service" className="hover:underline">Services</NavLink></li>
            <li><NavLink to="/Projects" className="hover:underline">Projects</NavLink></li>
            <li
              className="relative md:static cursor-pointer"
              onClick={togglePagesMenu}
            >
              Pages
              <FaChevronDown className="inline ml-1" />
              {/* Dropdown for subpages */}
              <ul
                className={`${
                  isPagesOpen ? 'block' : 'hidden'
                } absolute md:absolute md:bg-blue-700 md:shadow-lg md:rounded-lg md:p-2 mt-2 z-10`}
              >
                <li className="py-1 md:px-4 md:py-2"><NavLink to="/blog">Blog</NavLink></li>
                <li className="py-1 md:px-4 md:py-2"><NavLink to="/our-team">Our Team</NavLink></li>
                <li className="py-1 md:px-4 md:py-2"><NavLink to="/testimonial">Testimonial</NavLink></li>
                <li className="py-1 md:px-4 md:py-2"><NavLink to="/contact">Get In Touch</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
