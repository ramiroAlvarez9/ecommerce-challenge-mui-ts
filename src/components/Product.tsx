import { Stack, Typography, Box, ButtonGroup, Button, TextField, Autocomplete } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { colorsApp } from "../App";
import { QuantityInput } from "./QuantityInput";



interface Props {
  colorKeys: colorsApp;
  productTitle: string;
  quantity : number[];
}

export const Product = ({ colorKeys, productTitle, quantity }: Props) => {
  const RemoveButton = styled(Button)({
    textTransform: "none",
    color: `${colorKeys.contrastColor}`,
    fontSize: "0.8em",
    fontWeight: "600",
    paddingLeft: "2px",
    width : '70px',
    padding : '0',
    marginLeft : '0.8%',
    
  });


  return (
    <>
      <Box
        height="33.3%"
        display="flex"
        flexDirection="row"
        borderBottom="solid 1px"
        borderColor={colorKeys.secondaryColor}
      >
        <Stack
          width="11.39%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            width="120px"
            height="120px"
            bgcolor={colorKeys.secondaryColor}
          ></Box>
        </Stack>

        {/*Title, description, quantity, price*/}
        <Stack
          marginLeft="1.70%"
          width="68%"
          height="85%"
          marginTop="2.3%"
          color={colorKeys.contrastColor}
        >
          <Typography
            variant="body1"
            fontSize="18px"
            fontWeight="700"
            marginTop="2px"
            marginBottom="16px"
          >
            {productTitle}          
          </Typography>

          <Typography
            variant="body2"
            fontSize="16px"
            lineHeight="0"
            marginBottom="16px"
            fontWeight="600"
          >
            <QuantityInput quantity={quantity} marginTop="-12px"/>

          </Typography>

          
            <RemoveButton
              variant="text"
              aria-label="Remove"
              startIcon={<DeleteIcon />}
            >
              Remove


            </RemoveButton>

        </Stack>
        <Box width="32%" height="84%" marginTop="2.3%">
          <Typography
            marginTop="2px"
            textAlign="right"
            variant="body2"
            fontWeight="700"
            fontSize="18px"
          >
            $71.20
          </Typography>
          <Typography
            textAlign="right"
            variant="body2"
            fontWeight="700"
            fontSize="18px"
          >
            Total : 3,560.00
          </Typography>
        </Box>
      </Box>
    </>
  );
};
