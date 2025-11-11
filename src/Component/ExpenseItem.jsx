import React from "react";

function ExpenseItem({ id, title, amount, onDelete }) {
  return (
    <div className="expense-item">
      <span>{title}</span>
      <span>₹{amount}</span>
      <button onClick={() => onDelete(id)}>❌</button>
    </div>
  );
}

export default ExpenseItem;
