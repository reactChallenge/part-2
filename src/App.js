import {useState } from 'react'
function App() {
  const [count,setCount] = useState(0)
  const addCount=()=>{
    setCount(count+1)    
  }
  return (
    <div className="App">
      <button onClick={addCount}>Add</button>

      <h1>Counter:{count} </h1>
    </div>
  );
}


export default App;
