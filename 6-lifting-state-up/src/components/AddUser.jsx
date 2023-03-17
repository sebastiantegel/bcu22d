import { useState } from "react";
import { Person } from "../models/Person";

// Purple
export const AddUser = ({ addPerson }) => {
  const [person, setPerson] = useState(new Person("", 0, false));
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleChange = (e) => {
    if (e.target.type === "number") {
      setPerson({ ...person, [e.target.name]: +e.target.value });
    }
    if (e.target.type === "text") {
      setPerson({ ...person, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addPerson(name, age);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(+e.target.value);
        }}
        name="age"
      />
      <button>Spara</button>
    </form>
  );
};
