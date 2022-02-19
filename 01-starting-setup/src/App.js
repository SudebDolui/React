import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";

const welcome = "Welcome to ReactJS";

// Info: We can even use the Arrow Function to define the below function.
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 194.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 7999.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 1294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 4500,
      date: new Date(2021, 5, 12),
    },
  ];

  /*//Note: Traditional way in JS (Imperative way)
  const para = document.createElement('p')
  para.textContent = 'This is also visible'
  document.getElementById('root').append(para)
  */

  // Note: The Below shows using React import( It is a old way of writing code before JSX was in picture). It still does it's work under the hood.
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, `${welcome}. Let's get started`),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  //Note: The Below code shows a JSX - JavaScript XML.
  return (
    <div>
      <h2>{welcome}. Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
