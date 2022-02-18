import { useState } from "react";
// Note: Or Use -> import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// const expenseDate = new Date(2022, 1, 16)
// const expenseTitle = 'Car Insurance'
// const expenseAmount = 294.78

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem Evaluated By React");

  const clickHandler = () => {
    setTitle("Updated!!!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      {/* //Note: Old style(Hard Coded way)

      <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div> */}
      {/* //Note: Using dynamic coded way*/}
      <ExpenseDate date={props.date}></ExpenseDate>
      {/* //Note: Or use <ExpenseDate /> */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <button onClick={clickHandler}>Change Title</button>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
