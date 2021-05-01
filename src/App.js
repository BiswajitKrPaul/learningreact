import ExpenseItem from "./components/ExpenseItem";

function App() {
  const ExpenseItems = [
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
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={ExpenseItems[0].title}
        amount={ExpenseItems[0].amount}
        date={ExpenseItems[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={ExpenseItems[1].title}
        amount={ExpenseItems[1].amount}
        date={ExpenseItems[1].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
