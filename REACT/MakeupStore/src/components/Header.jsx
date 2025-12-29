import React from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaLayerGroup } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { BsMicrosoftTeams } from "react-icons/bs";
import { CgLogIn } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-purple-400 text-white p-5 not-last:">
        <div className="font-bold text-2xl ">Makeup Studio</div>
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-1" to={"/"}>
            <ImHome /> Home
          </Link>
          <Link className="flex items-center gap-1" to={"/product"}>
            <FaLayerGroup /> Product
          </Link>
          <Link className="flex items-center gap-1" to={"/contact"}>
            <RiContactsBook3Fill />
            Contact
          </Link>
          <Link className="flex items-center gap-1" to={"/about"}>
            <BsMicrosoftTeams />
            About us
          </Link>
          <Link className="pe-5 flex items-center gap-1 border rounded-4xl w-25 justify-center" to={"/login"}>
            <br />
            <CgLogIn />
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
