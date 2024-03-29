import React, { useRef } from 'react'

const AddExpenses = ({setExpenses,setTotalBudget}) => {
    let titleRef = useRef();
    let priceRef = useRef();

  return (
    <>
      <h1 className='addexpenses_h1tag'>Add Expenses</h1>
      <div className='addexpenses'>
          <div>
            <label htmlFor='name'>Name</label><br></br>
            <input autoComplete='off' ref={titleRef} name='name' type='text' placeholder='Enter Your Product Name'/><br></br>
          </div>
          <div>
            <label htmlFor='Cost'>Cost</label><br></br>
            <input ref={priceRef} name='Cost' type='number' placeholder='Enter Product Price'/>
          </div><br></br>
          <div>
            <button
            onClick={()=>{
                let title = titleRef.current.value;
                let price = parseInt(priceRef.current.value);
                setExpenses((prevdata) => [...prevdata,{title,price}]);
                setTotalBudget((prevdata) => price + prevdata);
                titleRef.current.value = ""
                priceRef.current.value = ""
            }} className='btn_blue_color' type='submit' >Save</button>
          </div>
      </div>
    </>
  )
}

export default AddExpenses