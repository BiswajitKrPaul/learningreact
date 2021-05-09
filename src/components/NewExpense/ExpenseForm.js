import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    const newExpenseItem = {
      title: title,
      amount: amount,
      date: new Date(date),
    }; //{title:title , amount:amount , date:date}
    props.addNewExpense(newExpenseItem);
    setTitle("");
    setAmount("");
    setDate("");
    props.setFlag("false");
  };

  const onCancelClick = () => {
    props.setFlag("false");
  };

  return (
    <form onSubmit={clickHandler}>
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
              setDate(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add New Expense</button>
      </div>
      <div className="new-expense__actions1">
        <button onClick={onCancelClick}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
