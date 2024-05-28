import { Navigate } from 'react-router-dom';
import React from 'react';
import Parse from 'parse/dist/parse.min.js';


const PrivateRoute = ({ children }) => {
    const currentUser = Parse.User.current();
    
    return currentUser ? children : <Navigate to="/login" />;
  };

export default PrivateRoute;