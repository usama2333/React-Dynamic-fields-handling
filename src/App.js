import React , {useState} from 'react';
import './App.css';

import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
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


function App() {

 const [expenses , setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log('This is app.js data');
    // console.log(expense);
    setExpenses((prev) => {    //it auto takes the previous data from the state
      return [expense, ...prev];
    });

    console.log('This is updated array data .');
    console.log(expenses);
  };

  console.log(expenses);

  return (
    <div>
          <NewExpense onAddExpense = {addExpenseHandler}/>
         <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
