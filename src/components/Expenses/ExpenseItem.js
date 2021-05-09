import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

function ExpenseItem(props) {

  // const clickHandler = () => {
  //   const expenseItem = {...props.expenseitem};
  //   expenseItem.title="Phone";
  //   expenseItem.date=new Date(2019,4,23);
  //   expenseItem.amount="400";
  //   props.DeleteExpenseItem(expenseItem,props.index);
  // };

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.expenseitem.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.expenseitem.title}</h2>
        <div className="expense-item__price">${props.expenseitem.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Delete Expense</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
