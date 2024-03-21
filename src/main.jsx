import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors: {
    brand: {
      ...colors.brand,
      500: "#c2195b",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "#005060",
      },
    },
    Button: {
      baseStyle: {
        backgroundColor: "#c2195b",
        _hover: {
          backgroundColor: "#005060",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
