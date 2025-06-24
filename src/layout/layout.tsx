import React, { type ReactNode, useEffect } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import "./layout.css";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const nav = document.getElementById("stickynav");
    const navHeight = nav?.clientHeight || 0;

    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    // Apply scroll margin to prevent overlap
    sections.forEach((section) => {
      section.style.scrollMarginTop = `${navHeight - 1}px`;
    });

    const scrollToHash = () => {
      // Strip '#/' from hash (e.g. "#/about" → "about")
      const raw = location.hash;
      const id = raw.startsWith("#/") ? raw.slice(2) : raw.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    const timeoutId = setTimeout(scrollToHash, 100);

    // Optional: update hash as user scrolls into sections
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navHeight;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const currentHash = `#/${section.id}`;
          if (location.hash !== currentHash) {
            window.history.replaceState(null, "", currentHash);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <>
      <NavBar />
      <div className="row">
        <div className="column left sidebar"></div>
        <div className="column middle content">
          {children}
          <Footer />
        </div>
        <div className="column right sidebar"></div>
      </div>
    </>
  );
};

export default Layout;
