import React from 'react';
import { typeOfProperty, propertyData } from '../constants';
import { useNavigate } from 'react-router-dom';

import { Property } from '../components';

const Features = () => {
  const navigate = useNavigate();

  return (
    <div id='portfolio' className='flex flex-col md:mt-32 mt-16 px-0 sm:px-6'>
      <div className="flex md:flex-row flex-col items-center">
        <div className="flex flex-col">
          <h1 className="font-manrope text-base md:text-3xl font-semibold md:pb-3 pb-1">Best Real Estate Deals</h1>
          <span className='font-manrope md:text-base text-[0.6rem] md:pb-2'>
            We are proud of what we have come up at our cente! Only here you get to enjoy with talented people with different skillset.
          </span>
        </div>
        <div className="flex md:ml-40 lg:ml-64 md:mr-0 lg:pl-44 md:pl-10 pl-32">
          <input className='prop form-input bg-[#f85a47] hover:bg-red-700 cursor-pointer
          rounded-md font-manrope font-medium md:text-sm text-[0.6rem] md:py-3 md:px-5 py-1 px-3 text-center text-white'
            type="button" value="View All Property"
            onClick={() => navigate('/list')}
          />
        </div>
      </div>

      <div className="flex mt-5 font-manrope font-semibold cursor-pointer justify-start text-center text-black lg:text-lg md:text-base text-[0.5rem]">
        {typeOfProperty.map((item) => (
          <a href={item.href} key={item.type} className="hover:text-[#f85a47] active:underline lg:pr-7 md:pr-4 pr-1">{item.type}</a>
        ))}
      </div>

      <div className="flex flex-col mt-5 md:grid md:grid-cols-3 gap-2">
        {propertyData.map((item, index) => (
          <Property key={item.img + index} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Features;