import './App.css';
import React from 'react';

function App() {


  const [book,setbook]= React.useState(1)

  const change = (val) =>{

    setbook(book = book + val)

  }

  return (
    <div className="items">
      <span>Books : </span>

      <button className='addbook' onClick={ () => change(1)}>+</button><button className='rembook' onClick={ () => change(-1)}>-</button>

      <span className='totalbooks'>{book}</span>
      
    </div>
  );
}

export default App;
