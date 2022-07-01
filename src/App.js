
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Signup></Signup>}></Route>
      </Routes>

      <ToastContainer />

      
    </div>
  );
}

export default App;
