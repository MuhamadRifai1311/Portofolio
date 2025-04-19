import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/component/Header";
import About from "./assets/component/About";
import MyProject from "./assets/component/MyProject";
import Content from "./assets/Component/content";
import ScrollToTop from "./assets/component/scrollToTop";
import DS from "./assets/Component/Projects/Ds";

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
