import { useState } from "react";
import { User } from "./../models/User";

export const UserForm = ({ addPerson }) => {
  const [user, setUser] = useState(new User("", 0, false));

  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, [e.target.name]: e.target.value });
    }

    if (e.target.type === "number") {
      setUser({ ...user, [e.target.name]: +e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        value={user.age}
        onChange={handleChange}
        name="age"
      />
      <button>Spara</button>
    </form>
  );
};
