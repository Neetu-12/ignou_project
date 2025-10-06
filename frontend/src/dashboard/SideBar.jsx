import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiSupport,
  HiTable,
  HiViewBoards,
} from "react-icons/hi";
import userImg from "../images/assets/profile.jpg";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Sidebar
        aria-label="Admin sidebar navigation"
        className="w-64 rounded-xl shadow-lg border border-gray-200 bg-white"
      >
        {/* Profile Section */}
        <Sidebar.Logo href="/" img={userImg} imgAlt="User profile" className="mb-4">
          <p className="font-semibold text-gray-800">Profile</p>
        </Sidebar.Logo>

        <Sidebar.Items>
          {/* Main Section */}
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

            <Sidebar.Item href="/shop" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>

            <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>

            <Sidebar.Item
              className="cursor-pointer text-red-600 hover:bg-red-50"
              icon={HiTable}
              onClick={() => {
                localStorage.removeItem("token");
                nav("/login");
                window.location.reload();
              }}
            >
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>

          {/* Secondary Section */}
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
};

export default SideBar;
