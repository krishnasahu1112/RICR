import React from 'react';
import { MdStreetview } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";


const SideBar = () => {
  return (
    <>
    <div className='p-3'>
        <div className='text-xl font-bold'>
            User Dashboard
        </div>
        <hr />
        <div className='grid gap-3 p-6 '>
            <span className='flex items-center gap-1'><MdStreetview />Overview</span>
            <span className='flex items-center gap-1'><IoPerson />Profile</span>
            <span className='flex items-center gap-1'><FaShoppingCart />Orders</span>
            <span className='flex items-center gap-1'><FaMoneyBillTransfer />Transactions</span>
            <span className='flex items-center gap-1'><RiCustomerServiceFill />Help Desk</span>
        </div>
    </div>
    </>
  )
}

export default SideBar;