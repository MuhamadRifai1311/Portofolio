import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Picture1 from "../img/Picture1.jpg";
import { useState, useEffect } from "react";
import {
  faHouse,
  faUser,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import Laptop from "../img/picturelaptop.jpg";
import Foto from "../img/pas_foto.jpeg";


function Content() {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Portofolio/public/Muhamad Rifa’i (1).pdf";
    link.download = "CV_MuhamadRifai.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 50;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <>
      <div id="home" className="min-w-auto">
        <div className="pb-14 pt-10">
          <div className="flex flex-col-reverse sm:grid sm:grid-cols-3 items-center mx-auto w-5/6 py-5">
            <div className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <motion.h1
                  variants={itemVariants}
                  className="text-xl sm:text-2xl  font-bold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  MUHAMAD RIFA`I
                </motion.h1>

                <motion.h1
                  variants={itemVariants}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  className="font-bold text-5xl sm:text-8xl"
                >
                  Web
                </motion.h1>
              </motion.div>

              <h1
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="font-bold text-5xl sm:text-8xl"
              >
                <Typewriter
                  words={["Developer"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={150}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </h1>

              <p className="pt-5">
                Seorang Web Developer junior yang saat ini fokus pada
                Pengembangan Web. Selain itu, saya juga tertarik pada Desain
                UX/UI dan Pengembangan Aplikasi. Saya suka mempelajari hal-hal
                baru dan selalu terbuka terhadap peluang baru.
              </p>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  staggerChildren: 0.3,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 50,
                  damping: 8,
                }}
              >
                <div className="flex justify-start items-start gap-3 pt-5">
                  <button
                    onClick={downloadPDF}
                    className="p-2 rounded-xl bg-[#18BC9C] text-[#2C3E50]  hover:bg-[#2C3E50] transition duration-500  hover:text-[#18BC9C] "
                  >
                    Download CV
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="p-2 border-2 rounded-xl  bg-[#2C3E50] text-[#18BC9C]  hover:bg-[#18BC9C] transition duration-500  hover:text-[#2C3E50]"
                  >
                    Contact Me
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-center mb-5 sm:mb-0">
              <div className="flex justify-center mb-5 sm:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    staggerChildren: 0.3,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 50,
                    damping: 8,
                  }}
                >
                  <div className="w-60 h-60 sm:w-72 sm:h-96 overflow-hidden rounded-full shadow-lg">
                    <img
                      src={Foto}
                      className="object-cover w-full h-full grayscale-0 sm:grayscale sm:hover:grayscale-0 transition-all ease-in-out duration-300"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="fixed w-auto h-auto bg-[#2C3E50] left-0 top-44 p-3 rounded-r-3xl hidden sm:flex">
            <ul className="flex flex-col gap-7  pt-5 pb-5">
              {[
                { id: "home", icon: faHouse },
                { id: "about", icon: faUser },
                { id: "projects", icon: faFolderOpen },
                { id: "contact", icon: faEnvelope },
              ].map((menu) => (
                <li key={menu.id}>
                  <button
                    onClick={() => scrollToSection(menu.id)}
                    className={`transition duration-300 ${
                      activeSection === menu.id
                        ? "border-b-2 border-[#18BC9C] text-[#18BC9C]"
                        : "text-[#F5F5F5]"
                    }`}
                  >
                    <FontAwesomeIcon icon={menu.icon} className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* About */}
        <div id="about" className="pt-10 pb-14 w-full">
          <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 w-[90%] mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col justify-center gap-2 mx-auto m-11"
            >
              <motion.h1
                variants={itemVariants}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="font-bold text-5xl sm:text-8xl"
              >
                About Me
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="h-1 w-16 bg-[#18BC9C] border-none rounded mb-2"
              ></motion.div>
              <motion.div
                variants={itemVariants}
                className="h-1 w-16 bg-[#18BC9C] border-none rounded ml-14"
              ></motion.div>
              <motion.p variants={itemVariants} className="pt-2">
                Pengenalan singkat tentang saya dan minat saya.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex justify-start items-start pt-2"
              >
                <button className="p-2 rounded-xl bg-[#18BC9C] text-[#2C3E50]  hover:bg-[#2C3E50] transition duration-500  hover:text-[#18BC9C]  ">
                  <Link to="/about">Learn More</Link>
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                staggerChildren: 0.3,
                duration: 0.7,
                type: "spring",
                stiffness: 50,
                damping: 8,
              }}
              className="flex items-center justify-center sm:justify-end sm:items-end"
            >
              <div className="flex justify-center pl-4 grayscale-0 sm:grayscale sm:hover:grayscale-0 transition-all duration-300 ease-in-out ">
                <img
                  className="w-[60%]"
                  src={Picture1}
                  alt="Deskripsi gambar"
                />
              </div>
            </motion.div>
          </div>
        </div>
        {/* Project */}
        <div id="projects" className=" pb-14 w-full">
          <div className="w-[90%]  flex flex-col-reverse sm:grid sm:grid-cols-2 mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col justify-center gap-2 mx-auto m-11"
            >
              <motion.h1
                variants={itemVariants}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "700",
                }}
                className="font-bold text-5xl sm:text-8xl"
              >
                My Project
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="h-1 w-16 bg-[#18BC9C] border-none rounded mb-2"
              ></motion.div>
              <motion.div
                variants={itemVariants}
                className="h-1 w-16 bg-[#18BC9C] border-none rounded ml-14"
              ></motion.div>
              <motion.p variants={itemVariants} className="pt-2">
                Berikut ini beberapa proyek yang telah dan sedang saya kerjakan.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex justify-start items-start pt-2"
              >
                <button className="p-2 rounded-xl bg-[#18BC9C] text-[#2C3E50]  hover:bg-[#2C3E50] transition duration-500  hover:text-[#18BC9C] ">
                  <Link to="/project">Learn More</Link>
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                staggerChildren: 0.3,
                duration: 0.7,
                type: "spring",
                stiffness: 50,
                damping: 8,
              }}
              className="flex items-center justify-center sm:justify-end sm:items-end"
            >
              <div className="flex justify-center pl-4 grayscale-0 sm:grayscale sm:hover:grayscale-0 transition-all duration-300 ease-in-out">
                <img
                  className="w-[60%]"
                  src={Laptop}
                  alt="Deskripsi gambar"
                />
              </div>
            </motion.div>
          </div>
        </div>
        {/* contact */}
        <div id="contact" className="pt-10 pb-14 w-full">
          <div className="w-[90%] flex flex-col-reverse sm:grid sm:grid-cols-2 mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col justify-center gap-2 mx-auto m-11"
            >
              <motion.h1
                variants={itemVariants}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="font-bold text-5xl sm:text-8xl"
              >
                Get In Touch
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="h-1 w-16 bg-[#18BC9C] border-none rounded mb-2"
              ></motion.div>
              <motion.div
                variants={itemVariants}
                className="h-1 w-16 bg-[#18BC9C] border-none rounded ml-14"
              ></motion.div>
              <motion.p variants={itemVariants} className="pt-2">
                Jangan ragu untuk menghubungi saya
                <br />
                jika Anda memiliki pertanyaan atau sekadar ingin menyapa.
              </motion.p>
              <motion.p variants={itemVariants} className="pt-2">
                muhammadrifai.r22mi@plb.ac.id
              </motion.p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="flex justify-start items-start pt-2 gap-3"
              >
                <motion.a
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    staggerChildren: 0.3,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 50,
                    damping: 8,
                  }}
                  href="mailto:muhammadrifai.r22mi@plb.ac.id"
                >
                  <button className="w-12 h-12 flex items-center justify-center bg-[#18BC9C] text-[#2C3E50] hover:bg-[#2C3E50] transition duration-500 hover:text-[#18BC9C] rounded-full">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                  </button>
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    staggerChildren: 0.3,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 50,
                    damping: 8,
                  }}
                  href="https://instagram.com/muhmdrfai_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-12 h-12 flex items-center justify-center bg-[#18BC9C] text-[#2C3E50] hover:bg-[#2C3E50] transition duration-500 hover:text-[#18BC9C] rounded-full">
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                  </button>
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    staggerChildren: 0.3,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 50,
                    damping: 8,
                  }}
                  href="https://wa.me/6289638984812"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-12 h-12 flex items-center justify-center bg-[#18BC9C] text-[#2C3E50] hover:bg-[#2C3E50] transition duration-500 hover:text-[#18BC9C] rounded-full">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                  </button>
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                staggerChildren: 0.3,
                duration: 0.7,
                type: "spring",
                stiffness: 50,
                damping: 8,
              }}
              className="flex items-center justify-center sm:justify-end sm:items-end"
            >
              <div className="flex justify-center pl-4 grayscale-0 sm:grayscale sm:hover:grayscale-0 transition-all duration-300 ease-in-out">
                <img className="w-[60%]" src={Picture1} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
