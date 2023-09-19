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