import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/open-sans";
import { Header } from "./components/Header";
import { SectionMenu } from "./components/SectionMenu";

export interface colorsApp {
  principalColor: string;
  secondaryColor: string;
  contrastColor: string;
  sectionMenuLettersColor : string;
}


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["'Open Sans'"].join(","),
    },
  });


  const colorKeys : colorsApp= {
    principalColor: "#FFFFFF",
    secondaryColor: "#CED0D3",
    contrastColor : "#091625",
    sectionMenuLettersColor : '#535C67',
  
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        
        < Header      colorKeys ={colorKeys} />

        < SectionMenu colorKeys ={colorKeys} />




      </ThemeProvider>
    </>
  );
}

export default App;
