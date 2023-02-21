import React from 'react'
import logo from '../../assets/logo.png'
import Hero from '../../assets/Hero-org.png'
const Navbar = () => {
  return (
    <section className='relative'>
      <header className='flex px-8 md:justify-between pt-4 items-center md:px-4 lg:px-16 '>
        <img src={logo} alt='' />
        <nav className='hidden md:flex font-semibold'>
          <ul className='flex md:space-x-6 lg:space-x-8 list-none'>
            <li>
              <a href=''>Financing</a>
            </li>
            <li>
              <a href=''>Service vehicle</a>
            </li>
            <li>
              <a href=''>About us</a>
            </li>
            <li>
              <a
                href=''
                className='px-8 capitalize bg-transparent py-2 border border-[1px] border-blue rounded-lg'
              >
                Log in
              </a>
            </li>
            <li>
              <a
                href=''
                className='px-8 capitalize bg-blue py-2 text-white  rounded-lg'
              >
                sign up
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className='absolute top-0 z-[-10] right-0'>
        <img className='w-full' src={Hero} alt='' />
      </div>
    </section>
  )
}

export default Navbar
