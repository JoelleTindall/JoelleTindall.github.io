import React, { useEffect, useState } from "react";
import "./hamburger.css";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const Hamburger: React.FC<Props> = ({ isOpen, onToggle }) => {
  const [navHeight, setNavHeight] = useState(0);
  const navigate = useNavigate();

  const alignMenu = () => {
    const navBar = document.getElementById("stickynav");
    if (navBar) {
      setNavHeight(navBar.clientHeight);
    }
  };

    // recalculate height on mount and resize
  useEffect(() => {
    alignMenu();
    window.addEventListener("resize", alignMenu);
    return () => window.removeEventListener("resize", alignMenu);
  }, []);

  // recalculate height immediately when menu opens
  useEffect(() => {
    if (isOpen) {
      alignMenu();
    }
  }, [isOpen]);

  const scrollToOrNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
    onToggle(); // close menu after click
  };

  useEffect(() => {
    alignMenu();
    window.addEventListener("resize", alignMenu);
    return () => window.removeEventListener("resize", alignMenu);
  }, []);

  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={onToggle}>
        <div className={`bar ${isOpen ? "open" : ""}`} />
        <div className={`bar ${isOpen ? "open" : ""}`} />
        <div className={`bar ${isOpen ? "open" : ""}`} />
      </button>

      <div
        className={`dropdown ${isOpen ? "open" : ""}`}
        style={{
          marginTop: `${navHeight}px`,
          ...(isOpen && { height: `calc(100vh - ${navHeight}px)` }),
        }}
      >
        <div className="link color1" onClick={() => scrollToOrNavigate("about")}>
          <a>About</a>
        </div>
        <div className="link color2" onClick={() => scrollToOrNavigate("projects")}>
          <a>Projects</a>
        </div>
        <div className="link color3" onClick={() => scrollToOrNavigate("contact")}>
          <a>Contact</a>
        </div>
        <div className="link color4" onClick={() => {
          onToggle();
          navigate("/otherstuff");
        }}>
          <a>Other Stuff</a>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
