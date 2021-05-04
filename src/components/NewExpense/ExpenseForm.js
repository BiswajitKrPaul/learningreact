import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());

  const clickHandler = (e) => {
    const newExpenseItem={title,amount,date};    //{title:title , amount:amount , date:date}
    props.addNewExpense(newExpenseItem);
  };

  return (
    <div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={(e) => {
              setDate(new Date(e.target.value));
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={clickHandler}>Add New Expense</button>
      </div>
    </div>
  );
};

export default ExpenseForm;
