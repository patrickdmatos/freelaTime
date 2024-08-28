import { useToast } from "@chakra-ui/react";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

// Context
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const toast = useToast();

  useEffect(() => {
    // Verifica o token no sessionStorage ao montar o componente
    const token = sessionStorage.getItem("tokenSession");
    if (token === sessionStorage.getItem("tokenSession")) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    sessionStorage.setItem("tokenSession", "tokenRaTaTa");
    toast({
      title: "Bem-vindo",
      description: "Acesso concedido, autenticação executada com sucesso!.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem("tokenSession");

    toast({
      title: "Até o proximo trampo",
      description: "Sessão encerrada, volte sempre!.",
      status: "info",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
