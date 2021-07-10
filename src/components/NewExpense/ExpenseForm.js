import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  const TitleChangehandler = (event) => {
    console.log(event.target.value);
    setenteredTitle(event.target.value);
  };

  const AmountChangehandler = (event) => {
    console.log(event.target.value);
    setenteredAmount(event.target.value);
  };

  const DateChangehandler = (event) => {
    console.log(event.target.value);
    setenteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData();
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls"></div>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={TitleChangehandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0"
          value={enteredAmount}
          onChange={AmountChangehandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="Date" value={enteredDate} onChange={DateChangehandler} />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
