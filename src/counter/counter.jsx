import React from 'react';

function Counter() {


  let [book,setbook]= React.useState(13)

  let [pen,setpen] = React.useState(10)

  let [notebook,setnotebook] = React.useState(44)

  let [inkpen,setinkpen] = React.useState(78)

  
  const change = (val,n) =>{

    if(n=="p")
    {
        setpen(pen = pen + val)
    }
    if(n=="n")
    {
        setnotebook(notebook = notebook + val)
    }

    if(n=="i")
    {
        setinkpen(inkpen = inkpen + val)
    }
    if(n=="b")
    {
        setbook(book = book + val)
    }

  }

  return (
   <>
      <div className="items">
      <span>Books : </span>
      <br></br>

      <button className='addBook' onClick={ () => change(1,"b")}>+</button>
      <button className='remBook' onClick={ () => change(-1,"b")}>-</button>

      <br></br>
      <span className='totalbooks'>{book}</span>
      
    </div>

    <div className="items">
      <span>Pens : </span>
      <br></br>

      <button className='addPen' onClick={ () => change(1,"p")}>+</button>
      <button className='remPen' onClick={ () => change(-1,"p")}>-</button>

      <br></br>
      <span className='totalPens'>{pen}</span>
      
    </div>

    <div className="items">
      <span>Notebooks : </span>
      <br></br>

      <button className='addNotebook' onClick={ () => change(1,"n")}>+</button>
      <button className='remNotebook' onClick={ () => change(-1,"n")}>-</button>

      <br></br>
      <span className='totalNotebooks'>{notebook}</span>
      
    </div>

    <div className="items">
      <span>InkPens : </span>
      <br></br>

      <button className='addInkpen' onClick={ () => change(1,"i")}>+</button>
      <button className='remInkpen' onClick={ () => change(-1,"i")}>-</button>

      <br></br>
      <span className='totalInkpens'>{inkpen}</span>
      
    </div>

    <div className='total'>{book + pen +notebook +inkpen}</div>
   </>
    
  );
}

export default Counter;
