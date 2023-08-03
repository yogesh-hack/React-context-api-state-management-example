// UserEmail.js
import React, { useContext } from 'react';
import UserContext from './userContext';

const UserEmail = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Email</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserEmail;
