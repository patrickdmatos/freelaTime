import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Box, Heading, Text, VStack } from '@chakra-ui/react';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para autenticação
    if (username === 'admin' && password === 'password') {
      alert('Login bem-sucedido!');
      setError(null);
    } else {
      setError('Nome de usuário ou senha incorretos');
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh" bg="gray.100">
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
        <Heading as="h2" size="lg">Login</Heading>
        <FormControl id="username" isRequired>
          <FormLabel>Nome de Usuário</FormLabel>
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
        {error && <Text color="red.500">{error}</Text>}
        <Button type="submit" colorScheme="teal" width="full">Entrar</Button>
      </VStack>
    </Box>
  );
};

export default Login;
