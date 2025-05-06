import splashscreen from "../../img/project/splashscreen.jpeg";
import login from "../../img/project/login.jpeg";
import register from "../../img/project/register.jpeg";
import dashboard from "../../img/project/dashboard.jpeg";
import kalkulator from "../../img/project/kalkulator.jpeg";
import tasbih from "../../img/project/tasbih.jpeg";
import gridView from "../../img/project/gridview.jpeg";
import listView from "../../img/project/listview.jpeg";
import kontak from "../../img/project/kontak.jpeg";
import profil from "../../img/project/profil.jpeg";
import phone from "../../img/project/phone.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UtilityOne() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600, // naikkan dari 100 agar lebih halus
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    cssEase: "ease-in-out",
  };
  const imageAll = [
    splashscreen,
    login,
    register,
    dashboard,
    kalkulator,
    tasbih,
    gridView,
    listView,
    kontak,
    profil,
  ];
  return (
    <>
      <>
        <div className="min-h-screen flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-0 px-5">
            <div className="flex flex-col space-y-10">
              <div>
                <h2 className="uppercase text-lg tracking-[8px]">Project</h2>
                <h1 className="text-xl sm:text-3xl font-medium ">
                  Mobile App (UtilityOne)
                </h1>
              </div>
              <div>
                <h2 className="uppercase text-lg tracking-[8px] ">
                  Technology
                </h2>
                <p className="text-xl sm:text-3xl">
                  Dart, Flutter, HTTP, Lottie, Animated Text, Qr Code Generator
                </p>
              </div>
              <div className="pb-4">
                <h2 className="uppercase text-lg tracking-[8px] ">Year</h2>
                <p className="text-xl sm:text-3xl">2025</p>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="uppercase text-lg tracking-[8px] ">Description</h2>
              <p className="text-lg sm:text-xl text-justify tracking-wide  mb-5">
                Aplikasi mobile ini dibuat untuk memenuhi tugas Ujikom dan
                menampilkan fitur login, register, kalkulator, tasbih digital,
                grid view, list view, serta halaman kontak yang datanya diambil
                dari API eksternal. Setiap fitur dirancang untuk menunjukkan
                pemahaman dalam membangun antarmuka, navigasi antar halaman, dan
                pengambilan data dari luar aplikasi.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto flex justify-center items-center py-10 px-2 sm:p-20 w-full">
          <img src={phone} alt="" className="w-[500px] sm:w-[600px]" />
          <div className="absolute top-[72px] sm:top-[130px] left-50 w-[149px] h-[307px] sm:w-[229px] sm:h-[495px] rounded-3xl overflow-hidden shadow-lg">
            <Slider {...sliderSettings}>
              {imageAll.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="w-full h-full object-cover"
                />
              ))}
            </Slider>
          </div>
        </div>
      </>
    </>
  );
}
export default UtilityOne;
