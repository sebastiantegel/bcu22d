import "./App.css";
import { Button, DeleteButton } from "./components/styled/Button";
import { Input, PasswordInput } from "./components/styled/Input";

function App() {
  const handleClick = () => {
    console.log("Klick på styled button");
  };

  return (
    <div className="App">
      <Button onClick={handleClick}>Spara</Button>
      <Button $secondary>Secondary</Button>
      <Button bgColor="purple">Primary</Button>
      <DeleteButton>Ta bort</DeleteButton>

      <div>
        <Input size="1rem" />
        <PasswordInput size="1rem" />
      </div>
    </div>
  );
}

export default App;
