// import { Image } from 'antd';

const TOURS = [
  { name: "Kathmandu", source: "image1.jpg" },
  { name: "Pokhara", source: "image1.jpg" },
  { name: "Agra", source: "image1.jpg" },
  { name: "Cusco", source: "image1.jpg" },
  { name: "New Delhi", source: "image1.jpg" },
  { name: "Mustang", source: "image1.jpg" },
  { name: "Solukhumbu", source: "image1.jpg" },
  { name: "Rasuwa", source: "image1.jpg" },
  { name: "Namche Bazaar", source: "image1.jpg" },
  { name: "Xi'an", source: "image1.jpg" },
  { name: "Beijing", source: "image1.jpg" },
  { name: "Gorkha", source: "image1.jpg" },

]

const Tours = () => {
  return (
    <div style={{ backgroundColor: "white" }} className="h-[130vh] w-[100wh] p-11 "  >
      <h2 style={{ color: '#2588be' }} className="font-semibold text-2xl text-center" >TOP TOURS</h2>
      <div className="mx-32">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 justify-center mt-10">
          {TOURS.map((Items, index) => {
            return (
              <div className="p-1 relative" key={index}>
                <a href="/nepal">
                  <img src={Items.source} alt="nepal" className="h-[225px] w-[372.581px]" loading="lazy" />
                  <div className="absolute bottom-[10%] left-[3%]">
                    <p className="text-white font-semibold text-3xl">{Items.name}</p>
                  </div>
                </a>
              </div>
            )
          })}
        </div>

      </div>
      <div className="justify-center ml-52 mt-8">
        <button style={{ backgroundColor: "#2588be" }} className="text-white p-2 ml-[450px]" >VIEW MORE TOURS</button>
      </div>

    </div>
  )
}

export default Tours
