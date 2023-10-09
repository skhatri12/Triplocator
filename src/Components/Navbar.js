import React from 'react'
import { NavLink } from 'react-router-dom';
const navItems = [
  { label: "TOURS", to: "/tours" },
  { label: "DESTINATIONS", to: "/destinations" },
  { label: "ACTIVITIES", to: "/activities" },
  { label: "ATTRACTIONS", to: "/attraction" },
  { label: "MANAGE MY BOOKING", to: "/booking" }
];

const Navbar = () => {
  return (

    <div className='flex items-center'>
      <div className=' bg-gray-800 text-white h-12 w-full text-center'>
        {navItems.map((navItem) => (
          <NavLink
            key={navItem.to}
            to={navItem.to} className="align-middle items-center ml-9">
            {navItem.label}
          </NavLink>

        ))}
        <button className='align-middle border border-white rounded-none px-4 py-1 ml-96 mt-2'>
          SIGN UP/ SIGN IN
        </button>
      </div>
    </div>
  )
}

export default Navbar
