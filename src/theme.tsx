import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "gray.100",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      },
    }),
  },
  colors: {
    brand: {
      50: "#f5e6ff",
      100: "#e1b2ff",
      200: "#cd81ff",
      300: "#b856ff",
      400: "#a232ff",
      500: "#8a19e5",
      600: "#7109b8",
      700: "#57028b",
      800: "#3c005e",
      900: "#200033",
    },
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      sizes: {
        md: {
          fontSize: "lg",
        },
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === "dark" ? "brand.500" : "brand.400",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "brand.600" : "brand.300",
          },
        }),
      },
    },
  },
});

export default theme;
