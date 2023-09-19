import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem=(props)=> {
  const [title,setTitle]=useState(props.title);
  const clickHandler=()=>{
    setTitle('Updated!');
  }
  const [price,setPrice]=useState(props.amount);
  const clickPrice=()=>{
    setPrice('100');
  }
   
  return  (
  <Card className="expense-item">
    <ExpenseDate date={props.date}/>
    <ExpenseDetails title={title} location={props.location} amount={price}/>
    <button  onClick={clickPrice}>Change Price</button>
    <button onClick={clickHandler}>Change title</button>
  </Card>
  )
}

export default ExpenseItem;