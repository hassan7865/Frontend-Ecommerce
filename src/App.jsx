import Home from "./Pages/Home";
import Cartpage from "./Pages/Cartpage";
import Login from "./Pages/Login";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import SingleProduct from "./Pages/SingleProduct";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Order from "./Pages/Order";
import { useSelector } from "react-redux";
const App = () => {

  const user = useSelector(state=>state.login.isUser)
  console.log(user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/login" element={user?<Navigate to="/" replace/>:<Login/>}/>
        <Route path="/register" element={user?<Navigate to="/" replace/>:<Register/>}/>
        <Route path="/cart" element={!user?<Navigate to="/login" replace/>:<Cartpage/>}/>
        <Route path='/orderdetail' element={!user?<Navigate to='/' replace/>:<Order/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;