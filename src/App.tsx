import { Iframe } from './components/Iframe';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div style={{ 
        // width: '100%', 
        // height: '100%', 
        // position: 'fixed', 
        // top: "0", 
        // left: "0" 
        }}>
        <Iframe />
      </div>
    </BrowserRouter>
  );
}

export default App;
