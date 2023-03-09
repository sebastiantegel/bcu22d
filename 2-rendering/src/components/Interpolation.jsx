export const Interpolation = () => {
  const name = "Sebastian";
  // <h3>name</h3>  =  document.getElementById("...").innerHTML = "name"

  const age = 43;
  const isMarried = true;

  const person = {
    name: "Sebastian",
    age: 43,
    isMarried: false,
  };

  //   let marriedCheckbox = <span>Nej</span>;
  //   if (person.isMarried) {
  //     marriedCheckbox = <span>Ja</span>;
  //   }

  const marriedCheckbox = person.isMarried ? <span>Ja</span> : <span>Nej</span>;

  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{isMarried.toString()}</p>
      {marriedCheckbox}
      {person.isMarried ? <span>Ja</span> : <span>Nej</span>}

      <section>
        {person.name} - {person.age}
      </section>

      <article>{JSON.stringify(person)}</article>
    </div>
  );
};
