import { WhatsAppOutlined, CheckCircleFilled, CalendarTwoTone } from '@ant-design/icons'
const Belowbanner = () => {
  return (
    <div className="flex p-12">
      <div className='w-[30%] ml-36 flex'>
        <WhatsAppOutlined style={{ fontSize: '40px', color: '#2588be' }} />
        <div className='ml-3'>
          <h4 style={{ color: '#2588be' }} className='font-semibold' >24/7 Customer Care</h4>
          <p>Live person support by phone, email, and live chat</p>
        </div>

      </div>
      <div className='w-[30%] flex'>
        <CheckCircleFilled style={{ fontSize: '40px', color: '#2588be' }} />
        <div className='ml-3'>
          <h4 style={{ color: '#2588be' }} className='font-semibold' >Best Price Guaranteed</h4>
          <p>Find selected Tours and Travels Packages at lowest price</p>
        </div>

      </div>
      <div className='w-[30%] mr-24 flex '>
        <CalendarTwoTone style={{ fontSize: '40px' }} />
        <div className='ml-3'>
          <h4 style={{ color: '#2588be' }} className='font-semibold' >Flexible Booking</h4>
          <p>Book up to a whole year in advance or right up until the moment of stay</p>
        </div>
      </div>
    </div>
  )
}

export default Belowbanner
