import {Route, Routes, useLocation } from "react-router-dom";
import 'flowbite';
import Home from './pages/Home/Home';
import BookDetails from './pages/BookDetails/BookDetails';
import About from './pages/About/About'
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Headers from "./components/Header/Headers";
import './index.css';
import './App.css';
import Shop from "./shop/Shop";
import Dashboard from "./dashboard/Dashboard";
import UserDasbord from "./dashboard/UserDasbord.jsx";
import UploadBook from "./dashboard/UploadBook";
import ManageBook from "./dashboard/ManageBook";
import EditBooks from "./dashboard/EditBooks";
import SideBar from './dashboard/SideBar';
import Singup from "./dashboard/Singup";
import Login from "./dashboard/Login";
import PaymentButton from "./components/payment/PayMentByRozerPay.jsx";

function App() {
  const adminRoutes = [
    { path: "/admin/dashboard/", element: Dashboard },
    { path: "/admin/dashboard/upload", element: UploadBook },
    { path: "/admin/dashboard/manage", element: ManageBook },
    { path: "/admin/dashboard/edit-books/:id", element: EditBooks }
  ];
  const location = useLocation();
  const isAdmin = location.pathname.split("/")[1] === "admin";

  return (
    <>
      <div className="">
        <div className={isAdmin ? "flex" : "min-h-16"}>
          <div className="" >
            {isAdmin ? <SideBar /> : <Navbar />}
          </div>
          <div className="">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/singup" element={<Singup />} />
              <Route path="/header" element={<Headers />} />
              <Route path="/details/book/:id" element={<BookDetails />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/userDasbord" element={<UserDasbord />} />
              <Route path="/payment" element={<PaymentButton />} />
              {adminRoutes.map((route, index) => {
                return <Route path={route.path} key={index} element={<route.element />} />
              })}
            </Routes>

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

