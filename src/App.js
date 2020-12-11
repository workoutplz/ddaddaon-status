import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Particles from "react-particles-js";

function App() {
  return (
    <div>
      <Home/>
      <Particles
        className="canvas-wrapper"
        canvasClassName="canvas"
        params={{
          "particles":{
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode":"repulse"
              }
            }
          }
        }}
      />
    </div>
  );
}

export default App;
