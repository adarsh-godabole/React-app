import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter></ExpensesFilter>
        <ExpenseItem
          title={props.items[0].name}
          amount={props.items[0].price}
          date={props.items[0].date}
        ></ExpenseItem>

        <ExpenseItem
          title={props.items[1].name}
          amount={props.items[1].price}
          date={props.items[1].date}
        ></ExpenseItem>

        <ExpenseItem
          title={props.items[2].name}
          amount={props.items[2].price}
          date={props.items[2].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
