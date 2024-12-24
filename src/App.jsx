import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<AboutMe></AboutMe>}>

        </Route>
        <Route path='/contact' element={<Contact></Contact>}>

        </Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}>

        </Route>
        <Route path='/resume' element={<Resume></Resume>}>

        </Route>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  )
}

export default App
