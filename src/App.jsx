import './App.css'
import {Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp'
  import LoginIn from './components/LoginIn'
  import Profil from './components/Profil'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/login-in' element={<LoginIn/>}/>
        <Route path='/profil' element={<Profil/>}/>
      </Routes>
      
    </>
  )
}

export default App
