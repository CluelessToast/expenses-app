import './ExpensesLists.css';
import ExpenseItem from './ExpenseItem';
import React from 'react';

const ExpensesLists= props=>{

    if (props.items.length ===0){
        return(<h2 className="expeses-list__fallback">Found No Expenses.</h2>)
    }

    return (<ul className="expenses-list">
    {props.items.map((expense)=>(<ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ))}
    </ul>)


};

export default ExpensesLists;