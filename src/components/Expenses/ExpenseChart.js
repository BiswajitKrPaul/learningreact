import React from 'react';
import Chart from '../Chart/Chart';

const ExpenseChart =props=>{

    const monthArr=[{month:'Jan',totalamount:0},
    {month:'Feb',totalamount:0},
    {month:'Mar',totalamount:0},
    {month:'Apr',totalamount:0},
    {month:'May',totalamount:0},
    {month:'Jun',totalamount:0},
    {month:'Jul',totalamount:0},
    {month:'Aug',totalamount:0},
    {month:'Sep',totalamount:0},
    {month:'Oct',totalamount:0},
    {month:'Nov',totalamount:0},
    {month:'Dec',totalamount:0}];

    for(const expense of props.expenseArr){
        const currentMonth=expense.date.getMonth();
        monthArr[currentMonth].totalamount += parseInt(expense.amount);
    }

    return(
        <Chart expenseArr={monthArr} />
    );

}

export default ExpenseChart;