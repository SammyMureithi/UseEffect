import './App.css';
import Counter from './Components/Counter';
import Timer from './Components/Timer';
import UnmountedCounter from './Components/UnmountedCounter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Timer />
      <UnmountedCounter/>
    </div>
  );
}

export default App;
