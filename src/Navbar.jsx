
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return ( 
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold 2xl:text-3xl sm:text-5xl md:text-3xl">
         Responsive design
        </Link>

        <div className="hidden md:flex space-x-6 lg:text-4xl 2xl:text-3xl 2xl:space-x-9 sm:text-6xl md:text-2xl  md:text-2xl">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

       
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FaBars className="text-2xl sm:text-3xl" />
          </button>
        </div>
      </div>

    
      {isMenuOpen && (
        <div className="md:hidde sm:text-3xl ">
          <Link to="/" className="block py-2 text-center hover:bg-gray-200 ">Home</Link>
          <Link to="/services" className="block py-2 text-center hover:bg-gray-200">Services</Link>
          <Link to="/contact" className="block py-2 text-center hover:bg-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

