import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from './Counter';
import MoodToggler from './MoodToggler';
import './App.css';

function App() {
  return (
    <div>
      <Counter step={5}/>
      <Counter />
      <MoodToggler />
      <Navbar />
      <Greeter name="Karen" age="62" excitement={4} />
      <Greeter name="Tammy" />
      <h1>HELLO FROM APP!</h1>
    </div>
  );
}

export default App
