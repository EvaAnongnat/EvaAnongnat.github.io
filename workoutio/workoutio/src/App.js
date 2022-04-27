import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from './Pages/Login';
import AddActivityPage from './Pages/AddActivity';
import ActivityList from './Pages/ActivityList';
//import TestPage from './Pages/TestPage';
// import SignUpPage from './Pages/SignUp';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddActivityPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="activity_list" element={<ActivityList />} />
        {/* <Route path="test_page" element={<TestPage />} /> */}
        {/* <Route path="signup" element={<SignUpPage />} /> */}
      </Routes>
   </BrowserRouter>
  );
}

export default App;