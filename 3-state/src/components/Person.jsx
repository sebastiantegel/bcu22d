import { useState } from "react";
import { Person } from "./../models/Person";

export const ShowPerson = () => {
  const [person, setPerson] = useState(new Person("", 0, false));
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleClick = () => {
    setPerson({ ...person, age: +age, name });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const html =
    person.age > 0 ? (
      <div>
        <h3>{person.name}</h3>
        <p>{person.age}</p>
      </div>
    ) : (
      <></>
    );

  console.log(person);

  return (
    <>
      <input placeholder="Namn" onChange={handleNameChange} value={name} />
      <input placeholder="Ålder" onChange={handleAgeChange} value={age} />
      <button onClick={handleClick}>Ändra person</button>
      {html}
    </>
  );
};
