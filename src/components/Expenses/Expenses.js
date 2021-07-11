import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const expenseFilterValue = (selectedYear) => setFilteredYear(selectedYear);
  const filteredExpense = props.expense.filter(
    (exp) => exp.date.getFullYear().toString() === filteredYear
  );

  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        expenseFilterData={expenseFilterValue}
      />
              <ExpensesChart expenses = {filteredExpense}/>
      <ExpensesList expenseContent = {filteredExpense}/>
    </Card>
  );
};

export default Expenses;
