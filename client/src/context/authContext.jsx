import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser(true);
  };
  const logout = () => {
    setUser(false);
  };

  // useEffect(() => {
  //   const storedToken = cookie.parse(document.cookie).token;

  //   if (storedToken) {
  //     const decodedToken = decodeToken(storedToken);
  //     const isTokenExpired =
  //       decodedToken && decodedToken.exp * 1000 < Date.now();

  //     if (isTokenExpired) {
  //       logout();
  //     } else {
  //       login({ token: storedToken });
  //     }
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

// const decodeToken = (token) => {
//   try {
//     return JSON.parse(atob(token.split('.')[1]));
//   } catch (error) {
//     return null;
//   }
// };
