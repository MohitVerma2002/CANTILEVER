import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const is_Login = localStorage.getItem("isLogin");
    setIsLogin(is_Login === "true");
  }, []);

  const login = () => {
    setIsLogin(true);
    localStorage.setItem("isLogin", "true");
  };

  const logOut = () => {
    setIsLogin(false);
    localStorage.setItem("isLogin", "false");
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
