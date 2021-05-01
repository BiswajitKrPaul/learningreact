function ExpenseDate(data) {
  const vYear = data.date.toLocaleString("default", { year: "numeric" });
  const vMonth = data.date.toLocaleString("default", { month: "long" });
  const vDay = data.date.toLocaleString("default", { day: "2-digit" });

  return (
    <div>
      <div>{vYear}</div>
      <div>{vMonth}</div>
      <div>{vDay}</div>
    </div>
  );
}
export default ExpenseDate;
