import React from 'react';

import Search from '../components/Search';
import BannerImg from '../assets/img/banner.png'
import '../index.css';

const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <div className='home' style={{ backgroundImage: `url(${BannerImg})` }}>
        <h1 className=' text-4x1 text-white lg:text-[58px] px-10 font-semibold leading-none mb-6'>
          <span className='text-indigo-700'>Rent </span>Your dream house with us.
        </h1>
        <p className='text-white px-10 mb-8'>
        Welcome to our premier house rental service, where your ideal home is just a click away.
        </p>
      </div>
      </div>
      
    </div>
    <Search />
  </section>;
};

export default Banner;
