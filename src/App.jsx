import { BrowserRouter, Routes, Route } from 'react-router-dom';
// importando todas as rotas do projeto
import Home from './routes/Home';
import Error from "./routes/Error";
import Imc from './routes/Imc';
import Contato from './routes/Contato';
import Footer from './components/Footer';
import Unidades from './routes/Unidades'
import Bio from './routes/Bio'
import Planos from './routes/Planos'
<routes />
const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Error/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="bio" element={<Bio/>}/>
        <Route path='/imc' element={<Imc/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/unidades" element={<Unidades/>}/>
        <Route path="/planos" element={<Planos/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter> 
  )
}

export default App
