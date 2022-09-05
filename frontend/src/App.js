import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import AdminDashboard from './pages/AdminDashboard'
import Dashboard from './pages/Dashboard'
import EditUser from './pages/EditUser'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
        <Routes>
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/useredit/:id' element={<EditUser />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App