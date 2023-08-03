// App.js
import React from 'react';
import UserProvider from './UserProvider';
import UserProfile from './UserProfile';
import UserEmail from './UserEmail';

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UserEmail />
    </UserProvider>
  );
};

export default App;
