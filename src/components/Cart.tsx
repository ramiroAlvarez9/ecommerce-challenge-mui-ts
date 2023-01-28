import { Stack, 
         Typography,
         Box, 
         List, 
         ListItem ,
         ButtonGroup, 
         Button,
         Divider
        } 
from "@mui/material";
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
                <Typography variant = 'h2' fontSize = '24px' fontWeight= '700' lineHeight= '24px' color = {colorKeys.contrastColor}> Your Cart  <Box component = 'span' fontSize= '18px' color = {colorKeys.sectionMenuLettersColor} fontWeight = '400'> (3)</Box> </Typography>             

                <Stack  height = '96.21%' marginTop= '3.79%' >
                    
                    {/*Product 1*/}
                    <Box  height= '39%'   display= 'flex' flexDirection ='row' >
                        
                        {/*Image and Pack container*/}
                        <Stack width = '11.39%'  height = '100%' alignItems = 'center' >
                          <Box width = "120px" height = "120px" bgcolor={colorKeys.secondaryColor}>
                          </Box>
                          <Box display = 'flex' justifyContent= 'center' alignItems = 'center'    width = '34px' height = '20px' bgcolor = {colorKeys.secondaryColor} fontSize =  '10px' marginTop = '10px'>
                              <Typography variant = 'body2'fontSize= '10px'  color = '#848A92'> PACK </Typography>  
                          </Box>
                        </Stack>
                        {/*Title, description, quantity, price*/}
                        <Stack marginLeft= '1.70%'  width= '68%' height = '100%' color = {colorKeys.contrastColor} >
                          <Typography  variant = 'body1' fontSize = "18px" fontWeight= '700' marginTop = '2px' marginBottom= '12px'>
                            My Christmas pack
                          </Typography>                                  
                          <Typography  variant = 'body2' fontSize= '16px'>
                            Quantity: 
                          </Typography>
                          <List
                            sx = {{
                             listStyleType: 'disc',
                             pl: 2,
                             '& .MuiListItem-root': {
                              display: 'list-item',
                              fontFamily: 'Open Sans',
                              marginLeft : '4px',
                              fontStyle: 'normal',
                              fontWeight: 600,
                              fontSize: '14px',
                              lineHeight: '12px', 
                              paddingLeft: '1px'
                            },
                            }}
                            >
                             <ListItem>
                              Cardboard box <Box component = 'span'  color = {colorKeys.secondaryColor} fontWeight = '400'> (container) </Box>
                             </ListItem>
                             <ListItem>
                                Unisex Short Sleeve T-Shirt green <Box component = 'span'  color = {colorKeys.secondaryColor} fontWeight = '400'> (Green, Small) </Box> 
                             </ListItem>
                             <ListItem>
                              Basic bottle <Box component = 'span'  color = {colorKeys.secondaryColor} fontWeight = '400'> (Blue) </Box>
                             </ListItem>
                          </List>
                          <ButtonGroup  sx = {{height : '15px', width : '95%' }} >
                            <Button  variant="text" sx = {{textTransform: 'none' , color : `${colorKeys.contrastColor}`, fontSize : '12px' , fontWeight : '600'} } aria-label="Edit Pack" >
                                Edit Pack
                            </Button>
                            
                            <Button variant="text" sx = {{borderLeft : `solid 1px `,textTransform: 'none' , color : `${colorKeys.contrastColor}`, fontSize : '12px' , fontWeight : '600'} } aria-label= "Remove">
                                Remove
                            </Button>
                          </ButtonGroup>
                        </Stack>
                        
                        <Box  width = "32%" >

                           <Typography  marginTop = '2px' textAlign= 'right' variant = 'body2' fontWeight = '700' fontSize = '18px' >   
                            $71.20 
                           </Typography>
                           <Typography  textAlign= 'right' variant = 'body2' fontWeight = '700' fontSize = '18px' >  
                            Total : 3,560.00 
                           </Typography>  
                        </Box>

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
