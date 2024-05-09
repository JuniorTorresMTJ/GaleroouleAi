import React from 'react';
import Logo from '../assets/logo.svg'; //

const Header = () => {
  return (
  <header className= 'py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center  w-80   '>
        <a href="" target="_blank">
          <img src= {Logo} alt=""  />
        </a>
        </div>
    </div>
    </header>
    );
};

export default Header;