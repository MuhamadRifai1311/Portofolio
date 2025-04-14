import pic1 from '../img/pic1.png'
import pic2 from '../img/pic2.png'
import pic3 from '../img/pic3.png'
import pic4 from '../img/pic4.png'

function Experience() {
  return (
    <>
      <div className="pt-44 w-full">
        <div className="flex justify-center items-center">
          <p className="font-bold text-2xl">Experience</p>
        </div>
        <div className="grid grid-cols-3 items-center pl-28 w-4/5 font-serif pt-10">
          <div className="col-span-2">
            <h1 className="font-bold text-2xl">PT DUNIA SANDANG (MAGANG)</h1>
            <p>(September 2024 - Sekarang)</p>
          </div>
          <div className="carousel rounded-box " style={{ width: "170%", height: "100%" }}>
            <div className="carousel-item w-full">
              <img
                src={ pic1 }
                className="w-full h-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={ pic2 }
                className="w-full h-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={ pic3 }
                className="w-full h-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={ pic4 }
                className="w-full h-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
