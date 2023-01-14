import logo from './logo.svg';
import './App.css';
import ContainerLayout from './components/grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ContainerLayout sx={{width: 1, height: 1}} />
      </header>
    </div>
  );
}

export default App;
