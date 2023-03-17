import { useState } from "react";
import { User } from "./User";
import { Person } from "./../models/Person";
import { AddUser } from "./AddUser";

// Galaxy
export const Users = () => {
  const [persons, setPersons] = useState([]);

  const addPerson = (name, age) => {
    let newPerson = new Person(name, age, false);
    setPersons([...persons, newPerson]);
  };

  const removePerson = (i) => {
    console.log("Ta bort en person", i);
    let modifiedList = [...persons];
    modifiedList.splice(i, 1);

    setPersons(modifiedList);
  };

  const html = persons.map((person, i) => {
    return (
      <User person={person} key={i} index={i} removePerson={removePerson} />
    );
  });

  return (
    <>
      <AddUser addPerson={addPerson} />
      <div>{html}</div>
    </>
  );
};
