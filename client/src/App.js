import './App.css';
import Register from './components/Register';
import Login from './components/Login'
import HomePage from './components/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetailPage from './components/ProductDetailPage';
import Navbar from './components/Navbar';
import { AuthProvider} from './Hooks/AuthProvider';
import YourParentComponent from './components/YourParentComponent';
// import { Navigate } from 'react-router-dom';

function App() {

  // const { isLoggedIn } = useAuth();

  return (
    <> 
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Login/>} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="Home" element={<HomePage />} />
                <Route path="/product/:productId" element={<ProductDetailPage />} />
                <Route path="/cart" element={<YourParentComponent/>} />
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
