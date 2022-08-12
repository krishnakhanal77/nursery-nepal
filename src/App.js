
import { Route, Routes } from 'react-router-dom';
import './styles/_bundle.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';
import Header from './components/header/Header';
import LowerNab from './components/header/LowerNab';
import LandingPage from './pages/LandingPage';
import ProductCards from './components/cards/ProductCards';
import Cart from './pages/Cart';
import ItemDetsils from './pages/ItemDetsils';
import Register from './pages/Register';
import Login from './pages/Login';
import Shop from './pages/Shop';
// import Login from './pages/Login';
// import RequireAuth from './auth/RequireAuth';
// import Payment from './pages/Payment';

function App() {
  return (
    <>
      <Header />
      <LowerNab />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cards" element={<ProductCards />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<ItemDetsils />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />

        {/* protected route */}
        {/* <Route  element={<RequireAuth/>} > 
        <Route path='/payment' element={<Payment/>} />
        </Route>*/}
      </Routes>
      <Footer/> 
    </>
  );
}

export default App;
