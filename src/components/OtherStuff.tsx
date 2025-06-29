import { useEffect, useRef } from "react";
import workcat from "../assets/images/workcat.gif";
const OtherPage: React.FC = () => {
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div id="otherstuff" className="section" ref={myRef}>
      <div className="header contact">
        <h1>Other Stuff</h1>
        <p>Look at all this stuff!</p>
      </div>
      <div className="contentblock contact">
        <div className="underconstruction">
    <img src={workcat}></img>
    <p>Under Construction!</p>
    <iframe  src="https://itch.io/embed-upload/4823134?color=000000" allowFullScreen width="750" height="660"><a href="https://joellestuff.itch.io/i-wanna-play-a-space-shooter">Play I wanna play a space shooter!! on itch.io</a></iframe>
</div>
      </div>
    </div>
  );
};
export default OtherPage;
