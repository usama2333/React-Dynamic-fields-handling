import React , {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate , setEnteredDate] = useState('');

    // const [userInput , setUserInput] = useState( {

    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);

        // Method2 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // });

        // Method3 
        // setUserInput((prevState) => {
        //     return  {
        //         ...prevState,
        //         enteredTitle : event.target.value,
        //     }
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(enteredAmount);

           // Method2 
        //    setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // });

        // Method3 
        // setUserInput((prevState) => {
        //     return  {
        //         ...prevState,
        //         enteredAmount : event.target.value,
        //     }
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log('The entered date is ');
        console.log(enteredDate);

           // Method2 
        //    setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // });

        // Method3 
        // setUserInput((prevState) => {
        //     return  {
        //         ...prevState,
        //         enteredDate : event.target.value,
        //     }
        // });
    };

    const submitHandler = (event) => {
        console.log('Form is submitted');
        event.preventDefault();

        const expenseData =  {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };
         console.log('This is data in object');
         console.log(expenseData);

         props.onSaveExpenseData(expenseData);

         setEnteredTitle('');
         setEnteredAmount('');
         setEnteredDate('');

        
    };

  return (
    <div>
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">

            <div className='new-expense__control'>
                <label >Title</label>

                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>

            <div className='new-expense__control'>
                <label >Amount</label>
                <input type="number" value={enteredAmount}  onChange={amountChangeHandler} />
            </div>

            <div className='new-expense__control'>
                <label >Date</label>
                <input type="date" value={enteredDate}  onChange={dateChangeHandler}/>
            </div>

        </div>

        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
      
    </div>
  )
}

export default  ExpenseForm;