//app.js
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Card from './components/UI/Card';
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const LocationOfExpenditure='Amount spent location';
  const addExpenseHandler =(expense)=>{
    console.log('addExpenseHandler ');
    console.log(expense);
  }  

  return (
    <>
    <NewExpenses onAddExpense={addExpenseHandler }/>
    <Card className='expenses'>
      {expenses.map((expenseData)=>
        <ExpenseItem  key={expenseData.id} title={expenseData.title} amount={expenseData.amount} date={expenseData.date} location={LocationOfExpenditure}/>
      )}      
    </Card>
    </>
  );
}

export default App;

//newExpenses.js
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

//expenseform.js
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
    }
  return (
    <form onSubmit={submitHandeler}>
        <div className='new-expense__controls'> 
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
                <input type="date" min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={changeDate}/>
            </div>
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default ExpenseForm
