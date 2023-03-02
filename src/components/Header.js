import React from 'react';
//import logo

import logo from '../assets/MUNYA1.svg'

const Header = () => {
  return <div className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/** Logo */}
        <a href='https://www.linkedin.com/in/munyaradzi-siyawamwaya-333679168/'>
          <img src={logo} alt=''/>
        </a>
        {/**button */}
        <button className='btn btn-sm'>
          Work with me
        </button>
      </div>
    </div>
  </div>;
};

export default Header;
