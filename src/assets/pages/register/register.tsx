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
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para criar uma conta
    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
    } else {
      alert("Conta criada com sucesso!");
      setError(null);
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
        bg="white"
        onSubmit={handleSubmit}
      >
        <Heading as="h2" fontSize={"xx-large"}>
          Criar Conta
        </Heading>
        <Text fontWeight={600}>
          Já tem uma conta?
          <ChakraLink
            as={RouterLink}
            to="/login"
            color="purple.500"
            fontWeight="bold"
            ml={1}
          >
            Faça login
          </ChakraLink>
        </Text>
        <FormControl id="username" isRequired>
          <FormLabel>Usuário</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <FormControl id="confirmPassword" isRequired>
          <FormLabel>Confirmar Senha</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        {error && (
          <Text color="red.500" fontWeight={700}>
            {error}
          </Text>
        )}
        <Button type="submit" width="full">
          Registrar
        </Button>
      </VStack>
    </Box>
  );
};

export default Register;
