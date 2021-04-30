import './ExpenseItem.css'

function ExpenseItem(){
    return(
        <div className="expense-item">
            <div>01 May 2021</div>
            <div className="expense-item__description">
                <h2>MacBook Air M1</h2>
                <div className="expense-item__price">$1600</div>
            </div>

        </div>
    );
}

export default ExpenseItem;