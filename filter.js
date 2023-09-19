//app.js
import { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpenseFilter";
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
 const[filteredYear,setFilterYear]=useState('2022');
 const filterChangeHandler=(selectedYear)=>{
  setFilterYear(selectedYear)
 }

  return (
    <>
    <NewExpenses onAddExpense={addExpenseHandler }/>
    <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {expenses.map((expenseData)=>
        <ExpenseItem  key={expenseData.id} title={expenseData.title} amount={expenseData.amount} date={expenseData.date} location={LocationOfExpenditure}/>
      )}      
    </Card>
    </>
  );
}

export default App;

//filter.js
import React from 'react';
import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
    const dropDownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
