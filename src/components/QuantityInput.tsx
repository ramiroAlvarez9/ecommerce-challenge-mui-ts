import {
  Stack,
  Autocomplete,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colorsApp } from "../App";
import { styled } from "@mui/system";

interface Props {
    quantity : number[];
    marginTop : string;
}

export const QuantityInput = ({quantity, marginTop} : Props) => {
  const QuantityInputSelect = styled(TextField)({
    "& .MuiInputBase-root": {
      height: "25px",
      marginLeft: "4px",
      fontWeight: "600",
      color: "black",
      marginTop : `${marginTop}`,
    },
    "& .MuiInput-root .MuiInput-input ": {
      padding: "4px 0px 0px 0px",
      display: "block",
      marginLeft: "0px",
      minWidth: "10px",
    },
    "& .css-ptiqhd-MuiSvgIcon-root ": {
      display: "none",
      marginLeft: 0,
    },
  });
  return (
    <Stack direction="row">
      Quantity:
      <Autocomplete
        popupIcon={<KeyboardArrowDownIcon sx={{ color: "black" }} />}
        options={quantity}
        sx={{
          width: "8px",
          marginTop: "-4px",
          "& .MuiInput-root ": {
            paddingRight: "33px !important",
          },
        }}
        renderInput={(params) => (
          <QuantityInputSelect 
            variant="standard" {...params} 
         />
        )}
      />
    </Stack>
  );
};
