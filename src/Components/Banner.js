import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const Banner = () => {
  return (
    <div className=''>
      <div className='relative'>
        <img src="image1.jpg" alt="image1" className='h-[70vh] w-full object-cover' />
        <div className='absolute bottom-[40%] left-[30%]'>
          <div className='flex-col'>
            <p className='text-white text-4xl font-semibold drop-shadow-xl mb-2 text-center'>Tour with TripLocator</p>
            <p className='text-white text-xl drop-shadow-xl mb-2 text-center'>Visit Europe, America, Asia, Africa or Beyond</p>
            <Search
              placeholder="Where would you like to go?"
              allowClear
              enterButton="Search"
              size="large"
              className='bg-blue-500 w-[40vw]'
              onSearch={onSearch}
            />
          </div>
        </div>
      </div>
      {/* <div>
        <img src="image2.jpg" alt="image2" />
      </div> */}
    </div>
  )
}

export default Banner
