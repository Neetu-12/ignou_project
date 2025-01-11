import React from 'react';
import Navbar from '../Navbar/Navbar';
// import SearchForm from '../SearchForm/SearchForm';
// import '../../index.css';
import './header.css';

const Headers = () => {
  return (
    <div className='holder'>
      <div className="header">
        <Navbar />
        <div className="header-content flex flex-text-center text-white">
          <h2 className="header-title text-capitalize">Find books from book hubs of your choice.</h2><br />
          <p className="header-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, velit reprehenderit. Quia facilis sequi quaerat temporibus atque consequuntur repellendus fugit minima modi exercitationem? Nam, mollitia.</p>
          {/* <SearchForm/> */}
        </div>
      </div>
    </div>
  )
}

export default Headers