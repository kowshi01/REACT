import React from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    function changeHandler(event){
        console.log(event.target.value);
    }
  return (
    <form onChange={changeHandler}>
        <div className='new-expense__controls'> 
            <div className='new-expense__control'>
                <label htmlFor="title">Expense title</label>
                <input type="text" />
            </div>
            <div className='new-expense__control'>
                <label htmlFor="amount">Expense Amount</label>
                <input type="number" min='0.01' step='0.01' />
            </div>
            <div className='new-expense__control'>
                <label htmlFor="date">Date</label>
                <input type="date" min='2019-01-01' max='2023-12-31' />
            </div>

        </div>
    </form>
  )
}

export default ExpenseForm
