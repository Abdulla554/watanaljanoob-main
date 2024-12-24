import { IoMdMenu, IoMdClose } from "react-icons/io";
// import logo from "/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = [
    { to: "/", label: "الصفحة الرئيسية", fontStyle: "font-cairo-regular" },
    { to: "/about", label: "من نحن", fontStyle: "font-cairo-regular" },
    { to: "/services", label: "الخدمات", fontStyle: "font-cairo-regular" },
    { to: "/contactus", label: "تواصل معنا", fontStyle: "font-cairo-regular" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-cairo-regular">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between w-full">
        {/* Logo section */}
        <Link to="/"  >
          {/* <img
            src={logo}
            className=" md:w-48 w-36 transition-transform hover:scale-105"
            alt="Logo"
          /> */}
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          className="lg:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <IoMdMenu className="text-3xl" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div dir="rtl" className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
          {NavLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`
                ${link.fontStyle} 
                text-black 
                hover:text-blue-600 
                transition-colors 
                duration-300 
                relative 
                group
              `}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`
            lg:hidden 
            fixed 
            inset-0 
            bg-black 
            bg-opacity-50 
            z-40 
            transition-opacity 
            duration-300 
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
          onClick={toggleMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden 
            fixed 
            top-20 
            left-0 
            w-full 
            bg-white 
            shadow-lg 
            rounded-b-lg 
            p-6 
            transition-all 
            duration-300 
            z-50 
            ${isMenuOpen
              ? 'translate-y-0 opacity-100 visible'
              : '-translate-y-full opacity-0 invisible'}
          `}
        >
          <ul className="flex flex-col items-center space-y-4">
            {NavLinks.map((link) => (
              <li key={link.to} className="w-full text-center">
                <Link
                  to={link.to}
                  className={`
                    ${link.fontStyle}
                    text-gray-800 
                    text-xl 
                    py-2 
                    block 
                    hover:bg-gray-100 
                    rounded-md 
                    transition-colors 
                    duration-300
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;