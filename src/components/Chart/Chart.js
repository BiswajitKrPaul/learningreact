import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const maxValue = Math.max(...props.expenseArr.map((e) => e.totalamount));
  return (
    <div className='chart'>
      {props.expenseArr.map((expense) => (
        <ChartBar
          key={expense.month}
          totalamount={expense.totalamount}
          maxValue={maxValue}
          month={expense.month}
        />
      ))}
    </div>
  );
};

export default Chart;
