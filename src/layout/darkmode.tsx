import lighton from "../assets/images/lighton.png";
import lightoff from "../assets/images/lightoff.png";
import { useEffect, useState } from "react";

interface Props {
  navHeight?: number;
  
}

const DarkMode:React.FC<Props> = ({navHeight})=> {
const [darkMode,setDarkMode] = useState(false);

 const [theme, setTheme] = useState('light'); // Initial theme

      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

    const toggleDarkMode = ()=>{
        setDarkMode(!darkMode)
       setTheme( darkMode ? 'light' : 'dark');
    }
  return (
    <div className="darkmode" style={{top:`${navHeight}`}}>
      <img src={darkMode ? lightoff : lighton} onClick={toggleDarkMode}></img>
    </div>
  );
}

export default DarkMode;
