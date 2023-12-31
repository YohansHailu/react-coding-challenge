import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import UserDetailPage from './UserDetailPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
