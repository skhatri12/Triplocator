import React from 'react'
import { RightOutlined } from '@ant-design/icons';
const Places = [
  { name: "NEPAL" },
  { name: "INDIA" },
  { name: "PERU" },
  { name: "INDONESIA" },
  { name: "CHINA" },
  { name: "AUSTRALIA" },
  { name: "VIETNAM" },
  { name: "UNITED ARAB EMIRATES" },
  { name: "ITALY" },
  { name: "BHUTAN" },
  { name: "NEW ZEALAND" },
  { name: "ISRAEL" },
  { name: "NAMIBIA" },
  { name: "BOTSWANA" },
  { name: "PHILIPPINES" },
  { name: "UNITED STATES" },
  { name: "KENYA" },
  { name: "JAPAN" },
  { name: "IRAN" },
  { name: "SPAIN" },
  { name: "VIEW MORE" },

]
const Topactivities = () => {
  return (
    <div className='grid grid-cols-4 gap-2'>
      {Places.map((itemss) => {
        return (
          <div >
            <h4 className='text-cyan-700 content-between text-xs' ><RightOutlined />{itemss.name}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Topactivities

