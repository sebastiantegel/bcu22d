import { useState } from "react";
import "./App.css";
import { Person } from "./components/Person";
import { PersonContext } from "./contexts/PersonContext";
import { User } from "./models/Person";

function App() {
  const [person, setPerson] = useState(new User("Sebastian"));

  person.updateName = (newName) => {
    setPerson({ ...person, name: newName });
  };

  return (
    <PersonContext.Provider value={person}>
      <div className="App">
        <Person></Person>
      </div>
    </PersonContext.Provider>
  );
}

export default App;
