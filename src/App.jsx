import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/Component/Header";
import About from "./assets/Component/About";
import MyProject from "./assets/Component/MyProject";
import Content from "./assets/Component/Content";
import ScrollToTop from "./assets/Component/ScrollToTop";
import DS from "./assets/Component/Projects/Ds";
import UtilityOne from "./assets/Component/Projects/UtilityOne";
import BookingHotel from "./assets/Component/Projects/BookingHotel";

function App() {
  return (
    <>
      <Router>
        <div
          className="max-w-md sm:max-w-full text-[#394867] bg-[#F1F6F9] overflow-x-hidden"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<MyProject />} />
            <Route path="/project1" element={<DS />} />
            <Route path="/project2" element={<UtilityOne />} />
            <Route path="/project3" element={<BookingHotel />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
