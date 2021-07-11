import "./ExpensesList.css";
import ExpensesItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenseContent.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found </h2>;
  }

  return (
    <ul className="expenses-list">
      <li>
        {props.expenseContent.map((exp) => (
          <ExpensesItem
            key={exp.id}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        ))}
      </li>
    </ul>
  );
};

export default ExpensesList;
