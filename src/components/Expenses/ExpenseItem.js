import "./ExpenseItem.css";
import Card from '../UI/Card'
import ExpenseDate from "./ExpenseDate";

const ExpensesItem = props => {

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item_price">${props.amount}</div>
    </Card>
  );
};

export default ExpensesItem;
