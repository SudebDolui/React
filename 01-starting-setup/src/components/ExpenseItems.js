import './ExpenseItems.css'

function ExpenseItems() {
  return (
    <div className='expense-item'>
      <div>16th Feb 2022</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>₹209</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
