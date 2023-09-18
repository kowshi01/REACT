import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    const[enteredtitle,setTitle]=useState('');
    const[enteredAmount ,setAmount]=useState('');
    const[enteredDate ,setDate]=useState('');
    function changeTitle(event){
        setTitle(event.target.value);
    }
    function changeAmount(event){
        setAmount(event.target.value);
    }
    function changeDate(event){
        setDate(event.target.value);
    }
    const submitHandeler=(event)=>{
        event.preventDefault();
        const expenseData={
            title : enteredtitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        console.log(expenseData);
    }
  return (
    <form onSubmit={submitHandeler}>
        <div className='new-expense__controls'> 
            <div className='new-expense__control'>
                <label htmlFor="title">Expense title</label>
                <input type="text" onChange={changeTitle}/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="amount">Expense Amount</label>
                <input type="number" min='0.01' step='0.01' onChange={changeAmount}/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="date">Date</label>
                <input type="date" min='2019-01-01' max='2023-12-31' onChange={changeDate}/>
            </div>
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default ExpenseForm
