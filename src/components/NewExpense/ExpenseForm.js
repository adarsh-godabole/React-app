import React from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  const TitleChangehandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls"></div>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={TitleChangehandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0" />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="Date" />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
