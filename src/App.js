import React, { useState } from 'react';
import { auth } from './firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoginPage from './Components/Login';
import Mainpage from './Components/Mainpage';
 
function App() {
  const [user] = useAuthState(auth);

  return (
      user ? <Mainpage /> : <LoginPage />
  );
}

export default App;