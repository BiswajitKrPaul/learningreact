import './ExpenseItem.css'

function ExpenseItem(data){

    const vYear=data.date.toLocaleString('default',{year:'numeric'});
    const vMonth=data.date.toLocaleString('default',{month:'long'});
    const vDay=data.date.toLocaleString('default',{day:'2-digit'});

    return(
        <div className="expense-item">
            <div>
                <div>{vYear}</div>
                <div>{vMonth}</div>
                <div>{vDay}</div>
            </div>
            <div className="expense-item__description">
                <h2>{data.title}</h2>
                <div className="expense-item__price">${data.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;