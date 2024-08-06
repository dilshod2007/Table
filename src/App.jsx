import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from "./routes/Homes"
import Single from "./routes/Single"
import Nav from "./components/Nav"
function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='single/:id' element={<Single />} />
      </Routes>
    </>
  )
}

export default App
