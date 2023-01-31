import { Stack, Typography, Box } from "@mui/material";
import { colorsApp } from "../App";


interface Props {

  colorKeys: colorsApp,
  title: string,
  price: string,
  minimum: string,

}


export const InterestCard = ({ colorKeys, title, price, minimum }: Props) => {
  return (
    <>
      <Stack
        marginLeft='0px'
        marginTop='40px'
        height="400px"
        width="336px"
        marginRight='24px'

      >
        <Box
          height='84%'
          width='100%'
          bgcolor={colorKeys.secondaryColor}
        >


        </Box>

        <Typography variant='body1'
          sx={{
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '16px',
            marginTop: '24px',
            marginBottom : '10px'

          }}
        >
          {title}
        </Typography>


        <Box
          width='73.21%'
          display='flex'
          justifyContent='space-between'
          alignItems='center'


        >

          <Typography variant='body2'
            sx={{
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '15px',
              lineHeight: '16px'
            }}
          >
            {price}</Typography>

          <Typography
            variant='body2'
            color={colorKeys.secondaryColor}
            sx={{
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '16px',


            }}
          >

            Minimum: <Typography variant='body2'
              color = 'black'
              sx={{
                display : 'inline',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '16px',


              }}>  {minimum}</Typography></Typography>


        </Box>

      </Stack>



    </>
  )
}
