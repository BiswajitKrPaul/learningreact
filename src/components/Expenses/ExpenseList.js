import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expense.</h2>;
  }

  return (
    <ul className="expense-list">
      {props.expenses.map((expenseitem, i) => {
        return(<ExpenseItem expenseitem={expenseitem} key={i} index={i} />);
      })}
    </ul>
  );
};

export default ExpenseList;
