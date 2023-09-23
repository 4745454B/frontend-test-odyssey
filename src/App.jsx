import classes from './assets/styles/App.module.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

/**
 * Pages
 */
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import NoPage from './pages/NoPage/NoPage.jsx';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute.jsx';
import { useSelector } from 'react-redux';
import { selectUser } from './store/userSlice.js';

export default function App() {
  const user = useSelector(selectUser);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/login" 
          element={ user ? <Navigate to="/home" /> : <Login /> } 
        /> 
        <Route path="*" element={ <NoPage /> } />
        
        {/* Private Routes */}
        <Route 
          index
          element={ 
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/home" 
          element={ 
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/products" 
          element={ 
            <PrivateRoute>
              <Products />
            </PrivateRoute> 
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}