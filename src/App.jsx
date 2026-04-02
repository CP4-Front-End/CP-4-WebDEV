import { BrowserRouter, Routes, Route } from 'react-router-dom';
// importando todas as rotas do projeto
import Home from './routes/Home';
import Error from "./routes/Error";
import Planos from './routes/Planos';
import Imc from './routes/Imc'
import Contato from './routes/Contato';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Error/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/planos' element={<Planos/>}/>
        <Route path='/imc' element={<Imc/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
