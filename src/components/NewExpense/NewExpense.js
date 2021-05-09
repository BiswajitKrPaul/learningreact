import "./NewExpense.css";
import AddNewExpense from "./AddNewExpense";

const NewExpense = (props) => {
  return (
    <AddNewExpense
      flag={props.flag}
      addNewExpense={props.addNewExpense}
      setFlag={props.setFlag}
    />
  );
};

export default NewExpense;
