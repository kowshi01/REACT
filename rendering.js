//app.js
import { useState } from "react";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expense from "./components/Expenses/Expense";

const dummy_expense = [
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

function App() {
const[expenses,setExpense]=useState(dummy_expense); 
  
  const addExpenseHandler =(expense)=>{
    console.log('addExpenseHandler ');
    console.log(expense);
    setExpense((prevExpenses)=>{
      return [expense , ...prevExpenses]
    })
  }  

  return (
    <>
    <NewExpenses onAddExpense={addExpenseHandler }/>    
    <Expense items={expenses}/>
    </>
  );
}

export default App;

//expense.js
import React from 'react'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expense = (props) => {
    const LocationOfExpenditure='Amount spent location';

    const[filteredYear,setFilterYear]=useState('2022');
    const filterChangeHandler=(selectedYear)=>{
     setFilterYear(selectedYear)
    }
  return (
    <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {(props.items).map((expenseData)=>
        <ExpenseItem  key={expenseData.id} title={expenseData.title} amount={expenseData.amount} date={expenseData.date} location={LocationOfExpenditure}/>
      )}      
    </Card>
  )
}

export default Expense
