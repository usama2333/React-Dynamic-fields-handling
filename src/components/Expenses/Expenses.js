import React, { useState } from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


 const Expenses = (props) => {

  const [filteredYear , setFilteredYear] = useState('2023');
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log('The selected year is : ');
    // console.log(filteredYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  console.log('testttttttttt');
  console.log(props.items);

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />

    
    {/* This method also works but it cannot check it no year data is found */}

    {/* {filteredExpenses.map((expense) => (
        <ExpenseItem
            key = {expense.id}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
         />
    ))} */}

    {/* This displays all the data avaliable */}

      {/* {props.items.map((expense) => (
        <ExpenseItem
            key = {expense.id}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
         />
    ))} */}

    {expensesContent}

     {/* <ExpenseItem 
     title = {props.items[0].title}
      amount = {props.items[0].amount}
      date = {props.items[0].date}
     />
     <ExpenseItem 
     title = {props.items[1].title}
      amount = {props.items[1].amount}
      date = {props.items[1].date}
     />
     <ExpenseItem 
     title = {props.items[2].title}
      amount = {props.items[2].amount}
      date = {props.items[2].date}
     />
     <ExpenseItem 
     title = {props.items[3].title}
      amount = {props.items[3].amount}
      date = {props.items[3].date}
     /> */}

    </Card>
      
    </div>
  )
}

export default Expenses;