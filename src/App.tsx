import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/open-sans";
import "@fontsource/open-sans/700.css" 
import { Header } from "./components/Header";
import { SectionMenu } from "./components/SectionMenu";
import { Cart } from "./components/Cart";


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

  //pallete of colors
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

        < Cart        colorKeys ={colorKeys} />    
      


      </ThemeProvider>
    </>
  );
}

export default App;
