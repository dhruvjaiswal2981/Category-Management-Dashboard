import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddCategory from './pages/AddCategory';
import EditCategory from './pages/EditCategory';


const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/add" element={isAuthenticated ? <AddCategory /> : <Navigate to="/login" />} />
        <Route path="/edit/:id" element={isAuthenticated ? <EditCategory /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;