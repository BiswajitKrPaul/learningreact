import './ExpensesDate.css'

function ExpenseDate(data) {
  const vYear = data.date.toLocaleString("default", { year: "numeric" });
  const vMonth = data.date.toLocaleString("default", { month: "long" });
  const vDay = data.date.toLocaleString("default", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{vYear}</div>
      <div className="expense-date__month">{vMonth}</div>
      <div className="expense-date__day">{vDay}</div>
    </div>
  );
}
export default ExpenseDate;
