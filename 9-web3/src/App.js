import { useEffect, useState } from "react";
import Web3 from "web3";
import { PERSON_LIST_ABI, PERSON_LIST_ADDRESS } from "./config";
import "./App.css";

function App() {
  const [account, setAccount] = useState();
  const [indexes, setIndexes] = useState([]);

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

      let indexes = await personContract.methods.getIndexList().call();
      console.log(indexes);

      const html = indexes.map((index) => {
        return <li>{index}</li>;
      });
      setIndexes(html);
    };

    if (account) return;
    getAccounts();
  });

  return (
    <div className="App">
      <p>Account: {account}</p>
      <ul>{indexes}</ul>
    </div>
  );
}

export default App;
