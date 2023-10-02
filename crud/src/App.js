import React from 'react';
import GetData from './comp/getData';
import Edit from './comp/edit';
import Add from './comp/add';
import Delete from './comp/delete';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<GetData/>} />
          <Route path='/edit/:id' element={<Edit/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/delete/:id' element={<Delete/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
