import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
    const onChangeHandler=(event)=>{
        props.getExpenseFilterYear(event.target.value);
    };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label className="expense-filter__label">Date</label>
        <select className="expense-filter__select" value={props.selected} onChange={onChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
