import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      name: "Laptop",
      price: 56000,
      date: new Date(2012, 3, 3),
    },
    {
      id: "e2",
      name: "Bike",
      price: 156000,
      date: new Date(2012, 3, 12),
    },
    {
      id: "e3",
      name: "TV",
      price: 6000,
      date: new Date(2012, 3, 23),
    },
  ];
  return (
    <div>
      <h2>Welcome</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
