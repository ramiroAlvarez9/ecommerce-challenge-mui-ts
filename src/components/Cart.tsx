import { Stack, Typography, Box } from "@mui/material";
import { colorsApp } from "../App";
import { ProductPack } from "./ProductPack";
import { Product } from "./Product";
import { OrderSummary } from "./OrderSummary";

interface Props {
  colorKeys: colorsApp;
}

const quantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Cart = ({ colorKeys }: Props) => {
  return (
    <>
      {/*all products*/}
      <Stack
        direction="row"
        width="88.5vw"
        height="30.8vh"
        marginLeft="5.75vw"
        marginTop="1.63vh"
        justifyContent= 'space-between'
      >
        <Stack width="74.58%">
          <Typography
            variant="h2"
            fontSize="24px"
            fontWeight="700"
            lineHeight="24px"
            color={colorKeys.contrastColor}
          >
            Your Cart
            <Box
              component="span"
              fontSize="18px"
              color={colorKeys.sectionMenuLettersColor}
              fontWeight="400"
            >
              
              (3)
            </Box>
          </Typography>

          <Stack height="96.21%" marginTop="3.79%">
            <ProductPack colorKeys={colorKeys} quantity={quantity} />
            <Product
              colorKeys={colorKeys}
              productTitle={"Basic T-Shirt"}
              quantity={quantity}
            />
            <Product
              colorKeys={colorKeys}
              productTitle={"Woman Bottle"}
              quantity={quantity}
            />
          </Stack>
        </Stack>
        <OrderSummary colorKeys = {colorKeys}/>
      </Stack>
    </>
  );
};
