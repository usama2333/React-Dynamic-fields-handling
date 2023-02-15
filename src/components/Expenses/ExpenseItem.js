import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title , setTitle] = useState(props.title);
   
  const clickMe = () => {

    setTitle('Updated!!!');  

  }
    return (
    <div className='con'>
       <Card className='expense-item  m-2'>
        <div>
          <ExpenseDate date = {props.date}/>
        </div>
        <div className='expense-item__description'>
            <h1>{title}</h1>
            <div className='expense-item__price'>${props.amount}</div>
            
        </div>
        <button onClick={clickMe}>Click me</button>
       </Card>
    </div>
  )
}


export default  ExpenseItem;