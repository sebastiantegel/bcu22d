import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";

export const PersonChild = () => {
  const person = useContext(PersonContext);

  return (
    <>
      <h3>PersonChild works: {person.name}</h3>
      <button onClick={() => person.updateName("Hanna")}>Ändra namn</button>
    </>
  );
};
