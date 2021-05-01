import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

function ExpenseItem(data){
    return(
        <Card className="expense-item">
            <ExpenseDate date={data.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{data.title}</h2>
                <div className="expense-item__price">${data.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;