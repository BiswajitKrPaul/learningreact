import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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
  const [expense, setExpense] = useState(expenses);
  const [flag, setFlag] = useState("false");

  const AddExpense = (expenseitem) => {
    // const expenses = [...expense];
    // expenses.push(expenseitem);
    setExpense((prevExpense) => {
      return [expenseitem, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense addNewExpense={AddExpense} flag={flag} setFlag={setFlag}></NewExpense>
      <Expenses expenseitems={expense} setExpense={setExpense}></Expenses>
    </div>
  );
}

export default App;
