import React, { useState } from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div className={`border border-green-500 duration-300 ${isCollapsed ? "w-2/60" : "w-12/60"}`}>
          <UserSideBar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div className={`border border-green-700 ${isCollapsed ? "w-58/60" : "w-48/60"}`}>
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "transaction" && <UserTransaction />}
          {active === "orders" && <UserOrders />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
