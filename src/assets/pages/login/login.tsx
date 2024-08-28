import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import CustomLink from "../../components/Link";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para autenticação
    if (username === "admin" && password === "password") {
      alert("Login bem-sucedido!");
      setError(null);
      login();
      navigate("/home");
    } else {
      setError("Nome de usuário ou senha incorretos");
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <VStack
        as="form"
        spacing={4}
        width="100%"
        maxWidth="400px"
        padding={6}
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        bg={useColorModeValue("gray.200", "gray.700")}
        onSubmit={handleSubmit}
      >
        <Heading as="h2" fontSize={"xx-large"}>
          Acessar FreelaTime
        </Heading>
        <Text fontWeight={600}>
          Novo por aqui?
          <CustomLink routerTo="/create-account" linkColor="purple.500">
            Crie uma conta
          </CustomLink>
        </Text>
        <FormControl id="username" isRequired>
          <FormLabel>Usuário ou Email</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {error && (
          <Text color="red.500" fontWeight={700}>
            {error}
          </Text>
        )}
        <Button type="submit" width="full">
          Entrar
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
