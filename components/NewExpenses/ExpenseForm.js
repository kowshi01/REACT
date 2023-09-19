import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
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
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
        disaapearForm();
    }
    const disaapearForm=()=>{
        const form=document.getElementById('formData');
        form.style.display = "none";
        const btn=document.getElementById('cancelBtn');
        btn.style.display = "none";
    }
  return (
    <form onSubmit={submitHandeler}>
        <div className='new-expense__controls' id='formData'> 
            <div className='new-expense__control'>
                <label htmlFor="title">Expense title</label>
                <input type="text" value={enteredtitle} onChange={changeTitle}/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="amount">Expense Amount</label>
                <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={changeAmount}/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="date">Date</label>
                <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={changeDate}/>
            </div>
        </div>
            <button id='cancelBtn' onClick={disaapearForm}>Cancel</button>
            <button type='submit'>Add Expense</button>
    </form>
  )
}

export default ExpenseForm