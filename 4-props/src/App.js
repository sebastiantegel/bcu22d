import "./App.css";
import { Person } from "./models/Person";
import { ShowPerson } from "./components/Person";
import { ReceiverOfData } from "./components/ReceiverOfData";
import { Persons } from "./components/Persons";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [person, setPerson] = useState(new Person("Sebastian", 43, true));
  const [persons, setPersons] = useState([
    new Person("Sebastian", 43, true),
    new Person("Hanna", 43, true),
  ]);

  // let person = new Person("Sebastian", 43, true);

  // let persons = [
  //   new Person("Sebastian", 43, true),
  //   new Person("Hanna", 43, true),
  // ];

  function handleChange(e) {
    setUserName(e.target.value);
  }

  function handleClick() {
    // person.name = userName;
    // setPerson({ ...person, name: userName });
    setPersons([...persons, new Person(userName, 0, false)]);
  }

  // console.log("Updating");

  return (
    <div className="App">
      {/* <ReceiverOfData message="Hello world" age={43} /> */}
      <input onChange={handleChange} value={userName} />
      <button onClick={handleClick}>Spara</button>
      {/* <ShowPerson person={person} /> */}
      <Persons persons={persons} />
    </div>
  );
}

export default App;
