import { Stack, Typography,Box, List, ListItem ,Autocomplete, ButtonGroup, Button} from "@mui/material";
import { colorsApp } from "../App";
import { styled } from '@mui/system';

interface Props {
  colorKeys: colorsApp;
}

const quantity : number[] =  [1,2,3,4,5,6,7,8,9,10]


export const Cart = ({colorKeys}: Props) => {
  return (
    <>
    {/*all products*/}
      <Stack direction="row" width="88.5vw"  height = '30.8vh' border="solid 1px red" marginLeft = '5.75vw' marginTop = '1.63vh'>

            <Stack width= '74.58%' > 
                <Typography variant = 'h2' fontSize = '24px' fontWeight= '700' lineHeight= '24px'> Your Cart  <Box component = 'span' fontSize= '18px' color = {colorKeys.sectionMenuLettersColor} fontWeight = '400'> (3)</Box> </Typography>             

                <Stack  height = '96.21%' marginTop= '3.79%' >
                    
                    {/*Product 1*/}
                    <Box height= '39%' border= 'solid 1px green'  display= 'Flex' flexDirection ='row'>
                        
                        {/*Image and Pack container*/}
                        <Stack width = '11.39%'  height = '100%' alignItems = 'center' >
                          <Box width = "120px" height = "120px" bgcolor={colorKeys.secondaryColor}>
                        

                          </Box>
                          <Box display = 'flex' justifyContent= 'center' alignItems = 'center'    width = '34px' height = '20px' bgcolor = {colorKeys.secondaryColor} fontSize =  '10px' marginTop = '10px'>
                              <Typography variant = 'body2'fontSize= '10px'  color = '#848A92'> PACK </Typography>  
                          </Box>
                        </Stack>

                        {/*Title, description, quantity, price*/}
                        <Stack border = 'solid 1px red' width= '70%' height = '100%'>
                          <Typography  variant = 'body1'>
                            My Christmas pack
                          </Typography>                                      
                          <Typography  variant = 'body2'>
                            Quantity: 
                          </Typography>
                          <List
                            sx = {{
                             listStyleType: 'disc',
                             pl: 2,
                             '& .MuiListItem-root': {
                              display: 'list-item',
                              lineHeight : '10px',
                              fontSize : '10px',
                             },
                            }}
                            >
                             <ListItem>
                              item 1
                             </ListItem>
                             <ListItem>
                              item 2
                             </ListItem>
                             <ListItem>
                              item 3
                             </ListItem>
                          </List>
                          <ButtonGroup>
                            <Button>
                                Edit Pack
                            </Button>
                            <Button>
                                Remove
                            </Button>
                          </ButtonGroup>
                        </Stack>
                        
                        <Stack>
                            <Box >
                                $71.20
                            </Box>
                            <Box >
                              Total: $3,560.00
                            </Box>
                        </Stack>

                    </Box>

                    {/*Product 2*/}
                    <Box height= '33.3%' border= 'solid 1px green'>
                        
                    </Box>
                    {/*Product 3*/}
                    <Box height= '33.3%' border= 'solid 1px green'>
                        
                    </Box>

                </Stack>
            </Stack>

      </Stack>
    </>
  
  );
};
