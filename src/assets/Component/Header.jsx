// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const showBackButtonOn = ["/about", "/project"];
  const showBackButtonProject = ["/project1", "/project2"];

  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 h-12 flex items-center px-6 z-50 backdrop-blur-sm w-full">
        <div>
          {showBackButtonProject.includes(location.pathname) ? (
            <button onClick={() => navigate("/project")}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="absolute left-10 top-3"
              />
            </button>
          ) : location.pathname === "/project" ? (
            <button onClick={() => navigate("/about")}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="absolute left-10 top-3"
              />
            </button>
          ) : showBackButtonOn.includes(location.pathname) ? (
            <button onClick={() => navigate("/")}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="absolute left-10 top-3"
              />
            </button>
          ) : null}
        </div>

        <div className="absolute left-16 top-2 font-bold">Muhamad Rifai</div>
      </div>
    </>
  );
}

export default Header;
