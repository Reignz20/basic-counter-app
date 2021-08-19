import './App.css';
import {useState} from 'react';
// import components




const App = () => {  
  

    const [count, setCount] = useState(0);
    const [counter, setCounters] = useState([]);
 

  return (
      <div className="App">

        <div className="top">
          <h1>Counter</h1>
        </div>
      

        <div className="container">
            <button onClick={()=> {setCount(c => c + 1);}}>+</button>
            <button onClick={()=> {setCount(c => c - 1);}}>-</button>
            <button onClick={()=> {setCount(0)}}>RESET</button>
            <button onClick={()=> setCounters([...counter, <App/>])}>Add new counter</button>
            <div className="counter">{count}</div>            

        </div>
            
          {counter}  
        
      </div>
        
  );
}



export default App;
 
