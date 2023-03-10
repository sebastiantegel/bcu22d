import react, { useState } from "react";
import "./App.css";
import { ShowPerson } from "./components/Person";
import { Persons } from "./components/Persons";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  const handleClick = () => {
    setRandomNumber(randomNumber + 1);
  };

  return (
    <div className="App" onClick={handleClick}>
      {randomNumber}

      {/* <ShowPerson /> */}
      <Persons />
    </div>
  );
}

export default App;
