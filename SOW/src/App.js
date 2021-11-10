import logo from './logo.svg';
import './App.css';
import Analytics from './Components/Analytics'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          scroll down<code>v \/ v</code> to check the graph.
        </p>
      </header>
      <div className="App-body" >
        <Analytics/>
      </div>

    </div>
  );
}

export default App;
