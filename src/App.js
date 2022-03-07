import './App.css';
import React from 'react';

function App() {


  let [book,setbook]= React.useState(13)

  let [pen,setpen] = React.useState(10)

  let [notebook,setnotebook] = React.useState(44)

  let [inkpen,setinkpen] = React.useState(78)

  const changeb = (val) =>{

    setbook(book = book + val)

  }

  const changep = (val) =>{

    setpen(pen = pen + val)

  }
  const changen = (val) =>{

    setnotebook(notebook = notebook + val)

  }

  const changei = (val) =>{

    setinkpen(inkpen = inkpen + val)

  }

  return (
   <div>
      <div className="items">
      <span>Books : </span>
      <br></br>

      <button className='addBook' onClick={ () => changeb(1)}>+</button>
      <button className='remBook' onClick={ () => changeb(-1)}>-</button>

      <br></br>
      <span className='totalbooks'>{book}</span>
      
    </div>

    <div className="items">
      <span>Pens : </span>
      <br></br>

      <button className='addPen' onClick={ () => changep(1)}>+</button>
      <button className='remPen' onClick={ () => changep(-1)}>-</button>

      <br></br>
      <span className='totalPens'>{pen}</span>
      
    </div>

    <div className="items">
      <span>Notebooks : </span>
      <br></br>

      <button className='addNotebook' onClick={ () => changen(1)}>+</button>
      <button className='remNotebook' onClick={ () => changen(-1)}>-</button>

      <br></br>
      <span className='totalNotebooks'>{notebook}</span>
      
    </div>

    <div className="items">
      <span>InkPens : </span>
      <br></br>

      <button className='addInkpen' onClick={ () => changei(1)}>+</button>
      <button className='remInkpen' onClick={ () => changei(-1)}>-</button>

      <br></br>
      <span className='totalInkpens'>{inkpen}</span>
      
    </div>

    <div className='total'>{book + pen +notebook +inkpen}</div>
   </div>
    
  );
}

export default App;
