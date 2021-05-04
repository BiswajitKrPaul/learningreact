import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(data) {
  const [pl, setProps] = useState(data.title);
  const clickHandler = () => {
    setProps("Updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={data.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{pl}</h2>
        <div className="expense-item__price">${data.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Me !!</button>
    </Card>
  );
}

export default ExpenseItem;
