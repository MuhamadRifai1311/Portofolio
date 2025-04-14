function DS() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-0 px-5">
          <div className="flex flex-col space-y-10">
            <div>
              <h2 className="uppercase text-lg tracking-[8px]">Project</h2>
              <h1 className="text-xl sm:text-3xl font-medium ">
                Webiste SIERPIN Dunia Sandang
              </h1>
            </div>
            <div>
              <h2 className="uppercase text-lg tracking-[8px] ">Technology</h2>
              <p className="text-xl sm:text-3xl">
                HTML, CSS, JS, PHP, UIKit, Laravel, MySql, Figma,
              </p>
            </div>
            <div className="pb-4">
              <h2 className="uppercase text-lg tracking-[8px] ">Year</h2>
              <p className="text-xl sm:text-3xl">2024</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="uppercase text-lg tracking-[8px] ">Description</h2>
            <p className="text-lg sm:text-xl text-justify tracking-wide  mb-5">
              Situs web Dunia Sandang Pratama merupakan platform E-Commerce yang
              dibangun menggunakan Laravel, dengan dukungan MySQL untuk
              pengelolaan basis data, serta perancangan antarmuka menggunakan
              Figma dan dokumentasi sistem melalui Microsoft Visio. Website ini
              dirancang untuk memudahkan pelanggan dalam melakukan pembelian
              kain secara langsung melalui sistem milik perusahaan.
            </p>
            <p className="text-lg sm:text-xl text-justify tracking-wide ">
              Selain itu, terdapat juga panel admin yang berfungsi sebagai
              sistem manajemen internal, mencakup fitur-fitur penting seperti
              Customer, Sales & Marketing, Purchasing, dan Warehouse. Aplikasi
              ini memberikan dampak positif terhadap perusahaan, terutama dalam
              meningkatkan efektivitas kerja, efisiensi operasional, dan
              kemudahan dalam mengelola data pembelian secara digital dan
              terintegrasi.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto grid py-10 px-2 sm:p-20 w-full ">
        <div className="carousel w-full h-[250px] md:h-[500px] rounded-xl shadow-2xl">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/src/assets/img/project DS/pic1.png"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="/src/assets/img/project DS/image2.png"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="/src/assets/img/project DS/image3.png"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="/src/assets/img/project DS/image1.png"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DS;
