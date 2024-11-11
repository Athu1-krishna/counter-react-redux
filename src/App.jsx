
import './App.css'
import Counter from './Component/Counter'

function App() {
  
  return (
    <div style={{ width: '100%', height: '100vh' }} className='bg-dark d-flex justify-content-center align-items-center  '>
      <div className="container text-white text-center ">
        <h1 className='fw-bolder my-4'>Counter</h1>
        <Counter/>
      </div>
    </div>
  )
}

export default App
