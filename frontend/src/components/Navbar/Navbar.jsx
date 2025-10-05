import React, { useEffect, useState } from 'react';
// react icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [alreadyLogin, setalreadyLogin] = useState(false);

  useEffect(() => {
    (!!localStorage.getItem('token')) ? setalreadyLogin(true) : setalreadyLogin(false);

  }, [])


  // navItem here
  const navItem = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "userdashboard", path: "/admin/dashboard" },
    { link: "Login", path: "./login" },
  ];

  return (
    <header className='w-full bg-transparent sticky top-0 left-0 right-0 transition-all ease-in duration-300 h-0 z-10'>
      <nav className={`py-4 lg:px-24 px-4 z-50 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300 z-50" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
            <FaBlog className='inline-block' />Book
          </Link>

          {/* nav item for larger devices */}
          <ul className='md:flex space-x-12 hidden'>
            {navItem.map(({ link, path }) => (
              <li key={path} className="">
                {alreadyLogin && link === 'Loging' ? (
                  <Link
                    onClick={() => {
                      localStorage.removeItem('token');
                      nav('./login')
                      window.location.reload();
                      
                    }}
                    className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                  >
                    LogOut
                  </Link>
                ) : (
                  <Link to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* menu button for mobile devices */}
          <div className='md:hidden '>
            <button onClick={toggleMenu} className='text-black focus:outline-none' aria-label="Toggle Menu">
              {
                isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
              }
            </button>
          </div>

          {/* btn for lg devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button aria-label="Menu">
              <FaBarsStaggered className='w-5 hover:text-blue-700' />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`list-none space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {
            navItem.map(({ link, path }) => (
              <li key={path} className="">
                {
                  (!alreadyLogin || link !== 'Loging') ?
                    <Link to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-300'>
                      {link}
                    </Link> :
                    ''
                }
              </li>
            ))
          }
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
