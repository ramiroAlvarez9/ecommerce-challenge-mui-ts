import { Stack, Typography} from "@mui/material";
import { colorsApp } from "../App";
import { InterestCard } from "./InterestCard";


interface Props 
{
  colorKeys: colorsApp;
}

export const Interest = ({ colorKeys }: Props) => {
  return (
    <>
      <Stack
        marginTop="80px"
        width="88.5vw"
        height="22.44vh"
        marginLeft="5.75vw"
      >
        <Typography
          component="h2"
          height='0px'
          fontStyle="normal"
          fontWeight="700"
          fontSize="24px"
          lineHeight="16px"
        >
          You might also like
        </Typography>

        <Stack direction='row'>
          
        <InterestCard
            colorKeys = {colorKeys}
            title   = "Unisex Short Sleeve T-Shirt"
            price   = "$10-24$"
            minimum = "24"
          />
                  <InterestCard
            colorKeys = {colorKeys}
            title   = "Unisex Short Sleeve T-Shirt"
            price   = "$10-24$"
            minimum = "24"
          />
                  <InterestCard
            colorKeys = {colorKeys}
            title   = "Unisex Short Sleeve T-Shirt"
            price   = "$10-24$"
            minimum = "24"
          />
                  <InterestCard
            colorKeys = {colorKeys}
            title   = "Unisex Short Sleeve T-Shirt"
            price   = "$10-24$"
            minimum = "24"
          />
          



        </Stack>
      </Stack>
    </>
  );
};
