import './App.css'
import Form from './components/Form'
import Login from './login/Login'
import Home from './components/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App