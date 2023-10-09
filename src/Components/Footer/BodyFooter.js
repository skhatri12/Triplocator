import React from 'react'
import { RightOutlined } from '@ant-design/icons';
const flags = [
  { source: "flags1.png" },
  { source: "flags2.png" },
  { source: "flags3.png" },
  { source: "flags4.png" },
  { source: "flags5.png" },
  { source: "flags6.png" },
  { source: "flags7.png" },
  { source: "flags8.png" },
  { source: "flags9.png" },
  { source: "flags10.png" },
  { source: "flags11.png" },
  { source: "flags12.png" },
  { source: "flags13.png" },
  { source: "flags14.png" },
  { source: "flags15.png" },
  { source: "flags16.png" },
  { source: "flags17.png" },
  { source: "flags18.png" },
  { source: "flags19.png" },
  { source: "flags20.png" },
  { source: "flags21.png" },
  { source: "flags22.png" },
  { source: "flags23.png" },
  { source: "flags24.png" },
  { source: "flags25.png" },
  { source: "flags26.png" },
  { source: "flags27.png" },
  { source: "flags28.png" },
  { source: "flags29.png" },
  { source: "flags30.png" },
  { source: "flags31.png" },
  { source: "flags32.png" },
  { source: "flags33.png" },
  { source: "flags34.png" },
];


const BodyFooter = () => {
  return (
    <>
      <div style={{ backgroundColor: "#1e709c" }} className='flex gap-1 text-white h-96' >

        <div className='list-none text-white ml-[172px] mt-12' >
          <h2>TOP DESTINATIONS</h2>
          <div className='text-xs grid grid-cols-2 space-y-2'  >
            <li className='mt-2' ><RightOutlined /> <a href="/ktm"> KATHMANDU</a></li>
            <li><RightOutlined /> <a href="/ktm">MUSTANG</a></li>
            <li><RightOutlined /> <a href="/ktm">SOLUKHUMBU</a></li>
            <li><RightOutlined /> <a href="/ktm">NAMCHE BAZAAR</a></li>
            <li><RightOutlined /> <a href="/ktm">DENPASAR</a></li>
            <li><RightOutlined /> <a href="/ktm">DUBAI</a></li>
            <li><RightOutlined /> <a href="/ktm">NEW DELHI</a></li>
            <li><RightOutlined /> <a href="/ktm">POKHARA</a></li>
            <li><RightOutlined /> <a href="/ktm">AGRA</a></li>
            <li><RightOutlined /> <a href="/ktm">CUSCO</a></li>
            <li><RightOutlined /> <a href="/ktm">RASUWA</a></li>
            <li><RightOutlined /> <a href="/ktm">XI'AN</a></li>
            <li><RightOutlined /> <a href="/ktm">BEIJING</a></li>
            <li><RightOutlined /> <a href="/ktm">GORKHA</a></li>
            <li><RightOutlined /> <a href="/ktm">VIEW MORE</a></li>
          </div>
        </div>


        <div className='grid grid-cols-3' >
          <div className='mt-12 ml-20 list-none text-white  '>
            <h2 className='text-white' >COMPANY</h2>
            <div className='text-xs space-y-2'>
              <li className='mt-2' ><RightOutlined /> <a href="/ktm">MEDIA CENTER</a></li>
              <li><RightOutlined /> <a href="/ktm">CAREERS</a></li>
              <li><RightOutlined /> <a href="/ktm">CORPORATION INFO</a></li>
            </div>
          </div>

          <div className='mt-12 ml-20 list-none text-white  '>
            <h2 className='text-white' >CUSTOMER CARE</h2>
            <div className='text-xs space-y-2'>
              <li className='mt-2' ><RightOutlined /> <a href="/ktm">CUSTOMER SUPPORT</a></li>
              <li><RightOutlined /> <a href="/ktm">CONTACT US</a></li>
              <li><RightOutlined /> <a href="/ktm">HELP ME</a></li>
            </div>
          </div>

          <div className='mt-12 ml-20 list-none text-white  '>
            <h2 className='text-white' >ESSENTIALS</h2>
            <div className='text-xs space-y-2'>
              <li className='mt-2' ><RightOutlined /> <a href="/ktm">STAYING SAFE</a></li>
              <li><RightOutlined /> <a href="/ktm">PACKING INSPIRATION</a></li>
              <li><RightOutlined /> <a href="/ktm">STAYING HEALTHY</a></li>
            </div>
          </div>

          <div className='mt-12 ml-20 list-none text-white '>
            <h2 className='text-white' >TRIPLOCATOR</h2>
            <div className='text-xs space-y-2'>
              <li className='mt-2' ><RightOutlined /> <a href="/ktm">SOCIAL FOUNDATION</a></li>
              <li><RightOutlined /> <a href="/ktm">WHY TRIPLOCATOR</a></li>
              <li><RightOutlined /> <a href="/ktm">SUSTAINABLE TRAVEL</a></li>
            </div>
          </div>

          <div className='mt-12 ml-20 list-none text-white  '>
            <h2 className='text-white' >COMPANY POLICY</h2>
            <div className='text-xs space-y-2'>
              <li className='mt-2' ><RightOutlined /> <a href="/ktm">TERMS AND CONDITIONS</a></li>
              <li><RightOutlined /> <a href="/ktm">PRIVACY POLICY</a></li>
              <li><RightOutlined /> <a href="/ktm">CANCELLATION POLICY</a></li>
            </div>
          </div>

          <div className='mt-12 ml-20 list-none text-white mr-[165px] '>
            <h2 className='text-white' >QUICK LINKS</h2>
            <div className='text-xs space-y-2'>
              <li className='mt-2' ><RightOutlined /> <a href="/ktm">TRAVEL BLOG </a></li>
              <li><RightOutlined /> <a href="/ktm">TRAVEL REVIEWS</a></li>
              <li><RightOutlined /> <a href="/ktm">TRAVEL INSURANCE</a></li>
            </div>
          </div>
        </div>


      </div >


      <div style={{ backgroundColor: "#1e709c" }} className='text-white h-auto '>
        <div className='ml-[172px]  ' >
          <p className='' >Partner Service: <a href="/login" className='font-light' >Supplier Login</a></p>
        </div>
        <div className='ml-[172px] flex mt-8 '>
          <p>Global Sites:</p>
          {flags.map((icons) => {
            return (
              <img src={icons.source} alt="" className='h-3 ml-3 mt-2' />
            )
          })}

        </div>
      </div >
    </>

  )
}

export default BodyFooter

