import {
  Stack,
  Typography,
  Divider,
  ButtonGroup,
  Button,
  Box,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { colorsApp } from "../App";

interface Props {
  colorKeys: colorsApp;
}


const ProceedToCheckoutButton = styled(Button)({
    boxShadow: 'none',
    borderColor : '#3A4451' ,
    textTransform: "none",
    backgroundColor : '#3A4451' ,
    color: 'white',
    height: '48px',
    marginBottom : '12px',
    fontSize : '16px',
    fontWeight : '700',
    borderRadius  : '8px',


    '&:hover': {
      backgroundColor: '#3A4451',
      borderColor: '#3A4451',
      boxShadow: 'none',
      
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#3A4451',
      borderColor: '#3A4451',
      
    },

  });
  


export const OrderSummary = ({ colorKeys }: Props) => {
  return (
    <>
      <Stack
        width="336px"
        height="43.8%"
        fontSize="24px"

      >
      {/* Title, number of items, total */}
        <Box >
          <Typography
            variant="h3"
            fontSize="1em"
            fontWeight="700"
            marginBottom="24px"
          >
            Order Summary
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            marginBottom= '24px'
          >
            <Typography
              color={colorKeys.secondaryColor}
              variant="body2"
              sx={{
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "16px",
                
              }}
            >
              Number of items
            </Typography>
            <Typography
              variant="body2"
              color={colorKeys.secondaryColor}
              sx={{
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "16px",
              }}
            >
              3
            </Typography>
          </Stack>

          <Divider />

          <Stack 
            direction="row" 
            justifyContent= 'space-between'
            marginTop = '24px'
            marginBottom = '32px'
          >
          
            <Typography variant="body2"
                sx = {{
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '16px'
                }}
            >
            
            Total:

            </Typography>

            <Typography variant="body2"
                 sx = {{
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '24px',
                    lineHeight: '16px'
                }}
            >
                
                $3,560.00
            
            </Typography>
          
          </Stack>



        </Box>
        
        {/* Buttons */}
        <ButtonGroup
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          
        >
          <ProceedToCheckoutButton
            variant="outlined" 
             
          >
          Proceed to Checkout
          
          </ProceedToCheckoutButton>
          <Button 
                variant = 'outlined'  
                sx = {{
                    height: '48px',
                    borderColor : '#091625',
                    textTransform: "none",
                    color: '#091625',
                    marginBottom : '12px',
                    fontSize : '16px',
                    fontWeight : '700',
                    
                    '&:hover': {
         
                        backgroundColor: '#FFFFFF',
                        borderColor: '#3A4451',
                        boxShadow: 'none',
                        
                    },

                }}
          >
         
         Continue shopping</Button>

        </ButtonGroup>
      </Stack>
    </>
  );
};
