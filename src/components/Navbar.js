import { useState } from 'react';

export default function Navbar({ tittle, textmain, textauth, colorcollapse }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <nav
        className={
          'absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-10 '
        }>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <a
              className='text-white md:text-3xl font-extrabold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
              href='/'>
              Home
            </a>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className={colorcollapse}>=</i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id='example-navbar-warning'>
            <ul className='flex flex-col lg:flex-row list-none mr-auto'></ul>
            <ul className='flex flex-col lg:flex-row '>
              <li className='flex items-center'>
                <a
                  className='lg:text-black lg:hover:text-blue-400 text-gray-800 px-10 py-4 lg:py-2 flex items-center md:text-2xl uppercase font-extrabold'
                  href='#aboutme'>
                  About
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='lg:text-black lg:hover:text-blue-400 text-gray-800 px-10 py-4 lg:py-2 flex items-center md:text-2xl uppercase font-extrabold'
                  href='/#pricing'>
                  Pricing
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='lg:text-black lg:hover:text-blue-400 text-gray-800 px-10 py-4 lg:py-2 flex items-center md:text-2xl uppercase font-extrabold'
                  href='#contact-us'>
                  contact
                </a>
              </li>
              <li>
                <a
                  href='/login'
                  className='lg:text-blue-400 lg:hover:text-blue-700 text-gray-800 px-10 lg:py-2 py-3 flex cursor-pointer items-center gap-5 md:text-2xl uppercase font-bold border-4 md:border-blue-400 border-none   pl-10 rounded-xl px-20'>
                  login{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
