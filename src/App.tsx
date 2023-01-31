import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/open-sans";
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/500.css"  
import "@fontsource/open-sans/600.css"
import "@fontsource/open-sans/700.css"  
import { Header } from "./components/Header";
import { SectionMenu } from "./components/SectionMenu";
import { Cart } from "./components/Cart";
import { Interest } from "./components/Interest";
import { Footer } from "./components/Footer";
import { WarningComponent } from "./components/WarningComponent";

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
      
      {window.innerWidth === 1600 && window.innerHeight === 1963 ?  
        <ThemeProvider theme={theme}>
                
          < Header      colorKeys ={colorKeys} />
        
          < SectionMenu colorKeys ={colorKeys} />
        
          < Cart        colorKeys ={colorKeys} />    
        
          <Interest     colorKeys ={colorKeys} />

          <Footer 
          
            colorKeys = {colorKeys}
            

        />
        </ThemeProvider>
      :
        
      < WarningComponent />
  
    }
    </>
  
  
  
  );
}

export default App;
