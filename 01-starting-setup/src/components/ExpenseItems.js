import './ExpenseItems.css'

const expenseDate = new Date(2022, 1, 16)
const expenseTitle = 'Car Insurance'
const expenseAmount = 294.78

function ExpenseItems() {
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>₹{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
