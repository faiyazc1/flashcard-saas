'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (user) {
      setAuthUser(user);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={authUser}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthUser = () => useContext(AuthContext);