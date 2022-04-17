import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/UserAuthentication/Login/Login';
import Register from './Pages/UserAuthentication/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import RequireAuth from './Pages/UserAuthentication/RequireAuth/RequireAuth';
import NotFound from './Shared/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div >
  );
}

export default App;
