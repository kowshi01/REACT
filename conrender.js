//expenselist.js
import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
const ExpenseList = (props) => {
    const LocationOfExpenditure='Amount spent location';
    let propsLengthData=<h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    let propsContent;
    if(props.items.length===0){
        return propsLengthData;
    }
   if(props.items.length>0){
    propsContent=props.items.map((expenseData)=>(
        <ExpenseItem  key={expenseData.id} title={expenseData.title} amount={expenseData.amount} date={expenseData.date} location={LocationOfExpenditure}/>
        ))
   }
   
  return (    
    <ul className='expenses-list'>        
        {propsContent}
        {props.items.length===1 ? <h2 className='expenses-list__fallback'>Only single Expense here. Please add more...</h2> : ''}
    </ul>
  )
}

export default ExpenseList
//expense.js
import React from 'react'
import Card from '../UI/Card';
import './Expense.css';
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from './ExpenseList';

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
        <ExpenseList items={filteredExpenses}/>  
        </Card>
    </li>
  )
}

export default Expense
