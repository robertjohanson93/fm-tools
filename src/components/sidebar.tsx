'use client';
import { Banknote, Menu, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import { ModeToggle } from './mode-toggle';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-background dark:border-gray-700'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start'>
              <button
                onClick={toggleSidebar}
                data-drawer-target='logo-sidebar'
                data-drawer-toggle='logo-sidebar'
                aria-controls='logo-sidebar'
                type='button'
                className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              >
                <span className='sr-only'>Open sidebar</span>
                <Menu className='text-black dark:text-white' />
              </button>
              <a href='/' className='flex ml-2 md:mr-24'>
                <span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
                  FM Tools
                </span>
              </a>
            </div>
            <div className='flex items-center'>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      <aside
        id='logo-sidebar'
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 border bg-card ${
          isOpen ? 'transform-none' : '-translate-x-full'
        }`}
        aria-label='Sidebar'
      >
        <div
          className={`h-full px-3 pb-4 pt-20 overflow-y-auto bg-muted sm:bg-white dark:bg-muted sm:dark:bg-background ${
            isOpen ? 'overflow-hidden' : ''
          }`}
        >
          <ul className='space-y-2 font-medium'>
            <li>
              <a
                href='/coaches'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <Sparkles className='flex-shrink-0 w-5 h-5 text-[#7c3aed] transition duration-75 dark:text-[#7c3aed] group-hover:text-gray-900 dark:group-hover:text-white' />
                <span className='ml-3'>Coaching Stars</span>
              </a>
            </li>
            <li>
              <a
                href='/wages'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <Banknote className='flex-shrink-0 w-5 h-5 text-[#7c3aed] transition duration-75 dark:text-[#7c3aed] group-hover:text-gray-900 dark:group-hover:text-white' />
                <span className='ml-3'>Wage Structure</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
