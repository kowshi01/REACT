import React from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props) => {
    const saveExpenseData=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData)
    }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>
  )
}

export default NewExpenses