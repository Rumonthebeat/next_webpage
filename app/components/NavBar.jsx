"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';

const navLinks = [
  {
    title: "Experience",
    path: "experience"
  },
  {
    title: "Project",
    path: "#project"
  },
  {
    title: "Contact",
    path: "contact"
  }
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-4'>
        <Link href="/" className='text-2xl md:text-5xl text-white font-semibold'>
          Chuan Liu
        </Link>
        <button
          className='text-white md:hidden'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
          </svg>
        </button>
        <div className={`${menuOpen ? 'block' : 'hidden'} md:block md:w-auto`} id='navbar'>
          <ul className='flex flex-col md:flex-row md:space-x-8 p-4 md:p-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
