import { Stack, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { QuantityInput } from "./QuantityInput";
import { colorsApp } from "../App";

interface Props {
  colorKeys: colorsApp;
}

export const Interest = ({ colorKeys }: Props) => {
  return (
    <>
      <Stack
        marginTop="80px"
        border="solid 1px red"
        direction="row"
        width="88.5vw"
        height="22.44vh"
        marginLeft="5.75vw"
      >
        <Typography
          component="h2"
          height= '0px'
          fontStyle="normal"
          fontWeight="700"
          fontSize="24px"
          lineHeight="16px"
        >
          You might also like
        </Typography>

        <Stack
          border="solid 1px blue"
          marginLeft= '0px'
          marginTop="74px"
          height="362px"
          width="336px"
        >
          1
        </Stack>
        <Stack
          border="solid 1px blue"
          marginLeft= '0px'
          marginTop="74px"
          height="362px"
          width="336px"
        >
          2
        </Stack>
        <Stack
          border="solid 1px blue"
          marginLeft= '0px'
          marginTop="74px"
          height="362px"
          width="336px"
        >
          3
        </Stack>
        <Stack
          border="solid 1px blue"
          marginLeft= '0px'
          marginTop="74px"
          height="362px"
          width="336px"
        >
          4
        </Stack>




      </Stack>
    </>
  );
};
