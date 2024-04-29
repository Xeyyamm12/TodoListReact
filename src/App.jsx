import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  const [array, setArray] = useState([]);
  const [todo, setTodo]= useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
    // console.log("value is:", event.target.value);
  };

  const handleAdd = ()=>{
    setArray(prev=>[...prev,todo])
    setTodo("")
  }
  // deleteTodo{

  // }
  console.log(array)

  return (
    <>
      <div className="todolist">
        <input value={todo} type="text" onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
        
      </div>
      <Card array = {array} setFunc = {setArray}/>
    </>
  );
}

export default App;
