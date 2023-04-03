import { useEffect, useState } from "react";
import Web3 from "web3";
import { PERSON_LIST_ABI, PERSON_LIST_ADDRESS } from "./config";
import "./App.css";
import { UserForm } from "./components/UserForm";

function App() {
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const getAccounts = async () => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.getAccounts();

      console.log(accounts);
      setAccount(accounts[0]);

      const personContract = new web3.eth.Contract(
        PERSON_LIST_ABI,
        PERSON_LIST_ADDRESS
      );

      setContract(personContract);

      await populatePersons(personContract);
    };

    if (account) return;
    getAccounts();
  });

  const populatePersons = async (contract) => {
    let indexes = await contract.methods.getIndexList().call(); // [1, 2, 3]

    let temp = [];
    for (let i = 0; i < indexes.length; i++) {
      const person = await contract.methods.persons(indexes[i]).call(); // 1  ->   persons(1)   ->  person { ... }
      console.log(person);
      temp.push(person);
    }

    setPersons(temp);
  };

  const html = persons.map((person) => {
    return (
      <ul key={person.id}>
        <li>{person.id}</li>
        <li>{person.name}</li>
        <li>{person.age}</li>
        <li>{person.isMarried.toString()}</li>
      </ul>
    );
  });

  const createPerson = async (user) => {
    await contract.methods
      .createPerson(user.name, user.age, user.isMarried)
      .send({ from: account })
      .once("receipt", async (receipt) => {
        console.log(receipt);

        populatePersons(contract);
      });
  };

  return (
    <div className="App">
      <p>Account: {account}</p>
      <UserForm addPerson={createPerson}></UserForm>
      {html}
    </div>
  );
}

export default App;
