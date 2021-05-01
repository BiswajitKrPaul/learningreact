import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from './Card'

function Expenses(props) {
  return (
      <Card className="expenses">
        <ExpenseItem
          title={props.expenseitems[0].title}
          amount={props.expenseitems[0].amount}
          date={props.expenseitems[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenseitems[1].title}
          amount={props.expenseitems[1].amount}
          date={props.expenseitems[1].date}
        ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
