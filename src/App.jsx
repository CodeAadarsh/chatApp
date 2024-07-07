// App.js

import React from 'react';
import {Login} from './components/Login';
import ChatApp from './components/ChatApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatApp />} />
     </Routes>
    </BrowserRouter>
  )
};

export default App;
