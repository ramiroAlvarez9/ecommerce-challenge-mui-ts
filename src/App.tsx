import './App.css';
import { Typography, ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/open-sans"; 
import { Header } from './components/Header';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        "'Open Sans'",


      ].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme} >
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
