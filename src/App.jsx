import classes from './assets/styles/App.module.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

/**
 * Pages
 */
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import NoPage from './pages/NoPage/NoPage.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Header from './components/common/Header/Header.jsx';
import NavigationSidebar from './components/common/NavigationSidebar/NavigationSidebar.jsx';
import useAuth from './auth.js';
import { useSelector } from 'react-redux';

export default function App() {
  const token = useSelector(state => state.user.token);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/login" 
          element={ 
            useAuth(token) ? <Navigate to="/home" /> : (
              <>
                <Header />
                <Login />
              </>
            ) 
          } 
        /> 

        <Route 
          path="*" 
          element={ 
            useAuth(token) ? (
              <>
                <Header />
                <div className={ classes.sidebar_container }>
                  <NavigationSidebar /> 
                  <NoPage />
                </div>
              </>
            )
            : (
              <>
                <Header />
                <NoPage />
              </>
            )
          } 
        />
        
        {/* Private Routes */}
        <Route 
          index
          element={ 
            <PrivateRoute>
              <Header />
                <div className={ classes.sidebar_container }>
                  <NavigationSidebar />
                  <Home />
                </div>
            </PrivateRoute>
          } 
        />

        <Route 
          path="/home" 
          element={ 
            <PrivateRoute>
              <Header />
                <div className={ classes.sidebar_container }>
                  <NavigationSidebar />
                  <Home />
                </div>
            </PrivateRoute>
          } 
        />

        <Route 
          path="/products" 
          element={ 
            <PrivateRoute>
              <>
                <Header />
                <div className={ classes.sidebar_container }>
                  <NavigationSidebar />
                  <Products />
                </div>
              </>
            </PrivateRoute> 
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}