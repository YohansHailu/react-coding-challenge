import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import UserDetailPage from './UserDetailPage';
import ErrorPage from './ErrorPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
