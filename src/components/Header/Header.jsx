import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import userImage from '../../assets/images/avatar-icon.png';
import logo from '../../assets/images/logo.png';
import { BiMenu } from 'react-icons/bi';

const navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/doctors',
    display: 'Find a Doctor',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`header flex items-center ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo" />

          <div className={`navigation ${isMobileMenuOpen ? 'show_menu' : ''}`} ref={menuRef}>
            <ul className="menu flex flex-col items-start gap-[2.7rem] md:flex-row">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    activeClassName="activeLink"
                    className="text-primaryColor text-[16px] leading-7 font-[600]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <NavLink to="/" className="cursor-pointer">
              <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                <img
                  src={userImage}
                  className="w-full rounded-full"
                  alt="userIcon"
                />
              </figure>
            </NavLink>

            <NavLink to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </NavLink>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className={`w-6 h-6 cursor-pointer ${isMobileMenuOpen ? 'menu-open' : ''}`} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;



