import React from "react";
import { Global } from "@emotion/react";
import theme from "./theme";
import "@fontsource/roboto";

const GlobalStyles: React.FC = () => (
  <Global
    styles={{
      body: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        backgroundColor: theme.palette.background.default,
        fontFamily: "'Roboto', sans-serif", 
        height: "100%" ,
      },
      "*": {
        boxSizing: "inherit",
      },
      h1: {
        fontFamily: "'Roboto', sans-serif",
      },
      p: {
        fontFamily: "'Roboto', sans-serif",
      },
    }}
  />
);

export default GlobalStyles;
