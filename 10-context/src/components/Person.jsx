import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";
import { PersonChild } from "./PersonChild";

export const Person = () => {
  const { name } = useContext(PersonContext);

  return (
    <div>
      <h2>Person works: {name}</h2>

      <PersonChild></PersonChild>
    </div>
  );
};
