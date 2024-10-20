import React             from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline       from "@mui/material/CssBaseline";
import theme             from "./styles/theme";
import GlobalStyles      from "./styles/globalStyled";
import RoutesProvider from "./Routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <GlobalStyles />
      <RoutesProvider />
    </ThemeProvider>
  );
};

export default App;
