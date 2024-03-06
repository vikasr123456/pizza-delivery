// App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout";

import Signup from './Components/signup/signup';
import Login from './Components/login/login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
