import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'flowbite/dist/flowbite.min.js';

// React icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import profileImg from '../../images/assets/profile.jpg';
import profileImg2 from '../../images/assets/profile.jpg';
import profileImg3 from '../../images/404img/library-img.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>"I've been using this book app for a few months now, and it's  The app has an extensive collection of books across all genres,  I love the user-friendly interface, especially the customizable reading modes like night mode and adjustable fonts, which make reading for long periods more comfortable. Syncing across devices is seamless, I do wish there were more free titles available, as some of the newer releases are a bit expensive. Also, the recommendation algorithm could be improved—sometimes it suggests books I’ve already read. Despite these minor flaws, it’s a fantastic app for book lovers, and I highly recommend it!"</p>
                                <Avatar img={profileImg2} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Michael William</h5>
                                <p className='text-base'>CEO, Hogo Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>"This book was an absolute page-turner! From the moment I started reading, I was hooked by the well-developed characters and the intricately woven plot. The author's attention to detail brought the story to life, making it easy to imagine every scene. However, I did find the pacing a bit slow in the middle, and a few chapters could have been shorter. Still, the twists toward the end more than made up for it. I also appreciated the underlying themes, which gave the story a deeper meaning beyond the surface plot. Overall, I would highly recommend this book to anyone who enjoys a blend of suspense and thought-provoking storytelling."</p>
                                <Avatar img={profileImg3} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Nitin Sarin</h5>
                                <p className='text-base'>CEO, HannuTech Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>"This book was an absolute page-turner! From the moment I started reading, I was hooked by the well-developed characters and the intricately woven plot. The author's attention to detail brought the story to life, making it easy to imagine every scene. However, I did find the pacing a bit slow in the middle, and a few chapters could have been shorter. Still, the twists toward the end more than made up for it. I also appreciated the underlying themes, which gave the story a deeper meaning beyond the surface plot. Overall, I would highly recommend this book to anyone who enjoys a blend of suspense and thought-provoking storytelling."</p>
                                <Avatar img={profileImg} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Kiran Johans</h5>
                                <p className='text-base'>CEO, 4Screen media Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>"This book was an absolute page-turner! From the moment I started reading, I was hooked by the well-developed characters and the intricately woven plot. The author's attention to detail brought the story to life, making it easy to imagine every scene. However, I did find the pacing a bit slow in the middle, and a few chapters could have been shorter. Still, the twists toward the end more than made up for it. I also appreciated the underlying themes, which gave the story a deeper meaning beyond the surface plot. Overall, I would highly recommend this book to anyone who enjoys a blend of suspense and thought-provoking storytelling."</p>
                                <Avatar img={profileImg} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Johan Williams</h5>
                                <p className='text-base'>CEO, ConsumerDirect Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Review;