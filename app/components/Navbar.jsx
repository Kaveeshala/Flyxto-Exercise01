
"use client"

import Link from 'next/link';
import { useState } from 'react';
import '../styles/styles.css';


function Navbar() {
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //dropdown visibility for services and about us
  const handleDropdown = (type) => {
    setDropdown(dropdown === type ? null : type); // If the dropdown is open, close it; else open it
  }
  

  return (
    <div className='bg-white p-1 shadow-md m-4 rounded-lg'>
    <nav className='px-2 py-1 sm:p-4 md:flex md:justify-between md:items-center'>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-black text-xl font-bold'>Logo</h1>
            <div className='hidden md:flex space-x-2'>
                <Link href="/" className='btn'>Home</Link>
                <Link href="/blog" className='btn'>Blog</Link>

                <div className='flex space-x-2'>

                {/*Services dropdown*/}
                <div
                   className='dropdown'
                   //onMouseEnter={() => setDropdown("services")}
                   //onMouseLeave={() => setDropdown(null)}
                   >
                    <button className='btn'
                     onClick={() => handleDropdown("services")}
                    >
                      Services
                    </button>
                    {dropdown === "services" && (
                      <div className='dropdown-menu'>
                        <Link href="/web-development" className='dropdown-item'>Web Development</Link>
                        <Link href="mobile-app" className='dropdown-item'>Mobile App Development</Link>
                        <Link href="/cloud-seervices" className='dropdown-item'>Cloud services</Link>
                      </div>
                    )}
                   </div>

                   {/*About us dropdown*/}
                   <div
                    className='dropdown flex-grow'
                    //onMouseEnter={() => setDropdown("about")}
                    //onMouseLeave={() => setDropdown(null)}
                   >
                    <button 
                      className='btn'
                      onClick={() => handleDropdown("about")}
                      >
                      About Us
                    </button>
                    {dropdown === "about" && (
                      <div className='dropdown-menu'>
                        <Link href="/our-team" className='dropdown-item'>Our Team</Link>
                        <Link href="/our-history" className='dropdown-item' >Our History</Link>
                        <Link href="/our-mission" className='dropdown-item'>Our Mission</Link>
                      </div>
                    )}
                   </div>
                   </div>

            
                <Link href="/contact-us" className='btn'>Contact Us</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center transition-all duration-300">
              <button 
              className='text-black'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>
            </div>
        </div>
    </nav>

    {/* Mobile dropdown menu */}
    {isMobileMenuOpen && (
        <div className='md:hidden bg-white shadow-md'>
          <Link href="/" className='block px-4 py-2 text-black hover:bg-purple-400 hover:text-white transition'>Home</Link>
          <Link href="/blog" className='block px-4 py-2 text-black hover:bg-purple-400 hover:text-white transition'>Blog</Link>

          {/* Mobile dropdown for services */}
          <div className='relative flex-grow'>
            <button
            className='block px-4 py-2 text-black hover:bg-purple-400 hover:text-white transition'
            onClick={() => handleDropdown("services")}
            >
              Services
            </button>
            {dropdown === "services" && (
              <div className='pl-4'>
              <Link href="/web-development" className='dropdown-item'>Web Development</Link>
              <Link href="mobile-app" className='dropdown-item'>Mobile App Development</Link>
              <Link href="/cloud-seervices" className='dropdown-item'>Cloud services</Link>
            </div>
            )}
          </div>

          {/* Mobile dropdown for About Us */ }
          <div className="relative">
            <button 
              className='block px-4 py-2 text-black hover:bg-purple-400 hover:text-white transition'
              onClick={() => handleDropdown("about")}
            >
              About Us
            </button>
            {dropdown === "about" && (
              <div className='pl-4'>
                <Link href="/our-team" className='dropdown-item'>Our Team</Link>
                <Link href="/our-history" className='dropdown-item'>Our History</Link>
                <Link href="/our-mission" className='dropdown-item'>Our Mission</Link>
              </div>
            )}
          </div>

          <Link href="/contact-us" className='block px-4 py-2 text-black hover:bg-purple-400 hover:text-white transition'>Contact Us</Link>
        </div>
      )}

    </div>
  )
}

export default Navbar



