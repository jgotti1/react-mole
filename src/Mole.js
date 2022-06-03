import { useEffect } from "react";
import moleImg from "./Images/mole.png";

function Mole(props) {
  useEffect(() => {
    // Feel free to adjust this number as you see fit.
    // It is your game to tune!
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.setDisplayMole(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{ width: "20vw" }} src={moleImg} onClick={props.handleClick} />
    </div>
  );
}
export default Mole;
