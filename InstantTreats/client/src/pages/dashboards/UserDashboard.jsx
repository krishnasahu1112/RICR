import React from 'react';
import SideBar from '../../components/userDashboard/UserSideBar';
import Content from '../../components/userDashboard/Content';

const UserDashboard = () => {
  return (
    <>
      <div className='w-full h-[90vh] flex'>
        <div className='border border-green-500 w-2/7'><SideBar/></div>
        <div className='border border-green-700 w-5/7'><Content/></div>
      </div>
    </>
  )
}

export default UserDashboard;