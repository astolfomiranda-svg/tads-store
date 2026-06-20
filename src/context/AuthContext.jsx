import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);

  const login = (usuario, senha) => {
    if (usuario === "admin" && senha === "1234") {
      setLogado(true);
      return true;
    }
    return false;
  };

  const logout = () => setLogado(false);

  return (
    <AuthContext.Provider value={{ logado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}