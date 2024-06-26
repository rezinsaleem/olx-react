import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './Pages/Signup'
import LoginPage from './Pages/Login'
import './App.css';
import { AuthContext, FirebaseContext } from './store/Context';

import Home from './Pages/Home';
import CreatePage from './Pages/Create';
import ViewPost from './Pages/ViewPost';

import Post from './store/PostContext';

function App() {

  const { setUser } = useContext(AuthContext)
  const { Firebase } = useContext(FirebaseContext)
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  });

  return (
    <div>
      <BrowserRouter>
      <Post>
      <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/view" element={<ViewPost />} />
        
        </Routes>
        </Post>
    </BrowserRouter>
    </div >
  );
}

export default App;
