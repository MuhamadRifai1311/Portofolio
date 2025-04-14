import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import ds1 from '../img/project DS/image1.png';
import ds2 from '../img/project DS/image2.png';
// import ds3 from '../img/project DS/image3.png';
import ds4 from '../img/project DS/pic1.png';

function MyProject() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, // jeda antar anak
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  };
  
  
  return (
    <>
      <div className="relative h-full pt-28 pb-5 ">
        <div className="text-center space-y-3 pb-64">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 50,
              damping: 8,
            }}
            className="text-4xl sm:text-7xl"
          >
            My Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 50,
              damping: 8,
            }}
            className="h-1 w-24 bg-[#18BC9C] border-none rounded mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 50,
              damping: 8,
            }}
            className="text-sm sm:text-lg"
          >
            Daftar proyek yang telah saya lakukan dan sedang saya kerjakan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 50,
              damping: 8,
            }}
          >
            <button
              onClick={() => scrollToSection("Scroll")}
              className="p-3 text-sm rounded-xl bg-[#18BC9C] text-[#2C3E50]  hover:bg-[#2C3E50] transition duration-500  hover:text-[#18BC9C]"
            >
              Scroll Down
            </button>
          </motion.div>
        </div>
        <div id="Scroll" className="relative pt-2 pb-5">
          <div className="relative  sm:left-16">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
              }}
              className="h-1 w-20 bg-[#18BC9C] border-none rounded ml-20 mb-2"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
              }}
              className="h-1 w-20 bg-[#18BC9C] border-none rounded ml-14"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
              }}
              className="pl-12 pt-2"
            >
              <h1 className="text-xl sm:text-2xl">Highlight</h1>
            </motion.div>
          </div>
        </div>
        <div className="relative w-screen mx-auto gap-4 px-10 grid grid-cols-1 sm:grid-cols-2 mb-10">
          <div className="flex justify-center items-start flex-col mb-5">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="relative w-full  aspect-square"
            >
              <div className="absolute top-28 left-10 h-[40%]  aspect-video grayscale-0 sm:grayscale sm:hover:grayscale-0 transition-all ease duration-300 hover:scale-125 z-10">
                <motion.div
                  variants={itemVariants}
                  className="w-full shadow-lg"
                >
                  <img
                    className="object-cover"
                    src={ds4}
                    alt=""
                  />
                </motion.div>
              </div>
              <div className="absolute top-12 sm:top-16 right-14 sm:right-28 h-[30%]  aspect-video grayscale-0 sm:grayscale sm:hover:grayscale-0 transition-all ease duration-300 hover:scale-125">
                <motion.div
                  variants={itemVariants}
                  className="w-full shadow-lg"
                >
                  <img
                    className="object-cover"
                    src={ds1}
                    alt=""
                  />
                </motion.div>
              </div>
              <div className="absolute bottom-32 right-20 h-[35%]  aspect-video grayscale-0 sm:grayscale sm:hover:grayscale-0 transition-all ease duration-300 hover:scale-125">
                <motion.div
                  variants={itemVariants}
                  className="w-full  shadow-lg"
                >
                  <img
                    className="object-cover"
                    src={ds2}
                    alt=""
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center items-center flex-col mb-40">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
              }}
              className=""
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-wider mb-3">
                Webiste SIERPIN Dunia Sandang
              </h2>
              <p className="text-gray-600 text-justify title text-lg">
                Situs web Dunia Sandang Pratama merupakan platform E-Commerce
                yang dibangun menggunakan Laravel, dengan dukungan MySQL untuk
                pengelolaan basis data, serta perancangan antarmuka menggunakan
                Figma dan dokumentasi sistem melalui Microsoft Visio. Website
                ini dirancang untuk memudahkan pelanggan dalam melakukan
                pembelian kain secara langsung melalui sistem milik perusahaan.
                Selain itu, terdapat juga panel admin yang berfungsi sebagai
                sistem manajemen internal, mencakup fitur-fitur penting seperti
                Customer, Sales & Marketing, Purchasing, dan Warehouse. Aplikasi
                ini memberikan dampak positif terhadap perusahaan, terutama
                dalam meningkatkan efektivitas kerja, efisiensi operasional, dan
                kemudahan dalam mengelola data pembelian secara digital dan
                terintegrasi.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="relative pt-2 pb-5">
          <div className="relative  sm:left-16">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
              }}
              className="h-1 w-20 bg-[#18BC9C] border-none rounded ml-20 mb-2"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
              }}
              className="h-1 w-20 bg-[#18BC9C] border-none rounded ml-14"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
              }}
              className="pl-12 pt-2"
            >
              <h1 className="text-xl sm:text-2xl">Proyek Lainnya</h1>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            type: "tween",
            ease: "easeInOut",
          }}
          className="w-h-screen mx-auto gap-4 px-5 sm:px-10 grid grid-cols-1 sm:grid-cols-2 mb-10 cursor-pointer"
        >
          <a href="/Portofolio/#/project1" className="group">
            <div className="relative flex justify-center items-center flex-col mb-5 w-full h-auto bg-[#2C3E50] aspect-video overflow-hidden">
              <img
                src={ds4}
                alt=""
                className="absolute h-full w-full inset-0  transition-all duration-500 ease-in-out 
                 opacity-30 group-hover:opacity-100 scale-105 group-hover:scale-100"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:opacity-0 z-10"></div>

              <div className="absolute top-0 left-0 bg-[#18BC9C] px-3 py-1 z-20 text-sm font-medium transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                <p className="text-xs sm:text-base">2024</p>
              </div>

              <div className="z-20 text-center text-[#F5F5F5] px-5 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                <h1 className="text-xs sm:text-2xl font-bold mb-2 sm:mb-3">
                  Webiste SIERPIN Dunia Sandang
                </h1>
                <p className="mb-4 text-xs sm:text-lg">
                  Situs web Dunia Sandang Pratama merupakan platform E-Commerce
                  yang dibangun menggunakan Laravel, dengan dukungan MySQL untuk
                  pengelolaan basis data, serta perancang...
                </p>
                <div className="flex justify-center flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JS",
                    "PHP",
                    "UIKit",
                    "Laravel",
                    "MySql",
                    "Figma",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#18BC9C] px-3 py-1 text-xs sm:text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        </motion.div>
        <div className="flex justify-center items-center flex-col mt-5 overflow-hidden">
          <div className="flex justify-center items-center flex-col mt-5 self-center min-h-[50vh] border-b-2 min-w-[80vw] ">
            <motion.h2
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                type: "tween",
                ease: "easeInOut",
              }}
              className="underline"
            >
              Click to Home
            </motion.h2>
            <a href="/Portofolio/">
              <motion.h1
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  type: "tween",
                  ease: "easeInOut",
                }}
                className="text-lg md:text-7xl font-medium mt-3  hover:underline whitespace-nowrap leading-none"
              >
                Back <FontAwesomeIcon icon={faCircleRight} />
              </motion.h1>
            </a>
          </div>
          <footer className="flex justify-center items-center flex-col my-5 self-start]">
            <p className="text-gray-800 text-sm">
              ©2025 -{" "}
              <span className="text-gray-700 text-lg">Muhamad Rifa`i</span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default MyProject;
