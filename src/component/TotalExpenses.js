import React from 'react'

const TotalExpenses = ({expenses,removeExpenses}) => {

    const handleRemove = (index,price) =>{
        removeExpenses(index,price)
    }
  return (
    <div>
        <h1 className='expenses_h1tag'>Expenses</h1>
        {
            expenses.map((data,index) => {
                return(
                    <div className='single_expenses'>
                        <h5>{data.title}</h5>
                        <div className='dataprice_with_cross_btn'>
                            <h5>{data.price}</h5> 
                            <button onClick={() => handleRemove(index,data.price)} className='dataprice_cross_btn'>X</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TotalExpenses