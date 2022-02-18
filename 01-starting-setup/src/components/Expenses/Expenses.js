import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <p>This is also visible. This is a paragraph</p>
      {/* //Note: Hard Coded Data */}
      <ExpenseItem
        title="Smartphone"
        amount="8450"
        date={new Date(2021, 8, 18)}
      ></ExpenseItem>
      {/* //Note: Dynamic type Date Retrieve */}
      <ExpenseItem
        title={props.items[0].title} // Imp: Here title is the key and on the right is the value (Similar like maps)
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
