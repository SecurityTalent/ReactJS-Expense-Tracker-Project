import './App.css';
import ExpenseForm from './Component/ExpenseForm';
import ExpenseList from './Component/ExpenseList';
import { useState, useEffect } from 'react';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
  
  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>

      <ExpenseForm onAddExpense={addExpense} />

      <h3 className="total">
        Total Expense: ₹
        {expenses.reduce((total, exp) => total + exp.amount, 0).toFixed(2)}
      </h3>

      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
