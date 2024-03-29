import './App.css';
import BudgetPlanner from './component/BudgetPlanner';
import TotalExpenses from './component/TotalExpenses';
import AddExpenses from './component/AddExpenses';
import { useState, useEffect } from 'react';

function App() {
  const initialExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
  const initialTotalBudget = JSON.parse(localStorage.getItem('totalBudget')) || 0;

  const [expenses, setExpenses] = useState(initialExpenses);
  const [totalBudget, setTotalBudget] = useState(initialTotalBudget);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('totalBudget', JSON.stringify(totalBudget));
  }, [expenses, totalBudget]);

  const removeExpenses = (index, price) => {
    let updateExpenses = [...expenses];
    updateExpenses.splice(index, 1);
    setExpenses(updateExpenses);
    setTotalBudget(prevTotalBudget => prevTotalBudget - price);
  }

  return (
    <div>
      <BudgetPlanner totalBudget={totalBudget}/>
      <TotalExpenses expenses={expenses} removeExpenses={removeExpenses} />
      <AddExpenses setExpenses={setExpenses} setTotalBudget={setTotalBudget} />
    </div>
  );
}

export default App;
