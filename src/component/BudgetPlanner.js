import React from 'react'

const BudgetPlanner = ({totalBudget}) => {

    let budget = 2000;

  return (
    <div>
        <h1 className='budget_h1tag'>My Budget Planner</h1>
        <div className='budget_display_row'>
            <h2 className='budget_budgeth2tag'>Budget: Rs.{budget}</h2>
            <h2 className='budget_remainingh2tag'>Remaining: Rs.{budget - totalBudget}</h2>
            <h2 className='budget_spanth2tag'>Spant so far: Rs.{totalBudget}</h2>
        </div>
    </div>
  )
}

export default BudgetPlanner