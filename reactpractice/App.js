
import './App.css';
import rose from './rose.webp';
import rose2 from './rose2.jfif'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={rose2} className='App-logo' alt='flower' title='rose'/>
        <br/>
        <p className='first'>
          My First React Illustration!!.
        </p>
      <p >hello world!!</p>
      <img src={rose} className="rose" alt="flower" />
        <br/>
        
        
      </header>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
   
       </div>
       
  );
}

export default App;

