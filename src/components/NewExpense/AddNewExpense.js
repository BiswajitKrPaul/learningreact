import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const AddNewExpense = (props) => {

const onAddClick=()=>{
    props.setFlag("true");
}
if (props.flag === "false") {
  return (
    <div className="new-expense">
      <button onClick={onAddClick}>Add New Expense</button>
    </div>
  );
}
if (props.flag === "true") {
  return (
    <div className="new-expense">
      <ExpenseForm addNewExpense={props.addNewExpense} setFlag={props.setFlag}/>
    </div>
  );
}
};

export default AddNewExpense;
