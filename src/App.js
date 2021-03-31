import  Computer from "./assets/computer.png"
import './App.css';

function App() {

  function enterZoom(e) {
    e.preventDefault();
    console.log("I am supposed to zoom!")
  }
  return (
    
      <img 
        onClick= {enterZoom}
        src= {Computer} 
        alt="computers"
        className="computer-zoom"
        width="50%"
      />
    
  );
}

export default App;
