import React from 'react'
import { RightOutlined } from '@ant-design/icons';
const Places = [
  { name: "BLUE MOUNTAINS" },
  { name: "EMPIRE STATE BUILDING" },
  { name: "NAMCHE BAZAAR" },
  { name: "PASHUPATINATH" },
  { name: "THE STATUE OF LIBERTY" },
  { name: "THE GRAND CANYON" },
  { name: "BOUDHANATH" },
  { name: "GREAT BARRIER REEF" },
  { name: "BROOKLYN BRIDGE" },
  { name: "GRAND CENTRAL TERMINAL" },
  { name: "TRAFALGAR SQUARE" },
  { name: "SWAYAMBHU" },
  { name: "CENTRAL PARK" },
  { name: "LITTLE INDIA" },
  { name: "THAMEL" },
  { name: "EVEREST" },
  { name: "STRATFORD-UPON-AVON" },
  { name: "MARINA BAY" },
  { name: "COSTA BRAVA" },
  { name: "VIEW MORE" },

]
const Bestsellingtours = () => {
  return (
    <div className='grid grid-cols-4 gap-3'>
      {Places.map((itemss) => {
        return (
          <div >
            <p className='text-cyan-700 content-between text-xs' ><RightOutlined />{itemss.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Bestsellingtours

