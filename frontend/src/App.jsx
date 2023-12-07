import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Detalhes from './pages/Detalhes'
import "./assets/css/home.css"

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detalhes/:id" element={<Detalhes/>}/>
    </Routes>
  )
}

export default App
