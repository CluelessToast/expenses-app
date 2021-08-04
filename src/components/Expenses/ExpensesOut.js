
import ExpenseItem from './ExpenseItem'
import './ExpensesOut.css';
import Card from '../UI/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';

const ExpensesOut = props => {
    const { expenses } = props

    const [year, setYear] = useState('');

    const onYearChange = (year) => {
        setYear(year)
        console.log(year);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });

    let expensesContent= <p>No expenses found</p>;

    if (filteredExpenses.length >0){
        expensesContent=filteredExpenses.map((expense)=>(<ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ))
    }

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter onYearChange={onYearChange} />
                {expensesContent}
            </Card>
        </>
    )
}

export default ExpensesOut;