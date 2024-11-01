import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Forgot from './pages/auth/Forgot';
import Reset from './pages/auth/Reset';
import LoginWithCode from './pages/auth/LoginWithCode';
import Verify from './pages/auth/Verify';
import Profile from './pages/profile/Profile';
import ChangePassword from './pages/changePassword/ChangePassword';
import UserLists from './pages/userLists/UserLists';
// import Loader from './components/loader/Loader'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Loader/> */}
        <Routes>
          <Route path='/' element={<Layout> <Home/> </Layout>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/forgot' element={<Forgot/>}></Route>
          <Route path='/resetPassword/:resetToken' element={<Reset/>}></Route>
          <Route path='/loginWithCode/:email' element={<LoginWithCode/>}></Route>
          <Route path="/verify/:verificationToken" element={<Layout><Verify/></Layout>} />
          <Route path="/profile" element={<Layout><Profile/></Layout>} />
          <Route path="/changePassword" element={<Layout> <ChangePassword/></Layout>} />
          <Route path="/users" element={<Layout><UserLists/></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
