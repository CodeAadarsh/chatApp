// App.js

import React from 'react';
import Login from './components/Login';
import ChatApp from './components/ChatApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />} />
     </Routes>
    </BrowserRouter>
  )
};

export default App;
