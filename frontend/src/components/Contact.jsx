import React, { useState } from 'react';
import InstagramIcon from './icons/InstagramIcon';
import Xicon from './icons/Xicon';
import WhatsappIcon from './icons/WhatsappIcon';
import Menu from './icons/Menu';
import CancelIcon from './icons/CancelIcon'; 


export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center gap-2 p-1 border border-dashed shadow-gray-300 border-gray-200 bg-white shadow-md rounded-xl">
      
      <div
        className={`block md:hidden cursor-pointer ${isOpen ? 'hidden' : ''}`}
        onClick={handleToggle}
      >
        <Menu />
      </div>

      <div
        className={`block md:hidden cursor-pointer ${isOpen ? '' : 'hidden'}`}
        onClick={handleToggle}
      >
        <CancelIcon />
      </div>

      <div
        className={`flex-col gap-2 items-center ${
          isOpen ? 'flex' : 'hidden'
        } md:flex`}
      >
        <InstagramIcon />
        <Xicon />
        <WhatsappIcon />
      </div>
    </div>
  );
}
