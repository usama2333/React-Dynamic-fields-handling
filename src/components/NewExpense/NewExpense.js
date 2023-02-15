import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

 const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData =  {
          ...enteredExpenseData,
          id : Math.random().toString() * 10
        };

        props.onAddExpense(expenseData);

        console.log('This is New Expense data');
        console.log(expenseData);
    }

  return (
    <div>
     <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
     </div>
       
        
    </div>
  )
}

export default NewExpense;