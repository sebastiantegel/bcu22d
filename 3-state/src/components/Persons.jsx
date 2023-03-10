import { useState } from "react";
import { Person } from "../models/Person";

export const Persons = () => {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const savePerson = () => {
    setPersons([...persons, new Person(name, age, false)]);
  };

  let html = persons.map((person, i) => {
    return (
      <h5 key={i}>
        {person.name} - {person.age}
      </h5>
    );
  });

  return (
    <>
      <input placeholder="Namn" onChange={handleNameChange} value={name} />
      <input placeholder="Ålder" onChange={handleAgeChange} value={age} />
      <button onClick={savePerson}>Spara</button>

      {html}
    </>
  );
};
