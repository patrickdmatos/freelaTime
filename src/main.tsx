import { createRoot } from "react-dom/client";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import theme from "./theme.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
