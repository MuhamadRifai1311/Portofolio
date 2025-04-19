import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/Component/Header";
import About from "./assets/Component/About";
import MyProject from "./assets/Component/MyProject";
import Content from "./assets/Component/Content";
import ScrollToTop from "./assets/Component/ScrollToTop";
import DS from "./assets/Component/Projects/DS";

function App() {
  return (
    <>
      <Router>
        <div
          className="min-h-auto text-[#2C3E50] bg-[#F5F5F5]"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<MyProject />} />
            <Route path="/project1" element={<DS />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
