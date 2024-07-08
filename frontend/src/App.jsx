import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import MainLayout from './components/MainLayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Clients from './pages/Client/Clients';
function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route
           path="/admin/dashboard"
           element={
            <MainLayout/>
           }
        >
             <Route index element={<Dashboard/>}/>
             <Route path='clients' element={<Clients/>}/>
        </Route>


      </Routes>
    </Router>
    </>
  )
}

export default App
