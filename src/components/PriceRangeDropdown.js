import React, {useState, useEffect, useContext} from 'react';

import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import {Menu} from '@headlessui/react';
import { houseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const {price, setPrice} = useContext(houseContext);

  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '100-300',
    },
    {
      value: '300-600',
    },
    {
      value: '100000-160000',
    },
    {
      value: '160000-220000',
    },
  ]

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button 
      onClick={() => setIsOpen(!isOpen)}
      className='dropdown-btn w-full text-left'>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>choose price </div>
        </div>

        {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )
        }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return(
            <Menu.Item onClick={() => setPrice(price.value)} className='cursor-pointer hover:text-indigo-700 transition' as='li' key={index}>
              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>

    </Menu>
  );
};

export default PriceRangeDropdown;
