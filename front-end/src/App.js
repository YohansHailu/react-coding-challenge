import React, { useState, useEffect } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import UserDetailPage from './pages/UserDetailPage';
import ErrorPage from './pages/ErrorPage';
import UpdatePage from './pages/UpdatePage';
import "./App.css"


function App() {
  const storedId = localStorage.getItem('userId');
  let homeUrl = storedId ? `/users/${storedId}` : "/register";



  return (
    <>
      <Routes>
        <Route path='/' Navigate element={<Navigate to={homeUrl} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path="/user/update/:id" element={<UpdatePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
