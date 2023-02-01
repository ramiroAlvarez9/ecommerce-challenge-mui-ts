import { Stack } from "@mui/material";
import { colorsApp } from "../App";
import { ContactColumn } from "./ContactColumn";
import { LinksColumn1 } from "./LinksColumn1";
import { LinksColumn2 } from "./LinksColumn2";
import { LinksColumn3 } from "./LinksColumn3";

interface Props {
  colorKeys: colorsApp;
}

export const Footer = ({ colorKeys }: Props) => {
  return (
    <>
      <footer className="footer">
        <Stack
          marginTop="120px"
          height="540px"
          bgcolor={colorKeys.secondaryColor}
        >
          <Stack
            spacing={25}
            direction="row"
            marginTop="80px"
            width="1177px"
            height="256px"
            marginLeft="5.75vw"
          >
            <ContactColumn colorKeys={colorKeys} />

            <LinksColumn1 />
            <LinksColumn2 />
            <LinksColumn3 />


          </Stack>

          <Stack
            height="16px"
            width="88.5vw"
            marginTop="112px"
            marginLeft="5.75vw"
          ></Stack>
        </Stack>
      </footer>
    </>
  );
};
