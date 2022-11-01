import logo from './logo.svg';
import './App.css';
import Componente from './Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Componente valor="5" abc="10">100</Componente>
      </header>
    </div>
  );
}

export default App;
