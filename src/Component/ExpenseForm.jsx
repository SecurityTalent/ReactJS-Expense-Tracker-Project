import React, { useState, useRef } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return alert("Please fill all the fields");
    const newExpense = {
      id: Date.now(),
      title, // ✅ fixed
      amount: parseFloat(amount),
    };
    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
    titleRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Expense Title"
        type="text"
        value={title}
        ref={titleRef}
      />
      <input
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount ₹"
        type="number"
        value={amount}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
