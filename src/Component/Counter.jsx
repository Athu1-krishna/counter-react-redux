import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

const Counter = () => {
    const {count} = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()
    const [amount, setAmount] =useState(0)
    const handleIncrementAmount = () => {
      if(amount){
        // dispatch
        dispatch(incrementByAmount(+amount))
      }
      else{
        alert("Please enter a valid amount!!!")
      }
    }
  return (
    <div>
          <div style={{ width: '50rem', margin: 'auto' }} className="content d-flex flex-column align-items-center border rounded">
              <h1 style={{fontSize:"100px"}} className='my-3'>{count}</h1>
              <div className="buttons">
                  <button onClick={()=>dispatch(decrement())} className='mx-4 my-4 btn btn-warning'>DECREMENT</button>
                  <button onClick={()=>dispatch(reset())} className='mx-4 my-4 btn btn-danger'>RESET</button>
                  <button onClick={()=>dispatch(increment())} className='mx-4 my-4 btn btn-success'>INCREMENT</button>
              </div>
              <div className="input-field my-4 d-flex align-items-center">
                  <input onChange={(e)=>setAmount(e.target.value)} style={{ height: '40px' }} className='form-control' type="text" placeholder='Enter the amount to incremented'/>
                  <button onClick={handleIncrementAmount} className='text-sm ms-4 btn btn-light'>+ BY AMOUNT</button>
              </div>
          </div>
    </div>
  )
}

export default Counter