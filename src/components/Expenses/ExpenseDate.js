import "./ExpenseDate.css"

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString("en-us", {month:'long'}),
    year = props.date.getFullYear(),
    day = props.date.toLocaleString("en-us", {day: 'numeric'});

    return(
<div className = "expense-date">
    <div className = "expense-date__month">{month}</div>
    <div className = "expense-date__year">{year}</div>
    <div className = "expense-date__day">{day}</div>
</div>);
}

export default ExpenseDate;