import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Document from "./components/Documents/Document";
import Edit from "./components/Documents/EditFile/EditFile";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/upload' element={<Document />} />
            <Route path='/edit' element={<Edit />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
