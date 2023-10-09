
const ATTRACTIONS = [
  { name: "Blue Mountains", source: "image1.jpg" },
  { name: "Empire State Building", source: "image1.jpg" },
  { name: "Namche Bazaar", source: "image1.jpg" },
  { name: "Pashupatinath", source: "image1.jpg" },
  { name: "The Statue Of Liberty", source: "image1.jpg" },
  { name: "The Grand Canyon", source: "image1.jpg" },
  { name: "Boudhanath", source: "image1.jpg" },
  { name: "Great Barrier Reef", source: "image1.jpg" },

]

const Attraction = () => {
  return (
    <div style={{ backgroundColor: "#F6F6F6" }} className="h-[95vh] w-[100wh] p-11 "  >
      <h2 style={{ color: '#2588be' }} className="font-semibold text-2xl text-center" >TOP ATTRACTION</h2>
      <div className="mx-32">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 justify-center mt-10">
          {ATTRACTIONS.map((Items, index) => {
            return (
              <div className="mb-20" key={index} >
                <div className="bg-white h-40" >
                  <img src={Items.source} alt={Items.name} />
                  <p className="bg-white p-4">{Items.name}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="justify-center ml-52 mt-8">
        <button style={{ backgroundColor: "#2588be" }} className="text-white p-2 ml-[450px]" >SHOW MORE</button>
      </div>

    </div>
  )
}

export default Attraction
