// import { Image } from 'antd';

const DESTINATIONS = [
  { name: "Nepal", source: "image1.jpg" },
  { name: "India", source: "image1.jpg" },
  { name: "Peru", source: "image1.jpg" },
  { name: "Indonesia", source: "image1.jpg" },
  { name: "China", source: "image1.jpg" },
  { name: "Australia", source: "image1.jpg" },
  { name: "Vietnam", source: "image1.jpg" },
  { name: "United Arab Emirates", source: "image1.jpg" },
  { name: "Italy", source: "image1.jpg" },
  { name: "Bhutan", source: "image1.jpg" },
  { name: "New Zealand", source: "image1.jpg" },
  { name: "Israel", source: "image1.jpg" },

]

const Destination = () => {
  return (
    <div style={{ backgroundColor: "#F6F6F6" }} className="h-[125vh] w-[100wh] p-11 "  >
      <h2 style={{ color: '#2588be' }} className="font-semibold text-2xl text-center" >TOP DESTINATIONS</h2>
      <div className="mx-32">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 justify-center mt-10">
          {DESTINATIONS.map((Items, index) => {
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
        <button style={{ backgroundColor: "#2588be" }} className="text-white p-2 ml-[420px]" >VIEW MORE DESTINATIONS</button>
      </div>

    </div>
  )
}

export default Destination
