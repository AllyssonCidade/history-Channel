import React, { createContext, useState, useEffect, useContext } from 'react';
import Parse from 'parse/dist/parse.min.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const currentUser = Parse.User.current();
        setIsAuthenticated(!!currentUser);
    }, []);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
