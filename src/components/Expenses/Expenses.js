import "./Expenses.css";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseFilter.css";
import { useState } from "react";
import ExpenseList from "./ExpenseList"
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  // function DeleteExpenseItem(expenseitem, index) {
  //   const expenses = [...props.expenseitems];
  //   expenses.splice(index, 1);
  //   props.setExpense(expenses);
  // }

  const [year, setYear] = useState("2021");

  const getExpenseFilterYear = (year) => {
    setYear(year);
    console.log(year);
  };

  const filteredExpense=props.expenseitems.filter(expense=>expense.date.getFullYear().toString()===year);
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={year}
          getExpenseFilterYear={getExpenseFilterYear}
        />
        <ExpenseChart expenseArr={filteredExpense}/>
        <ExpenseList expenses={filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expenses;
