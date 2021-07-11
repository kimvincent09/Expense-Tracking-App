import "./App.css";
import Expenses from "./components/Expenses/Expenses" 
import NewExpense from "./components/NewExpense/NewExpense"
import {useState} from 'react'

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "TV",
    amount: 98.5,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Radio",
    amount: 97.5  ,
    date: new Date(2021, 9, 14),
  },

  
];

function App() {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const newExpenseDataHandler = (newExpenseData) => {
    setExpenses(prevExpenses=>{
      return [newExpenseData, ...prevExpenses];
    
    })
}
 
  return (
    <div>
      <NewExpense newExpenseData = {newExpenseDataHandler}/>
    <Expenses expense = {expenses}/>
    </div>
  );
}

export default App;
