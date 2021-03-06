import millify from 'millify';
import React from 'react';

const Hits = ({ price, name, img, rooms, baths, element }) => {

  return (
    <div className='shadow rounded-xl md:rounded-2xl flex flex-col relative hover:shadow-md hover:shadow-slate-500' ref={element} >
      <div className="flex mb-3">
        <img src={img} alt="img" className="rounded-2xl w-full h-64 cursor-pointer" />
      </div>
      <div className="px-2">
        <span className="font-inter text-black font-medium text-sm">
          {name}
        </span>
        <div className="flex justify-between mt-2 mb-3">
          <div className="flex flex-row">
            <span className="font-inter text-black font-medium text-xs pr-3">
              Rooms: {rooms}
            </span>
            <span className="font-inter text-black font-medium text-xs">
              Baths: {baths}
            </span>
          </div>
          <span className="font-inter text-amber-900 font-medium text-sm">
            ${millify(price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hits;
