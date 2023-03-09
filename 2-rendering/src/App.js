import "./App.css";
import { Events } from "./components/Events/Events";
import { Interpolation } from "./components/Interpolation";
import { Lists } from "./components/Lists";
import { Persons } from "./components/Persons/Persons";

function App() {
  return (
    <div className="App">
      <Interpolation />
      <Events />
      <Lists />
      <Persons />
    </div>
  );
}

export default App;
