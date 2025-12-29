import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <>
          <div className='flex flex-col bg-purple-500 text-white'>
            <div className="flex justify-between px-30 my-2">
              <span>Terms & Conditions</span>
              <span>Shipping Policy</span>
              <span>Cancellation Policy</span>
              <span>Privacy Policy</span>
            </div>
            <div className="flex justify-center mb-2">
              <span >© 2025 NYKAA E-RETAIL LIMITED All Rights Reserved.</span>
            </div>
          </div>
        </>
    );
};

export default Footer;

