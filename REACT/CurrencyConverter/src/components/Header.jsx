import React from 'react'
import HiCurrencyRupee from 'react-icons/hi2'
import HiMiniCurrencyDollar from 'react-icons/hi2'
import HiMiniCurrencyEuro from 'react-icons/hi2'
import HiMiniCurrencyPound from 'react-icons/hi2'

const Header = () => {
    return(
        <>
          <div className='bg-blue-500 px-4 py-2 text-white text-center'>
            <HiCurrencyRupee className="animate-bounce duration-1000"/>
            <HiMiniCurrencyDollar/>
            Currency Converter
            <HiMiniCurrencyEuro/>
            <HiMiniCurrencyPound/>
          </div>
        </>
    )
};

export default Header;