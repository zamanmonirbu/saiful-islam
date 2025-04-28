import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import UserHome from '../pages/Dashboard/User/UserHome';
import SellerHome from '../pages/Dashboard/Seller/SellerHome';
import AdminHome from '../pages/Dashboard/Admin/AdminHome';
import PrivateRoute from './PrivateRoute';
import SellerRoute from './SellerRoute';
import AdminRoute from './AdminRoute';
import HowItWorks from '../pages/HowItWorks';
import Service from '../pages/Service';
import About from '../pages/About';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/how-it-work' element={<HowItWorks/>}/>
        <Route path="/service" element={<Service/>} />
        <Route path="/about" element={<About/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/user/dashboard" element={<PrivateRoute><UserHome /></PrivateRoute>} />
        <Route path="/seller/dashboard" element={<SellerRoute><SellerHome /></SellerRoute>} />
        <Route path="/admin/dashboard" element={<AdminRoute><AdminHome /></AdminRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
