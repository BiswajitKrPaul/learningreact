import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      title: "MacBook Air M1",
      date: new Date(2021, 3, 25),
      amount: 1600,
    },
    {
      title: "Iphone 12 mini",
      amount: 600,
      date: new Date(2021, 3, 26),
    },
  ];

  return (
    <div>
      <Expenses expenseitems={expenses}></Expenses>
    </div>
  );
}

export default App;
