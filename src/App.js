import "./App.css";
import Category from "./pages/Category";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3c9ee5",
      light: "#3c44b126",
    },
    secondary: {
      main: "#ff9f00",
      light: "#f8324526",
    },
    success: {
      main: "#8cb528",
      light: "#8cb528",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Category />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
