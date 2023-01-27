import { colorsApp } from "../App";
import {
  Typography,
  Stack,
  Box,
  ButtonGroup,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";

interface Props 
{
  colorKeys: colorsApp;
}

export const SectionMenu = ({ colorKeys }: Props) => {
  return (
    <>
      <nav>
        <Stack
          direction="row"
          height="3.26vh"
          bgcolor={colorKeys.secondaryColor}
          alignItems= 'center'
        >
          <Stack width= '19.2vw'  direction="row" spacing={4}  marginLeft= '5.75vw' color = {colorKeys.sectionMenuLettersColor} >
            <Typography variant="body2" fontSize= '1em' > All products  </Typography>
            <Typography variant="body2" fontSize= '1em' > Packaging     </Typography>
            <Typography variant="body2" fontSize= '1em' > Drinkware     </Typography>
          </Stack>
       
          <Stack width= '15.73vw'  direction="row"  marginLeft= '2.19vw' justifyContent= 'space-between' color = {colorKeys.sectionMenuLettersColor}>
          
            <Typography variant="body2" fontSize= '1em' > Apparel </Typography>
            <Typography variant="body2" fontSize= '1em' > Notebooks </Typography>
            <Typography variant="body2" fontSize= '1em' > Backpacks </Typography>
          
          </Stack>

        </Stack>
      </nav>
    </>
  );
};
