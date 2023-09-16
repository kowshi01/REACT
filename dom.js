import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'
import Card from '../UI/Card';

const ExpenseItem=(props)=> {
  const clickHandler=()=>{
    console.log('Clicked!');
  }
    const deleteBtn=()=>{
      console.log("Deleted");
    }
  return  (
  <Card className="expense-item">
    <ExpenseDate date={props.date}/>
    <ExpenseDetails title={props.title} location={props.location} amount={props.amount}/>
    <button onClick={clickHandler}>Change title</button>
    <button onClick={deleteBtn}>Delete</button>
  </Card>
  )
}

export default ExpenseItem;
