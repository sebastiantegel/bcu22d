import { useState } from "react";
import { User } from "./../models/User";
import { Address } from "./../models/Address";

import "./UserForm.css";

export const UserForm = () => {
  const [user, setUser] = useState(
    new User("", "", "", new Address("", "", ""))
  );
  const [errors, setErrors] = useState({
    firstname: [],
    lastname: [],
    email: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Använd:", user);
  };

  const handleChange = (e) => {
    // if (e.target.type === "number") {
    //   setUser({ ...user, [e.target.name]: +e.target.value });
    // }

    // if (e.target.type === "checkbox") {
    //   setUser({ ...user, [e.target.name]: e.target.checked });
    // }

    setUser({ ...user, [e.target.name]: e.target.value });
    validate(e.target.name, e.target.value);
  };

  const handleAddressChange = (e) => {
    setUser({
      ...user,
      address: { ...user.address, [e.target.name]: e.target.value },
    });
  };

  const validate = (property, value) => {
    let firstnameErrors = [];
    if (property === "firstname") {
      if (value === "") {
        firstnameErrors.push("Du måste ange ett värde");
      }

      if (value.length < 3) {
        firstnameErrors.push("Du måste ange minst tre tecken");
      }

      setErrors({ ...errors, firstname: firstnameErrors });
    }

    if (firstnameErrors.length === 0) {
      return true;
    }

    return false;
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <input
          placeholder="Förnamn"
          value={user.firstname}
          onChange={handleChange}
          name="firstname"
          required
          minLength={3}
          className={errors.firstname.length > 0 ? "has-error" : ""}
        />
        {errors.firstname.length > 0 ? <p>{errors.firstname[0]}</p> : <></>}
        <input
          placeholder="Efternamn"
          value={user.lastname}
          onChange={handleChange}
          name="lastname"
        />
        <input
          placeholder="E-post"
          value={user.email}
          onChange={handleChange}
          name="email"
          type="email"
        />
      </div>
      <div>
        <input
          placeholder="Gatuadress"
          value={user.address.street}
          onChange={handleAddressChange}
          name="street"
        />
        <input
          placeholder="Postnummer"
          value={user.address.zip}
          onChange={handleAddressChange}
          name="zip"
        />
        <input
          placeholder="Postort"
          value={user.address.city}
          onChange={handleAddressChange}
          name="city"
        />
      </div>
      <button>Spara</button>
      <p>{JSON.stringify(user)}</p>
    </form>
  );
};
