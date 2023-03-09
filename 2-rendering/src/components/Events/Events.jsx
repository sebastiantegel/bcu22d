import "./Events.css";

export const Events = () => {
  let userInput = "Sebastian";

  const handleClick = (id) => {
    console.log("Du klickade på knappen", id);
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    userInput = e.target.value;
    console.log(userInput);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />

      <button
        type="button"
        onClick={() => {
          handleClick(17);
        }}
      >
        Klicka här
      </button>

      {userInput}
    </div>
  );
};
