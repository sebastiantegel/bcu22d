export function ShowPerson(props) {
  return (
    <section>
      <h3>{props.person.name}</h3>
      <p>{props.person.age}</p>
    </section>
  );
}
