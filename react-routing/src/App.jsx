import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './assets/Home.jsx'
import About from './assets/About.jsx'  

function App() {

  return (
    <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</Router>

  )
}

export default App
