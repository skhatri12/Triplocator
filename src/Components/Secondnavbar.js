import React from 'react'
import Language from './Secondnav/Language'
import Currency from './Secondnav/Currency'
import Help from './Secondnav/Help'
import { MenuOutlined } from '@ant-design/icons';
import Cart from './Secondnav/Cart';
const Secondnavbar = () => {
  return (
    <>
      <div className='flex'>
        <div className='justify-center'>
          <img src="logo.png" alt="Logo" className='h-12 ml-44 mt-2 ' />
        </div>
        <div className='my-4 flex ml-48'>
          <div className='ml-96'>
            <Language />
          </div>
          <div className='ml-5'>
            <Currency />
          </div>
          <div className='ml-5'>
            <Help />
          </div>
          <div className='ml-5'>
            <MenuOutlined />
          </div>
          <div className='ml-5 bg-cyan-600 text-white p-2'>
            <Cart />
          </div>

        </div>
      </div>
    </>
  )
}

export default Secondnavbar
