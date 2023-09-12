import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate= new Date(2023,6,28);
    const expenseTitle='Car Insurance';
    const expenseAmount=200;
    const LocationOfExpenditure='Amount spent location';
  return  (
  <div className="expense-item">
    <div>{expenseDate.toISOString()}</div>
    <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h3>{LocationOfExpenditure}</h3>
        <div className="expense-item__price">${expenseAmount}</div>
    </div>
  </div>
  )
}

export default ExpenseItem;