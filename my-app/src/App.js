import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './camponet/Header';
import About from './camponet/About';
import Contect from './camponet/Contect';

function App() {
  return <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/Contect' element={<Contect />} />
      </Routes>
    </main>
  </BrowserRouter>
}

export default App;

