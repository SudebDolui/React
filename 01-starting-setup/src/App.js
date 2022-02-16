import ExpenseItems from "./components/ExpenseItems";

const welcome = 'Welcome to ReactJS'

function App() {
 /*//! Traditional way in JS (Imperative way)
  const para = document.createElement('p')
  para.textContent = 'This is also visible'
  document.getElementById('root').append(para)
  */
 //! The Below code shows a JSX - JavaScript XML.
  return (
    <div>
      <h2>{welcome}.Let's get started!</h2>
      <p>This is also visible. This is a paragraph</p>
      <ExpenseItems></ExpenseItems>
    </div>
  )
}

export default App;
