import React from 'react'
// import { NavLink } from 'react-router-dom';

import Traveldestination from './Thirdnav/Traveldestination';
import Topattraction from './Thirdnav/Topattraction';
import Topactivities from './Thirdnav/Topactivities';
import Toptours from './Thirdnav/Toptours';
import Bestsellingtours from './Thirdnav/Bestsellingtours';

import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};

const destinations = [

  {
    key: '1',
    label: `Travel Destinations`,
    children: < Traveldestination />,
  },
  {
    key: '2',
    label: `Top Attractions`,
    children: <Topattraction />,
  },
  {
    key: '3',
    label: `Top Activities`,
    children: <Topactivities />,
  },
  {
    key: '4',
    label: `Top Tours`,
    children: <Toptours />,
  },
  {
    key: '5',
    label: `Best Selling Tours`,
    children: <Bestsellingtours />,
  }
];


const Thirdnavbar = () => {
  return (
    <>
      <div style={{ backgroundColor: "#dde6e1" }} >
        <div className='ml-[172px] h-[6vh] w-2/4 border-box border-6 bg-gray-300 ' >
          <Tabs defaultActiveKey="1" items={destinations} onChange={onChange}
            className="p-1 " />
        </div>
        <div className='ml-[172px] h-[30vh] mr-[165px]   bg-white  border-solid border-2 ' >
        </div>
      </div>
    </>
  )
}




export default Thirdnavbar;


