import './App.css';
import Logo from './logo/logo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo isLoading={true} />
        <h> Loading... </h>
      </header>
    </div>
  );
}

export default App;
