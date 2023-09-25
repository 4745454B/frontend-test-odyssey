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
import { useSelector } from 'react-redux';
import { selectUser } from './store/userSlice.js';
import Header from './components/common/Header/Header.jsx';
import NavigationSidebar from './components/common/NavigationSidebar/NavigationSidebar.jsx';

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

        <Route 
          path="*" 
          element={ 
            user ? (
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