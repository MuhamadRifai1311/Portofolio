import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/index.css";
import Picture1 from "../img/Picture1.jpg";
import Imagekampus from "../img/Imagekampus.jpeg";
import { faCircleRight, faPalette } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import "../Styles/index.css";
function About() {
  const scrollRef = useRef(null);

  const scrollToSection = () => {
    if (typeof window === "undefined") return;
    if (scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1, // jeda antar anak
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } },
  };

  const text = `“I believe, big dreams start from small steps. And every project, every mistake, is part of my journey to the best version of myself.”`;



  const [displayedChars, setDisplayedChars] = useState([]);
  const containerRef = useRef(null);

  // Observer untuk memulai ulang animasi setiap kali elemen terlihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset typing animasi
          setDisplayedChars([]);
          let i = 0;
          const interval = setInterval(() => {
            if (i < text.length) {
              setDisplayedChars((prev) => [...prev, { char: text[i], key: i }]);
              i++;
            } else {
              clearInterval(interval);
            }
          }, 40);
        }
      },
      { threshold: 0.6 }
    );

    const target = containerRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

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
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              staggerChildren: 0.3,
              duration: 0.7,
              type: "spring",
              stiffness: 50,
              damping: 8,
            }}
            className="h-1 w-16 bg-[#18BC9C] border-none rounded mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              staggerChildren: 0.3,
              duration: 0.7,
              type: "spring",
              stiffness: 50,
              damping: 8,
            }}
            className="text-sm sm:text-lg"
          >
            Pengenalan singkat tentang saya dan minat saya.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              staggerChildren: 0.3,
              duration: 0.7,
              type: "spring",
              stiffness: 50,
              damping: 8,
            }}
          >
            <button
              onClick={scrollToSection}
              className="p-3 text-sm rounded-xl  bg-[#18BC9C] text-[#2C3E50]  hover:bg-[#2C3E50] transition duration-500  hover:text-[#18BC9C]"
            >
              Scroll Down
            </button>
          </motion.div>
        </div>
        <div ref={scrollRef} className="relative pt-2 pb-5">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="relative  sm:left-16"
          >
            <motion.div
              variants={itemVariants}
              className="h-1 w-20 bg-[#18BC9C] border-none rounded ml-20 mb-2"
            ></motion.div>
            <motion.div
              variants={itemVariants}
              className="h-1 w-20 bg-[#18BC9C] border-none rounded ml-14"
            ></motion.div>
            <motion.div variants={itemVariants} className="pl-12 pt-2">
              <h1 className="text-xl sm:text-2xl">Siapakah Saya?</h1>
            </motion.div>
          </motion.div>
          <div className="relative w-full gap-4 px-10 sm:px-20 grid grid-cols-1 sm:grid-cols-2 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                type: "tween",
                ease: "easeInOut",
              }}
              className="flex items-center flex-col mb-5 mt-2 mx-6 pt-10"
            >
              <img
                className="w-[75%] sm:w-[50%]  grayscale hover:grayscale-0 transition-all ease-in-out duration-300 "
                src={Picture1}
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                type: "tween",
                ease: "easeInOut",
              }}
              className="flex items-start text-justify flex-col mb-5 mt-2 mx-6 pt-10"
            >
              <h1 className="text-xl sm:text-2xl">
                <strong>Muhamad Rifai</strong>
              </h1>
              <p className="">
                Saya Muhamad Rifa’i, mahasiswa Manajemen Informatika di{" "}
                <strong className="text-black">Politeknik LP3I Bandung</strong>.
                Saya berasal dari Kota Bandung, Jawa Barat, Indonesia.
                Ketertarikan saya pada dunia teknologi, khususnya{" "}
                <strong className="text-black">pengembangan web</strong>,{" "}
                <strong className="text-black">desain antarmuka</strong>, dan{" "}
                <strong className="text-black">aplikasi mobile</strong>,
                mendorong saya untuk terus belajar dan mengembangkan kemampuan
                di bidang ini. Bagi saya, teknologi bukan hanya alat, melainkan
                jembatan untuk menciptakan solusi dan pengalaman digital yang
                bermanfaat. Saya percaya bahwa di tengah perkembangan teknologi
                yang begitu cepat, menjadi pembelajar seumur hidup adalah sebuah
                keharusan. Melalui portofolio ini, saya ingin membagikan
                perjalanan dan karya saya dalam dunia teknologi. Saya juga
                terbuka untuk kolaborasi dan pengembangan lebih lanjut bersama
                para profesional dan komunitas yang memiliki visi serupa.
              </p>
            </motion.div>
          </div>
          <div className="mx-auto w-[100%] gap-4 p-10 grid grid-cols-1 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                type: "tween",
                ease: "easeInOut",
              }}
              className="flex justify-center items-center flex-col mb-5"
            >
              <section className="grid gap-8 md:gap-12">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold mt-3">
                    Keterampilan dan Keahlian
                  </h2>
                  <p className="text-muted-foreground max-w-[800px] mx-auto">
                    Jelajahi beberapa keterampilan yang saya kuasai untuk
                    memberikan solusi berkualitas tinggi.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <svg
                      className="w-12 h-12"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                      <line x1="12" x2="12" y1="22" y2="15.5"></line>
                      <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                      <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                      <line x1="12" x2="12" y1="2" y2="8.5"></line>
                    </svg>
                    <div className="font-medium">
                      <p className="text-xs sm:text-lg">Pengembangan web</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faPalette} className="w-12 h-12" />
                    <div className="font-medium">
                      <p
                        className="
                      text-xs sm:text-lg"
                      >
                        Desain
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <svg
                      className="w-12 h-12"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                    </svg>
                    <div className="font-medium">
                      <p className="text-xs sm:text-lg">REST API</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <svg
                      className="w-12 h-12"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="12" x2="12" y1="18" y2="18"></line>
                    </svg>
                    <div className="font-medium">
                      <p className="text-xs sm:text-lg">
                        Pengembangan Aplikasi{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
          <div className=" mx-auto w-[100%] gap-4 p-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                type: "tween",
                ease: "easeInOut",
              }}
              className="flex justify-center items-center flex-col mb-5"
            >
              <h2 className="text-xl md:text-2xl  font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase ">
                Bahasa &amp; Kerangka Kerja
              </h2>
              <p className="text-center tracking-widest md:px-5">
                <span className="font-bold">HTML</span> {"| "}
                <span className="font-bold">CSS</span> {"| "}
                <span>Javascript</span> {"| "}
                <span>PHP</span> {"| "}
                <span className="font-bold">C++</span> {"| "}
                <span>Dart</span> {"| "}
                <span className="font-bold">Bootstrap</span> {"| "}
                <span className="font-bold">React</span> {"| "}
                <span className="font-bold">MySQL</span> {"| "}
                <span className="font-bold">Laravel</span> {"| "}
                <span>Flutter</span> {"| "}
                <span className="font-bold">TailwindCSS</span> {"| "}
                <span>Firebase</span> {"| "}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                type: "tween",
                ease: "easeInOut",
              }}
              className="flex justify-center items-center flex-col mb-5"
            >
              <h2 className="text-xl sm:text-2xl  font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase ">
                Peralatan
              </h2>
              <p className="text-center tracking-widest md:px-5">
                <span className="font-bold">Visual Studio Code</span> {"| "}
                <span className="font-bold">Android Studio</span> {"| "}
                <span className="font-bold">Figma</span> {"| "}
                <span className="font-bold">Navicat</span> {"| "}
                <span className="font-bold">DevC++</span> {"| "}
                <span>Netbeans</span> {"| "}
                <span>Firebase</span> {"| "}
              </p>
            </motion.div>
          </div>
          <div className="mt-16 flex flex-col justify-start items-center w-full pl-10">
            <div className="flex justify-center items-start flex-col my-5 self-start">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  type: "Spring",
                  stiffness: 50,
                  damping: 8,
                }}
                className="h-1 w-20 bg-[#18BC9C] border-none rounded ml-14 mb-3"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 50,
                  damping: 8,
                }}
                className="h-1 w-20 bg-[#18BC9C] border-none rounded"
              ></motion.div>
              <motion.h1
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 50,
                  damping: 8,
                }}
                className="text-xl sm:text-2xl font-bold mt-3"
              >
                Pengalaman Profesional
              </motion.h1>
            </div>
          </div>
          <div className="mx-auto w-[100%] gap-10 p-10 grid grid-cols-1 my-10">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 50,
                damping: 8,
              }}
              className="flex justify-center items-start flex-col mb-5"
            >
              <section className="grid gap-8">
                <div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-[#18BC9C] after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
                  <div className="grid gap-4 relative">
                    <div className="aspect-square w-5 bg-[#18BC9C] rounded-full absolute left-0 translate-x-[-29.5px] z-10"></div>
                    <div className="font-medium text-base sm:text-lg">
                      3 November 2023 - 20 Desember 2024
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg sm:text-xl text-black">
                        PT Dunia Sandang Pratama
                      </h3>
                      <h4 className=" font-light text-lg sm:text-xl mb-4">
                        PROGRAM MATCHING FUND PROJECT WEBSITE PT DUNIA SANDANG
                        PRATAMA | Fullstack Web Developer
                      </h4>
                      <p className="text-justify">
                        Berperan aktif dalam tim untuk mengembangkan website
                        dengan Laravel, merancang antarmuka dengan Figma, serta
                        membangun front-end dan back-end yang terintegrasi,
                        didukung dengan analisis sistem melalui Use Case dan
                        Activity Diagram.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4 text-sm">
                        <div className="bg-[#18BC9C] px-2 py-1 rounded-2xl">
                          Figma
                        </div>
                        <div className="bg-[#18BC9C] px-2 py-1 rounded-2xl">
                          Laravel
                        </div>
                        <div className="bg-[#18BC9C] px-2 py-1 rounded-2xl">
                          MySql
                        </div>
                        <div className="bg-[#18BC9C] px-2 py-1 rounded-2xl">
                          Ms Visio
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
          <div className="mx-auto w-[100%] gap-10 p-10 grid grid-cols-1 my-10">
            <div className="flex justify-center items-center flex-col mb-5">
              <section className="grid gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    type: "spring",
                    stiffness: 50,
                    damping: 8,
                  }}
                  className="text-center space-y-2"
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                    Pendidikan
                  </h1>
                  <p className="text-muted-foreground max-w-[800px] mx-auto">
                    Ketahui lebih lanjut tentang latar belakang pendidikan saya.
                  </p>
                </motion.div>
              </section>
            </div>

            <div className=" py-12 px-0 sm:px-6">
              <div className="max-w-4xl mx-auto rounded-xl shadow-2xl p-6">
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="flex justify-center">
                    <div className="overflow-hidden flex gap-2 rounded-md ">
                      <img
                        className="w-[50%] object-cover rounded-md transition-transform duration-300 hover:scale-110 grayscale hover:grayscale-0"
                        src={Imagekampus}
                        alt="Education"
                      />
                      <img
                        className="w-[50%] object-cover rounded-md transition-transform duration-300 hover:scale-110 grayscale hover:grayscale-0"
                        src={Imagekampus}
                        alt="Education"
                      />
                    </div>
                  </div>

                  <div className="relative space-y-2 flex flex-col">
                    <div>
                      <div className="aspect-square w-2 bg-black rounded-full absolute left-4 mt-1 top-1 sm:top-2 translate-x-[-29.5px] z-10"></div>
                      <div>
                        <div className="text-base sm:text-lg font-medium">
                          2022 - Sekarang
                        </div>
                        <h2 className="text-lg sm:text-xl font-semibold text-black">
                          Politeknik LP3I
                        </h2>
                        <h3 className="text-base sm:text-lg font-normal">
                          D3 Manajemen Informatika | Informatika Komputer
                        </h3>
                      </div>
                    </div>
                    <div>
                      <div className="aspect-square w-2 bg-black rounded-full absolute left-4 top-30 mt-2 sm:top-32 sm:mt-1 translate-x-[-29.5px] z-10"></div>
                      <div>
                        <div className="text-base sm:text-lg font-medium">
                          2019 - 2022
                        </div>
                        <h2 className="text-lg sm:text-xl font-semibold text-black">
                          SMK CIPTA SKILL EDUTAMA
                        </h2>
                        <h3 className="text-base sm:text-lg font-normal">
                          TKJ | Teknik Komputer Jaringan
                        </h3>
                      </div>
                    </div>

                    <p className=" text-justify leading-relaxed">
                      Terpesona oleh pesatnya dunia teknologi, saya memilih
                      jalur Ilmu Komputer di tingkat Diploma untuk memulai
                      perjalanan sebagai Web Developer. Saya percaya bahwa rasa
                      ingin tahu dan konsistensi adalah kunci untuk terus tumbuh
                      di bidang ini.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="min-h-[80vh] mx-auto p-10 grid grid-cols-1 mt-10 ">
            <div className="flex justify-center p-0 sm:p-52 items-center flex-col mb-5 ">
              <div
                ref={containerRef}
                className="text-center text-base sm:text-2xl"
              >
                {displayedChars.map(({ char, key }) => (
                  <span className="char-blur" key={key}>
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
                Click Next to MyProject
              </motion.h2>
              <motion.a
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  type: "tween",
                  ease: "easeInOut",
                }}
                href="/project"
              >
                <h1 className="text-lg md:text-7xl font-medium mt-3  hover:underline whitespace-nowrap leading-none">
                  Next <FontAwesomeIcon icon={faCircleRight} />
                </h1>
              </motion.a>
            </div>
            <footer className="flex justify-center items-center flex-col my-5 self-start]">
              <p className="text-gray-800 text-sm">
                ©2025 -{" "}
                <span className="text-gray-700 text-lg">Muhamad Rifa`i</span>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
