import ExpenseItem from './ExpenseItem'
import './ExpensesOut.css';
import Card from '../UI/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';
import ExpensesLists from './ExpensesLists';

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


    return (
        <> 
        <li>
        <Card className="expenses">
                <ExpensesFilter onYearChange={onYearChange} />
                <ExpensesLists items={filteredExpenses}/>
            </Card>
        </li>
        </>
    )
}

export default ExpensesOut;