import classes from './assets/styles/App.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 * Pages
 */
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import NoPage from './pages/NoPage/NoPage.jsx';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/products" element={ <Products /> } />
          <Route path="*" element={ <NoPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}