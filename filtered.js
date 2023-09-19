//Expense.js

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

    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })

    let expenseContent=<p>No content found!!!!</p>
    if(filteredExpenses.length>0){
        expenseContent=filteredExpenses.map((expenseData)=>(
        <ExpenseItem  key={expenseData.id} title={expenseData.title} amount={expenseData.amount} date={expenseData.date} location={LocationOfExpenditure}/>
        ))
    }

  return (
    <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {expenseContent}      
    </Card>
  )
}

export default Expense
