import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from '../images/assets/profile.jpg'
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const nav = useNavigate();
  return (
    <div className=" mt-[40px] mr-[40px] ">
      <Sidebar aria-label="Sidebar with content separator example ">
        <Sidebar.Logo href="#" img={userImg} imgAlt="Flowbite logo">
          <p>Profile</p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Books
            </Sidebar.Item>
            {/* <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item> */}
            <Sidebar.Item href="/shop" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item className='cursor-pointer' onClick={() => {
              localStorage.removeItem('token');
              nav('./login')
              window.location.reload();

            }} icon={HiTable}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiSupport}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SideBar;