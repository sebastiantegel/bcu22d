import { ShowPerson } from "./Person";

export function Persons({ persons }) {
  const html = persons.map((person, i) => {
    return <ShowPerson person={person} key={i} />;
  });

  return <>{html}</>;
}
