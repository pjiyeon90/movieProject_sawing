import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Searchpage from './pages/Searchpage';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/searchpage" element={<Searchpage/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
