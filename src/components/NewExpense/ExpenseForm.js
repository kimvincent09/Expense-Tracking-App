import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [currentTitle, newTitle] = useState("");
  const [currentAmount, newAmount] = useState("");
  const [currentDate, newDate] = useState("");
  const titleChangeHandler = (title) => newTitle(title.target.value);
  const amountChangeHandler = (amount) => newAmount(amount.target.value);
  const dateChangeHandler = (date) => newDate(date.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: currentTitle,
      amount: +currentAmount,
      date: new Date(currentDate),
    };
    props.onSaveExpenseData(expenseData);
    newTitle("");
    newAmount("");
    newDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title </label>
          <input
            type="text"
            value={currentTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input
            type="number"
            value={currentAmount}
            min="0.5"
            step="0.5"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date </label>
          <input
            type="date"
            value={currentDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
       <button type = "button" onClick = {props.cancelState}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>

    </form>
  );
};

export default ExpenseForm;
