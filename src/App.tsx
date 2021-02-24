import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const buttonOptions = ["easy", "ok", "difficult", "too difficult"]

  const newButtons = buttonOptions.map((item) => {
    return <button onClick={()=>alert(`That was ${item}`)}>{item}</button>
  }
  );
  
  return (
    <div>
      {newButtons}
    </div>
  );
}

export default App;

