import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { alpha, styled } from '@mui/material/styles';
import {
  Typography,
  Stack,
  Box,
  ButtonGroup,
  Button,
  TextField,
  IconButton,
  InputAdornment,

}
  from "@mui/material"

const SearchBar = styled(TextField)({
  '& .MuiInputBase-root': {
    borderRadius: '20px',
    width: '43.5em',
    height: `2.5em`,


  }
});


export const Header = () => {

  return (
    <>
      <header>
        <Stack
          direction='row'
          border='solid 1px red'
          height='4.55vh'
        >

          <Stack
            direction='row'
            justifyContent="space-between"
            alignItems="center"
            border='solid 1px blue'
            width='70%'
          >

            <Box
              height='54.55%'
              width='15.36%'
              border='solid 1px green'
              display='flex'
              justifyContent='center'
              alignItems='center'
              marginLeft='92px'

            ><Typography variant='body1'>LOGO</Typography></Box>

            <SearchBar
              placeholder="Search products"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                )
              }}

            />

          </Stack>
          <ButtonGroup sx={{
            border: 'solid 1px green', 
            display: 'flex',
            justifyContent : 'flex-end',
            width: '30%',
            marginRight:'92px'
          }}>

            <Button variant="text" startIcon={<PermIdentityOutlinedIcon />}>
              Sign In
            </Button>

            <Button variant="text" startIcon={<ShoppingBagOutlinedIcon />}>
              Cart
            </Button>


          </ButtonGroup>
        </Stack>
      </header>
    </>
  )
}
