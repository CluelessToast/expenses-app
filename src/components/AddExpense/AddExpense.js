import ExpenseForm from "./ExpenseForm"
import './AddExpense.css'
import { useState } from "react";

const AddExpense = (props) => {
    const [addingExpense, setAddingExpense]=useState(false);
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData)
        props.onAddExpense(expenseData)
        setAddingExpense(false);
    };


    const addExpenseHandler = () => {
        if (addingExpense) {
            setAddingExpense(false);
        } else {
            setAddingExpense(true);
        }
    }
    
    return (
        <div className="new-expense">
            {!addingExpense &&<button onClick={addExpenseHandler}>Add New Expense</button>}
            { addingExpense &&
            (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={addExpenseHandler}/>)}
        </div>

    )
}

export default AddExpense;