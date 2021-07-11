import "./NewExpense.css";
import {useState} from 'react'
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
    const saveExpenseDataHandler = (currentExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...currentExpenseData
          
        }
        props.newExpenseData(expenseData)
    }
  
    const [isEditing, setIsEditing] = useState(false)
    const addExpenseHandler = () => {
        setIsEditing(true)
    }
    const cancelHandler = () => {
      setIsEditing(false);
    };
    return(
        <div className = "new-expense">
          {!isEditing &&<button onClick ={addExpenseHandler}>Add expense</button>}
 {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} cancelState = {cancelHandler}/>}
       
        </div>
    )
}

export default NewExpense;
