import React from "react";
import { MdStreetview } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const UserSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    {
      key: "overview",
      title: "Overview",
      icons: <MdStreetview />,
    },
    {
      key: "profile",
      title: "Profile",
      icons: <IoPerson />,
    },
    {
      key: "orders",
      title: "Orders",
      icons: <FaShoppingCart />,
    },
    {
      key: "transaction",
      title: "Transactions",
      icons: <FaMoneyBillTransfer />,
    },
    {
      key: "helpdesk",
      title: "Help Desk",
      icons: <RiCustomerServiceFill />,
    },
  ];

  return (
    <>
      <div
        className={`bg-blue-300 h-[90vh] p-3 transition-all duration-300
        ${isCollapsed ? "w-17" : "w-60/60"}`}
      >
        <div className="h-10 text-xl font-bold flex items-center gap-1">
          <button
            className="ms-2 hover:scale-105"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <GiHamburgerMenu />
          </button>
          {!isCollapsed && (
            <span className="overflow-hidden text-nowrap ">User Dashboard</span>
          )}
        </div>
        <hr />
        <div className="py-6 space-y-5 w-full">
          {menuItems.map((item, idx) => (
            <button
              className={`flex items-center gap-1 p-3 rounded-xl h-12 w-full text-nowrap overflow-hidden duration-300 text-lg
              ${
                active === item.key
                  ? "bg-blue-700 text-white "
                  : " hover:bg-gray-100 "
              }`}
              onClick={() => setActive(item.key)}
              key={idx}
            >
              {" "}
              {item.icons}
              {!isCollapsed && item.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
