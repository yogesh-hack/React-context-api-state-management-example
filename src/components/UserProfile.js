// UserProfile.js
import React, { useContext } from 'react';
import UserContext from './userContext';

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserProfile;
