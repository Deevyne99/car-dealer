import React from 'react'

const Footer = () => {
  return (
    <section className='bg-darkBlue'>
      <footer className='  flex-wrap px-4 md:px-4 lg:px-16  gap-x-4  md:flex-row flex  justify-center md:justify-between py-12 text-white  md:space-x-4  space-y-5 items-baseline capitalize'>
        <div className='max-w-sm space-y-4'>
          <h4 className='underline decoration-2 underline-offset-8'>Cars</h4>
          <ul className='space-y-2'>
            <li>
              <a href=''>all stock</a>
            </li>
            <li>
              <a href=''>in stock</a>
            </li>
            <li>
              <a href=''>new Arrival</a>
            </li>
            <li>
              <a href=''>Used cars</a>
            </li>
            <li>
              <a href=''>pre-owned cars</a>
            </li>
          </ul>
        </div>
        <div className='max-w-sm space-y-4'>
          <h4 className='underline decoration-2 underline-offset-8'>company</h4>
          <ul className='space-y-2'>
            <li>
              <a href=''>Blog</a>
            </li>
            <li>
              <a href=''>privacy policy</a>
            </li>
            <li>
              <a href=''>Terms and condition</a>
            </li>
            <li>
              <a href=''>support</a>
            </li>
          </ul>
        </div>
        <div className='max-w-sm space-y-4'>
          <h4 className='underline underline-offset-8 decoration-2'>
            vehicle service
          </h4>
          <ul className='space-y-2'>
            <li>
              <a href=''>parts repair</a>
            </li>
            <li>
              <a href=''>engine change</a>
            </li>
            <li>
              <a href=''>full service</a>
            </li>
          </ul>
        </div>
        <div
          className={`max-w-sm px-12 py-8 bg-gradient-to-r    from-color1 via-from-color1 to-color1  `}
        >
          <h4 className='underline underline-offset-8'>contact us</h4>
          <ul className='space-y-2'>
            <li>
              <a href=''>email</a>
            </li>
            <li>
              <a href=''>phone</a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  )
}

export default Footer
