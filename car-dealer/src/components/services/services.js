import React from 'react'
import { services } from '../../data'

const Services = () => {
  return (
    <section className='bg-[#fafcfe] py-12'>
      <article className=' flex flex-col mx-4'>
        <h2 className='text-center text-2xl'>our services</h2>
        <div className='flex text-center mt-8 space-y-8  gap-x-8 justify-center items-baseline flex-wrap mx-auto'>
          {services.map((item, index) => {
            const { id, img, title, info } = item
            return (
              <div
                className='flex flex-col justify-center items-center w-72 px-2 bg-white py-4 space-y-4'
                key={id}
              >
                <img className='w-12' src={img} alt={title} />
                <strong>{title}</strong>
                <p>{info}</p>
                <button
                  className={` ${
                    index === 1
                      ? 'px-4 capitalize bg-lightBlue py-2 border-none text-white  rounded-lg'
                      : 'px-4 capitalize bg-transparent py-2 border border-[1px] border-lightBlue text-lightBlue rounded-lg'
                  }`}
                >
                  learn more
                </button>
              </div>
            )
          })}
        </div>
      </article>
    </section>
  )
}

export default Services
