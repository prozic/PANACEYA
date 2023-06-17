
import './App.css';
import Canvas from './components/Canvas/Canvas';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Navbar/>
      <div className="main">
        <Sidebar />
        <Canvas />
      </div>
    </>
  );
}

export default App;
