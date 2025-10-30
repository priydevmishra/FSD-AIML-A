import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BookCard from './assets/BookCard.jsx'
import Header from './assets/Header.jsx'
import Footer from './assets/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BookCard/>
      <Footer/>
    </>
  )
}

export default App
