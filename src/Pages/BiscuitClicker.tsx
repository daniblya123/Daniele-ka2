import { createContext, useState } from "react";
import BiscuitImage from "../assets/BiscuitImage.png";
import "./BiscuitClickerLayout.css";
import Navbar from "../Navbar";

export const ContextNumber = createContext();

function BiscuitClicker() {
  const [biscuitMultiplier, setBiscuitMultiplier] = useState(1);
  const [biscuitNumber, setBiscuitNumber] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const handleImagePressed = () => {
    setBiscuitNumber(
      prevBiscuitNumber => prevBiscuitNumber + biscuitMultiplier
    );
  };

  const handleButtonClick = () => {
    if (biscuitNumber < 100) {
      setErrorMessage("Not Enough Funds");
    } else {
      setBiscuitNumber(biscuitNumber => biscuitNumber - 100);
      setBiscuitMultiplier(biscuitMultiplier => biscuitMultiplier + 1);
      setErrorMessage("");
    }
  };

  const multiplierButton = (
    <button
      type="button"
      key={"Multiplier Button"}
      onClick={() => handleButtonClick()}
    >
      Multiplier Boost
    </button>
  );

  return (
    <>
      <p>Welcome to the Biscuit Clicker Game - Click To Get Points </p>
      <p>Your Score - {biscuitNumber}</p>
      <p>Your Multiplier - x{biscuitMultiplier}</p>
      <div className="image-div">
        <img
          width="20%"
          src={BiscuitImage}
          alt="Biscuit"
          onClick={() => handleImagePressed()}
        />
      </div>
      <p>{multiplierButton}</p>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
}

export default BiscuitClicker;
