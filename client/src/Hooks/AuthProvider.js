import { createContext, useContext, useState, useEffect } from 'react';
import { clearSessionToken, getSessionToken, setSessionToken } from '../localstorage/AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getSessionToken();
    console.log('Token on startup:', token);
    if (token) {
      console.log('Setting user with token:', token);
      setUser({ token });
    }
  }, []);

  const login = (token) => {
    setSessionToken(token);
    setUser({ token });
  };

  const logout = () => {
    clearSessionToken();
    setUser(null);
  };
  
  const isLoggedIn = () => {
    if(localStorage.getItem('sessionToken')) return true;
    return false;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};