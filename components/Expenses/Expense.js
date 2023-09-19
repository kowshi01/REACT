import React from 'react'
import Card from '../UI/Card';
import './Expense.css';
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expense = (props) => {
  

    const[filteredYear,setFilterYear]=useState('2022');
    const filterChangeHandler=(selectedYear)=>{
     setFilterYear(selectedYear)
    }

    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })

    

  return (
    <li>
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}/>  
        </Card>
    </li>
  )
}

export default Expense