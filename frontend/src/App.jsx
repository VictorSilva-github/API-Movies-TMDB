import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Detalhes from './pages/detalhes'

function App() {
  

  return (
    <Routes>
      <Route path="/home/:id" element={<Home/>}/>
      <Route path="/detalhes" element={<Detalhes/>}/>
    </Routes>
  )
}

export default App
