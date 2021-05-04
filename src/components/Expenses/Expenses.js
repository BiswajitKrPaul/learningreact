import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../ui/Card";

function Expenses(props) {
  function setExpenseItem(expenseitem, index) {
    const expenses = [...props.expenseitems];
    expenses.splice(index,1);
    props.setExpense(expenses);
  }
  return (
    <Card className="expenses">
      {props.expenseitems.map((expenseitem, i) => {
        return (
          <ExpenseItem expenseitem={expenseitem} key={i} index={i} setExpenseItem={setExpenseItem}></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expenses;
