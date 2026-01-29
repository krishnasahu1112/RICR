import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import api from '../../../config/Api';

const EditProfileModal = ({onClose}) => {

  const {user, setUser} = useAuth();
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    email: user.email,
    mobileNumber: user.mobileNumber
  });

  const handleSubmit = async (e)=> {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);

    try {
      const res = await api.put("/user/update", formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='fixed inset-0 bg-black/90 flex items-center justify-center'>
        <div className='bg-white w-100 text-center max-h-[85vh] overflow-y-auto rounded-2xl'>
            <div className='flex justify-between px-5 py-3 border-b border-gray-300'>
              <button onClick={()=>onClose()} className='text-red-600 hover:text-red-900 cursor-pointer'>❌</button>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className='border-b-2'>My Profile</div>
                <div>Name</div>
                <div>Email</div>
                <div>Contact No.</div>
                <div>
                  <button>Cancel</button>
                  <button></button>
                </div>
              </form>
            </div>
            
        </div>

      </div>
    </>
  )
}

export default EditProfileModal;