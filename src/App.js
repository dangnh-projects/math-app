// import logo from './logo.svg';
import './App.css';
import MathA from './Components/MathA';
import ShowMath from './Components/ShowMath';
import React, { useEffect, useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const handleTodoFormSubmit = (formValue) => {
    
    let res1 = eval(formValue);
    setNum(res1);
  }

  return (
    <div className="App">
      <MathA onSubmit={handleTodoFormSubmit}/>
      <ShowMath numbers={num}/>
    </div>
  );
}

export default App;
