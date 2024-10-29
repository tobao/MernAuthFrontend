import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Forgot from './pages/auth/Forgot';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout> <Home/> </Layout>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/forgot' element={<Forgot/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
