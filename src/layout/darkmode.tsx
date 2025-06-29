import lighton from "../assets/images/lighton.png";
import lightoff from "../assets/images/lightoff.png";
import { useEffect, useState } from "react";

interface Props {
  navHeight?: number;
}

const DarkMode: React.FC<Props> = ({ navHeight }) => {
  const [darkMode, setDarkMode] = useState(false);

  const [theme, setTheme] = useState("light"); // Initial theme
  const [themeColor, setThemeColor] = useState("white"); //color of meta property (for mobile)

  useEffect(() => {
    let metaTag = document.querySelector('meta[name="theme-color"]');
    metaTag?.setAttribute("content", themeColor);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, themeColor]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setTheme(darkMode ? "light" : "dark");
    setThemeColor(darkMode ? "white" : "#262626");
  };
  return (
    <div className="darkmode" style={{ top: `${navHeight}` }}>
      <img src={darkMode ? lightoff : lighton} onClick={toggleDarkMode}></img>
    </div>
  );
};

export default DarkMode;
