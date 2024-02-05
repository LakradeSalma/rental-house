import React from "react";

import myImage from '../assets/img/1.webp';

import "../index.css"

const About = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>      
      <div className="float-left w-full py-3 px-4 max-w-[480px] mb-8"><br/> <br/><br/>
        <span className='text-indigo-700 font-semibold '>Welcome to our premier house rental service,</span><br/> where your ideal home is just a click away. At Our Company, we understand the significance of finding a residence that perfectly aligns with your lifestyle and preferences. Our diverse selection of rental houses offers a range of options, from cozy apartments to spacious family homes, ensuring there's something for everyone. Whether you're seeking a vibrant urban environment or a tranquil suburban retreat, our curated listings feature quality properties in desirable locations. Explore the ease of navigating through our user-friendly platform to discover houses tailored to your needs. At [Your Company Name], we are committed to simplifying your house-hunting experience, making finding your next home a seamless and enjoyable process. Welcome to a new chapter of comfort and convenience with our premier house rental service.
      </div>
      <div className="flex-1 lg:flex justify-end items-end">
        <img src={myImage} alt="Description of the image" />
      </div>
    </section>
  )
}

export default About