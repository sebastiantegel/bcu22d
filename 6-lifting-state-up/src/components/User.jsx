// Black
export const User = ({ person, removePerson, index }) => {
  const handleClick = () => {
    removePerson(index);
  };

  return (
    <div className="person">
      <h3>{person.name}</h3>
      <p>{person.age}</p>
      <button onClick={handleClick}>Ta bort</button>
    </div>
  );
};
