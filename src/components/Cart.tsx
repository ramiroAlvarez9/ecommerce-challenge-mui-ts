import { Stack, Typography,Box } from "@mui/material";
import { colorsApp } from "../App";

interface Props {
  colorKeys: colorsApp;
}

export const Cart = ({colorKeys}: Props) => {
  return (
    <>
      <Stack direction="row" width="88.5vw"  height = '30.8vh' border="solid 1px red" marginLeft = '5.75vw' marginTop = '1.63vh'>

            <Stack width= '74.58%' border = 'solid 1px blue'> 
            
                <Typography variant = 'h2' fontSize = '24px' fontWeight= '700' lineHeight= '24px'> Your Cart  <Box component = 'span' fontSize= '18px' color = {colorKeys.sectionMenuLettersColor} fontWeight = '400'> (3)</Box> </Typography>             

                <Stack border= 'solid 1px blue' height = '96.21%' marginTop= '3.79%' >
                    <Box>
                        Item 1
                    </Box>
                    <Box>
                        Item 2
                    </Box>
                    <Box>
                        Item 3
                    </Box>

                </Stack>
            </Stack>

      </Stack>
    </>
  
  );
};
