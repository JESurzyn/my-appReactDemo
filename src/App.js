import Navbar from './Navbar';
import Greeter from './Greeter';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Greeter name="Karen" age="62" excitement={4} />
      <Greeter name="Tammy" />
      <h1>HELLO FROM APP!</h1>
    </div>
  );
}

export default App
