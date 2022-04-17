import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Login from './Pages/UserAuthentication/Login/Login';
import Register from './Pages/UserAuthentication/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/services' element={<Services></Services>}></Route> */}
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
