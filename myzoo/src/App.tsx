
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Animals } from './components/Animals';
import {Animal} from './components/Animal';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element= {<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='/animals' element={<Animals/>}></Route>
            <Route path='/animal/:id/' element={<Animal/>}></Route>
            </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
