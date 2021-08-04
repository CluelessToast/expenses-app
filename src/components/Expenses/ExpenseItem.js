import ExpenseDate from './ExpenseDate';
import React, {useState} from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';


const ExpenseItem=props=>{
     const {date,title,amount}=props;
     const [newTitle,setTitle]=useState(title);



    return (
        <Card className="expense-item">
        <ExpenseDate date={date} />
        <h2 className="expense-item__description">{newTitle}</h2>
        <div className="expense-item__price">${amount}</div>
        </Card>
    );
}

export default ExpenseItem;