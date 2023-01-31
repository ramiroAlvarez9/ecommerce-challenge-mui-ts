import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { styled } from "@mui/material/styles";
import { colorsApp } from "../App";
import {
  Typography,
  Stack,
  Box,
  ButtonGroup,
  Button,
  InputAdornment,
  TextField
} 
from "@mui/material";



interface Props {
  colorKeys: colorsApp;
}
const SearchBar = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "20px",
    width: "43.5em",
    height: `2.5em`,
    backgroundColor : "#FFFFFF",
  },
  "& .MuiInputBase-root :: placeholder" : {
    color : '#000000',
    opacity : '100%'
  }

});

export const Header = ({ colorKeys }: Props) => {
  

  return (
    <>
      <header>
        <Stack direction="row" height="4.48vh" bgcolor = {colorKeys.contrastColor}  >
          
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="70%"
          >
            <Box
              height="54.55%"
              width="15.36%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor = {colorKeys.secondaryColor}
              marginLeft="5.75vw"
              border = '0'
            >
              <Typography variant="body1" color = '#848A92' >LOGO</Typography>
            </Box>

            <SearchBar
              variant="outlined"
              placeholder="Search products"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">  
                    <SearchOutlinedIcon sx = {{
                      color : '#000000',

                    }}/>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <ButtonGroup
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "30%",
              marginRight: "5.75vw",
            }}
          >
            <Button disableRipple variant="text" startIcon={<PermIdentityOutlinedIcon />}  sx = {{textTransform: 'none' , color : `${colorKeys.principalColor}`, fontSize : '15px'} } aria-label="Sign In" >
              Sign In
            </Button>

            <Button disableRipple variant="text" startIcon={<ShoppingBagOutlinedIcon />} sx = {{textTransform: 'none' , color : `${colorKeys.principalColor}` ,  fontSize : '15px'} } aria-label="">
              Cart
            </Button>

          </ButtonGroup>
        </Stack>
      </header>
    </>
  );
};