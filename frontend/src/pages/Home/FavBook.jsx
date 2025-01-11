import React from 'react';
import { Link } from 'react-router-dom';
import favBookImg from '../../images/assets/favoritebook.jpg'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row gap-12'>
      <div className='md:w-1/2'>
        <img src={favBookImg} alt="" className='rounded md:w-10/12' />
      </div>

      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4'>Find your favorite <span className='text-blue-700'>Books from here !</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat suscipit, soluta aspernatur dolorem cupiditate quaerat vitae ad consequuntur magni itaque animi asperiores maxime aliquid sed. Rem ab nostrum dolor! Impedit perspiciatis, dignissimos commodi numquam sint nostrum quis. Non, blanditiis.</p>

        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h2 className='text-3xl font-bold'>800+</h2>
            <p className='text-base'>Book listing</p>
          </div>
          <div>
            <h2 className='text-3xl font-bold'>550+</h2>
            <p className='text-base'>Register Users</p>
          </div>
          <div>
            <h2 className='text-3xl font-bold'>1200+</h2>
            <p className='text-base'>PDF Downloads</p>
          </div>
        </div>
        
        <Link to='/shop'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
      </div>

    </div>
  )
}

export default FavBook;