import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const expenseDate = new Date(21, 3, 3);
  const expenseTitle = "Laptop";
  const expenePrice = 56000;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs{props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
