import logo from './logo.svg';
import './App.css';

function App() {


  const [book,setbook]= React.useState(1)

  return (
    <div className="items">
      <span>Books : </span>

      <button className='addbook'>+</button><button className='rembook'>-</button>

      <span className='totalbooks'>{book}</span>
      
    </div>
  );
}

export default App;
