import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const BookCards = ({ headline, books }) => {

  return (
    <div className='my-16 px-4'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

      {/* cards */}
      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {
            books.map(book => <SwiperSlide key={book.id}>
              {/* console.log(book); */}
              
              {/* first will go in app.js than will find path according to given path, than it will go in next file, whatever we defined there in app.js */}
              <Link to={`/details/book/${book.id}`} >
                <div className='relative top-30 '>
                  <img src={book.imgUrl} alt="" />
                  <div className= 'absolute top-2 right-2 bg-blue-500 opacity-90 hover:bg-black p-2 rounded'> 
                    <FaCartShopping className='w-4 h-4 text-white ' />
                  </div>
                </div>
                <div>
                  <div>
                    <h3>{book.bookTitle}</h3>
                    <p>{book.authorName}</p>
                  </div>
                  <div>₹840.7</div>
                </div>
              </Link>
            </SwiperSlide>)
          }
        </Swiper>
      </div>

    </div>
  )
}

export default BookCards;